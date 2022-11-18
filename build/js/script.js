const dealLink = Array.from(document.querySelectorAll(".deal__link__container"));
const dealBanner = Array.from(document.querySelectorAll(".banner__container"));


for(let i = 0; i <= dealLink.length; i++) {

dealLink[i].addEventListener("mouseover", () => {
    dealBanner[i].classList.add("active--banner");
})

dealLink[i].addEventListener("mouseout", () => {
    dealBanner[i].classList.remove("active--banner");
})

}
