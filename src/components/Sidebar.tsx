import type { LucideIcon } from "lucide-react";
import {
  Home,
  Compass,
  PlaySquare,
  Library,
  History,
  Clock,
  ThumbsUp,
  ChevronDown,
} from "lucide-react";

type SidebarProps = { open?: boolean };

type NavItem = {
  label: string;
  icon: LucideIcon;
  active?: boolean;
};

const topNav: NavItem[] = [
  { label: "Home", icon: Home, active: true },
  { label: "Explore", icon: Compass },
  { label: "Subscriptions", icon: PlaySquare },
];

const libraryNav: NavItem[] = [
  { label: "Library", icon: Library },
  { label: "History", icon: History },
  { label: "Your Videos", icon: PlaySquare },
  { label: "Watch Later", icon: Clock },
  { label: "Liked Videos", icon: ThumbsUp },
];

const subscriptions = [
  "James Gouse",
  "Alan Cooper",
  "Marcus Levin",
  "Alexis Sears",
  "Jesica Lambert",
  "Anna White",
  "Skylar Dias",
];

function NavRow({ item }: { item: NavItem }) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      className={[
        "flex w-full items-center gap-4 rounded-lg px-3 py-2 text-sm",
        item.active ? "bg-white/10" : "hover:bg-white/10",
      ].join(" ")}
    >
      <Icon className="h-5 w-5 text-white/90" />
      <span className="text-white/90">{item.label}</span>
    </button>
  );
}

export default function Sidebar({ open = true }: SidebarProps) {
  if (!open) return null;

  return (
    <aside className="hidden w-60 shrink-0 border-r border-white/10 bg-[#202020] md:block">
      <div className="sticky top-14 h-[calc(100vh-56px)] overflow-y-auto px-2 py-3">
        <div className="space-y-1">
          {topNav.map((item) => (
            <NavRow key={item.label} item={item} />
          ))}
        </div>

        <div className="my-3 h-px bg-white/10" />

        <div className="space-y-1">
          {libraryNav.map((item) => (
            <NavRow key={item.label} item={item} />
          ))}

          <button
            type="button"
            className="flex w-full items-center gap-4 rounded-lg px-3 py-2 text-sm hover:bg-white/10"
          >
            <ChevronDown className="h-5 w-5 text-white/90" />
            <span className="text-white/90">Show More</span>
          </button>
        </div>

        <div className="my-3 h-px bg-white/10" />

        <div className="px-3 pb-2 text-xs font-semibold text-white/50">
          SUBSCRIPTIONS
        </div>

        <div className="space-y-1">
          {subscriptions.map((name) => (
            <button
              key={name}
              type="button"
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-white/10"
            >
              <div className="h-6 w-6 rounded-full bg-white/25" />
              <span className="truncate text-white/85">{name}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
