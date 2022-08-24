var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle(){
    if(MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight ="200px";
    }
    else{
        MenuItems.style.maxHeight = "0px"
    }
}

/*---js for product gallery--*/

var ProductImg = document.getElementById("ProductImg");
var SmallImg =document.getElementsByClassName("small-img");

    SmallImg[0].onclick = function()
    {
        ProductImg.src = SmallImg[0].src;
    }
    SmallImg[1].onclick = function()
    {
        ProductImg.src = SmallImg[1].src;
    }
    SmallImg[2].onclick = function()
    {
        ProductImg.src = SmallImg[2].src;
    }
    SmallImg[3].onclick = function()
    {
        ProductImg.src = SmallImg[3].src;
    }
    
/*---Js for toggle form--*/

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicater = document.getElementById("Indicator");

    function register(){

        RegForm.style.transformm = "translateX(0px)";
        LoginForm.style.transformm = "translateX(0px)";
        Indicator.style.transformm = "translateX(100px)";
    }
    function login(){

        RegForm.style.transformm = "translateX(300px)";
        LoginForm.style.transformm = "translateX(300px)";
        Indicator.style.transformm = "translateX(0px)";
    }
    