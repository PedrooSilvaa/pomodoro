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
    console.log(pomodoro)
    console.log(short)
    console.log(long)
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

function Time(duration, display){
    var timer = duration, minutes, seconds;
    var timer2 = duration, minutes, seconds;
    var timer3 = duration, minutes, seconds;

    setInterval(function(){

        if(modo == 1 || modo == 3 || modo == 5 ||modo == 7){
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
        }else if(modo == 2 || modo == 6){
            minutes = parseInt(timer2 / 60, 10);
            seconds = parseInt(timer2 % 60, 10);
        }else{
            minutes = parseInt(timer3 / 60, 10);
            seconds = parseInt(timer3 % 60, 10);
        }

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        display.textContent = minutes + ":" + seconds;
        
        if(--timer < 0 && modo == 1){
            timer = 0;
            console.log("modo 1" + duration);
            modo = 2;
            StartTime();
            timer2 = duration;
        }
        if(--timer2 < 0 && modo == 2){
            console.log("modo 2" + duration);
            timer2 = 0;
            modo = 3;
            StartTime();
            timer = duration;
        }
        if(--timer < 0 && modo == 3){
            timer = 0;
            console.log("modo 3" + duration);
            modo = 4;
            StartTime();
            timer3 = duration;
            
        }
        if(--timer3 < 0 && modo == 4){
            timer3 = 0;
            console.log("modo 4" + duration);
            modo = 5;
            StartTime();
            timer = duration;

        }
        if(--timer < 0 && modo == 5){
            timer = 0;
            console.log("modo 5" + duration);
            modo = 6;
            StartTime();
            timer2 = duration;

        }
        if(--timer2 < 0 && modo == 6){
            timer2 = 0;
            console.log("modo 6" + duration);
            modo = 7;
            StartTime();
            timer = duration;

        }
        if(--timer < 0 && modo == 7){
            Pause();
            timer = 0;
            console.log("modo 7" + duration);
        }

    }, 500)
}

function StartTime(){
    if(modo == 1){
        duration = (60 * pomodoro);
        console.log("modo1");
        display = document.querySelector("#minutes");
        TrocaMod();
    }
    if(modo == 2){
        duration = (60 * short);
        console.log("modo2");
        display = document.querySelector("#short-minutes");
        TrocaMod();
    }
    if(modo == 3){
        duration = 60 * pomodoro;
        console.log("modo3");
        display = document.querySelector("#minutes");
        TrocaMod();
    }
    if(modo == 4){
        duration = 60 * long;
        console.log("modo4");
        display = document.querySelector("#long-minutes");
        TrocaMod();
    }
    if(modo == 5){
        duration = 60 * pomodoro;
        console.log("modo5");
        display = document.querySelector("#minutes");
        TrocaMod();
    }
    if(modo == 6){
        duration = 60 * short;
        console.log("modo6")
        display = document.querySelector("#short-minutes");
        TrocaMod();
    }
    if(modo == 7){
        duration = 60 * pomodoro;
        console.log("modo7")
        display = document.querySelector("#minutes");
    }
    
    Time(duration, display);

}


function TrocaMod(){
    // if(modo == 2){
    //     document.getElementById("short-re").style.display = "flex";
    // }
    // if(modo == 3){
    //     document.getElementById("short-re").style.display = "none";
    // }
    // if(modo == 4){
    //     document.getElementById("short-re").style.display = "none";
    //     document.getElementById("long-relo").style.display = "flex";
    // }
    // if(modo == 5){
    //     document.getElementById("short-re").style.display = "none";
    //     document.getElementById("long-relo").style.display = "none";
    // }
    // if(modo == 6){
    //     document.getElementById("short-re").style.display = "flex";
    // }
    // if(modo == 7){
    //     document.getElementById("short-re").style.display = "none";
    //     document.getElementById("short-re").style.display = "none";
    // }
}


function Pause(){
    timer = 0;
    duration = 0;
}