import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Sparkles, IndianRupee, Truck } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const HERO_IMG =
  "https://static.prod-images.emergentagent.com/jobs/1a082727-3918-493e-b092-2ccb6942d588/images/0255b7e4a11e8771a6ebda522fe9e24f6aaa24ebbb0baf1c6a382bee64b5cb93.png";

export const Hero = ({ onCheckEligibility, onGetQuote }) => {
  const { t } = useLang();

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/40 to-white"
    >
      {/* decorative grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at top, black 40%, transparent 75%)",
        }}
      />
      {/* glowing orbs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-0 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div
              data-testid="hero-badge"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-800"
            >
              <Sparkles className="h-3.5 w-3.5" />
              {t("hero.badge")}
            </div>

            <h1 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] font-black tracking-tight text-blue-950 text-balance">
              {t("hero.title1")}{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-emerald-600">{t("hero.title2")}</span>
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-amber-200/70 -z-0 rounded-sm"
                />
              </span>
              <br />
              <span className="text-slate-800">{t("hero.titleSub")}</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div
              data-testid="hero-delivery-badge"
              className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-blue-950 text-white pl-2 pr-4 py-1.5 shadow-md"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-blue-950">
                <Truck className="h-4 w-4" strokeWidth={2.4} />
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-wide">
                {t("hero.deliveryBadge")}
              </span>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                data-testid="hero-cta-eligibility"
                onClick={onCheckEligibility}
                className="group bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider text-sm h-14 px-7 rounded-full shadow-xl shadow-emerald-600/25 hover:shadow-2xl hover:shadow-emerald-600/40 hover:scale-[1.03] active:scale-95 transition-all"
              >
                {t("hero.ctaPrimary")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                data-testid="hero-cta-quote"
                onClick={onGetQuote}
                variant="outline"
                className="bg-white/80 backdrop-blur border-2 border-blue-900 text-blue-950 hover:bg-blue-950 hover:text-white font-bold uppercase tracking-wider text-sm h-14 px-7 rounded-full transition-all"
              >
                {t("hero.ctaSecondary")}
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-xl">
              {[
                { icon: <IndianRupee className="h-4 w-4" />, label: t("hero.stat2") },
                { icon: <ShieldCheck className="h-4 w-4" />, label: t("hero.stat3") },
                { icon: <Sparkles className="h-4 w-4" />, label: t("hero.stat1") },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1.5 border-l-2 border-emerald-500 pl-3"
                >
                  <div className="text-emerald-700">{s.icon}</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-[2.5rem] blur-2xl" />
              <div className="relative h-full w-full rounded-[2rem] bg-white border border-slate-200/80 shadow-2xl shadow-blue-900/10 overflow-hidden grain-overlay">
                <img
                  src={HERO_IMG}
                  alt="Solar panel illustration"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating subsidy badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-6 -left-4 sm:-left-10 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 max-w-[220px]"
                data-testid="hero-floating-subsidy"
              >
                <div className="text-[10px] uppercase tracking-widest font-semibold text-slate-500">
                  Max Subsidy
                </div>
                <div className="font-heading text-3xl font-black text-emerald-600 leading-none mt-1">
                  ₹78,000
                </div>
                <div className="text-xs text-slate-600 mt-1">Direct to bank account</div>
              </motion.div>

              {/* Floating warranty badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-4 -right-2 sm:-right-6 bg-blue-950 text-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                data-testid="hero-floating-warranty"
              >
                <ShieldCheck className="h-7 w-7 text-emerald-400" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-blue-200">
                    Backed by
                  </div>
                  <div className="font-heading font-bold text-sm">5-Yr Warranty</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
