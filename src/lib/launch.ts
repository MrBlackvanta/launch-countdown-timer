export type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const perMinute = 60;
const perHour = 60 * perMinute;
const perDay = 24 * perHour;
const perCycle = 14 * perDay;

const firstLaunch = Date.UTC(2026, 0, 1) / 1000;

function nextLaunch(second: number) {
  const elapsedCycles = Math.floor((second - firstLaunch) / perCycle);

  return firstLaunch + (elapsedCycles + 1) * perCycle;
}

export function remainingAt(second: number): Remaining {
  const total = nextLaunch(second) - second;

  return {
    days: Math.floor(total / perDay),
    hours: Math.floor(total / perHour) % 24,
    minutes: Math.floor(total / perMinute) % 60,
    seconds: total % 60,
  };
}
