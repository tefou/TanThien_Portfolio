
var typed = new Typed(".text", {
    strings: ["Data Processing", "Data Processing", "Machine Learning" , "Business Intelligence"],
    typeSpeed:90,
    backSpeed:90,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
