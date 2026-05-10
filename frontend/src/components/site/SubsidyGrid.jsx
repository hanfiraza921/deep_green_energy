import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SubsidyGrid = ({ onClaim }) => {
  const { t } = useLang();

  const tiers = [
    {
      key: "1kw",
      name: t("subsidy.tier1Name"),
      sub: t("subsidy.tier1Sub"),
      amount: "₹30,000",
      featured: false,
      perks: ["1.2 KW per day output", "120-150 sq.ft area", "Powers fans & lights"],
    },
    {
      key: "2kw",
      name: t("subsidy.tier2Name"),
      sub: t("subsidy.tier2Sub"),
      amount: "₹60,000",
      featured: true,
      perks: ["8 units / day average", "200-250 sq.ft area", "Runs AC + appliances"],
    },
    {
      key: "3kw",
      name: t("subsidy.tier3Name"),
      sub: t("subsidy.tier3Sub"),
      amount: "₹78,000",
      featured: false,
      perks: ["12+ units / day", "300+ sq.ft area", "Full home + EV charging"],
    },
  ];

  return (
    <section
      id="benefits"
      data-testid="subsidy-section"
      className="relative py-20 lg:py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
            {t("subsidy.eyebrow")}
          </div>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-blue-950 text-balance">
            {t("subsidy.title")}
          </h2>
          <p className="mt-4 text-base lg:text-lg text-slate-600 leading-relaxed">
            {t("subsidy.subtitle")}
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.key}
              data-testid={`subsidy-card-${tier.key}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-3xl p-7 lg:p-8 border transition-all duration-300 hover:-translate-y-2 ${
                tier.featured
                  ? "bg-blue-950 border-blue-950 text-white shadow-2xl shadow-blue-950/30"
                  : "bg-white border-slate-200 hover:border-emerald-300 hover:shadow-xl shadow-sm"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 right-6 inline-flex items-center gap-1.5 rounded-full bg-amber-400 text-blue-950 px-3 py-1 text-[10px] font-black uppercase tracking-widest shadow-lg">
                  <Zap className="h-3 w-3 fill-current" /> Most Popular
                </span>
              )}

              <div
                className={`text-xs font-bold uppercase tracking-widest ${
                  tier.featured ? "text-emerald-300" : "text-emerald-700"
                }`}
              >
                {tier.name}
              </div>
              <div
                className={`mt-1 text-sm ${
                  tier.featured ? "text-blue-100" : "text-slate-500"
                }`}
              >
                {tier.sub}
              </div>

              <div className="mt-7 flex items-baseline gap-2">
                <span
                  className={`font-heading text-5xl lg:text-6xl font-black tracking-tighter ${
                    tier.featured ? "text-white" : "text-emerald-600"
                  }`}
                >
                  {tier.amount}
                </span>
              </div>
              <div
                className={`mt-1 text-xs font-semibold uppercase tracking-widest ${
                  tier.featured ? "text-blue-200" : "text-slate-500"
                }`}
              >
                {t("subsidy.saveLabel")}
              </div>

              <ul className="mt-7 space-y-3">
                {tier.perks.map((p) => (
                  <li
                    key={p}
                    className={`flex items-start gap-2.5 text-sm ${
                      tier.featured ? "text-blue-100" : "text-slate-700"
                    }`}
                  >
                    <span
                      className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ${
                        tier.featured ? "bg-emerald-500/20 text-emerald-300" : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <Button
                data-testid={`subsidy-cta-${tier.key}`}
                onClick={() => onClaim?.(tier.key)}
                className={`mt-8 w-full h-12 rounded-full font-bold uppercase tracking-wider text-xs transition-all ${
                  tier.featured
                    ? "bg-emerald-500 hover:bg-emerald-400 text-blue-950"
                    : "bg-blue-950 hover:bg-blue-900 text-white"
                }`}
              >
                {t("subsidy.cta")}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubsidyGrid;
