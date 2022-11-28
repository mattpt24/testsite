"use strict";

var dealLink = Array.from(document.querySelectorAll(".deal__link__container"));
var dealBanner = Array.from(document.querySelectorAll(".banner__container"));
var openDropdown = document.querySelector(".dropdown--open");
var dropdownContainer = document.querySelector(".dropdown__container");
var closeDropdown = document.querySelector(".dropdown--close");
openDropdown.addEventListener("click", function () {
  dropdownContainer.classList.add("dropdown--activated");
});
closeDropdown.addEventListener("click", function () {
  dropdownContainer.classList.remove("dropdown--activated");
});
var _loop = function _loop(i) {
  dealLink[i].addEventListener("mouseover", function () {
    dealBanner[i].classList.add("active--banner");
  });
  dealLink[i].addEventListener("mouseout", function () {
    dealBanner[i].classList.remove("active--banner");
  });
};
for (var i = 0; i <= dealLink.length; i++) {
  _loop(i);
}