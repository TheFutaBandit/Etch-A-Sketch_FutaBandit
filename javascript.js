const container = document.querySelector("#container");

const gridBox = document.createElement("div");
gridBox.classList.add("gridBox");
container.appendChild(gridBox);

const changeColor = container.querySelector(".gridBox");
changeColor.addEventListener('mouseover', function (e) {
    let r_value = Math.floor((Math.random()*255));
    let b_value = Math.floor((Math.random()*255));
    let g_value = Math.floor((Math.random()*255));
    e.target.style.background = `rgb(${r_value}, ${b_value}, ${g_value})`;
})

