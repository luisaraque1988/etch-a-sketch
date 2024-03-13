const divContainer = document.querySelector(".divContainer");


// Generate 16 X 16 grid

for (let i = 0; i < 256; i++) {
    const divSmall = document.createElement("div");
    divSmall.classList.add("divSmall");

    divContainer.appendChild(divSmall);
}

const divSmall = document.querySelectorAll(".divSmall");
divSmall.forEach(function(i) {
    i.addEventListener("mouseover", function(){
        i.style.backgroundColor = getColor();
    })
})

function getColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Reset the grind

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function() {
    divSmall.forEach(function(i) {
            i.style.backgroundColor = "rgb(13, 76, 98)";
        })
})

// set the number os squares


