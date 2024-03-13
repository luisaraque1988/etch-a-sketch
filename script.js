const body = document.querySelector("body");
let divContainer = document.querySelector(".divContainer");
const setNumber = document.querySelector("#setNumber");
const resetButton = document.querySelector("#resetButton");


// Generate 16 X 16 grid

document.addEventListener("DOMContentLoaded", () => {
    createGrid(16);
});

function getColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function createGrid(squarePerSide) {
    
    let newSquareDimension = 560 / squarePerSide;
    newSquareDimension += "px";

    if (divContainer.children.length > 0) {
        divContainer.innerHTML = "";
    }
    
    for (let i = 0; i < squarePerSide ** 2; i++) {
        const divSmall = document.createElement("div");
        divSmall.classList.add("divSmall");
        divSmall.style.border = "0px";
        divSmall.style.width = newSquareDimension;
        divSmall.style.height = newSquareDimension;
        divContainer.appendChild(divSmall);
    }

    const divSmall = document.querySelectorAll(".divSmall");
    divSmall.forEach(function(i) {
        i.addEventListener("mouseover", function() {
            i.style.backgroundColor = getColor();
        });
    });
};

setNumber.addEventListener("click", () => {
    const userNumber = Number(prompt("Write a number between 1 and 100"));

    if (userNumber > 100 || userNumber < 0) {
        alert("Error, the number should be less than 100");
    } else {
        createGrid(userNumber);
    }
});

resetButton.addEventListener("click", () => {
    createGrid(16);
});
