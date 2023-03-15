var input1 = document.getElementById("input-1");
var input2 = document.getElementById("input-2");
var addBtn = document.getElementById("submit-btn");
function add(num1, num2) {
    return num1 + num2;
}
addBtn.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
