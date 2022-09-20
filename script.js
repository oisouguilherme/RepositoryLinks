const buttonLight = document.querySelector(".dark-blue");
const buttonDark = document.querySelector(".dark");

buttonLight.addEventListener("click", function () {
    buttonLight.classList.add("hide");
    buttonDark.classList.remove("hide");
    document.body.classList.add("dark-blue");
  });
  
  buttonDark.addEventListener("click", function () {
    buttonLight.classList.remove("hide");
    buttonDark.classList.add("hide");
    document.body.classList.remove("dark-blue");
  });
  