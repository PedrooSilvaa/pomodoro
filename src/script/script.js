var pomodoro = 0;
var short = 0;
var long = 0;
var font = "";
var color = "";
var modo = 0;
var tmp = 0;
var duration = 0;
var display = "";
function Apply(){
    pomodoro = document.getElementById('pomodoro').value;
    short = document.getElementById('shortBreak').value;
    long = document.getElementById('longBreak').value;
    console.log(pomodoro);
    console.log(short);
    console.log(long);
    document.getElementById("minutes").innerText = pomodoro + ":00";
    document.getElementById("relogio").style.backgroundColor = color;
    document.getElementById("p-pomodoro").style.backgroundColor = color;
    document.getElementById("start").style.backgroundColor = color;
    document.getElementById("principal").style.fontFamily = font;
    modo = 1;
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

function TimePomo(duration, display){
    var timer = duration, minutes, seconds;

    setInterval(function(){
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        display.textContent = minutes + ":" + seconds;

        if(--timer < 0 && modo == 1){
            console.log("modo 1 " + duration);
            timer = 0;
            modo = 2;
            TrocaMod();
        }
        if(--timer < 0 && modo == 3){
            console.log("modo 3 " + duration);
            timer = 0;
            modo = 4;   
            TrocaMod();       
        }
        if(--timer < 0 && modo == 5){
            console.log("modo 5 " + duration);
            timer = 0;
            modo = 6;
            TrocaMod();
        }
        if(--timer < 0 & modo == 7){
            console.log("modo 7 " + duration);
            timer = 0;
        }

    }, 1000)
}

function StartPomo(){
        duration = 60 * pomodoro;
        display = document.querySelector("#minutes");
    
    TimePomo(duration, display);
}

function TimeShort(duration, display){
    var timerS = duration, minutes, seconds;

    setInterval(function(){
        minutes = parseInt(timerS / 60, 10);
        seconds = parseInt(timerS % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        display.textContent = minutes + ":" + seconds;

        if(--timerS < 0 && modo == 2){
            console.log("modo 2 " + duration);
            timerS = 0;
            modo = 3;
            TrocaMod();
        }
        if(--timerS < 0 && modo == 6){
            console.log("modo 2 " + duration);
            timerS = 0;
            modo = 7;
            TrocaMod();
        }

    }, 1000)
}

function StartShort(){
        duration = 60 * short;
        display = document.querySelector("#short-minutes");
    
    TimeShort(duration, display);
}

function TimeLong(duration, display){
    var timerL = duration, minutes, seconds;

    setInterval(function(){
        minutes = parseInt(timerL / 60, 10);
        seconds = parseInt(timerL % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        display.textContent = minutes + ":" + seconds;

        if(--timerL < 0 && modo == 4){
            console.log("modo 4 " + duration);
            timerL = 0;
            modo = 5;
            TrocaMod();
        }

    }, 1000)
}

function StartLong(){
        duration = 60 * short;
        display = document.querySelector("#long-minutes");
    
    TimeLong(duration, display);
}


function TrocaMod(){
    if(modo == 2){
        document.getElementById("short-re").style.display = "flex";
        StartShort();
    }
    if(modo == 3){
        document.getElementById("short-re").style.display = "none";
        StartPomo();  
    }
    if(modo == 4){
        document.getElementById("short-re").style.display = "none";
        document.getElementById("long-relo").style.display = "flex";
        StartLong();
    }
    if(modo == 5){
        document.getElementById("short-re").style.display = "none";
        document.getElementById("long-relo").style.display = "none";
        StartPomo();
    }
    if(modo == 6){
        document.getElementById("short-re").style.display = "flex";
        StartShort();
    }
    if(modo == 7){
        document.getElementById("short-re").style.display = "none";
        document.getElementById("short-re").style.display = "none";
        StartPomo();
    }
}


function Pause(){
    timer = 0;
    duration = 0;
}