// const dec = document.getElementsByClassName("Decrease");
// const inc = document.getElementsByClassName("Increase");
// const res = document.getElementsByClassName("Reset");
// const count = document.getElementsByClassName("Count");

const dec = document.querySelector('.Decrease');
const inc = document.querySelector('.Increase');
const res = document.querySelector('.Reset');
let count = document.querySelector('.Count');
let curCount = 0;

// function to decide the color of the number
let checkNumber = (c)=>{
    if(c > 0)
    {
        count.classList.add("green");
        count.classList.remove("neutral");
    }
    else if(c < 0)
    {
        count.classList.add("red");
        count.classList.remove("neutral");
    }
    else
    {
        count.classList.remove("red");
        count.classList.remove("green");
        count.classList.add("neutral");
    }
}


// initial count will be zero
count.innerHTML=curCount;


res.addEventListener('click', ()=>{
    curCount = 0;
    checkNumber(curCount);
    count.innerText = curCount;
    res.classList.add("r");
    res.classList.remove("Reset");

    setTimeout(()=>{
        res.classList.add("Reset");
        res.classList.remove("r");
    },400);
});

inc.addEventListener('click', ()=>{
    curCount += 1;
    checkNumber(curCount);
    count.innerText = curCount;

    inc.classList.add("i");
    inc.classList.remove("Increase");

    setTimeout(()=>{
        inc.classList.add("Increase");
        inc.classList.remove("i");
    },400);
});

dec.addEventListener('click', ()=>{
    curCount -= 1;
    checkNumber(curCount);
    count.innerText = curCount;

    dec.classList.add("d");
    dec.classList.remove("Decrease");

    setTimeout(()=>{
        dec.classList.add("Decrease");
        dec.classList.remove("d");
    },500);
});

