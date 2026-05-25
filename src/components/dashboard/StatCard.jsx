export default function StatCard({
  bg = "#145244",
  label,
  value,
  subtitle,
  icon,
}) {
  return (
    <div
      className="rounded-[7px] px-3.5 py-3 flex items-center justify-between gap-3"
      style={{ backgroundColor: bg }}
    >
      <div className="min-w-0">
        <p className="text-[9.5px] font-bold uppercase tracking-wider text-white/70 mb-1 leading-tight">
          {label}
        </p>
        <p className="text-xl font-extrabold text-white leading-none">
          {value}
        </p>
        {subtitle && (
          <p className="text-[10.5px] text-white/80 italic mt-1">{subtitle}</p>
        )}
      </div>
      <div className="text-white/50 shrink-0" aria-hidden="true">
        {icon}
      </div>
    </div>
  );
}
