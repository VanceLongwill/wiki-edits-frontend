export function dateToUnix(d: Date): number {
  return Math.round(d.getTime() / 1000)
}

function pad24HourTime(n: number): string {
  return n < 10 ? `0${n}` : String(n)
}

export function formatDate(d: Date): string {
  const values = [d.getHours(), d.getMinutes(), d.getSeconds()]
  return values.map(pad24HourTime).join(':')
}
