const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_solar-subsidy-check-2/artifacts/wqyw7fy3_logo.jpeg";

export const Logo = ({ className = "" }) => {
  return (
    <a
      href="#top"
      data-testid="site-logo"
      className={`flex items-center gap-3 group ${className}`}
      aria-label="Deep Green Energy India - Home"
    >
      <span className="relative inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full overflow-hidden bg-white ring-1 ring-slate-200 shadow-sm transition-transform group-hover:scale-105">
        <img
          src={LOGO_URL}
          alt="Deep Green Energy India Pvt Ltd Logo"
          className="h-full w-full object-cover"
          style={{ objectPosition: "72% center", transform: "scale(2.2)" }}
          loading="eager"
        />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-heading text-[15px] sm:text-base font-extrabold tracking-tight text-blue-950">
          Deep Green Energy
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
          India Pvt Ltd
        </span>
      </span>
    </a>
  );
};

export default Logo;
