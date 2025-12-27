const chips = [
  "All",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
  "Item",
];

export default function FilterChips() {
  return (
    <div className="sticky top-14 z-40 bg-[#0f0f0f]">
      <div className="flex gap-3 overflow-x-auto py-3 pr-2 scrollbar-hide">
        {chips.map((c, i) => (
          <button
            key={`${c}-${i}`}
            className={[
              "shrink-0 rounded-full px-4 py-2 text-xs",
              i === 0
                ? "bg-white text-black"
                : "bg-[#303030] text-white/90 hover:bg-[#3a3a3a]",
            ].join(" ")}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="h-px bg-white/10" />
    </div>
  );
}
