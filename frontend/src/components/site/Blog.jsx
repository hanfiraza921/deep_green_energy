import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { Calendar, Clock, ArrowUpRight, Tag } from "lucide-react";

const POSTS = [
  {
    key: "guide",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=70",
    categoryEn: "Government Scheme",
    categoryHi: "सरकारी योजना",
    titleEn: "PM Surya Ghar Yojana 2026: Complete Step-by-Step Guide",
    titleHi: "पीएम सूर्य घर योजना 2026: संपूर्ण चरण-दर-चरण मार्गदर्शिका",
    excerptEn:
      "Everything you need to know about applying for the ₹78,000 subsidy — eligibility, documents, and timeline.",
    excerptHi:
      "₹78,000 की सब्सिडी के लिए आवेदन से जुड़ी हर ज़रूरी जानकारी — पात्रता, दस्तावेज़ और समय-सीमा।",
    date: "12 Apr 2026",
    readEn: "6 min read",
    readHi: "6 मिनट पढ़ें",
  },
  {
    key: "sizing",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=70",
    categoryEn: "Buyer's Guide",
    categoryHi: "खरीदार गाइड",
    titleEn: "1 KW vs 2 KW vs 3 KW: Which Solar System Fits Your Home?",
    titleHi: "1 KW बनाम 2 KW बनाम 3 KW: आपके घर के लिए कौन सा सिस्टम सही है?",
    excerptEn:
      "Use your monthly bill, rooftop area, and family size to choose the right capacity — without overpaying.",
    excerptHi:
      "अपने मासिक बिल, छत के क्षेत्र और परिवार के आकार के अनुसार सही क्षमता चुनें — बिना ज़्यादा खर्च के।",
    date: "28 Mar 2026",
    readEn: "5 min read",
    readHi: "5 मिनट पढ़ें",
  },
  {
    key: "netmeter",
    img: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=900&q=70",
    categoryEn: "How-to",
    categoryHi: "कैसे करें",
    titleEn: "Net Metering in Bihar (SBPDCL & NBPDCL): Step-by-Step",
    titleHi: "बिहार में नेट मीटरिंग (SBPDCL और NBPDCL): चरण-दर-चरण",
    excerptEn:
      "How to apply for net metering, what documents you need, and how surplus energy is credited to your bill.",
    excerptHi:
      "नेट मीटरिंग आवेदन कैसे करें, किन दस्तावेज़ों की ज़रूरत है, और अतिरिक्त ऊर्जा बिल में कैसे जमा होती है।",
    date: "10 Mar 2026",
    readEn: "7 min read",
    readHi: "7 मिनट पढ़ें",
  },
  {
    key: "maintenance",
    img: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=70",
    categoryEn: "Maintenance",
    categoryHi: "रख-रखाव",
    titleEn: "5 Tips to Keep Your Solar Panels at Peak Efficiency",
    titleHi: "अपने सोलर पैनल को अधिकतम दक्षता पर रखने के 5 टिप्स",
    excerptEn:
      "Simple monthly habits that boost generation by 8-12% and extend your inverter's life by years.",
    excerptHi:
      "सरल मासिक आदतें जो 8-12% तक जनरेशन बढ़ाती हैं और इन्वर्टर की उम्र कई साल बढ़ाती हैं।",
    date: "22 Feb 2026",
    readEn: "4 min read",
    readHi: "4 मिनट पढ़ें",
  },
  {
    key: "finance",
    img: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=900",
    categoryEn: "Financing",
    categoryHi: "वित्तपोषण",
    titleEn: "Solar Loans in 2026: SBI vs PNB vs Bank of Baroda Compared",
    titleHi: "2026 में सोलर लोन: एसबीआई बनाम पीएनबी बनाम बैंक ऑफ बड़ौदा",
    excerptEn:
      "Interest rates, processing time, and eligibility — compared side-by-side to help you choose smartly.",
    excerptHi:
      "ब्याज दर, प्रोसेसिंग समय और पात्रता — स्मार्ट निर्णय के लिए साथ-साथ तुलना।",
    date: "08 Feb 2026",
    readEn: "8 min read",
    readHi: "8 मिनट पढ़ें",
  },
  {
    key: "roi",
    img: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=900&q=70",
    categoryEn: "Savings",
    categoryHi: "बचत",
    titleEn: "How Much Will You Actually Save in 25 Years? A Real ROI Breakdown",
    titleHi: "25 साल में आप वास्तव में कितना बचाएँगे? वास्तविक ROI ब्रेकडाउन",
    excerptEn:
      "Real numbers from a Patna household — installation cost, subsidy, monthly savings, and total ROI.",
    excerptHi:
      "पटना के एक परिवार के वास्तविक आँकड़े — इंस्टॉलेशन लागत, सब्सिडी, मासिक बचत और कुल ROI।",
    date: "20 Jan 2026",
    readEn: "9 min read",
    readHi: "9 मिनट पढ़ें",
  },
];

export const Blog = () => {
  const { lang } = useLang();
  const isHi = lang === "hi";

  return (
    <section
      id="blog"
      data-testid="blog-section"
      className="relative py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5"
        >
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              {isHi ? "ब्लॉग और गाइड" : "Blog & Guides"}
            </div>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-blue-950 text-balance leading-tight">
              {isHi
                ? "सोलर ज्ञान, सरल भाषा में"
                : "Solar know-how, made simple"}
            </h2>
            <p className="mt-4 text-base lg:text-lg text-slate-600 leading-relaxed">
              {isHi
                ? "सब्सिडी से लेकर रख-रखाव तक — हमारी टीम की लिखी विशेषज्ञ गाइड्स।"
                : "Expert guides written by our team — from subsidies to maintenance."}
            </p>
          </div>
          <a
            href="#contact"
            data-testid="blog-cta-link"
            className="hidden lg:inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-blue-950 hover:bg-blue-950 hover:text-white hover:border-blue-950 transition-all"
          >
            {isHi ? "विशेषज्ञ से बात करें" : "Talk to an expert"}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {POSTS.map((p, i) => (
            <motion.article
              key={p.key}
              data-testid={`blog-card-${p.key}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-emerald-300 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={p.img}
                  alt={isHi ? p.titleHi : p.titleEn}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                  <Tag className="h-3 w-3" />
                  {isHi ? p.categoryHi : p.categoryEn}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {p.date}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {isHi ? p.readHi : p.readEn}
                  </span>
                </div>

                <h3 className="mt-3 font-heading text-lg lg:text-xl font-bold text-blue-950 leading-snug group-hover:text-emerald-700 transition-colors">
                  {isHi ? p.titleHi : p.titleEn}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                  {isHi ? p.excerptHi : p.excerptEn}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700">
                  {isHi ? "पढ़ें" : "Read article"}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
