// animationDelay.js
module.exports = function ({ addUtilities }) {
  const delays = {
    "delay-0": "0s",
    "delay-100": "0.1s",
    "delay-200": "0.2s",
    "delay-300": "0.3s",
    "delay-400": "0.4s",
    "delay-500": "0.5s",
  };

  const delayUtilities = Object.keys(delays).map((key) => ({
    [`.${key}`]: {
      animationDelay: delays[key],
    },
  }));

  addUtilities(delayUtilities, ["responsive", "hover"]);
};
