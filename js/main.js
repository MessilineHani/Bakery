const logo = document.getElementById("logo");
logo.onclick = () =>{
    window.location.href = "https://messilinehani.github.io/bakery/";
}
// Controlling the menu 
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close");
const menuBtn = document.getElementById("menu-icon");
try{
closeBtn.onclick = () =>{
    menu.style.display = "none";
    sectionsDC();
}
menuBtn.onclick = () =>{
    menu.style.display = "flex";
    sectionsDC();
}
function sectionsDC(){  // DC = Display controller
    if (menu.style.display === "flex"){
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";
    }else{
        document.body.style.height = "fit-content";
        document.body.style.overflow = "visible";
    }
}
}catch(err){
    window.alert("something went wrong");
}
// Alert message 
const btns = document.querySelectorAll(".btn");
btns.forEach(btn =>{
    btn.onclick = () =>{
        window.alert("Coming soon");
    }
})
// Scroll up
const scrollBTN = document.getElementById("scroll-btn");
function show_hide_SB(){ // SB = Scroll button
    if(window.scrollY >= 1200){
        scrollBTN.style.display = "flex";
        scrollBTN.style.justifyContent = "center";
        scrollBTN.style.alignItems = "center";
        scrollBTN.onclick = () =>{
            window.scrollTo(0,0) ;
        }
    }
    else{
        scrollBTN.style.display = "none";
    }
}
show_hide_SB();
window.addEventListener("scroll", () =>{
    show_hide_SB();
})