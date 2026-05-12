import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    key: "designing",
    img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=70",
    titleEn: "Solar Designing",
    titleHi: "सोलर डिज़ाइनिंग",
    descEn:
      "Custom solar system design tailored to your rooftop, load profile and budget. CAD layouts + shadow analysis included.",
    descHi:
      "आपकी छत, लोड प्रोफ़ाइल और बजट के अनुरूप कस्टम सोलर सिस्टम डिज़ाइन। CAD लेआउट और छाया विश्लेषण शामिल।",
  },
  {
    key: "om",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=70",
    titleEn: "Solar Operation & Maintenance",
    titleHi: "सोलर ऑपरेशन और रख-रखाव",
    descEn:
      "End-to-end O&M with remote monitoring, quarterly site visits and 24×7 fault resolution to maximize plant generation.",
    descHi:
      "रिमोट मॉनिटरिंग, त्रैमासिक साइट विज़िट और 24×7 फॉल्ट समाधान के साथ संपूर्ण ओ एंड एम।",
  },
  {
    key: "epc",
    img: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=900&q=70",
    titleEn: "Solar EPC",
    titleHi: "सोलर EPC",
    descEn:
      "Turnkey Engineering, Procurement & Construction — from approvals and structure to commissioning and net-metering.",
    descHi:
      "टर्नकी इंजीनियरिंग, प्रोक्योरमेंट और कंस्ट्रक्शन — अनुमोदन से लेकर नेट-मीटरिंग तक।",
  },
  {
    key: "inspection",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=70",
    titleEn: "Module Inspection & Quality Testing",
    titleHi: "मॉड्यूल निरीक्षण और गुणवत्ता परीक्षण",
    descEn:
      "EL imaging, IV-curve tracing and thermography for every module — only Tier-1 panels reach your roof.",
    descHi:
      "हर मॉड्यूल की EL इमेजिंग, IV-कर्व ट्रेसिंग और थर्मोग्राफी — केवल टियर-1 पैनल आपकी छत तक पहुँचते हैं।",
  },
  {
    key: "maintenance",
    img: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=900&q=70",
    titleEn: "Maintenance Service",
    titleHi: "रख-रखाव सेवा",
    descEn:
      "Scheduled cleaning, inverter health checks and rapid repair across all 38 Bihar districts under one AMC.",
    descHi:
      "एक ही AMC के तहत बिहार के सभी 38 ज़िलों में सफाई, इन्वर्टर हेल्थ चेक और त्वरित मरम्मत।",
  },
];

export const Services = ({ onApply }) => {
  const { lang, t } = useLang();
  const isHi = lang === "hi";

  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              {isHi ? "हमारी सेवाएँ" : "Our Services"}
            </div>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-blue-950 text-balance">
              {isHi ? "हमारी नवीकरणीय सेवाएँ" : "Our Renewable Services"}
            </h2>
            <p className="mt-4 text-base lg:text-lg text-slate-600 leading-relaxed">
              {isHi
                ? "डिज़ाइन से लेकर रख-रखाव तक — सब कुछ एक छत के नीचे। 5 साल की कंपनी वारंटी के साथ।"
                : "From design to maintenance — everything under one roof. Backed by a 5-year company warranty."}
            </p>
          </div>

          <div
            data-testid="warranty-badge"
            className="inline-flex items-center gap-3 rounded-2xl border-2 border-emerald-200 bg-emerald-50 px-5 py-3 self-start lg:self-end"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white">
              <ShieldCheck className="h-6 w-6" strokeWidth={2.4} />
            </span>
            <div className="leading-tight">
              <div className="font-heading text-xl font-black text-blue-950">
                {isHi ? "5 साल वारंटी" : "5-Year Warranty"}
              </div>
              <div className="text-xs text-slate-600">
                {isHi ? "हर इंस्टॉलेशन पर" : "On every installation"}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {SERVICES.map((s, i) => (
            <motion.button
              key={s.key}
              type="button"
              data-testid={`service-card-${s.key}`}
              onClick={onApply}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative text-left rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-emerald-300 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={s.img}
                  alt={isHi ? s.titleHi : s.titleEn}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-950/10 to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                  <ShieldCheck className="h-3 w-3" />
                  {isHi ? "5 साल" : "5-Yr Warranty"}
                </span>
                <span className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-600/40 transition-transform group-hover:scale-110 group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg lg:text-xl font-bold text-blue-950">
                  {isHi ? s.titleHi : s.titleEn}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {isHi ? s.descHi : s.descEn}
                </p>
              </div>
            </motion.button>
          ))}

          {/* 6th tile - CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 5 * 0.08 }}
            data-testid="service-cta-card"
            className="relative rounded-3xl overflow-hidden bg-blue-950 text-white p-7 lg:p-8 flex flex-col justify-between"
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 20%, rgba(16,185,129,0.5) 1px, transparent 1px), radial-gradient(circle at 70% 80%, rgba(251,191,36,0.5) 1px, transparent 1px)",
                backgroundSize: "26px 26px",
              }}
            />
            <div className="relative">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                {isHi ? "अभी शुरू करें" : "Get Started"}
              </div>
              <h3 className="mt-3 font-heading text-2xl lg:text-3xl font-black leading-tight">
                {isHi
                  ? "अपनी छत के लिए मुफ्त सर्वे बुक करें"
                  : "Book a free survey for your rooftop"}
              </h3>
              <p className="mt-3 text-sm text-blue-200 leading-relaxed">
                {isHi
                  ? "हमारा प्रमाणित इंजीनियर 48 घंटे के भीतर साइट विज़िट करेगा।"
                  : "Our certified engineer will visit your site within 48 hours."}
              </p>
            </div>
            <button
              type="button"
              data-testid="services-cta-btn"
              onClick={onApply}
              className="relative mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-blue-950 font-bold uppercase tracking-wider text-xs px-6 py-3.5 transition-all hover:scale-[1.03] active:scale-95 shadow-lg shadow-emerald-500/30 self-start"
            >
              {t("nav.apply")}
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
