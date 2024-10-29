export function randomId(): string {
  const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
  return uint32.toString(8);
}

export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
