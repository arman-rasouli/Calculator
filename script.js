let screene = document.querySelector(".screen");
const backspace = document.querySelector(".backspace");
const buttons = document.querySelectorAll(".btn");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");

(function () {
  equal.addEventListener("click", () => {
    if (screene.value == "") {
      screene.value = "Error";
    } else if (screene.value == "Error") {
      screene.value = "Error";
    } else {
      let answer = eval(screene.value);
      equal.innerHTML = "";
      screene.value = answer;
    }
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      screene.value += button.innerHTML;
    });
  });

  backspace.addEventListener("click", () => {
    screene.value = screene.value.slice(0, -1);
  });

  clear.addEventListener("click", () => {
    screene.value = "";
  });
})();

document.addEventListener("keydown", (action) => {
  if (action.key == "0") {
    screene.value += action.key;
  } else if (action.key == "1") {
    screene.value += action.key;
  } else if (action.key == "2") {
    screene.value += action.key;
  } else if (action.key == "3") {
    screene.value += action.key;
  } else if (action.key == "4") {
    screene.value += action.key;
  } else if (action.key == "5") {
    screene.value += action.key;
  } else if (action.key == "6") {
    screene.value += action.key;
  } else if (action.key == "7") {
    screene.value += action.key;
  } else if (action.key == "8") {
    screene.value += action.key;
  } else if (action.key == "9") {
    screene.value += action.key;
  } else if (action.key == ".") {
    screene.value += action.key;
  } else if (action.key == "/") {
    screene.value += action.key;
  } else if (action.key == "*") {
    screene.value += action.key;
  } else if (action.key == "-") {
    screene.value += action.key;
  } else if (action.key == "+") {
    screene.value += action.key;
  } else if (action.key == "Backspace") {
    screene.value = screene.value.slice(0, -1);
  } else if (action.key == "Delete") {
    screene.value = "";
  } else if (action.key == "Enter") {
    let answer = eval(screene.value);
    equal.innerHTML = "";
    screene.value = answer;
  }
});
