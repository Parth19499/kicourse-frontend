const throttle = (func, delay) => {
  let timeoutId = null;
  console.log(`in throttle: ${timeoutId}`);
  if (timeoutId) return;
  timeoutId = setTimeout(() => {
    func();
    timeoutId = null;
  }, delay);
};

export default throttle;
