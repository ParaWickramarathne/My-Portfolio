document.addEventListener("DOMContentLoaded", function () {
  const openNavBtn = document.querySelector(".open-nav");
  const closeNavBtn = document.querySelector(".close-nav");
  const nav = document.querySelector(".header .nav-list ul");

  openNavBtn.addEventListener("click", function () {
      nav.classList.add("show");
      openNavBtn.style.display = "none";
      closeNavBtn.style.display = "block";
  });

  closeNavBtn.addEventListener("click", function () {
      nav.classList.remove("show");
      closeNavBtn.style.display = "none";
      openNavBtn.style.display = "block";
  });
});
