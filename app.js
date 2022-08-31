const getmenubtn = document.querySelector(".menubtn");
const getmenuitems = document.querySelector(".menuitems");

getmenubtn.addEventListener("click", () => {
  getmenubtn.classList.toggle("active");
  getmenuitems.classList.toggle("active");
});
