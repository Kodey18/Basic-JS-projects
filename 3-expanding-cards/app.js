const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const div = document.querySelectorAll(".img-container");
let checkShow = 0;

// by default image 1 will be displayed.
img1.classList.add("show");
checkShow = 1;

// div.addEventListener('click',()=>{
//     checkImage(checkShow);
// })

img1.addEventListener('clcik',()=>{
    checkImage(checkShow);
    img1.classList.add("show");
    checkShow = 1;
    console.log(1);
});

img2.addEventListener('clcik',()=>{
    checkImage(checkShow);
    img2.classList.add("show");
    checkShow = 2;
});

img3.addEventListener('clcik',()=>{
    checkImage(checkShow);
    img3.classList.add("show");
    checkShow = 3;
});

img4.addEventListener('clcik',()=>{
    checkImage(checkShow);
    img4.classList.add("show");
    checkShow = 4;
});



// function to check the image with "show" class.
let checkImage = (c)=>{
    if(c == 1)
    {
        img1.classList.remove("show");
    }
    else if(c == 2)
    { 
        img2.classList.remove("show");
    }
    else if(c == 3)
    {
        img3.classList.remove("show");
    }
    else if(c == 4)
    {
        img4.classList.remove("show");
    }
}
