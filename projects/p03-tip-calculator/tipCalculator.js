function roundToTwo(value) {
  return Math.round(value * 100) / 100;
}

export function calculateTotals(billAmount, tipPercentage, numberOfPeople) {
  const bill = Number(billAmount);
  const tip = Number(tipPercentage);
  const people = Number(numberOfPeople);

  if (bill < 0)
    throw new Error("Bill amount must be greater than or equal to 0");
  if (tip < 0)
    throw new Error("Tip percentage must be greater than or equal to 0");
  if (people <= 0) throw new Error("Number of people must be greater than 0");
  if (Number.isNaN(bill) || Number.isNaN(tip) || Number.isNaN(people))
    throw new Error("All Inputs must be valid numbers");

  const totalTip = bill * (tip / 100);
  const tipAmountPerPerson = roundToTwo(totalTip / people);
  const totalPerPerson = roundToTwo((bill + totalTip) / people);

  return {
    tipAmountPerPerson,
    totalPerPerson,
  };
}
