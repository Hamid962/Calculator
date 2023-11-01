let result = "";
const buttons = document.querySelectorAll("button");
const input = document.querySelector(".input-text");
const arr = Array.from(buttons);

input.addEventListener("keydown", (d) => {
  console.log(d);
});

arr.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    console.log("key", e);

    if (e.target.textContent === "=") {
      result = eval(result);
      input.value = result;
    } else if (e.target.textContent === "AC") {
      result = "";
      input.value = result;
    } else if (e.target.textContent === "DEL") {
      result = result.substring(0, result.length - 1);
      input.value = result;
    } else if (e.key === "Enter" || e.keyCode === 13) {
      result = eval(result);
      input.value = result;
    } else {
      result += e.target.textContent;
      input.value = result;
    }
  });
});
