console.log("page loaded...");

function message(element) {
    
    alert("Ninja was liked!");
}


function login(element) {
    if(element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function hide(el) {

    el.remove();
}
