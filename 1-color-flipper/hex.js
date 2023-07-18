const hexCol = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById('btn');
const color = document.querySelector(".color");

button.addEventListener('click', ()=>{
    // creating a random for accessing the colors array.
    let hex = "#";
    let i = 0;
    while(i<6)
    {
        let randomNumber = getRandomNumber();
        hex = hex + hexCol[ randomNumber ];
        i++;
    }

    color.innerHTML = hex;
    document.body.style.backgroundColor = hex;
});

let getRandomNumber = ()=>{
    return Math.floor((Math.random() * hexCol.length ))
};