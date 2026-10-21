const tasks = {
  urgent: ['Buy new domain', 'Write project brief', 'Set pricing tables'],
  regular: ['Talk to users', 'Post on socials', 'Check analytics'],
};

const menu = [
  { label: 'Home', icon: '/home/9ebc0.svg', active: true },
  { label: 'My Tasks', icon: '/home/fd91d.svg', active: false },
  { label: 'Inbox', icon: '/home/ee6e5.svg', active: false },
  { label: 'Goals', icon: '/home/7d83b.svg', active: false },
];

const toolbar = [
  '/home/1011f.svg',
  '/home/6491f.svg',
  '/home/173d7.svg',
  '/home/867be.svg',
  '/home/83eb7.svg',
];

function TaskRow({ title }: { title: string }) {
  return (
    <div className="flex w-full items-center gap-1.5 border-b-[0.5px] border-white/10 py-3">
      <img src="/home/c6eb2.svg" alt="" />
      <p className="min-w-0 flex-1 text-base leading-none text-white/95">{title}</p>
      <p className="text-xs leading-none font-medium text-white/60 uppercase">4:31 AM</p>
    </div>
  );
}

function TaskColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col self-stretch overflow-hidden rounded-2xl bg-black/50 px-4 pt-2 pb-5">
      <div className="border-b-[0.5px] border-white/10 py-3">
        <p className="text-xs leading-none font-semibold text-white/50 uppercase">{title}</p>
      </div>
      {items.map((item) => (
        <TaskRow key={item} title={item} />
      ))}
    </div>
  );
}

export function AppPreview({ placement = 'side' }: { placement?: 'side' | 'below' | 'center' }) {
  const frame = {
    side: 'top-[157px] left-[693px] w-[1154px] bg-black/80',
    below: 'top-[445px] left-[159px] w-[1154px] bg-black/80',
    center: 'top-[577px] left-1/2 w-[1170px] -translate-x-1/2 bg-black/70',
  }[placement];

  return (
    <div
      className={`absolute ${frame} flex h-[850px] items-center justify-center rounded-3xl border border-white p-6`}
    >
      <div
        className={`flex h-full w-full items-start overflow-hidden rounded-lg ${placement === 'side' ? 'bg-white/[0.08]' : ''}`}
      >
        <aside className="flex h-full w-[251px] shrink-0 flex-col gap-8 overflow-hidden bg-black/20 px-6 py-8">
          <img src="/home/207f9.svg" alt="" width={77.353} height={24} className="h-6 w-[77.353px] shrink-0 self-start" />
          <div className="flex w-full flex-col gap-6">
            <div className="flex h-[46px] w-full items-center justify-center gap-2 rounded-[40px] border-[0.5px] border-white/15 px-6 py-3">
              <img src="/home/da317.svg" alt="" />
              <p className="text-lg leading-none font-medium text-white/95">Create</p>
            </div>
            <div className="flex w-full flex-col gap-0.5">
              {menu.map((item) => (
                <div
                  key={item.label}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 ${item.active ? 'bg-white/10' : ''}`}
                >
                  <img src={item.icon} alt="" />
                  <p
                    className={`text-base leading-none text-white/95 ${item.active ? 'font-semibold' : 'font-medium'}`}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <section className="flex h-full min-w-0 flex-1 flex-col items-center gap-10 overflow-hidden bg-white/5 p-8">
          <div className="flex w-full items-center justify-between">
            <p className="text-xl leading-none font-semibold text-white/95">Home</p>
            <div className="flex items-center gap-3">
              {toolbar.map((icon) => (
                <img key={icon} src={icon} alt="" />
              ))}
              <img
                src="/home/47df2.png"
                alt=""
                width={20}
                height={20}
                className="size-5 rounded-full object-cover"
              />
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-6">
            <div className="flex w-full flex-col items-center gap-2 leading-none whitespace-nowrap">
              <p className="text-sm text-white/65">Monday, October 30</p>
              <p className="text-2xl font-medium text-white/95">Good morning, Josh</p>
            </div>

            <div className="flex h-[30px] items-center justify-center gap-4 rounded-[40px] border-[0.5px] border-white/15 py-3 pr-3 pl-4">
              <p className="flex items-center gap-1 leading-none whitespace-nowrap">
                <span className="text-sm font-medium text-white/95">15</span>
                <span className="text-[13px] text-white/65">tasks completed</span>
              </p>
              <span className="h-3 w-px bg-white/15" />
              <p className="flex items-center gap-1 leading-none whitespace-nowrap">
                <span className="text-sm font-medium text-white/95">2</span>
                <span className="text-[13px] text-white/65">tasks remaining</span>
              </p>
              <span className="h-3 w-px bg-white/15" />
              <p className="flex items-center gap-1 leading-none whitespace-nowrap">
                <span className="text-sm font-medium text-white/95">1</span>
                <span className="text-[13px] text-white/65">contributor</span>
              </p>
            </div>

            <div className="flex w-full items-start gap-4">
              <TaskColumn title="Urgent tasks" items={tasks.urgent} />
              <TaskColumn title="Regular tasks" items={tasks.regular} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
