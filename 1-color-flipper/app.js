const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById('btn');
const color = document.querySelector(".color");

button.addEventListener('click', ()=>{
    // creating a random for accessing the colors array.
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]; 
});

let getRandomNumber = ()=>{
    return Math.floor((Math.random() * colors.length ))
};