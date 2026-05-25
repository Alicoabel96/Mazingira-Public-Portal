export default function CharcoalGrid({ items, theme }) {
  const primary = theme?.primary || "#2a9d87";

  return (
    <div className="grid grid-cols-2 gap-2.5">
      {items.map((c, i) => (
        <div key={i}>
          <div className="flex items-center gap-1.5 mb-0.5">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0 inline-block"
              style={{
                backgroundColor: i === 0 ? primary : "#9ca3af",
              }}
              aria-hidden="true"
            />
            <span className="text-[11.5px] font-bold text-gray-800">
              {c.label}
            </span>
          </div>
          <p className="text-[10.5px] text-gray-500 italic border-l-2 border-gray-200 pl-2 m-0">
            {c.note}
          </p>
          <p className="text-[10.5px] text-gray-400 mt-0.5">{c.desc}</p>
        </div>
      ))}
    </div>
  );
}
