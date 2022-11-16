let stack = "";
let operator = "";
let resetBool = false;
let opList = ["+", "*", "-", "/"]
let displayer = document.querySelector(".display");


btns = document.getElementsByClassName("button");
for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
            let pressed = btns[i].innerHTML;
            // console.log(pressed);
            // console.log(opList.includes(pressed));
            checkOp(pressed);
            if (pressed === "=") {
                  calculate();
            } else {
                  stack += pressed;
                  displayer.innerHTML = stack;

            }
            if (resetBool) {
                  reset();
            }

      });
}

function checkOp(key) {
      if (opList.includes(key)) {
            if (operator==="") {
                  operator = key;
            } else {
                  console.log("Too many operators");
                  resetBool = true;

            }
      }
}

function calculate() {


      // let vals = stack.split(operator);
      displayer.innerHTML = parseFloat(eval(stack).toString()).toFixed(2);
      stack = "";
      operator = "";
}

function reset() {
      stack = "";
      operator = "";
      resetBool = false;
      displayer.innerHTML = "";
}
