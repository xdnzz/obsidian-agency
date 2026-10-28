export function ScrollCue() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 hidden justify-center lg:flex">
      <div className="flex flex-col items-center gap-2 text-[10px] font-semibold tracking-[0.18em] text-white/70 uppercase">
        Scroll
        <span className="scroll-cue block h-10 w-px bg-white/70" />
      </div>
    </div>
  );
}
