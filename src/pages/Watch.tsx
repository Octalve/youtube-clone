import { Link, useParams } from "react-router-dom";
import { videos } from "../data/mockVideos";

export default function Watch() {
  const { id } = useParams();
  const v = videos.find((x) => x.id === id) ?? videos[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
      <section>
        <div className="aspect-video w-full bg-black border border-white/10" />

        <h1 className="mt-4 text-base font-semibold">{v.title}</h1>
        <div className="mt-2 text-sm text-white/65">{v.meta}</div>

        <div className="mt-4 rounded-xl bg-white/5 p-4 text-sm text-white/70 border border-white/10">
          Description block (placeholder).
        </div>
      </section>

      <aside className="space-y-4">
        {videos.slice(0, 10).map((x) => (
          <Link key={x.id} to={`/watch/${x.id}`} className="flex gap-3">
            <div className="relative aspect-video w-40 shrink-0 bg-black border border-white/10">
              <div className="absolute bottom-1 right-1 rounded bg-black/80 px-1.5 py-0.5 text-[11px] text-white">
                {x.duration}
              </div>
            </div>

            <div className="min-w-0">
              <div className="line-clamp-2 text-sm font-medium">{x.title}</div>
              <div className="mt-1 text-xs text-white/65">{x.channel}</div>
              <div className="mt-0.5 text-xs text-white/55">{x.meta}</div>
            </div>
          </Link>
        ))}
      </aside>
    </div>
  );
}
