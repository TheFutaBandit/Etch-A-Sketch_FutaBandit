//ALL INITIALIZATIONS


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

//FUNCTIONS

//function for setting/sizing up gridBoxes in the grid
function gridSet(num_boxes) {
    for(let i = 0; i<num_boxes*num_boxes;i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("gridBox");
        gridBox.setAttribute(`style`,`height: ${480/num_boxes}px; width: ${480/num_boxes}px;`);
        grid.appendChild(gridBox);
    }
}

//function for putting event_listeners
function gridEventTrigger(parentNodeArray) {
    parentNodeArray.forEach((item) => {
        item.addEventListener('mouseover', () => {
            let r_value = Math.floor((Math.random()*255));
            let b_value = Math.floor((Math.random()*255));
            let g_value = Math.floor((Math.random()*255));
            item.style.cssText += `background-color: rgb(${r_value},${b_value},${g_value});`
        });
    })
}

//function for resetting children
function gridReset(parentNodeArray) {
    parentNodeArray.forEach((item) => {
        let r_value = 255;
        let b_value = 255;
        let g_value = 255;
        item.style.cssText += `background-color: rgb(${r_value},${b_value},${g_value});`
    })
}

//function for removing children divs of parent
function gridRemove(parentNode) {
    while(parentNode.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

//DEFAULT initializations
gridSet(numBoxes);

let gridBoxes = document.querySelectorAll('.gridBox');

gridEventTrigger(gridBoxes);


//reset button
reset_button.addEventListener('click', () => {
    let gdb_reset = document.querySelectorAll('.gridBox');
    gridReset(gdb_reset);
})

//size button
size_button.addEventListener('click', () => {
    let nBoxes = prompt('enter please');

    gridReset(gridBoxes);
    
    gridRemove(grid);
    
    gridSet(nBoxes);

    let gdb = document.querySelectorAll('.gridBox');
    gridEventTrigger(gdb);

})

