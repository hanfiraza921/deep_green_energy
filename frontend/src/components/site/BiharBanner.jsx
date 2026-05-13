import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { MapPin, ArrowRight, Truck, Clock, Wrench } from "lucide-react";

export const BiharBanner = ({ onAction }) => {
  const { t, lang } = useLang();
  const isHi = lang === "hi";

  const perks = [
    {
      icon: Truck,
      titleEn: "Free Home Delivery",
      titleHi: "मुफ्त होम डिलीवरी",
      subEn: "All 38 districts of Bihar",
      subHi: "बिहार के सभी 38 ज़िले",
    },
    {
      icon: Clock,
      titleEn: "48-Hour Site Visit",
      titleHi: "48-घंटे में साइट विज़िट",
      subEn: "Certified engineer at your door",
      subHi: "आपके दरवाज़े प्रमाणित इंजीनियर",
    },
    {
      icon: Wrench,
      titleEn: "Doorstep Installation",
      titleHi: "घर पर इंस्टॉलेशन",
      subEn: "Materials + labour included",
      subHi: "सामग्री + श्रम शामिल",
    },
  ];

  return (
    <section
      data-testid="bihar-banner"
      className="relative py-14 lg:py-20 bg-blue-950 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(16,185,129,0.6) 1px, transparent 1px), radial-gradient(circle at 80% 50%, rgba(251,191,36,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px, 28px 28px",
        }}
      />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
        >
          <div className="flex items-start gap-4 max-w-3xl">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30">
              <MapPin className="h-6 w-6" />
            </span>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500 text-blue-950 px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-3">
                <Truck className="h-3 w-3" />
                {isHi ? "होम डिलीवरी उपलब्ध" : "Home Delivery Available"}
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white text-balance leading-tight">
                {t("bihar.title")}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-blue-200 leading-relaxed">
                {isHi
                  ? "पटना, गया, भागलपुर, मुज़फ्फरपुर, दरभंगा, पूर्णिया और 32 और ज़िलों में मुफ्त होम डिलीवरी और इंस्टॉलेशन।"
                  : "Free home delivery & installation across Patna, Gaya, Bhagalpur, Muzaffarpur, Darbhanga, Purnia and 32 more districts."}
              </p>
            </div>
          </div>
          <button
            data-testid="bihar-cta"
            onClick={onAction}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-blue-950 font-bold uppercase tracking-wider text-xs px-6 py-3.5 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/30 whitespace-nowrap self-start lg:self-auto"
          >
            {t("bihar.cta")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        <div className="relative mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {perks.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.titleEn}
                data-testid={`bihar-perk-${i}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-3.5 rounded-2xl bg-blue-900/40 border border-blue-800/60 backdrop-blur px-5 py-4 hover:bg-blue-900/60 hover:border-emerald-400/40 transition-all"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-blue-950">
                  <Icon className="h-5 w-5" strokeWidth={2.4} />
                </span>
                <div className="leading-tight min-w-0">
                  <div className="font-heading text-sm sm:text-base font-bold text-white truncate">
                    {isHi ? p.titleHi : p.titleEn}
                  </div>
                  <div className="text-xs text-blue-200 mt-0.5">
                    {isHi ? p.subHi : p.subEn}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BiharBanner;
