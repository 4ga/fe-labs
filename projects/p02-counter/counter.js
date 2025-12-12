export function createCounter(initialValue = 0) {
  let count = initialValue;

  return {
    getValue: function () {
      return count;
    },
    increment: function () {
      count++;
    },
    decrement: function () {
      if (count > 0) {
        count--;
      }
    },
    reset: function () {
      count = initialValue;
    },
  };
}
