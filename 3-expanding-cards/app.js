
const imgs = document.querySelectorAll(".img-container");

imgs.forEach(img =>{
    img.addEventListener('click', ()=>{
        removeActiveClass();
        img.classList.add("show");
    });
});

const removeActiveClass = ()=>{
    imgs.forEach(img => {
        img.classList.remove("show");
    })
}