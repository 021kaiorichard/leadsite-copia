"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";

const navLinks = [
  { href: "#passo-a-passo", label: "Step by step" },
  { href: "#telas", label: "The screens" },
  { href: "#mentoria", label: "Mentorship" },
  { href: "#precos", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[--border-dim] bg-[--background]/80 backdrop-blur supports-[backdrop-filter]:bg-[--background]/60">
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="LeadSite home">
          <Logo className="h-[20px] w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-[--text-3] hover:text-[--text] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/sign-in"
            className="text-[13px] font-semibold text-[--text-2] hover:text-[--text] transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className="text-[13px] font-bold px-4 py-2 rounded-full text-white transition-all hover:opacity-90"
            style={{ background: "#0071E3" }}
          >
            Start for free
          </Link>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-[--text-2]"
          aria-label="Menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <X width="22" height="22" stroke="currentColor" />
          ) : (
            <Menu width="22" height="22" stroke="currentColor" />
          )}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-[--border-dim] bg-[--background]">
          <div className="px-5 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-[13px] font-medium text-[--text-3] hover:text-[--text] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[--border-dim] space-y-2">
              <Link
                href="/sign-in"
                className="block text-[13px] font-semibold text-[--text-2] hover:text-[--text] py-2"
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href="/sign-up"
                className="block text-[13px] font-bold text-white px-4 py-2 rounded-full"
                style={{ background: "#0071E3" }}
                onClick={() => setIsOpen(false)}
              >
                Start for free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
