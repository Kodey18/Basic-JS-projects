const progress = document.getElementById("progress");
const pre = document.querySelector(".prev")
const nex = document.querySelector(".next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;


nex.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circles.length)
    {
        currentActive = circles.length;
    }
    update();
});

pre.addEventListener('click', ()=>{
    currentActive--;
    if(currentActive < 1 )
    {
        currentActive = 1;
    }
    update();
});

const update = () => {
    circles.forEach( (circle,index) =>{
        if(index < currentActive)
        {
            circle.classList.add("active");
        }
        else
        {
            circle.classList.remove("active") ;
        }
    });

    const actives = document.querySelectorAll(".active");

    progress.style.width = ( (actives.length - 1)/(circles.length - 1) * 100 + "%" );

    if(currentActive === 1)
    {
        pre.disabled = true;
    }
    else if(currentActive === circles.length)
    {
        nex.disabled = true;
    }
    else
    {
        pre.disabled = false;
        nex.disabled = false;
    }
};


