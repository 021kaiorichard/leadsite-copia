"use client";

export function Footer() {
  return (
    <footer className="border-t border-[--border-dim]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
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
        </div>
        <div className="flex items-center gap-6 text-[13px] text-[--text-4]">
          <a href="/en/terms" className="hover:text-[--text-2] transition-colors">
            Terms of use
          </a>
          <a href="/en/privacy" className="hover:text-[--text-2] transition-colors">
            Privacy
          </a>
          <a href="mailto:contatomurilobezerra@gmail.com" className="hover:text-[--text-2] transition-colors">
            Contact
          </a>
        </div>
        <div className="flex flex-col items-center sm:items-end gap-2">
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-languages text-[--text-4] shrink-0"
              aria-hidden="true"
            >
              <path d="m5 8 6 6" />
              <path d="m4 14 6-6 2-3" />
              <path d="M2 5h12" />
              <path d="M7 2h1" />
              <path d="m22 22-5-10-5 10" />
              <path d="M14 18h6" />
            </svg>
            <span className="flex items-center gap-1.5">
              <button type="button" className="text-[12px] transition-colors text-[--text-4] hover:text-[--text]">
                Português
              </button>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[--text-4] text-[11px]">·</span>
              <button type="button" aria-current="true" className="text-[12px] transition-colors text-[--text] font-semibold cursor-default">
                English
              </button>
            </span>
          </div>
          <div className="text-[12px] text-[--text-5]">© 2026 LeadSite</div>
        </div>
      </div>
    </footer>
  );
}
