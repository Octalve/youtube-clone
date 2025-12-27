import type { Video } from "../components/VideoCard";

const labels = ["▶", "IG", "TT", "N", "TW", "SP", "DC", "T"];

export const videos: Video[] = Array.from({ length: 16 }).map((_, i) => ({
  id: String(i + 1),
  title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
  channel: ["James Gouse", "Alan Cooper", "Marcus Levin", "Alexis Sears"][
    i % 4
  ],
  meta: "15K Views • 1 week ago",
  duration: "23:45",
  thumbLabel: labels[i % labels.length],
}));
