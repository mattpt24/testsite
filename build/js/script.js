const dealLink = Array.from(document.querySelectorAll(".deal__link__container"));
const dealBanner = Array.from(document.querySelectorAll(".banner__container"));
const openDropdown = document.querySelector(".dropdown--open");
const dropdownContainer = document.querySelector(".dropdown__container");
const closeDropdown = document.querySelector(".dropdown--close");

openDropdown.addEventListener("click", () => {
    dropdownContainer.classList.add("dropdown--activated");
});

closeDropdown.addEventListener("click", () => {
    dropdownContainer.classList.remove("dropdown--activated");
})


for(let i = 0; i <= dealLink.length; i++) {

dealLink[i].addEventListener("mouseover", () => {
    dealBanner[i].classList.add("active--banner");
})

dealLink[i].addEventListener("mouseout", () => {
    dealBanner[i].classList.remove("active--banner");
})

}
