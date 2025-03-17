# Stage 1: Dependencies
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install pnpm with specific version for better compatibility
RUN corepack enable && corepack prepare pnpm@8.9.0 --activate

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install all dependencies (including dev dependencies)
ENV NODE_OPTIONS="--max_old_space_size=1024"
RUN pnpm install --fetch-timeout=100000

# Stage 2: Builder
FROM node:18-alpine AS builder
WORKDIR /app

# Install pnpm with specific version
RUN corepack enable && corepack prepare pnpm@8.9.0 --activate

# Set build-time variables and limits
ENV NODE_OPTIONS="--max_old_space_size=1024"
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build with limited CPU usage
RUN pnpm build

# Stage 3: Runner
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS="--max_old_space_size=512"

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    mkdir .next && \
    chown nextjs:nodejs .next

# Copy only the necessary files
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/captain-definition ./captain-definition

USER nextjs

# Set environment variables for runtime
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

EXPOSE 3000

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

CMD ["node", "server.js"] 