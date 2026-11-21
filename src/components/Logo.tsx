"use client";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label="LeadSite">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <rect width="30" height="30" x="1" y="1" rx="8" stroke="currentColor" strokeWidth="2" />
        <path
          d="M10 10h12M10 16h8M16 22v-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-extrabold tracking-tight text-[--text]">LeadSite</span>
    </div>
  );
}
