function delet() {
    
    document.getElementById("kiriko").style.display = "none";
}

function onClickHome() {
    var x = document.getElementById("homebutton");
    if (!x.classList.contains("active")){
        if (document.getElementById("introbutton").classList.contains("active")){
            document.getElementById("introbutton").classList.remove("active");
            document.getElementById("intro").style.display = "none";
        }
        else {
            document.getElementById("aboutbutton").classList.remove("active");
            document.getElementById("about").style.display = "none";
        }
        x.classList.add("active");
        document.getElementById("home").style.display = "block";
    }
}

function onClickIntro() {
    var x = document.getElementById("introbutton");
    if (!x.classList.contains("active")){
        if (document.getElementById("homebutton").classList.contains("active")){
            document.getElementById("homebutton").classList.remove("active");
            document.getElementById("home").style.display = "none";
        }
        else {
            document.getElementById("aboutbutton").classList.remove("active");
            document.getElementById("about").style.display = "none";
        }
        x.classList.add("active");
        document.getElementById("intro").style.display = "block";
    }
}

function onClickAbout() {
    var x = document.getElementById("aboutbutton");
    if (!x.classList.contains("active")){
        if (document.getElementById("homebutton").classList.contains("active")){
            document.getElementById("homebutton").classList.remove("active");
            document.getElementById("home").style.display = "none";
        }
        else {
            document.getElementById("introbutton").classList.remove("active");
            document.getElementById("intro").style.display = "none";
        }
        x.classList.add("active");
        document.getElementById("about").style.display = "block";
    }
}