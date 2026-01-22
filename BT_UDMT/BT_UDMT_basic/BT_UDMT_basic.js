let display = document.getElementById("display");

function add(value) {
  if (display.value === "0") display.value = "";
  display.value += value;
}

function clearAll() {
  display.value = "0";
}

function calculate() {
  let exp = display.value
    .replace(/π/g, Math.PI)
    .replace(/e/g, Math.E)
    .replace(/sin/g, "Math.sin")
    .replace(/cos/g, "Math.cos")
    .replace(/tan/g, "Math.tan")
    .replace(/ln/g, "Math.log");

  try {
    display.value = eval(exp);
  } 
  catch {
    display.value = "Error";
  }
}

function factorial() {
  let n = Number(display.value);
  let r = 1;
  for (let i = 1; i <= n; i++) r *= i;
  display.value = r;
}

function square() {
  let display = document.getElementById("display");
  display.value = Math.pow(display.value, 2);
}