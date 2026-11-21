"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          <h2 className="text-2xl font-extrabold text-[--text]">Welcome back</h2>
          <p className="mt-2 text-[--text-3]">Sign in to your LeadSite account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
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

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-[13px] text-[--text-3] cursor-pointer">
              <input type="checkbox" className="rounded border-[--border-dim] text-[--brand] focus:ring-[--brand]" />
              Remember me
            </label>
            <Link
              href="/"
              className="text-[13px] text-[--brand] font-medium hover:underline transition-colors"
            >
              Forgot password?
            </Link>
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
                Signing in...
              </>
            ) : (
              <>
                Sign in <ArrowRight width="16" height="16" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-[--border-dim]" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[--bg] px-2 text-[--text-4]">Or continue with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[--border-dim] bg-[--bg-2]/50 text-[--text-2] text-sm font-medium hover:bg-[--bg-3] transition-all">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.75 3.28-8.09" />
              <path fill="#4285F4" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.19v2.85C3.99 20.53 7.7 23 12 23" />
              <path fill="#34A853" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s0-1.43.15-2.09l3.27-1.79c.23.43.51.82.87 1.13.89.78 2.01 1.26 3.26 1.26s2.37-.49 3.26-1.26c.36-.31.64-.7.87-1.13l3.27 1.79c.15.66.24 1.36.24 2.09s-.09 1.43-.24 2.09l-3.57 2.77c-1.19.86-2.63 1.35-4.17 1.35-2.24 0-4.21-.75-5.62-2.03z" />
              <path fill="#FBBC05" d="M12 5.38c1.62 0 3.06.56 4.21 1.56l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.19 7.25l3.57 2.77c.87-2.6 3.6-4.41 6.24-4.41z" />
              <path fill="#EA4335" d="M12 23c-4.3 0-8.05-2.47-9.74-6l3.57-2.77c.87 2.6 3.6 4.41 6.24 4.41 2.24 0 4.21-.75 5.62-2.03l3.57 2.77C20.01 20.53 16.3 23 12 23" />
            </svg>
            Google
          </button>
          <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[--border-dim] bg-[--bg-2]/50 text-[--text-2] text-sm font-medium hover:bg-[--bg-3] transition-all">
            Apple
          </button>
        </div>

        <p className="mt-8 text-center text-[13px] text-[--text-4]">
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-[--brand] font-medium hover:underline transition-colors">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
