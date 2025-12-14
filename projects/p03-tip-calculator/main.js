import { calculateTotals } from "./tipCalculator.js";

const billEl = document.querySelector(".bill");
const tipEl = document.querySelector(".tip");
const peopleEl = document.querySelector(".people");
const tipPersonEl = document.querySelector(".tip-person");
const totalPersonEl = document.querySelector(".total-person");
const errorsEl = document.querySelector(".errors");
const resetBtnEl = document.querySelector(".reset");
const submitBtnEl = document.querySelector(".btn");

let bill = null;
let tip = null;
let people = null;

const hasValue = (value) => value !== null && value !== "";

const resetInputFields = () => {
  billEl.value = "";
  tipEl.value = "";
  peopleEl.value = "";
  tipPersonEl.textContent = "";
  totalPersonEl.textContent = "";
};

const disableButton = (button) => {
  button.disabled = true;
  button.classList.add("disabled");
};

const enableButton = (button) => {
  button.disabled = false;
  button.classList.remove("disabled");
};

const clearErrors = () => {
  errorsEl.textContent = "";
};

const displayErrors = (error) => {
  errorsEl.textContent = error;
};

const displayResults = (tipPerson, totalPerson) => {
  tipPersonEl.textContent = tipPerson;
  totalPersonEl.textContent = totalPerson;
};

window.onload = function () {
  resetInputFields();
  disableButton(resetBtnEl);

  billEl.addEventListener("input", (e) => {
    clearErrors();
    bill = e.target.value;
  });

  tipEl.addEventListener("input", (e) => {
    clearErrors();
    tip = e.target.value;
  });

  peopleEl.addEventListener("input", (e) => {
    clearErrors();
    people = e.target.value;
  });

  submitBtnEl.onclick = function (e) {
    e.preventDefault();

    if (!hasValue(bill) || !hasValue(tip) || !hasValue(people)) {
      displayErrors("Please fill in all fields");
      return;
    }

    try {
      clearErrors();
      const result = calculateTotals(bill, tip, people);
      displayResults(result.tipAmountPerPerson, result.totalPerPerson);
      enableButton(resetBtnEl);
    } catch (error) {
      displayErrors(error.message);
      resetInputFields();
      disableButton(resetBtnEl);
    }
  };

  resetBtnEl.onclick = function (e) {
    e.preventDefault();
    resetInputFields();
    clearErrors();
    disableButton(resetBtnEl);
  };
};
