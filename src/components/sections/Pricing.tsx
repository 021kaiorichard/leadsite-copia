"use client";

type Plan = {
  name: string;
  subtitle: string;
  price: string;
  pricePeriod: string;
  button: string;
  buttonHref: string;
  buttonVariant: "blue" | "white" | "outline";
  featured?: boolean;
  features: Array<{ included: boolean; text: string }>;
};

const plans: Plan[] = [
  {
    name: "Free",
    subtitle: "To explore the platform",
    price: "Free",
    pricePeriod: "",
    button: "Start for free",
    buttonHref: "/sign-up",
    buttonVariant: "blue",
    features: [
      { included: true, text: "40 leads per month" },
      { included: true, text: "5 business categories" },
      { included: true, text: "2 websites per month" },
      { included: true, text: "10 outreach scripts per month" },
      { included: true, text: "3 website edits per month" },
      { included: true, text: "History of 3 versions (you can roll back)" },
      { included: true, text: "Free hosting with your own subdomain" },
      { included: true, text: "Public link for clients" },
      { included: true, text: "Dashboard with sales funnel and tips" },
      { included: true, text: "Custom domain (drop the .useleadsite.com)" },
      { included: false, text: "Recently opened businesses, with the owner and contact" },
      { included: false, text: "Animated websites" },
      { included: false, text: "Booking systems (app with admin panel)" },
      { included: false, text: "Team of up to 2 people" },
      { included: false, text: "AI logo" },
      { included: false, text: "Search in any town or city" },
      { included: false, text: "Search by neighbourhood" },
      { included: false, text: "Export your leads to a spreadsheet (CSV)" },
      { included: false, text: "Create websites for businesses outside the search" },
      { included: false, text: "Facebook Pixel, Google Analytics and Google Ads on the site" },
      { included: false, text: "Remove the LeadSite badge from sites" },
      { included: false, text: "Replace the badge with your own brand" },
      { included: false, text: "Exclusive networking group" },
      { included: true, text: "Documentation" },
    ],
  },
  {
    name: "Starter",
    subtitle: "For freelancers getting started",
    price: "R$ 97,00",
    pricePeriod: "/month",
    button: "Choose Starter",
    buttonHref: "/sign-up?plan=starter&interval=month",
    buttonVariant: "blue",
    features: [
      { included: true, text: "500 leads per month" },
      { included: true, text: "12 business categories" },
      { included: true, text: "Recently opened businesses, with the owner and contact" },
      { included: true, text: "15 websites per month" },
      { included: true, text: "80 outreach scripts per month" },
      { included: true, text: "30 website edits per month" },
      { included: true, text: "3 AI logos per month" },
      { included: true, text: "History of 10 versions (you can roll back)" },
      { included: true, text: "Free hosting with your own subdomain" },
      { included: true, text: "Public link for clients" },
      { included: true, text: "Export your leads to a spreadsheet (CSV)" },
      { included: true, text: "Dashboard with sales funnel and tips" },
      { included: true, text: "Custom domain (drop the .useleadsite.com)" },
      { included: false, text: "Animated websites" },
      { included: false, text: "Booking systems (app with admin panel)" },
      { included: false, text: "Team of up to 2 people" },
      { included: false, text: "Search in any town or city" },
      { included: false, text: "Search by neighbourhood" },
      { included: false, text: "Create websites for businesses outside the search" },
      { included: false, text: "Facebook Pixel, Google Analytics and Google Ads on the site" },
      { included: false, text: "Remove the LeadSite badge from sites" },
      { included: false, text: "Replace the badge with your own brand" },
      { included: false, text: "Exclusive networking group" },
      { included: true, text: "E-mail support" },
    ],
  },
  {
    name: "Pro",
    subtitle: "For active freelancers",
    price: "R$ 127,00",
    pricePeriod: "/month",
    button: "Choose Pro",
    buttonHref: "/sign-up?plan=pro&interval=month",
    buttonVariant: "white",
    featured: true,
    features: [
      { included: true, text: "1,500 leads per month" },
      { included: true, text: "30 business categories" },
      { included: true, text: "Recently opened businesses, with the owner and contact" },
      { included: true, text: "50 websites per month" },
      { included: true, text: "250 outreach scripts per month" },
      { included: true, text: "100 website edits per month" },
      { included: true, text: "10 AI logos per month" },
      { included: true, text: "History of 30 versions (you can roll back)" },
      { included: true, text: "Search by neighbourhood" },
      { included: true, text: "Free hosting with your own subdomain" },
      { included: true, text: "Public link for clients" },
      { included: true, text: "Export your leads to a spreadsheet (CSV)" },
      { included: true, text: "Dashboard with sales funnel and tips" },
      { included: true, text: "Create websites for businesses outside the search" },
      { included: true, text: "Facebook Pixel, Google Analytics and Google Ads on the site" },
      { included: true, text: "Remove the LeadSite badge from sites" },
      { included: true, text: "Custom domain (drop the .useleadsite.com)" },
      { included: true, text: "Exclusive networking group" },
      { included: false, text: "Animated websites" },
      { included: false, text: "Booking systems (app with admin panel)" },
      { included: false, text: "Team of up to 2 people" },
      { included: false, text: "Search in any town or city" },
      { included: false, text: "Replace the badge with your own brand" },
      { included: true, text: "WhatsApp support" },
    ],
  },
  {
    name: "Agency",
    subtitle: "For agencies and teams",
    price: "R$ 297,00",
    pricePeriod: "/month",
    button: "Choose Agency",
    buttonHref: "/sign-up?plan=agency&interval=month",
    buttonVariant: "blue",
    features: [
      { included: true, text: "3,000 leads per month" },
      { included: true, text: "Every business category" },
      { included: true, text: "Recently opened businesses, with the owner and contact" },
      { included: true, text: "90 websites per month" },
      { included: true, text: "2 animated websites per month" },
      { included: true, text: "500 outreach scripts per month" },
      { included: true, text: "5 booking systems per month (app with admin panel)" },
      { included: true, text: "200 website edits per month" },
      { included: true, text: "25 AI logos per month" },
      { included: true, text: "History of 50 versions (you can roll back)" },
      { included: true, text: "Search in any town or city" },
      { included: true, text: "Search by neighbourhood" },
      { included: true, text: "Free hosting with your own subdomain" },
      { included: true, text: "Public link for clients" },
      { included: true, text: "Export your leads to a spreadsheet (CSV)" },
      { included: true, text: "Dashboard with sales funnel and tips" },
      { included: true, text: "Create websites for businesses outside the search" },
      { included: true, text: "Facebook Pixel, Google Analytics and Google Ads on the site" },
      { included: true, text: "Remove the LeadSite badge from sites" },
      { included: true, text: "Replace the badge with your own brand" },
      { included: true, text: "Custom domain (drop the .useleadsite.com)" },
      { included: true, text: "Exclusive networking group" },
      { included: false, text: "Team of up to 2 people (yearly plan only)" },
      { included: true, text: "Priority WhatsApp" },
    ],
  },
];

