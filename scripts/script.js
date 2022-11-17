let menu = document.getElementById("optionMenu");
let nav = document.getElementsByTagName("nav")[0];

menu.addEventListener("click", show);

function show(){
    if(nav.classList.contains("show") == false){
        nav.classList.add("show");
    }
    else{
        nav.classList.remove("show");
    }
}