
const select = document.getElementById("colorSelect");

const getButton = document.querySelector("form > input");

getButton.addEventListener("click", (event) => {
  for (let i = 0; i < select.children.length; i++) {
    if (select.children[i].value === select.value) {
      select.removeChild(select.children[i]);
    }
  }
});
