const tipButtons = document.querySelectorAll(".tip-button");
const customPersInput = document.querySelector(".tip-custom");
const peopleInput = document.querySelector(".people-num-input");
const billInput = document.querySelector(".bill-input");
const moneyPerson = document.querySelector(".money-person");
const moneyTotal = document.querySelector(".money-total");
const resetBtn = document.querySelector(".reset-button");
const errorMsg = document.querySelector(".error-people");

let peopleNum;
let persent;
let bill;
let total;

const removeActiveClass = () => {
  tipButtons.forEach((btn) => btn.classList.remove("active-button"));
};
const clearPers = () => {
  customPersInput.value = null;
};

const getTipBtn = (e) => {
  removeActiveClass();
  clearPers();
  e.target.className += " active-button";
  console.log(e);
  const value = e.target.value;
  persent = value;
  e.target.class;
  startCount();
};

const getInputPers = (e) => {
  removeActiveClass();
  const value = e.target.value;
  if (!isNaN(value) && value.length < 4 && value != 0) {
    persent = value;
    startCount();
  } else {
    customPersInput.value = null;
  }
};

const handleBill = (e) => {
  const value = e.target.value;
  if (!isNaN(value) && value.length < 6 && value != 0) {
    bill = value;
    console.log(bill);
    startCount();
  } else {
    billInput.value = null;
  }
};
const handlePeople = (e) => {
  const value = e.target.value;
  peopleInput.classList.remove("wrong-input");
  if (!isNaN(value) && value.length < 4 && value != 0) {
    peopleNum = value;
    console.log(peopleNum);
    startCount();
  } else {
    peopleInput.classList.add("wrong-input");
    errorMsg.classList += " visible";
  }
};

const startCount = () => {
  if (bill != 0 && persent && peopleNum) {
    total = ((bill / 100) * persent).toFixed(2);
    console.log(total);
    moneyTotal.innerHTML = `$${total}`;
    moneyPerson.innerHTML = `$${(total / peopleNum).toFixed(2)}`;
  }
};
const resetValue = () => {
  removeActiveClass();
  clearPers();
  billInput.value = null;
  bill = 0;
  peopleInput.value = 1;
  peopleNum = 1;
};

tipButtons.forEach((elem) =>
  elem.addEventListener("click", (e) => getTipBtn(e))
);
customPersInput.addEventListener("input", (e) => getInputPers(e));
peopleInput.addEventListener("input", (e) => handlePeople(e));
billInput.addEventListener("input", (e) => handleBill(e));
resetBtn.addEventListener("click", () => resetValue());
