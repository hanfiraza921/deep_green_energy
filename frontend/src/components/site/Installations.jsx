import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { Sun, MapPin } from "lucide-react";

const PROJECTS = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbQLzj0kxrWvzV8qedDfld-E7O1J8QQ7h6eQ&s",
    titleEn: "Rooftop Installation",
    titleHi: "रूफटॉप इंस्टॉलेशन",
    locEn: "Patna, Bihar",
    locHi: "पटना, बिहार",
  },
  {
    img: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/03/full/1719946277-4622.jpg",
    titleEn: "Residential Solar Setup",
    titleHi: "आवासीय सोलर सेटअप",
    locEn: "Samastipur, Bihar",
    locHi: "समस्तीपुर, बिहार",
  },
  {
    img: "https://cdn.solarsquare.in/blog/wp-content/uploads/2025/07/11112830/safety-bag-video.webp",
    titleEn: "On-site Safety & Quality Check",
    titleHi: "साइट पर सुरक्षा और गुणवत्ता जाँच",
    locEn: "Certified Installation",
    locHi: "प्रमाणित इंस्टॉलेशन",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlCv1VpkBvgWtQFrpIJ32uIu1X80xCV0GR5g&s",
    titleEn: "Engineer Site Visit",
    titleHi: "इंजीनियर साइट विज़िट",
    locEn: "Gaya, Bihar",
    locHi: "गया, बिहार",
  },
  {
    img: "https://images.bhaskarassets.com/web2images/1884/2026/01/01/untitled-design-5_1767246088.gif",
    titleEn: "PM Surya Ghar Yojana – In Action",
    titleHi: "पीएम सूर्य घर योजना – कार्यान्वयन",
    locEn: "Government Subsidy Disbursal",
    locHi: "सरकारी सब्सिडी वितरण",
  },
];

export const Installations = () => {
  const { lang } = useLang();
  const isHi = lang === "hi";

  return (
    <section
      id="installations"
      data-testid="installations-section"
      className="relative py-20 lg:py-24 bg-slate-50"
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
            {isHi ? "इंस्टॉलेशन गैलरी" : "Installation Gallery"}
          </div>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-blue-950 text-balance">
            {isHi
              ? "हमारे काम की झलक"
              : "A Glimpse of Our Work"}
          </h2>
          <p className="mt-4 text-base lg:text-lg text-slate-600 leading-relaxed">
            {isHi
              ? "रूफटॉप इंस्टॉलेशन से लेकर सुरक्षा जाँच तक — हर कदम पर प्रमाणित गुणवत्ता।"
              : "From rooftop installation to on-site safety checks — certified quality at every step."}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {/* Featured (first) - spans 2 cols on large */}
          {PROJECTS.map((p, i) => (
            <motion.div
              key={i}
              data-testid={`installation-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/11]" : "aspect-[4/3]"}`}>
                <img
                  src={p.img}
                  alt={isHi ? p.titleHi : p.titleEn}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/10 to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-500 text-blue-950 px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                  <Sun className="h-3 w-3" />
                  {isHi ? "इंस्टॉलेशन" : "Installation"}
                </span>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className={`font-heading font-bold text-white leading-tight drop-shadow ${
                    i === 0 ? "text-xl lg:text-2xl" : "text-base lg:text-lg"
                  }`}>
                    {isHi ? p.titleHi : p.titleEn}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-1.5 text-xs text-emerald-200">
                    <MapPin className="h-3 w-3" />
                    {isHi ? p.locHi : p.locEn}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Installations;
