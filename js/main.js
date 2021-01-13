document.addEventListener("DOMContentLoaded",function(){
    const menu = document.getElementsByClassName("menu")[0];
    const navLeft = document.getElementsByClassName("navbar-navigation-left")[0];
    const navRight = document.getElementsByClassName("navbar-navigation-right")[0];
    console.log(menu);
    console.log(navLeft);
    console.log(navRight);
    menu.addEventListener('click',function(){
        navLeft.classList.toggle('showLeft');
        navRight.classList.toggle('showRight');
    });
},false);