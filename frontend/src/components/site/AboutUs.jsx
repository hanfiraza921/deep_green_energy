import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { Target, Eye, Heart, Sparkles, Sun, Leaf } from "lucide-react";

export const AboutUs = () => {
  const { lang } = useLang();
  const isHi = lang === "hi";

  const stats = [
    { value: "38", labelEn: "Bihar Districts Served", labelHi: "बिहार ज़िले" },
    { value: "100%", labelEn: "Government Compliant", labelHi: "सरकारी अनुपालन" },
    { value: "5-Yr", labelEn: "Company Warranty", labelHi: "कंपनी वारंटी" },
    { value: "24×7", labelEn: "Customer Support", labelHi: "ग्राहक सहायता" },
  ];

  const pillars = [
    {
      icon: Target,
      titleEn: "Our Mission",
      titleHi: "हमारा मिशन",
      descEn:
        "To make affordable, clean solar energy accessible to every household in Bihar — one rooftop at a time.",
      descHi:
        "बिहार के हर घर तक किफ़ायती और स्वच्छ सौर ऊर्जा पहुँचाना — एक छत, एक परिवार से शुरुआत।",
    },
    {
      icon: Eye,
      titleEn: "Our Vision",
      titleHi: "हमारा विज़न",
      descEn:
        "A self-reliant, zero-electricity-bill Bihar powered entirely by clean and renewable energy.",
      descHi:
        "आत्मनिर्भर बिहार जहाँ बिजली बिल शून्य हो और हर घर नवीकरणीय ऊर्जा से रोशन हो।",
    },
    {
      icon: Heart,
      titleEn: "Our Values",
      titleHi: "हमारे मूल्य",
      descEn:
        "Honest pricing, certified materials, on-time installation, and lifelong customer support — no compromise.",
      descHi:
        "ईमानदार कीमत, प्रमाणित सामग्री, समय पर इंस्टॉलेशन और जीवन भर सहायता — कोई समझौता नहीं।",
    },
  ];

  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 -left-32 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-800">
              <Sparkles className="h-3.5 w-3.5" />
              {isHi ? "हमारे बारे में" : "About Us"}
            </div>

            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-blue-950 text-balance leading-[1.05]">
              {isHi ? (
                <>
                  बिहार की भरोसेमंद{" "}
                  <span className="text-emerald-600">सोलर एनर्जी कंसल्टेंसी</span>
                </>
              ) : (
                <>
                  Bihar's trusted{" "}
                  <span className="text-emerald-600">solar energy consultancy</span>
                </>
              )}
            </h2>

            <div className="mt-6 space-y-4 text-base lg:text-lg text-slate-600 leading-relaxed">
              {isHi ? (
                <>
                  <p>
                    <span className="font-bold text-blue-950">
                      डीप ग्रीन एनर्जी इंडिया प्रा. लि.
                    </span>{" "}
                    बिहार की एक अधिकृत सोलर एनर्जी कंसल्टेंसी है, जो पीएम सूर्य घर:
                    मुफ्त बिजली योजना के अंतर्गत राज्य के हर ज़िले में रूफटॉप सोलर
                    सिस्टम स्थापित कर रही है।
                  </p>
                  <p>
                    हम भारत सरकार के{" "}
                    <span className="font-semibold text-blue-950">
                      नवीन और नवीकरणीय ऊर्जा मंत्रालय (MNRE)
                    </span>{" "}
                    तथा बिहार बिजली विभागों{" "}
                    <span className="font-semibold text-blue-950">
                      (SBPDCL और NBPDCL)
                    </span>{" "}
                    के साथ पंजीकृत हैं। पूरी प्रक्रिया — डिज़ाइन से लेकर सब्सिडी
                    वितरण तक — हमारी प्रमाणित टीम संभालती है।
                  </p>
                  <p>
                    हमारा एक ही उद्देश्य है — बिहार के हर परिवार का बिजली बिल{" "}
                    <span className="font-semibold text-emerald-700">शून्य</span> करना।
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <span className="font-bold text-blue-950">
                      Deep Green Energy India Pvt Ltd
                    </span>{" "}
                    is an authorised solar energy consultancy installing rooftop
                    solar systems across every district of Bihar under the{" "}
                    <span className="font-semibold text-blue-950">
                      PM Surya Ghar: Muft Bijli Yojana
                    </span>
                    .
                  </p>
                  <p>
                    We are registered with the{" "}
                    <span className="font-semibold text-blue-950">
                      Ministry of New and Renewable Energy (MNRE), Government of
                      India
                    </span>
                    , and empanelled with both Bihar power distribution companies —{" "}
                    <span className="font-semibold text-blue-950">
                      SBPDCL and NBPDCL
                    </span>
                    . From system design and DISCOM approvals to net-metering and
                    subsidy disbursal, our certified team handles every step.
                  </p>
                  <p>
                    Our promise is simple — bring{" "}
                    <span className="font-semibold text-emerald-700">
                      zero electricity bills
                    </span>{" "}
                    to every Bihar household, with 5-year company warranty and
                    free home delivery across all 38 districts.
                  </p>
                </>
              )}
            </div>

            <div className="mt-8 inline-flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-950 text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest">
                <Sun className="h-3 w-3 text-emerald-400" />
                MNRE Approved
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest">
                <Leaf className="h-3 w-3" />
                Bihar Empanelled
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white text-blue-950 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest">
                ISO Compliant
              </span>
            </div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.labelEn}
                  data-testid={`about-stat-${s.value}`}
                  className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-emerald-300 hover:shadow-md transition-all"
                >
                  <div className="font-heading text-3xl sm:text-4xl font-black text-emerald-600 leading-none">
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                    {isHi ? s.labelHi : s.labelEn}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <div className="text-[11px] font-bold uppercase tracking-widest text-blue-900">
                {isHi ? "मुख्यालय" : "Headquarters"}
              </div>
              <div className="mt-2 font-heading text-base font-bold text-blue-950 leading-snug">
                {isHi
                  ? "नई अज़ीमाबाद कॉलोनी, गायघाट, पटना – 800006"
                  : "New Azimabad Colony, Gaighata, Patna – 800006"}
              </div>
              <div className="mt-1.5 text-xs text-slate-600">
                {isHi
                  ? "शाखा कार्यालय: चक सलेम, समस्तीपुर – 848504"
                  : "Branch office: Chak Salem, Samastipur – 848504"}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.titleEn}
                data-testid={`about-pillar-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 lg:p-7 hover:bg-white hover:border-emerald-300 hover:shadow-lg transition-all"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-blue-950">
                  {isHi ? p.titleHi : p.titleEn}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {isHi ? p.descHi : p.descEn}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
