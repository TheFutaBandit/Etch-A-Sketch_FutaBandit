//container initialization
const container = document.querySelector("#container");

const numBoxes = 10;

//elements initialization
const reset = document.createElement('div');
reset.classList.add('reset');
// reset.textContent = "reset!";
container.appendChild(reset);

const reset_button = document.createElement('button');
reset_button.classList.add('reset_button');
reset_button.textContent = "reset!";
reset.appendChild(reset_button);

const size_button = document.createElement('button');
size_button.classList.add('size_button');
size_button.textContent = "sizeup!";
reset.appendChild(size_button);

const grid = document.createElement("div");
grid.classList.add('grid');
container.appendChild(grid);

for(let i = 0; i<numBoxes*numBoxes;i++) {
    const gridBox = document.createElement("div");
    gridBox.classList.add("gridBox");
    gridBox.setAttribute(`style`,`height: ${480/numBoxes}px; width: ${480/numBoxes}px;`);
    grid.appendChild(gridBox);
}





//functions
// function setBoxColor(r,b,g) {
//     node.setAttribute("style", `background-color: rgb(${r},${b},${g})`);
// }

//events
// grid.addEventListener('mouseover', function (e) {
//     if(e.target.classList.contains('gridBox')) {
//         let r_value = Math.floor((Math.random()*255));
//         let b_value = Math.floor((Math.random()*255));
//         let g_value = Math.floor((Math.random()*255));
//         // e.target.style.background = `rgb(${r_value}, ${b_value}, ${g_value})`;
//         setBoxColor(gridBox,r_value,b_value,g_value);
//     }
// })

let gridBoxes = document.querySelectorAll('.gridBox');



gridBoxes.forEach((item) => {
    item.addEventListener('mouseover', () => {
        let r_value = Math.floor((Math.random()*255));
        let b_value = Math.floor((Math.random()*255));
        let g_value = Math.floor((Math.random()*255));
        item.style.cssText += `background-color: rgb(${r_value},${b_value},${g_value});`
    });
})



reset_button.addEventListener('click', () => {
    gridBoxes.forEach((item) => {
        let r_value = 255;
        let b_value = 255;
        let g_value = 255;
        item.style.cssText += `background-color: rgb(${r_value},${b_value},${g_value});`
    })
})

