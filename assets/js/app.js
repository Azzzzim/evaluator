let op;

function func() {
  let result;
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  switch (op) {
    case "+":
      result = "хочешь прибавить?? пососи!";
      break;
    case "-":
      result = "хочешь вычесть?? ок" num1-num2;
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
