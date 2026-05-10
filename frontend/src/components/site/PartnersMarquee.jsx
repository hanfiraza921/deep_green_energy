import Marquee from "react-fast-marquee";
import { useLang } from "@/i18n/LanguageContext";
import { Sun, Zap, Battery, Building2, Landmark, PiggyBank } from "lucide-react";

const brandPartners = [
  { name: "Tata Power Solar", icon: Zap },
  { name: "Adani Solar", icon: Sun },
  { name: "Waaree Energies", icon: Battery },
  { name: "UTL Solar", icon: Building2 },
  { name: "Vikram Solar", icon: Sun },
  { name: "Loom Solar", icon: Zap },
];

const bankPartners = [
  { name: "State Bank of India", short: "SBI" },
  { name: "Punjab National Bank", short: "PNB" },
  { name: "Bank of Baroda", short: "BoB" },
  { name: "Canara Bank", short: "Canara" },
  { name: "HDFC Bank", short: "HDFC" },
  { name: "ICICI Bank", short: "ICICI" },
];

export const PartnersMarquee = () => {
  const { t } = useLang();

  return (
    <section
      id="partners"
      data-testid="partners-section"
      className="relative py-16 lg:py-20 bg-white border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mb-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
            {t("partners.eyebrow")}
          </div>
          <h2 className="mt-3 font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-blue-950">
            {t("partners.title")}
          </h2>
        </div>
      </div>

      {/* Brand row */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="px-4 sm:px-8 mb-5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 text-center mb-4">
            {t("partners.brand")}
          </div>
        </div>
        <Marquee gradient={false} speed={36} pauseOnHover>
          {brandPartners.concat(brandPartners).map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={`brand-${i}`}
                className="mx-5 sm:mx-8 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all"
              >
                <Icon className="h-6 w-6 text-emerald-600" strokeWidth={2} />
                <span className="font-heading text-base sm:text-lg font-bold text-blue-950 whitespace-nowrap">
                  {p.name}
                </span>
              </div>
            );
          })}
        </Marquee>
      </div>

      {/* Bank row */}
      <div className="relative mt-10">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="px-4 sm:px-8 mb-5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 text-center mb-4">
            {t("partners.bank")}
          </div>
        </div>
        <Marquee gradient={false} speed={28} direction="right" pauseOnHover>
          {bankPartners.concat(bankPartners).map((p, i) => (
            <div
              key={`bank-${i}`}
              className="mx-5 sm:mx-8 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 hover:bg-white hover:border-blue-300 transition-all"
            >
              <Landmark className="h-5 w-5 text-blue-900" />
              <span className="font-heading text-base font-bold text-blue-950 whitespace-nowrap">
                {p.short}
              </span>
              <span className="text-xs text-slate-500 whitespace-nowrap hidden sm:inline">
                {p.name}
              </span>
              <PiggyBank className="h-4 w-4 text-amber-600 hidden sm:inline" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default PartnersMarquee;
