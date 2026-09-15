"use client";

import { remainingAt } from "@/lib";
import { useSyncExternalStore } from "react";

const listeners = new Set<() => void>();

let currentSecond = Math.floor(Date.now() / 1000);
let previousSecond = currentSecond;
let timer: ReturnType<typeof setTimeout> | undefined;

function tick() {
  previousSecond = currentSecond;
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
    previousSecond = currentSecond;
    scheduleTick();
  }

  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) clearTimeout(timer);
  };
}

function getCurrentSecond() {
  return currentSecond;
}

function getPreviousSecond() {
  return previousSecond;
}

export function useCountdown(renderedAt: number) {
  const renderedSecond = Math.floor(renderedAt / 1000);
  const current = useSyncExternalStore(
    subscribe,
    getCurrentSecond,
    () => renderedSecond,
  );
  const before = useSyncExternalStore(
    subscribe,
    getPreviousSecond,
    () => renderedSecond,
  );

  return { remaining: remainingAt(current), previous: remainingAt(before) };
}
