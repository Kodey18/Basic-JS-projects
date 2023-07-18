const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("btn");
const color = document.getElementsByClassName("color");

button.addEventListener('click', ()=>{
    let hexC = "#";

    for(let i = 0;i<6;i++)
    {
        hexC += hexColors[getRandomNumber()];
    }
    
    color.textContent = hexC;
    document.body.style.backgroundColor = hexC;
});

let getRandomNumber = () => {
    return Math.floor( Math.random * hexColors.length );
}