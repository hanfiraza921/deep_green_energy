import { useLang } from "@/i18n/LanguageContext";
import Logo from "@/components/site/Logo";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid="site-footer"
      className="bg-blue-950 text-blue-100 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="bg-white inline-flex p-3 rounded-2xl">
              <Logo />
            </div>
            <p className="mt-5 text-sm text-blue-200/80 leading-relaxed max-w-md">
              {t("footer.tagline")}
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href="tel:+919135963415"
                data-testid="footer-phone"
                className="flex items-start gap-2.5 hover:text-emerald-300 transition-colors"
              >
                <Phone className="h-4 w-4 mt-0.5 text-emerald-400 shrink-0" />
                <span>+91 91359 63415</span>
              </a>
              <a
                href="mailto:deepgreenenergyindiapvtltd@gmail.com"
                data-testid="footer-email"
                className="flex items-start gap-2.5 hover:text-emerald-300 transition-colors break-all"
              >
                <Mail className="h-4 w-4 mt-0.5 text-emerald-400 shrink-0" />
                <span>deepgreenenergyindiapvtltd@gmail.com</span>
              </a>
            </div>

            <div className="mt-6">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-300 mb-3">
                {t("footer.follow") || "Follow us"}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/deep_green_energy_india_pvtltd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="social-instagram"
                  aria-label="Instagram"
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/50 border border-blue-800 text-blue-100 hover:bg-gradient-to-br hover:from-pink-500 hover:via-orange-500 hover:to-yellow-500 hover:text-white hover:border-transparent transition-all hover:scale-110"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/people/Deep-Green-Energy-India-Private-limited/61588617616469/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="social-facebook"
                  aria-label="Facebook"
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/50 border border-blue-800 text-blue-100 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all hover:scale-110"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-white">
              {t("footer.quick")}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#benefits" className="hover:text-emerald-300 transition-colors">{t("nav.benefits")}</a></li>
              <li><a href="#features" className="hover:text-emerald-300 transition-colors">{t("nav.features")}</a></li>
              <li><a href="#about" className="hover:text-emerald-300 transition-colors">{t("nav.about")}</a></li>
              <li><a href="#services" className="hover:text-emerald-300 transition-colors">{t("nav.services")}</a></li>
              <li><a href="#installations" className="hover:text-emerald-300 transition-colors">{t("nav.installations")}</a></li>
              <li><a href="#blog" className="hover:text-emerald-300 transition-colors">{t("nav.blog")}</a></li>
              <li><a href="#about" className="hover:text-emerald-300 transition-colors">{t("nav.about")}</a></li>
              <li><a href="#partners" className="hover:text-emerald-300 transition-colors">{t("nav.partners")}</a></li>
              <li><a href="#contact" className="hover:text-emerald-300 transition-colors">{t("nav.contact")}</a></li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-white">
              Our Offices
            </h4>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div
                data-testid="office-patna"
                className="rounded-2xl border border-blue-900/60 bg-blue-900/30 p-4"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-300">
                  <MapPin className="h-3.5 w-3.5" />
                  Patna Office
                </div>
                <p className="mt-2 text-sm text-blue-100 leading-relaxed">
                  New Azimabad Colony, Near Shanichra Mandir, Gaighata, Patna, Bihar — 800006
                </p>
              </div>
              <div
                data-testid="office-samastipur"
                className="rounded-2xl border border-blue-900/60 bg-blue-900/30 p-4"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-300">
                  <MapPin className="h-3.5 w-3.5" />
                  Samastipur Office
                </div>
                <p className="mt-2 text-sm text-blue-100 leading-relaxed">
                  Ground Floor, Parama Hans Ray, Patori Road, Chak Salem, Samastipur, Bihar — 848504
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-blue-900/60 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-blue-300">
          <div>© {year} Deep Green Energy India Pvt Ltd. {t("footer.rights")}</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-white transition-colors">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
