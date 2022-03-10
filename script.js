let inputWidth=document.querySelector(".width");
let inputHeigt=document.querySelector(".height");
let inputColor=document.querySelector(".color");
let bthCreate=document.querySelector(".accept");
let bthClear=document.querySelector(".clear");
let bthUp=document.querySelector(".up");
let bthDown=document.querySelector(".down");
let bthRight=document.querySelector(".right");
let bthLeft=document.querySelector(".left");

let newDiv;
let iwValue;
let ihValue;
let icValue;
let downDiv=0;
let rightDiv=0;
let isDiv=false;
bthCreate.addEventListener("click", createDiv);
bthClear.addEventListener("click", clearDiv);
bthDown.addEventListener("click", dwDiv);
bthRight.addEventListener("click", rgDiv);
bthLeft.addEventListener("click",lfDiv);
bthUp.addEventListener("click",uDiv)

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
            isDiv=true;
        }else {alert("Введите значение от 50 до 500")}
    }
}


function clearDiv(){
    document.querySelector(".container").firstChild.remove();
    isDiv=false;
    downDiv=0;
    rightDiv=0;
}

function dwDiv(){
    if(isDiv){
    // downDiv+=+10
    downDiv = downDiv === 500-ihValue ? 0 : downDiv + 10;
    newDiv.style.marginTop = downDiv + "px";
    }
}

function uDiv(){
    if(isDiv){
    // upDiv+=-10;
    downDiv = downDiv === 0 ? 500-ihValue : downDiv - 10;
    newDiv.style.marginTop = downDiv + "px";
    }
}

function rgDiv(){
    if(isDiv){
    // rightDiv+=+10;
    rightDiv = rightDiv === 500-iwValue ? 0 : rightDiv + 10;
    newDiv.style.marginLeft = rightDiv + "px";
    }
}

function lfDiv(){
    if(isDiv){
    // rightDiv+=-10;
    rightDiv = rightDiv === 0 ? 500-iwValue : rightDiv - 10;
    newDiv.style.marginLeft = rightDiv + "px";
    }
}
