let res = document.getElementById("res");
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btnClr = document.getElementById("btnClr");
let btnEql = document.getElementById("btnEql");
let btnSum = document.getElementById("btnSum");
let btnSub = document.getElementById("btnSub");
let btnMul = document.getElementById("btnMul");
let btnDiv = document.getElementById("btnDiv");

btn0.onclick = function () {
  res.innerHTML += 0;
};
btn1.onclick = function () {
  res.innerHTML += 1;
};
btnClr.onclick = function () {
  res.innerHTML = "";
};
btnSum.onclick = function () {
  res.innerHTML += "+";
};
btnSub.onclick = function () {
  res.innerHTML += "-";
};
btnMul.onclick = function () {
  res.innerHTML += "*";
};
btnDiv.onclick = function () {
  res.innerHTML += "/";
};

let getOperator1and2Only = function (string) {
  const regex = /[^-+*/]/g;
  return string.split(regex).join("");
};

let getOperator1and2WithString = function (string) {
  const regex = /[-+*/]/g;
  return string.split(regex).filter(String);
};

btnEql.onclick = function () {
  let resString = res.innerHTML;
  let operandString = getOperator1and2WithString(resString);
  if (operandString.length < 2) {
    return;
  }
  let operator = getOperator1and2Only(resString);
  let parsed = eval(
    parseInt(operandString[0], 2) + operator + parseInt(operandString[1], 2)
  );
  parsed = Math.floor(parsed);
  res.innerHTML = parsed.toString(2);
};
