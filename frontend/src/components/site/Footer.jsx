import { useLang } from "@/i18n/LanguageContext";
import Logo from "@/components/site/Logo";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid="site-footer"
      className="bg-blue-950 text-blue-100 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-white inline-flex p-3 rounded-2xl">
              <Logo />
            </div>
            <p className="mt-5 text-sm text-blue-200/80 leading-relaxed max-w-md">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-white">
              {t("footer.quick")}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#benefits" className="hover:text-emerald-300 transition-colors">{t("nav.benefits")}</a></li>
              <li><a href="#features" className="hover:text-emerald-300 transition-colors">{t("nav.features")}</a></li>
              <li><a href="#partners" className="hover:text-emerald-300 transition-colors">{t("nav.partners")}</a></li>
              <li><a href="#contact" className="hover:text-emerald-300 transition-colors">{t("nav.contact")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-white">
              {t("footer.contact")}
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 mt-0.5 text-emerald-400 shrink-0" />
                <span>+91 98XXX XXXXX</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 text-emerald-400 shrink-0" />
                <span>info@deepgreenenergy.in</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-emerald-400 shrink-0" />
                <span>Patna, Bihar, India</span>
              </li>
            </ul>
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
