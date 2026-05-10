import { Sun } from "lucide-react";

export const Logo = ({ className = "" }) => {
  return (
    <a
      href="#top"
      data-testid="site-logo"
      className={`flex items-center gap-2.5 group ${className}`}
      aria-label="Deep Green Energy India - Home"
    >
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-md shadow-emerald-600/20 transition-transform group-hover:scale-105">
        <Sun className="h-5 w-5 text-white" strokeWidth={2.5} />
        <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-blue-900 ring-2 ring-white" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-[15px] font-extrabold tracking-tight text-blue-950">
          Deep Green Energy
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-700">
          India Pvt Ltd
        </span>
      </span>
    </a>
  );
};

export default Logo;
