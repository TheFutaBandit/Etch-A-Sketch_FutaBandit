const container = document.querySelector("#container");

for(let i = 0; i<2; i++) {
    const gridBox = document.createElement("div");
    gridBox.classList.add("gridBox");
    container.appendChild(gridBox);
}





container.addEventListener('mouseover', function (e) {
    if(e.target.classList.contains('gridBox')) {
        let r_value = Math.floor((Math.random()*255));
        let b_value = Math.floor((Math.random()*255));
        let g_value = Math.floor((Math.random()*255));
        e.target.style.background = `rgb(${r_value}, ${b_value}, ${g_value})`;
    }
})

