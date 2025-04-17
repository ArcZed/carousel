const container = document.querySelector(".container");
const carousel = document.querySelector(".carousel");
const imgNode = document.querySelectorAll(".img");
const img = document.querySelector(".img");

const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");

const li = document.querySelectorAll("li")

let frameWidth = parseInt(window.getComputedStyle(img).width);
let carouselWidth = frameWidth*(imgNode.length - 1);
let left = 0;


const updateNav = (left) => {
    let currIndex = -left*3/carouselWidth;
    console.log(currIndex)

    for (let i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = "transparent"
    }

    li[currIndex].style.backgroundColor = "white";
}

const moveRight = () => {
    if(left > -carouselWidth) {
        left -= frameWidth;
        carousel.style.marginLeft = `${left}px`;
    }
    else{
        left = 0;
        carousel.style.marginLeft = `${left}px`;
    }
    updateNav(left)
    console.log(left, frameWidth,frameWidth*(imgNode.length - 1))
}

const moveLeft = () => {
    if(left < 0) {
        left += frameWidth;
        carousel.style.marginLeft = `${left}px`;
    }
    else{
        left = -carouselWidth;
        carousel.style.marginLeft = `${left}px`;
    }
    updateNav(left)
    console.log(left, frameWidth*(imgNode.length - 1));
}

setTimeout

updateNav(left);
leftBtn.addEventListener("click", moveLeft);
rightBtn.addEventListener("click", moveRight);




