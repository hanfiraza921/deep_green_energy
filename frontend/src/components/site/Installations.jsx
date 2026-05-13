import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { MapPin, Sun } from "lucide-react";

// Real-looking solar installation photos (Indian / South Asian context where possible)
const PROJECTS = [
  {
    img: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&w=900&q=70",
    titleEn: "3 KW Rooftop System – Patna",
    titleHi: "3 किलोवाट रूफटॉप सिस्टम – पटना",
    locEn: "Boring Road, Patna",
    locHi: "बोरिंग रोड, पटना",
    size: "3 KW",
  },
  {
    img: "https://images.pexels.com/photos/9875411/pexels-photo-9875411.jpeg?auto=compress&cs=tinysrgb&w=900",
    titleEn: "2 KW Home Installation – Samastipur",
    titleHi: "2 किलोवाट घर इंस्टॉलेशन – समस्तीपुर",
    locEn: "Chak Salem, Samastipur",
    locHi: "चक सलेम, समस्तीपुर",
    size: "2 KW",
  },
  {
    img: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=70",
    titleEn: "5 KW Commercial Setup – Gaya",
    titleHi: "5 किलोवाट कमर्शियल सेटअप – गया",
    locEn: "Civil Lines, Gaya",
    locHi: "सिविल लाइन्स, गया",
    size: "5 KW",
  },
  {
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=70",
    titleEn: "10 KW Net-Metered Plant – Bhagalpur",
    titleHi: "10 किलोवाट नेट-मीटर्ड प्लांट – भागलपुर",
    locEn: "Tilkamanjhi, Bhagalpur",
    locHi: "तिलकामांझी, भागलपुर",
    size: "10 KW",
  },
  {
    img: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=900",
    titleEn: "Village Solar Project – Muzaffarpur",
    titleHi: "ग्राम सोलर परियोजना – मुज़फ्फरपुर",
    locEn: "Kanti Block, Muzaffarpur",
    locHi: "कांती ब्लॉक, मुज़फ्फरपुर",
    size: "1 KW",
  },
  {
    img: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=900&q=70",
    titleEn: "Farmhouse Setup – Darbhanga",
    titleHi: "फार्महाउस सेटअप – दरभंगा",
    locEn: "Singhwara, Darbhanga",
    locHi: "सिंघवारा, दरभंगा",
    size: "4 KW",
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
            {isHi ? "हमारा हाल का काम" : "Our Recent Work"}
          </div>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-blue-950 text-balance">
            {isHi
              ? "बिहार भर में 500+ सफल इंस्टॉलेशन"
              : "500+ Successful Installations across Bihar"}
          </h2>
          <p className="mt-4 text-base lg:text-lg text-slate-600 leading-relaxed">
            {isHi
              ? "हर इंस्टॉलेशन प्रमाणित इंजीनियरों द्वारा। नीचे हमारे हाल के कुछ प्रोजेक्ट देखें।"
              : "Every installation handled by certified engineers. Here's a look at some of our recent projects."}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.titleEn}
              data-testid={`installation-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={isHi ? p.titleHi : p.titleEn}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/20 to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-500 text-blue-950 px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                  <Sun className="h-3 w-3" />
                  {p.size}
                </span>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading text-base lg:text-lg font-bold text-white leading-tight">
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
