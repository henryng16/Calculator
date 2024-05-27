let display = document.querySelector("#display");
let num1 = "";
let num2 = "";
let operator = null;

//check if string, to reset calculator from equal()
const isString = (str) => typeof str === "string";

// set operator
const add = () => {
  if (operator) equal();
  operator = "add";
};

const minus = () => {
  if (operator) equal();
  operator = "minus";
};

const multiply = () => {
  if (operator) equal();
  operator = "multiply";
};

const divide = () => {
  if (operator) equal();
  operator = "divide";
};


// clear and display 0 again
const clearDisplay = () => {
  num1 = "";
  num2 = "";
  operator = null;
  display.innerHTML = "";
};

// delete number
const delNum = () => {
  if (num1 && !num2) {
    num1 = display.innerHTML.slice(0,-1);
    display.innerHTML = num1;
  } else if (num2) {
    num2 = display.innerHTML.slice(0,-1);
    display.innerHTML = num2;
  }
};

// calculate
const equal = () => {
  const parseNum1 = parseFloat(num1, 10);
  const parseNum2 = parseFloat(num2, 10);
  let result;
  // NaN resolve
  if (num1 && !num2) return;

  if ((!num1 || !num2) && operator) {
    switch (operator) {
      case "add":
        result = parseNum1 + parseNum2;
        break;
      case "minus":
        result = parseNum1 - parseNum2;
        break;
      case "multiply":
        result = parseNum1 * parseNum2;
        break;
      case "divide":
        result = parseNum1 / parseNum2;
        break;
    }
    display.innerHTML = result;
    num1 = "";
    num2 = "";
    operator = null;
    return;
  }
  if (operator) {
    switch (operator) {
      case "add":
        result = parseNum1 + parseNum2;
        break;
      case "minus":
        result = parseNum1 - parseNum2;
        break;
      case "multiply":
        result = parseNum1 * parseNum2;
        break;
      case "divide":
        result = parseNum1 / parseNum2;
        break;
    }
    display.innerHTML = result;
    num1 = result;
    num2 = "";
    operator = null;
    console.log(num1, num2, operator);
  }
};

const addDot = () => {
  if (!operator && isString(num1)) {
    if (!num1.includes(".")) {
      num1 += ".";
      display.innerHTML = num1;
    }
  } else if (operator) {
    if (!num2.includes(".")) {
      num2 += ".";
      display.innerHTML = num2;
    }
  }
};

//add number
const addNumber = (num) => {
  if (!operator && isString(num1)) {
    num1 += num;
    num1 = num1.replace(/^0+(?=\d)/, "");
    display.innerHTML = num1;
  } else if (operator) {
    num2 += num;
    num2 = num2.replace(/^0+(?=\d)/, "");
    display.innerHTML = num2;
  }

  if (!operator && !isString(num1)) {
    num1 = "";
    num1 += num;
    display.innerHTML = num1;
  }

  console.log(num1, num2);
};


console.log(isString("1234"));
