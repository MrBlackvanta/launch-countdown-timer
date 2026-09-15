"use client";

import { remainingAt, type Remaining } from "@/lib";
import { useSyncExternalStore } from "react";

const listeners = new Set<() => void>();

let currentSecond = Math.floor(Date.now() / 1000);
let timer: ReturnType<typeof setTimeout> | undefined;

function tick() {
  currentSecond = Math.floor(Date.now() / 1000);
  scheduleTick();

  for (const listener of listeners) listener();
}

function scheduleTick() {
  timer = setTimeout(tick, 1000 - (Date.now() % 1000));
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (listeners.size === 1) {
    currentSecond = Math.floor(Date.now() / 1000);
    scheduleTick();
  }

  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) clearTimeout(timer);
  };
}

function getSnapshot() {
  return currentSecond;
}

export function useCountdown(renderedAt: number): Remaining {
  const second = useSyncExternalStore(subscribe, getSnapshot, () =>
    Math.floor(renderedAt / 1000),
  );

  return remainingAt(second);
}
