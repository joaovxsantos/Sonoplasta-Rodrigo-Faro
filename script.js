document.getElementsByTagName("p")[0].addEventListener("click", one);
document.getElementsByTagName("p")[1].addEventListener("click", two);
document.getElementsByTagName("p")[2].addEventListener("click", three);
document.getElementsByTagName("p")[3].addEventListener("click", four);
document.getElementsByTagName("p")[4].addEventListener("click", five);
document.getElementsByTagName("p")[5].addEventListener("click", six);
document.getElementsByTagName("p")[6].addEventListener("click", seven);
document.getElementsByTagName("p")[7].addEventListener("click", eight);
document.getElementsByTagName("p")[8].addEventListener("click", nine);


let sound = document.getElementsByTagName("audio")[0];

function one(){
    sound.src = "./sounds/Vinheta tome rodrigo faro.mp3";
    sound.play();
}

function two(){
    sound.src = "./sounds/Ui - Efeito Sonoro.mp3";
    sound.play();
}

function three(){
    sound.src = "./sounds/[EFEITO SONORO] ELE GOSTA RODRIGO FARO.mp3"
    sound.play();
}

function four(){
    sound.src = "./sounds/programa-hora-do-faro.mp3"
    sound.play();
}

function five(){
    sound.src = "./sounds/cavalo-rodrigo-faro.mp3"
    sound.play();
}

function six(){
    sound.src = "sounds/efeito-sonoro.mp3"
    sound.play();
}

function seven(){
    sound.src = "sounds/efeito-sonoro.mp3"
    sound.play();
}

function eight(){
    sound.src = "sounds/efeito-sonoro.mp3"
    sound.play();
}

function nine(){
    sound.src = "sounds/efeito-sonoro.mp3"
    sound.play();
}