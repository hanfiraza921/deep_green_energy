import { createContext, useContext, useState, useMemo, useCallback } from "react";

const translations = {
  en: {
    nav: {
      benefits: "Benefits",
      features: "Features",
      about: "About",
      services: "Services",
      installations: "Installations",
      blog: "Blog",
      partners: "Partners",
      contact: "Contact",
      apply: "Apply Now",
    },
    hero: {
      badge: "Government of India Approved Scheme",
      title1: "PM Surya Ghar:",
      title2: "Muft Bijli Yojana",
      titleSub: "Install Solar. Save Money.",
      subtitle:
        "Harness the power of the sun. Get up to ₹78,000 Government Subsidy and reduce your electricity bill to zero.",
      ctaPrimary: "Check Eligibility",
      ctaSecondary: "Get a Free Quote",
      stat1: "1 Crore+ Homes Targeted",
      stat2: "₹78,000 Max Subsidy",
      stat3: "5 Year Warranty",
      deliveryBadge: "Free Home Delivery across all 38 Bihar districts",
    },
    subsidy: {
      eyebrow: "Subsidy Tiers",
      title: "Direct Government Subsidy on Every Installation",
      subtitle:
        "Subsidy is credited directly to your bank account after installation. No middlemen.",
      tier1Name: "1 KW System",
      tier1Sub: "Ideal for low-usage homes",
      tier2Name: "2 KW System",
      tier2Sub: "Most popular for families",
      tier3Name: "3 KW & above",
      tier3Sub: "Maximum savings package",
      saveLabel: "You save up to",
      cta: "Claim This Subsidy",
    },
    features: {
      eyebrow: "Why Deep Green Energy",
      title: "Built for trust. Engineered for savings.",
      f1Title: "Zero Electricity Bills",
      f1Desc:
        "Eliminate monthly costs. Generate your own power and even sell surplus back to the grid.",
      f2Title: "5-Year Warranty",
      f2Desc:
        "Comprehensive 5-year company warranty on installation, inverter and workmanship for complete peace of mind.",
      f3Title: "Easy Financing",
      f3Desc:
        "Low-interest solar loans from leading banks — SBI, PNB, and Bank of Baroda.",
      f4Title: "End-to-End Support",
      f4Desc:
        "From documentation to net-metering and subsidy disbursal — we handle everything.",
    },
    partners: {
      eyebrow: "Authorized Partners",
      title: "Backed by India's most trusted brands",
      brand: "Solar OEMs",
      bank: "Financing Banks",
    },
    bihar: {
      title: "Serving all districts across Bihar",
      subtitle: "with dedicated on-ground support",
      cta: "Find your district team",
    },
    form: {
      eyebrow: "Free Consultation",
      title: "Get a personalized solar plan in 2 minutes",
      subtitle:
        "Share a few details. Our certified consultant will call you within 24 hours.",
      name: "Full Name",
      phone: "Phone Number",
      bill: "Average Monthly Bill (₹)",
      submit: "Get My Free Quote",
      submitting: "Submitting...",
      success: "Thank you! Our team will contact you shortly.",
      error: "Something went wrong. Please try again.",
      placeholderName: "e.g. Rajesh Kumar",
      placeholderPhone: "10-digit mobile number",
      placeholderBill: "e.g. 2500",
      district: "District",
      districtPlaceholder: "Select your district",
    },
    eligibility: {
      title: "Check Your Eligibility",
      step: "Step",
      of: "of",
      next: "Next",
      back: "Back",
      submit: "Get My Eligibility",
      q1: "What type of property do you have?",
      q1Opts: ["Independent House", "Apartment / Flat", "Commercial / Shop", "Farmhouse"],
      q2: "How much rooftop space is available?",
      q2Opts: ["Less than 100 sqft", "100 - 300 sqft", "300 - 500 sqft", "More than 500 sqft"],
      q3: "What's your average monthly electricity bill?",
      q3Opts: ["Below ₹1,500", "₹1,500 - ₹3,000", "₹3,000 - ₹6,000", "Above ₹6,000"],
      q4: "Your contact details",
      eligible: "You're eligible!",
      eligibleDesc:
        "Based on your inputs, you qualify for the PM Surya Ghar Subsidy. A consultant will reach out shortly.",
    },
    footer: {
      tagline:
        "Authorized solar energy consultancy serving every district of Bihar under PM Surya Ghar: Muft Bijli Yojana.",
      contact: "Contact",
      quick: "Quick Links",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved.",
    },
  },
  hi: {
    nav: {
      benefits: "लाभ",
      features: "विशेषताएँ",
      about: "हमारे बारे में",
      services: "सेवाएँ",
      installations: "इंस्टॉलेशन",
      blog: "ब्लॉग",
      partners: "साझेदार",
      contact: "संपर्क",
      apply: "अभी आवेदन करें",
    },
    hero: {
      badge: "भारत सरकार द्वारा स्वीकृत योजना",
      title1: "पीएम सूर्य घर:",
      title2: "मुफ्त बिजली योजना",
      titleSub: "सौर ऊर्जा लगवाएँ। पैसे बचाएँ।",
      subtitle:
        "सूर्य की शक्ति का उपयोग करें। ₹78,000 तक की सरकारी सब्सिडी पाएँ और अपना बिजली बिल शून्य करें।",
      ctaPrimary: "पात्रता जाँचें",
      ctaSecondary: "मुफ्त कोटेशन पाएँ",
      stat1: "1 करोड़+ घर लक्षित",
      stat2: "₹78,000 अधिकतम सब्सिडी",
      stat3: "5 वर्ष वारंटी",
      deliveryBadge: "बिहार के सभी 38 ज़िलों में मुफ्त होम डिलीवरी",
    },
    subsidy: {
      eyebrow: "सब्सिडी स्तर",
      title: "हर इंस्टॉलेशन पर सीधी सरकारी सब्सिडी",
      subtitle:
        "सब्सिडी इंस्टॉलेशन के बाद सीधे आपके बैंक खाते में जमा होती है। कोई बिचौलिया नहीं।",
      tier1Name: "1 किलोवाट सिस्टम",
      tier1Sub: "कम खपत वाले घरों के लिए",
      tier2Name: "2 किलोवाट सिस्टम",
      tier2Sub: "परिवारों के लिए सबसे लोकप्रिय",
      tier3Name: "3 किलोवाट व अधिक",
      tier3Sub: "अधिकतम बचत पैकेज",
      saveLabel: "आप बचाते हैं",
      cta: "यह सब्सिडी प्राप्त करें",
    },
    features: {
      eyebrow: "डीप ग्रीन एनर्जी क्यों",
      title: "विश्वास के लिए बना। बचत के लिए इंजीनियर्ड।",
      f1Title: "शून्य बिजली बिल",
      f1Desc: "मासिक खर्च खत्म करें। अपनी बिजली बनाएँ और अतिरिक्त ग्रिड को बेचें।",
      f2Title: "5-वर्ष वारंटी",
      f2Desc: "इंस्टॉलेशन, इन्वर्टर और कारीगरी पर व्यापक 5-वर्ष कंपनी वारंटी।",
      f3Title: "आसान फाइनेंसिंग",
      f3Desc: "एसबीआई, पीएनबी और बैंक ऑफ बड़ौदा से कम ब्याज पर सोलर लोन।",
      f4Title: "एंड-टू-एंड सहायता",
      f4Desc: "दस्तावेज़ीकरण से सब्सिडी वितरण तक — सब कुछ हम संभालते हैं।",
    },
    partners: {
      eyebrow: "अधिकृत साझेदार",
      title: "भारत के सबसे भरोसेमंद ब्रांडों द्वारा समर्थित",
      brand: "सोलर ओईएम",
      bank: "वित्तपोषण बैंक",
    },
    bihar: {
      title: "बिहार के सभी जिलों में सेवा",
      subtitle: "समर्पित ऑन-ग्राउंड सहायता के साथ",
      cta: "अपनी जिला टीम खोजें",
    },
    form: {
      eyebrow: "मुफ्त परामर्श",
      title: "2 मिनट में व्यक्तिगत सोलर प्लान पाएँ",
      subtitle: "कुछ विवरण साझा करें। हमारा प्रमाणित सलाहकार 24 घंटे में आपको कॉल करेगा।",
      name: "पूरा नाम",
      phone: "फ़ोन नंबर",
      bill: "औसत मासिक बिल (₹)",
      submit: "मुफ्त कोटेशन पाएँ",
      submitting: "भेजा जा रहा है...",
      success: "धन्यवाद! हमारी टीम जल्द ही आपसे संपर्क करेगी।",
      error: "कुछ गलत हो गया। कृपया पुनः प्रयास करें।",
      placeholderName: "उदा. राजेश कुमार",
      placeholderPhone: "10-अंकीय मोबाइल नंबर",
      placeholderBill: "उदा. 2500",
      district: "ज़िला",
      districtPlaceholder: "अपना ज़िला चुनें",
    },
    eligibility: {
      title: "अपनी पात्रता जाँचें",
      step: "चरण",
      of: "का",
      next: "आगे",
      back: "पीछे",
      submit: "पात्रता प्राप्त करें",
      q1: "आपके पास किस प्रकार की संपत्ति है?",
      q1Opts: ["स्वतंत्र घर", "अपार्टमेंट / फ्लैट", "व्यावसायिक / दुकान", "फार्महाउस"],
      q2: "छत पर कितनी जगह उपलब्ध है?",
      q2Opts: ["100 वर्गफुट से कम", "100 - 300 वर्गफुट", "300 - 500 वर्गफुट", "500 वर्गफुट से अधिक"],
      q3: "आपका औसत मासिक बिजली बिल कितना है?",
      q3Opts: ["₹1,500 से कम", "₹1,500 - ₹3,000", "₹3,000 - ₹6,000", "₹6,000 से ऊपर"],
      q4: "आपकी संपर्क जानकारी",
      eligible: "आप पात्र हैं!",
      eligibleDesc:
        "आपके इनपुट के आधार पर, आप पीएम सूर्य घर सब्सिडी के लिए योग्य हैं। एक सलाहकार जल्द ही आपसे संपर्क करेगा।",
    },
    footer: {
      tagline:
        "पीएम सूर्य घर: मुफ्त बिजली योजना के अंतर्गत बिहार के हर जिले में सेवा देने वाली अधिकृत सोलर एनर्जी कंसल्टेंसी।",
      contact: "संपर्क",
      quick: "त्वरित लिंक",
      legal: "कानूनी",
      privacy: "गोपनीयता नीति",
      terms: "सेवा की शर्तें",
      rights: "सर्वाधिकार सुरक्षित।",
    },
  },
};

const LanguageContext = createContext({ lang: "en", setLang: () => {}, t: (k) => k });

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const t = useCallback(
    (path) => {
      const parts = path.split(".");
      let cur = translations[lang];
      for (const p of parts) {
        if (cur == null) return path;
        cur = cur[p];
      }
      return cur ?? path;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLang = () => useContext(LanguageContext);
