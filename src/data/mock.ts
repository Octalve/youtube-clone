import type { Video } from "../components/VideoCard";

const labels = ["▶", "IG", "TT", "N", "TW", "SP", "DC", "T"];

export const videos: Video[] = Array.from({ length: 18 }).map((_, i) => ({
  id: String(i + 1),
  title: `Sample Video Title ${
    i + 1
  } — Build a clean YouTube UI with React + Tailwind`,
  channel: `Channel ${(i % 6) + 1}`,
  meta: `${(10 + i) * 12}K views • ${(i % 10) + 1} days ago`,
  duration: "23:45",
  thumbLabel: labels[i % labels.length],
}));
