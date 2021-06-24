"use strict"

let startTime, endTime, i;

let btnV = document.querySelector("#clickbutton");
let textV = document.querySelector("#textArea");
let h2V = document.querySelector("h4");
let timeTaken = document.querySelector("h1 span");

let wordV = [
    "Tesla CEO Elon Musk's Use Signal tweet led to a massive number of signups for the alternative app to WhatsApp.",
    "The government has prepared a priority list for vaccination that is headed by one crore health workers and two crore frontline workers",
    "US House Speaker Nancy Pelosi has stepped up the pressure on Vice-President Mike Pence to act to remove Donald Trump from office over his role in last week's storming of Congress."
];


btnV.addEventListener("click",function(){
   if(this.innerText == `start`){
       startTest();
   }
   else {
    this.innerText = `start`;
    endTest();
   }
});

const startTest = () =>{
    timeTaken.classList.remove(`timeStyle`);
    textV.value= ``;
    let randomNumber = Math.floor(Math.random()*wordV.length);
    btnV.innerText = `done`;
    h2V.innerText = wordV[randomNumber];
    h2V.classList.add("addstyle");
    timeStart();
}

const endTest = () =>{
    let date = new Date();
    endTime = date.getTime();
    timeEnd();
}

const timeStart = () =>{
    let date = new Date();
    startTime = date.getTime();
    timeTaken.innerText = ``;
}

const timeEnd = () =>{
    let totalTime = ((endTime - startTime)/1000);
    timeTaken.innerText = `${totalTime} second`;
    timeTaken.classList.add(`timeStyle`);
}

i=0;
const changePara = () =>{
    textV.value= ``;
    btnV.innerText =  `start`;
    timeTaken.innerText = ``;

    h2V.innerText = wordV[i];

    i++;
    if(i == wordV.length){
        i=0;
    }
    timeTaken.classList.remove(`timeStyle`);

}