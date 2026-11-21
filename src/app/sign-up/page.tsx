"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-[--bg] flex items-center justify-center px-5 sm:px-8 py-12">
      <div className="max-w-md w-full glass-card rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="text-center mb-8">
          <Link href="/" className="flex items-center gap-2 justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <rect width="22" height="22" x="1" y="1" rx="6" stroke="currentColor" strokeWidth="2" />
              <path d="M7 7h8M7 12h6M12 16v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-extrabold tracking-tight text-[--text]">LeadSite</span>
          </Link>
          <h2 className="text-2xl font-extrabold text-[--text]">Create your account</h2>
          <p className="mt-2 text-[--text-3]">Start selling websites to local businesses today.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[13px] font-medium text-[--text-2] mb-1.5">
              Full name
            </label>
            <input
              type="text"
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-[--border-dim] bg-[--bg-2]/50 text-[--text] focus:border-[--brand] focus:ring-1 focus:ring-[--brand] outline-none transition-all"
              placeholder="Jane Doe"
              required
              autoComplete="name"
            />
          </div>

          <div>
            <label className="block text-[13px] font-medium text-[--text-2] mb-1.5">
              Email address
            </label>
            <div className="relative">
              <Mail width="18" height="18" className="absolute left-3 top-1/2 -translate-y-1/2 text-[--text-3]" />
              <input
                type="email"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[--border-dim] bg-[--bg-2]/50 text-[--text] focus:border-[--brand] focus:ring-1 focus:ring-[--brand] outline-none transition-all"
                placeholder="you@email.com"
                required
                autoComplete="email"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-[13px] font-medium text-[--text-2] mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock width="18" height="18" className="absolute left-3 top-1/2 -translate-y-1/2 text-[--text-3]" />
              <input
                type={showPassword ? "text" : "password"}
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-[--border-dim] bg-[--bg-2]/50 text-[--text] focus:border-[--brand] focus:ring-1 focus:ring-[--brand] outline-none transition-all pr-10"
                placeholder="••••••••"
                required
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[--text-3] hover:text-[--text] transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff width="16" height="16" /> : <Eye width="16" height="16" />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-1">
            <input type="checkbox" required className="rounded border-[--border-dim] text-[--brand] focus:ring-[--brand]" />
            <span className="text-[13px] text-[--text-3]">
              I agree to the <Link href="/en/terms" className="text-[--brand] font-medium hover:underline">Terms of use</Link>{" "}
              and <Link href="/en/privacy" className="text-[--brand] font-medium hover:underline">Privacy</Link>
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            style={{ background: "#0071E3" }}
          >
            {loading ? (
              <>
                <svg width="18" height="18" className="animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 11-6.219-8.56" />
                </svg>
                Creating account...
              </>
            ) : (
              <>
                Create account <ArrowRight width="16" height="16" />
              </>
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-[13px] text-[--text-4]">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-[--brand] font-medium hover:underline transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
