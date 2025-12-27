export type Video = {
  id: string;
  title: string;
  channel: string;
  meta: string;
  duration: string;
  thumbLabel: string;
};

function Thumb({ label }: { label: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-linear-to-br from-[#0b2a4a] via-[#112c4d] to-[#0b3a3a]">
      <div className="grid h-full place-items-center">
        <div className="grid h-24 w-24 place-items-center rounded-2xl bg-black/35 shadow-[0_8px_30px_rgba(0,0,0,0.45)]">
          <span className="text-4xl font-black tracking-tight">{label}</span>
        </div>
      </div>
    </div>
  );
}

export default function VideoCard({ v }: { v: Video }) {
  return (
    <div className="bg-black">
      <div className="relative">
        <Thumb label={v.thumbLabel} />
        <div className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-[11px] text-white">
          {v.duration}
        </div>
      </div>

      <div className="flex gap-3 p-3">
        <div className="h-9 w-9 shrink-0 rounded-full bg-white/25" />
        <div className="min-w-0">
          <div className="max-h-10 overflow-hidden text-sm font-semibold leading-snug text-white">
            {v.title}
          </div>
          <div className="mt-1 text-xs text-white/65">{v.channel}</div>
          <div className="mt-0.5 text-xs text-white/55">{v.meta}</div>
        </div>
      </div>
    </div>
  );
}
