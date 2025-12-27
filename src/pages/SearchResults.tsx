import { useSearchParams, Link } from "react-router-dom";
import { videos } from "../data/mockVideos";

export default function SearchResults() {
  const [sp] = useSearchParams();
  const q = (sp.get("search_query") ?? "").toLowerCase();

  const filtered = videos.filter((v) => {
    const hay = `${v.title} ${v.channel} ${v.meta}`.toLowerCase();
    return hay.includes(q);
  });

  return (
    <div className="pb-10">
      <div className="mb-4 text-sm text-white/70">
        Results for:{" "}
        <span className="font-medium text-white">
          {sp.get("search_query") ?? ""}
        </span>
      </div>

      <div className="space-y-4">
        {filtered.map((v) => (
          <Link key={v.id} to={`/watch/${v.id}`} className="flex gap-4">
            <div className="relative aspect-video w-80 max-w-[45%] shrink-0 bg-black border border-white/10">
              <div className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-[11px] text-white">
                {v.duration}
              </div>
            </div>

            <div className="min-w-0">
              <div className="line-clamp-2 text-base font-semibold text-white">
                {v.title}
              </div>
              <div className="mt-2 text-sm text-white/65">{v.meta}</div>
              <div className="mt-2 text-sm text-white/70">{v.channel}</div>
              <div className="mt-3 line-clamp-2 text-sm text-white/55">
                Placeholder snippet text (you can replace later).
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