export function Pricing() {
  return (
    <section id="precos" className="relative max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <div className="lp-glow" style={{ width: 400, height: 400, background: "rgba(0,113,227,0.12)", top: 40, left: "50%", transform: "translateX(-50%)" }} />
      <div className="lp-reveal text-center max-w-2xl mx-auto relative" style={{ transitionDelay: "0ms" }}>
        <span className="text-[13px] font-bold uppercase tracking-wider" style={{ color: "#0071E3" }}>
          Plans
        </span>
        <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight text-[--text]">
          Pick a plan and start selling.
        </h2>
        <p className="mt-4 text-[15px] text-[--text-3]">No card to start. No lock-in.</p>
        <div className="mt-7 inline-flex items-center gap-1 p-1 rounded-full glass-btn">
          <button className="px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all text-white" style={{ background: "#0071E3" }}>
            Monthly
          </button>
          <button className="px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all inline-flex items-center gap-1.5 text-[--text-3]">
            Annual <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: "rgba(26,126,58,0.14)", color: "#1A7E3A" }}>
              -35%
            </span>
          </button>
        </div>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative items-stretch">
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            className="lp-reveal h-full"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div
              className={`
                relative h-full rounded-2xl p-6 flex flex-col glass-card
                ${plan.featured ? "bg-gradient-to-br from-[#0071E3] to-[#005EC2] shadow-[0_16px_40px_rgba(0,113,227,0.35)]" : ""}
              `}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold px-3 py-1 rounded-full text-[#0071E3] bg-white shadow">
                  Most popular
                </span>
              )}
              <div className={`text-[15px] font-bold ${plan.featured ? "text-white" : "text-[--text]"}`}>
                {plan.name}
              </div>
              <div className={`text-[12px] mt-1 ${plan.featured ? "text-white/75" : "text-[--text-4]"}`}>
                {plan.subtitle}
              </div>
              <div className="mt-5 flex items-end gap-1">
                <span className={`text-[32px] font-extrabold leading-none ${plan.featured ? "text-white" : "text-[--text]"}`}>
                  {plan.price}
                </span>
                <span className={`text-[13px] mb-0.5 ${plan.featured ? "text-white/75" : "text-[--text-4]"}`}>
                  {plan.pricePeriod}
                </span>
              </div>
              <a
                href={plan.buttonHref}
                className={`mt-5 text-center text-[14px] font-bold px-4 py-2.5 rounded-full transition-all text-white hover:opacity-90 block ${
                  plan.buttonVariant === "white"
                    ? "bg-white text-[#0071E3]"
                    : "bg-[#0071E3]"
                }`}
              >
                {plan.button}
              </a>
              <ul className="mt-6 flex flex-col gap-2.5">
                {plan.features.map((feature, j) => (
                  <li key={j} className={`flex items-start gap-2 text-[13px] ${feature.included ? "text-[--text-2]" : "text-[--text-disabled]"}`}>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`lucide lucide-check mt-0.5 shrink-0 ${feature.included ? "text-[#1A7E3A]" : ""}`}
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {feature.included ? (
                      <span>{feature.text}</span>
                    ) : (
                      <>
                        <span className="mt-0.5 shrink-0 w-[15px] text-center leading-none select-none">-</span>
                        {feature.text}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button className="text-[11px] text-[--text-5] hover:text-[--text-3] underline underline-offset-2 transition-colors">
          Prospecting in other countries? See Global plans
        </button>
        <p className="mt-2 text-[11px] text-[--text-5]">
          BRL plans search for leads in Brazil, Angola and Mozambique.
        </p>
      </div>
    </section>
  );
}
