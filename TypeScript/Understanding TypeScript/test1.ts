const btn = document.getElementById("btn");
const el = document.getElementById("container");

btn.addEventListener("click", () => {
  const sont = `<h1> hello there</h1>`;
  el.insertAdjacentHTML("beforebegin", sont);
});
