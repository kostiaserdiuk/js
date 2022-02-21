let inputWidth=document.querySelector(".width");
let inputHeigt=document.querySelector(".height");
let inputColor=document.querySelector(".color");
let bthCreate=document.querySelector(".accept");

let newDiv;
let iwValue;
let ihValue;
let icValue;
let isDiv=false;
bthCreate.addEventListener("click", createDiv);

function createDiv(){
    if (!isDiv){
        iwValue = inputWidth.value;
        ihValue = inputHeigt.value;
        icValue = inputColor.value;
        
        if(iwValue >= 50 && ihValue >= 50 && iwValue <= 500 && ihValue <= 500) {
            newDiv=document.createElement("div");
            newDiv.style.width= iwValue + "px";
            newDiv.style.height= ihValue + "px";
            newDiv.style.background= icValue;
            
            document.querySelector(".container").prepend(newDiv);
            isDiv=true
        }
    }
}


