import { createCounter } from "./counter.js";

const counter = createCounter();
const counterElement = document.querySelector(".counter-value");

function render() {
  counterElement.textContent = counter.getValue();
}

window.onload = function () {
  render();
  counterElement.textContent = counter.getValue();

  document.querySelector(".btn-dec").addEventListener("click", () => {
    counter.decrement();
    render();
  });

  document.querySelector(".btn-inc").addEventListener("click", () => {
    counter.increment();
    render();
  });

  document.querySelector(".btn-reset").addEventListener("click", () => {
    counter.reset();
    render();
  });
};
