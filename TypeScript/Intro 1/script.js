input1 = document.getElementById("input-1");
input2 = document.getElementById("input-2");
addBtn = document.getElementById("submit-btn");

function add(num1, num2) {

    return num1 + num2;
}

addBtn.addEventListener("click", function () {
    console.log(add(Number(input1.value), Number(input2.value)));
    input1.value = " ";
    input2.value = " ";
})