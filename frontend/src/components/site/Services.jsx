import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { ShieldCheck, ArrowUpRight, Check } from "lucide-react";

const SERVICES = [
  {
    key: "designing",
    img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=70",
    titleEn: "Solar Designing",
    titleHi: "सोलर डिज़ाइनिंग",
    descEn:
      "Custom solar system design tailored to your rooftop, load profile and budget. Engineered for maximum generation.",
    descHi:
      "आपकी छत, लोड प्रोफ़ाइल और बजट के अनुरूप कस्टम सोलर सिस्टम डिज़ाइन। अधिकतम जनरेशन के लिए इंजीनियर्ड।",
    pointsEn: [
      "Site survey + shadow analysis",
      "3D CAD layout & single-line diagrams",
      "Component sizing (panels, inverter, cables)",
      "Generation forecast in kWh / year",
    ],
    pointsHi: [
      "साइट सर्वे और छाया विश्लेषण",
      "3D CAD लेआउट और सिंगल-लाइन डायग्राम",
      "कंपोनेंट साइज़िंग (पैनल, इन्वर्टर, केबल)",
      "kWh / वर्ष में जनरेशन पूर्वानुमान",
    ],
  },
  {
    key: "om",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=70",
    titleEn: "Solar Operation & Maintenance",
    titleHi: "सोलर ऑपरेशन और रख-रखाव",
    descEn:
      "Comprehensive O&M to keep your plant running at peak efficiency. Generation guarantee included.",
    descHi:
      "आपके प्लांट को अधिकतम दक्षता पर चलाने के लिए संपूर्ण ओ एंड एम। जनरेशन गारंटी शामिल।",
    pointsEn: [
      "24×7 remote monitoring & alerts",
      "Quarterly preventive site visits",
      "Inverter & string health checks",
      "Performance ratio reports",
    ],
    pointsHi: [
      "24×7 रिमोट मॉनिटरिंग और अलर्ट",
      "त्रैमासिक निवारक साइट विज़िट",
      "इन्वर्टर और स्ट्रिंग हेल्थ चेक",
      "प्रदर्शन अनुपात रिपोर्ट",
    ],
  },
  {
    key: "epc",
    img: "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=900",
    titleEn: "Solar EPC",
    titleHi: "सोलर EPC",
    descEn:
      "Turnkey Engineering, Procurement & Construction — we handle the entire project from paperwork to power-on.",
    descHi:
      "टर्नकी इंजीनियरिंग, प्रोक्योरमेंट और कंस्ट्रक्शन — कागज़ी कार्रवाई से लेकर बिजली चालू होने तक का पूरा प्रोजेक्ट।",
    pointsEn: [
      "DISCOM approvals & net-metering",
      "Tier-1 panel & inverter procurement",
      "Mounting structure & DC/AC wiring",
      "Commissioning + subsidy paperwork",
    ],
    pointsHi: [
      "DISCOM अनुमोदन और नेट-मीटरिंग",
      "टियर-1 पैनल और इन्वर्टर खरीद",
      "माउंटिंग संरचना और DC/AC वायरिंग",
      "कमिशनिंग + सब्सिडी कागज़ी कार्रवाई",
    ],
  },
  {
    key: "inspection",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=70",
    titleEn: "Module Inspection & Quality Testing",
    titleHi: "मॉड्यूल निरीक्षण और गुणवत्ता परीक्षण",
    descEn:
      "Every panel is lab-tested before it reaches your roof. Detect micro-cracks, hotspots and PID before installation.",
    descHi:
      "हर पैनल आपकी छत पर पहुँचने से पहले लैब-टेस्टेड होता है। इंस्टॉलेशन से पहले माइक्रो-क्रैक, हॉटस्पॉट और PID का पता लगाएँ।",
    pointsEn: [
      "Electroluminescence (EL) imaging",
      "IV-curve tracing & flash testing",
      "Thermal imaging for hotspots",
      "BIS / IEC 61215 compliance check",
    ],
    pointsHi: [
      "इलेक्ट्रोल्यूमिनेसेंस (EL) इमेजिंग",
      "IV-कर्व ट्रेसिंग और फ्लैश टेस्टिंग",
      "हॉटस्पॉट के लिए थर्मल इमेजिंग",
      "BIS / IEC 61215 अनुपालन जाँच",
    ],
  },
  {
    key: "maintenance",
    img: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=900&q=70",
    titleEn: "Maintenance Service",
    titleHi: "रख-रखाव सेवा",
    descEn:
      "On-call repair and AMC plans across all 38 Bihar districts. Same-day response in major cities.",
    descHi:
      "बिहार के सभी 38 ज़िलों में ऑन-कॉल मरम्मत और AMC प्लान। प्रमुख शहरों में उसी दिन प्रतिक्रिया।",
    pointsEn: [
      "Scheduled panel cleaning",
      "Inverter repair & replacement",
      "Wiring & earthing checks",
      "Annual Maintenance Contract (AMC)",
    ],
    pointsHi: [
      "नियमित पैनल सफाई",
      "इन्वर्टर मरम्मत और प्रतिस्थापन",
      "वायरिंग और अर्थिंग जाँच",
      "वार्षिक रख-रखाव अनुबंध (AMC)",
    ],
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
            <motion.div
              key={s.key}
              data-testid={`service-card-${s.key}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-emerald-300 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={s.img}
                  alt={isHi ? s.titleHi : s.titleEn}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                  <ShieldCheck className="h-3 w-3" />
                  {isHi ? "5 साल वारंटी" : "5-Yr Warranty"}
                </span>
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="font-heading text-xl lg:text-2xl font-black text-white leading-tight drop-shadow">
                    {isHi ? s.titleHi : s.titleEn}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {isHi ? s.descHi : s.descEn}
                </p>

                <ul className="mt-5 space-y-2.5 flex-1">
                  {(isHi ? s.pointsHi : s.pointsEn).map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <Check className="h-3 w-3" strokeWidth={3.5} />
                      </span>
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  data-testid={`service-cta-${s.key}`}
                  onClick={onApply}
                  className="mt-6 inline-flex items-center justify-between gap-2 rounded-full bg-slate-50 hover:bg-emerald-600 hover:text-white text-blue-950 font-bold uppercase tracking-wider text-xs px-5 py-3 transition-all group/btn"
                >
                  <span>{isHi ? "विवरण माँगें" : "Request Details"}</span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white transition-transform group-hover/btn:rotate-45">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}

          {/* 6th tile - CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 5 * 0.08 }}
            data-testid="service-cta-card"
            className="relative rounded-3xl overflow-hidden bg-blue-950 text-white p-7 lg:p-8 flex flex-col justify-between min-h-[400px]"
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
                  ? "हमारा प्रमाणित इंजीनियर 48 घंटे के भीतर साइट विज़िट करेगा। कोई शुल्क नहीं, कोई बाध्यता नहीं।"
                  : "Our certified engineer will visit your site within 48 hours. No fee, no obligation."}
              </p>

              <ul className="mt-5 space-y-2">
                {(isHi
                  ? ["मुफ्त परामर्श", "स्थान पर निरीक्षण", "व्यक्तिगत कोटेशन"]
                  : ["Free consultation", "On-site inspection", "Custom quote"]
                ).map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-sm text-emerald-200"
                  >
                    <Check className="h-4 w-4 text-emerald-400" strokeWidth={3} />
                    {b}
                  </li>
                ))}
              </ul>
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
