'use strict';

let circle = document.getElementById("circle");
let upBtn = document.getElementById("upBtn");
let downBtn = document.getElementById("downBtn");

let rotateVal = circle.style.transform;
console.log(rotateVal);

let rotateSum;


upBtn.onclick=function(){
    rotateSum=rotateVal+'rotate(-90deg)';
    console.log(rotateSum);
    circle.style.transform=rotateSum;
}

