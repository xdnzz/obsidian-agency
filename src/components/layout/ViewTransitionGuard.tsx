'use client';

const hiddenSkipMessage = 'View transition was skipped because document visibility state is hidden.';

function isHiddenTransitionAbort(error: unknown) {
  return (
    error instanceof DOMException &&
    error.name === 'InvalidStateError' &&
    error.message.startsWith('Transition was aborted because of invalid state')
  );
}

function installViewTransitionGuard() {
  if (typeof document === 'undefined' || typeof document.startViewTransition !== 'function') return;

  const marked = document as Document & { __obsidianViewTransitionGuard?: boolean };
  if (marked.__obsidianViewTransitionGuard) return;
  marked.__obsidianViewTransitionGuard = true;

  const original = document.startViewTransition.bind(document);

  document.startViewTransition = ((callback) => {
    const transition = original(callback);
    const ready = transition.ready.then(
      (value) => value,
      (error: unknown) => {
        if (!isHiddenTransitionAbort(error)) throw error;
        throw new DOMException(hiddenSkipMessage, 'InvalidStateError');
      },
    );
    const settle = <T,>(promise: Promise<T>) =>
      promise.then(
        (value) => value,
        (error: unknown) => {
          if (isHiddenTransitionAbort(error)) return undefined;
          throw error;
        },
      );

    return {
      ready,
      finished: settle(transition.finished),
      updateCallbackDone: settle(transition.updateCallbackDone),
      skipTransition: () => transition.skipTransition(),
      types: transition.types,
    };
  }) as typeof document.startViewTransition;
}

installViewTransitionGuard();

export function ViewTransitionGuard() {
  return null;
}
