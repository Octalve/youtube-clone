import FilterChips from "../components/FilterChips";
import VideoCard from "../components/VideoCard";
import { videos } from "../data/mockVideos";

export default function Home() {
  return (
    <div className="pb-10">
      <FilterChips />

      <div className="mt-4 grid gap-0 border border-white/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {videos.map((v) => (
          <div key={v.id} className="border border-white/10">
            <VideoCard v={v} />
          </div>
        ))}
      </div>
    </div>
  );
}
