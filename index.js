let result = document.getElementById("output");

let calculate = (numb) => {
  result.value = result.value + numb;
  console.log("clicked");
  console.log(numb);
};

function clr() {
  result.value = " ";
  console.log("clear");
}
function del() {
  result.value = result.value.slice(0, -1);
  console.log("del");
}
function res() {
  try {
    result.value = eval(result.value);
  } catch {
    alert("You are doing something wrong");
  }
}
