import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import Logo from "@/components/site/Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = ({ onApply }) => {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#benefits", label: t("nav.benefits") },
    { href: "#features", label: t("nav.features") },
    { href: "#partners", label: t("nav.partners") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header
      data-testid="site-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-sm"
          : "bg-white/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {navItems.map((it) => (
              <a
                key={it.href}
                href={it.href}
                data-testid={`nav-link-${it.href.replace("#", "")}`}
                className="relative text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-emerald-600 after:transition-all hover:after:w-full"
              >
                {it.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  data-testid="language-switcher"
                  aria-label="Switch language"
                  className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-emerald-500 hover:text-emerald-700 transition-all"
                >
                  <Globe className="h-3.5 w-3.5" />
                  {lang.toUpperCase()}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[140px]">
                <DropdownMenuItem
                  data-testid="lang-en"
                  onClick={() => setLang("en")}
                  className={lang === "en" ? "font-semibold text-emerald-700" : ""}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  data-testid="lang-hi"
                  onClick={() => setLang("hi")}
                  className={lang === "hi" ? "font-semibold text-emerald-700" : ""}
                >
                  हिंदी (Hindi)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              data-testid="header-apply-btn"
              onClick={onApply}
              className="hidden sm:inline-flex bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider text-xs px-5 py-2.5 rounded-full shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 hover:scale-[1.03] active:scale-95 transition-all"
            >
              {t("nav.apply")}
            </Button>

            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4 space-y-1">
            {navItems.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setMobileOpen(false)}
                className="block px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              >
                {it.label}
              </a>
            ))}
            <Button
              data-testid="mobile-apply-btn"
              onClick={() => {
                setMobileOpen(false);
                onApply?.();
              }}
              className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full"
            >
              {t("nav.apply")}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
