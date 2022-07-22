const debounce = (fnc, delay = 1000) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fnc(...args);
    }, delay);
  };
};

export default debounce;
