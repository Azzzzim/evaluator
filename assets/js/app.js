let op;

function func() {
  let result;
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  switch (op) {
    case "+":
      result = "прибовлять захотелось? пососи!";
      break;
    case "-":
      result = "вычетать захотелось? иди нахуй!";
      break;

    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }
  document.getElementById("result").innerHTML = result;
}
