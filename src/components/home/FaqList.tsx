'use client';

const closeDuration = 420;

function closeDetails(details: HTMLDetailsElement) {
  const panel = details.querySelector('.faq-panel');
  if (!(panel instanceof HTMLElement) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    details.open = false;
    return;
  }

  details.classList.add('is-closing');
  let settled = false;
  const finish = () => {
    if (settled) return;
    settled = true;
    panel.removeEventListener('transitionend', onEnd);
    details.open = false;
    details.classList.remove('is-closing');
  };
  const onEnd = (event: TransitionEvent) => {
    if (event.target !== panel || event.propertyName !== 'grid-template-rows') return;
    finish();
  };

  panel.addEventListener('transitionend', onEnd);
  window.setTimeout(finish, closeDuration + 40);
}

export function FaqList({ questions }: { questions: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-white/10">
      {questions.map((item) => (
        <details key={item.q} className="faq group border-b border-white/10">
          <summary
            className="cursor-pointer list-none py-5 text-base font-semibold [&::-webkit-details-marker]:hidden"
            onClick={(event) => {
              const details = event.currentTarget.parentElement;
              if (!(details instanceof HTMLDetailsElement) || !details.open) return;
              event.preventDefault();
              closeDetails(details);
            }}
          >
            <span className="flex items-center justify-between gap-6">
              {item.q}
              <span aria-hidden="true" className="faq-mark text-lg leading-none text-white/40">
                +
              </span>
            </span>
          </summary>
          <div className="faq-panel">
            <div>
              <p className="max-w-xl pb-5 text-sm leading-6 text-white/70">{item.a}</p>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
