const $doc = document.querySelector(".start");

function agregar() { 
    document.querySelector(".title").classList.toggle("title-transition");

    if(document.querySelector(".title-transition")) {
        let music = new Audio("Gameboy Startup Sound.mp3");
        music.play();
    }
}

$doc.addEventListener("click", agregar);