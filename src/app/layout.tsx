import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lights By Mini",
  description: "Professional lighting design and project management services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
