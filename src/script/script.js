var pomodoro = 0;
var short = 0;
var long = 0;
var font = "";
var color = "";

function Apply(){
    pomodoro = document.getElementById('pomodoro').value;
    short = document.getElementById('shortBreak').value;
    long = document.getElementById('longBreak').value;
    console.log(pomodoro);
    console.log(short);
    console.log(long);
    document.getElementById("relogio").style.backgroundColor = color;
    document.getElementById("p-pomodoro").style.backgroundColor = color;
    document.getElementById("principal").style.fontFamily = font;
    
    Close();
}

function font1(){
    font = "\"Madimi One\", sans-serif";
}

function font2(){
    font = "\"Playfair Display\", serif";
}
color
function font3(){
    font = "\"Oswald\", sans-serif";
}

function color1(){
    color = "#f8706f";
}

function color2(){
    color = "#6ff3f8";
}

function color3(){
    color = "#d981f9";
}

function Sentings(){
    document.getElementById("window").style.display = "flex";
}

function Close(){
    document.getElementById("window").style.display = "none";
}