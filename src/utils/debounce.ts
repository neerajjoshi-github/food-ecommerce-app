export function debounce<F extends (...args: any[]) => void>(
  func: F,
  delay: number
) {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<F>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
