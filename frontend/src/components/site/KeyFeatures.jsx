import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { Zap, ShieldCheck, Banknote, Wrench } from "lucide-react";

export const KeyFeatures = () => {
  const { t } = useLang();

  const items = [
    { icon: Zap, title: t("features.f1Title"), desc: t("features.f1Desc") },
    { icon: ShieldCheck, title: t("features.f2Title"), desc: t("features.f2Desc") },
    { icon: Banknote, title: t("features.f3Title"), desc: t("features.f3Desc") },
    { icon: Wrench, title: t("features.f4Title"), desc: t("features.f4Desc") },
  ];

  return (
    <section
      id="features"
      data-testid="features-section"
      className="relative py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
            {t("features.eyebrow")}
          </div>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-blue-950 text-balance">
            {t("features.title")}
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                data-testid={`feature-card-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl border border-slate-200 bg-slate-50/50 p-7 hover:bg-white hover:border-emerald-300 hover:shadow-lg transition-all"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-blue-950">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{it.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
