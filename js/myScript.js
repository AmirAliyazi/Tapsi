var toggler=document.querySelector(".nav__toggler");

var menu=document.querySelector(".menu");

toggler.addEventListener("click",(e)=>{
    console.log("clicked");
    menu.classList.toggle("expanded");
    toggler.classList.toggle("open");
});