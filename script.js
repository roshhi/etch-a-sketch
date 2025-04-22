let isRainbowMode = false;
let isErase = false;
let isMouseDown = false;

const rangeDisplay = document.getElementById('rangeTitle');
const normal_Mode= document.getElementById('singleColor');
const rainbow_Mode= document.getElementById('rainbow');
const clear_Mode= document.getElementById('clearAll');
const erase_Mode= document.getElementById('erase');
const container_size = 700;

document.addEventListener('mousedown', () => {
    isMouseDown = true;
});
document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

//Main function 
function main(grid_size){

    updateRangeTitle(grid_size); 
    let my_container= document.querySelector(".container");
    my_container.innerHTML = ""; // It clears out the whole html you wrote inside that 
                                // particular div/container you are using it with.
    my_container.style.width  = container_size + "px";
    my_container.style.height  = container_size + "px";

    for(var row=grid_size;row>0;row--){
        for(var col= grid_size;col>0;col--){

            let my_div = document.createElement("div"); // Here I used 'let' instead of 'var'. If u know, u know :) 
            my_div.classList.add('divClass');
            let my_div_height= container_size / (grid_size);
            let my_div_width = my_div_height;
            my_div.style.height = my_div_height + 'px';
            my_div.style.width  = my_div_width + 'px';
            
            my_div.addEventListener('mouseover', function(){
                if(isMouseDown){
                    if(isRainbowMode){
                        rainbow_color(my_div);
                    }
                    else if(isErase){
                        erase(my_div);
                    }
                    else{
                        single_color(my_div);
                    }
                }
            })
            my_container.appendChild(my_div);
        }
    }
}

function updateRangeTitle(size) {
    rangeDisplay.textContent = `${size} x ${size}`;
}
function rainbow_color(element){
    const r= Math.floor(Math.random()*256);
    const g= Math.floor(Math.random()*256);
    const b= Math.floor(Math.random()*256);
    element.style.backgroundColor = `rgb(${r},${g},${b})`;
}
function erase(element){
    element.style.backgroundColor = "rgb(1, 25, 43)";
}
function single_color(element) {
    
    const color = document.getElementById('colorPicker').value;
    element.style.backgroundColor = color;
}
function clearAll(){
    const value= document.getElementById('slider').value;
    main(value);
}

//This code snippet basically change the color of the button which is currently selected. 
const buttons= [normal_Mode,rainbow_Mode,clear_Mode,erase_Mode];
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', function(){
        for(let j=0;j<buttons.length;j++){
            defaultColor(buttons[j]);
        }
        changeBgColor(buttons[i]);
    })
}
function changeBgColor(element){
    element.style.background= '#a510b5';
} 
function defaultColor(element){
    element.style.background = 'linear-gradient(145deg, #8e2de2, #4a00e0)';
}

//By Default creating a Grid of 8 x 8
main(8)
