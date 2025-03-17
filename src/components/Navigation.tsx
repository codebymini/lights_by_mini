"use client";
import * as React from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-12 w-auto" />
            <span className="text-xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Lights By Mini
            </span>
          </Link>
          <div className="space-x-6">
            <Link
              href="/projects"
              className="text-amber-500 hover:text-amber-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="text-amber-500 hover:text-amber-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-amber-500 hover:text-amber-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
