const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const inputs = document.querySelectorAll(".input");

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");

burger.addEventListener("click", function () {
  menu.classList.toggle("menu-active");
  burger.classList.toggle("toggle");
});

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");
    // dynamic change text and image
    const originalSrc = preview.getAttribute("src");
    original.src = originalSrc;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});
