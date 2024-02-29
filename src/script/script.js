var pomodoro = 0;
var short = 0;
var long = 0;
var font = "";
var color = "";

function Apply(){
    pomodoro = document.getElementById('pomodoro').value;
    short = document.getElementById('shortBreak').value;
    long = document.getElementById('longBreak').value;
    document.getElementById("minutes").innerText = pomodoro + ":00";
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

function Time(duration, display){
    var timer = duration, minutes, seconds;
    setInterval(function(){

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        display.textContent = minutes + ":" + seconds;

        if(--timer < 0){
            timer = duration;
        }

    }, 1000)
}

function StartTime(){
    var duration = 60 * pomodoro;
    var display = document.querySelector("#minutes");

    Time(duration, display);
}