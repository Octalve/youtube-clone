import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, Mic, Video, Grid3X3, Bell } from "lucide-react";

type HeaderProps = {
  onMenuClick?: () => void;
  logoSrc?: string;
};

function IconBtn(props: {
  label: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={props.label}
      onClick={props.onClick}
      className="grid h-10 w-10 place-items-center rounded-full hover:bg-white/10 active:bg-white/15"
    >
      {props.children}
    </button>
  );
}

export default function Header({ onMenuClick, logoSrc }: HeaderProps) {
  const [q, setQ] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("search:", q);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#303030]">
      <div className="mx-auto flex h-14 max-w-[1680px] items-center gap-3 px-3 md:px-4">
        <div className="flex items-center gap-2">
          <IconBtn label="Menu" onClick={onMenuClick}>
            <Menu className="h-6 w-6" />
          </IconBtn>

          <Link to="/" className="flex items-center gap-2">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt="YouTube"
                className="h-6 w-auto object-contain"
              />
            ) : (
              <>
                <div className="grid h-6 w-9 place-items-center rounded bg-red-600">
                  <span className="text-xs font-bold">▶</span>
                </div>
                <span className="text-lg font-semibold tracking-tight">
                  YouTube
                </span>
              </>
            )}
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center px-2">
          <form
            onSubmit={onSubmit}
            className="flex w-full max-w-[700px] items-center gap-3"
          >
            <div className="flex h-10 flex-1 overflow-hidden rounded-sm border border-black/40 bg-[#1f1f1f]">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search"
                className="h-full w-full bg-transparent px-4 text-sm outline-none placeholder:text-white/50"
              />
              <button
                type="submit"
                aria-label="Search"
                className="grid h-full w-16 place-items-center bg-[#3a3a3a] hover:bg-[#444]"
              >
                <Search className="h-5 w-5 text-white/90" />
              </button>
            </div>

            <button
              type="button"
              aria-label="Voice search"
              className="grid h-10 w-10 place-items-center rounded-full bg-black/35 hover:bg-black/45"
            >
              <Mic className="h-5 w-5" />
            </button>
          </form>
        </div>

        <div className="flex items-center gap-2">
          <IconBtn label="Create">
            <Video className="h-6 w-6" />
          </IconBtn>
          <IconBtn label="Apps">
            <Grid3X3 className="h-6 w-6" />
          </IconBtn>
          <IconBtn label="Notifications">
            <Bell className="h-6 w-6" />
          </IconBtn>

          <button
            type="button"
            aria-label="Account"
            className="ml-1 h-9 w-9 rounded-full bg-white/25"
          />
        </div>
      </div>
    </header>
  );
}
