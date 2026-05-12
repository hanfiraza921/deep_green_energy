import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { BadgeCheck } from "lucide-react";

const AUTHORITIES = [
  {
    key: "mnre",
    img: "https://customer-assets.emergentagent.com/job_solar-subsidy-check-2/artifacts/0q1qrr1g_images.png",
    nameEn: "Ministry of New & Renewable Energy",
    nameHi: "नवीन और नवीकरणीय ऊर्जा मंत्रालय",
    subEn: "Government of India",
    subHi: "भारत सरकार",
  },
  {
    key: "sbpdcl",
    img: "https://customer-assets.emergentagent.com/job_solar-subsidy-check-2/artifacts/l7ipfhiw_A-Guide-to-Winning-SBPDCL-South-Bihar-Power-Distribution-Company-Limited-tenders.png",
    nameEn: "SBPDCL",
    nameHi: "SBPDCL",
    subEn: "South Bihar Power Distribution Co. Ltd.",
    subHi: "दक्षिण बिहार पावर डिस्ट्रीब्यूशन कं. लि.",
  },
  {
    key: "nbpdcl",
    img: "https://customer-assets.emergentagent.com/job_solar-subsidy-check-2/artifacts/8aw3fxwy_NBPDCL_logo.png",
    nameEn: "NBPDCL",
    nameHi: "NBPDCL",
    subEn: "North Bihar Power Distribution Co. Ltd.",
    subHi: "उत्तर बिहार पावर डिस्ट्रीब्यूशन कं. लि.",
  },
];

export const GovTrust = () => {
  const { lang } = useLang();
  const isHi = lang === "hi";

  return (
    <section
      id="approvals"
      data-testid="govtrust-section"
      className="relative py-14 lg:py-16 bg-white border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-800">
            <BadgeCheck className="h-3.5 w-3.5" />
            {isHi ? "अधिकृत और सूचीबद्ध" : "Authorised & Empanelled"}
          </div>
          <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-[34px] font-black tracking-tight text-blue-950 text-balance leading-tight">
            {isHi
              ? "सरकारी एजेंसियों और बिहार बिजली विभागों के साथ पंजीकृत"
              : "Registered with Government Authorities & Bihar DISCOMs"}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {isHi
              ? "हम सरकारी मानकों के अनुसार ही काम करते हैं — सब्सिडी, नेट-मीटरिंग और कमिशनिंग सीधे विभाग से।"
              : "We operate strictly under government standards — subsidy, net-metering and commissioning handled directly with the departments."}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {AUTHORITIES.map((a, i) => (
            <motion.div
              key={a.key}
              data-testid={`govtrust-${a.key}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex items-center gap-5 rounded-2xl border border-slate-200 bg-white px-5 py-5 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="relative shrink-0 inline-flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden p-2">
                <img
                  src={a.img}
                  alt={isHi ? a.nameHi : a.nameEn}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-emerald-700">
                  <BadgeCheck className="h-3 w-3" />
                  {isHi ? "अधिकृत" : "Authorised"}
                </div>
                <h3 className="mt-1.5 font-heading text-base sm:text-lg font-black text-blue-950 leading-tight">
                  {isHi ? a.nameHi : a.nameEn}
                </h3>
                <p className="mt-0.5 text-xs sm:text-sm text-slate-600 leading-snug">
                  {isHi ? a.subHi : a.subEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovTrust;
