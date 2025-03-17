import { renderToString } from "react-dom/server";
import { createElement } from "react";
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { default as Logo } from "../src/components/Logo.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateFavicon() {
  // Generate SVG string from Logo component
  const svgString = renderToString(createElement(Logo, { className: "h-32 w-32" }));

  // Convert SVG to PNG in different sizes
  const sizes = [16, 32, 48, 64, 128, 256];
  const pngBuffers = await Promise.all(
    sizes.map(async (size) => {
      const buffer = await sharp(Buffer.from(svgString))
        .resize(size, size)
        .png()
        .toBuffer();
      return { size, buffer };
    })
  );

  // Save PNGs
  pngBuffers.forEach(({ size, buffer }) => {
    fs.writeFileSync(
      path.join(__dirname, "..", "public", `favicon-${size}x${size}.png`),
      buffer
    );
  });

  // Create ICO file from 32x32 PNG
  fs.writeFileSync(
    path.join(__dirname, "..", "public", "favicon.ico"),
    pngBuffers[1].buffer // Use 32x32 size
  );

  console.log("Favicon files generated successfully!");
}

generateFavicon().catch(console.error); 