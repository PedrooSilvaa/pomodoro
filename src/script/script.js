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

function TimePomo1(duration, display){
        var timerP1 = duration, minutes, seconds;
    
        setInterval(function(){
            minutes = parseInt(timerP1 / 60, 10);
            seconds = parseInt(timerP1 % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds
    
            display.textContent = minutes + ":" + seconds;
    
                if(--timerP1 < 0){
                    console.log("modo 1 " + duration);
                    timerP1 = 0;
                    modo = 2;
                }
        }, 300)
    }
    
    function StartPomo1(){
            duration = 60 * pomodoro;
            display = document.querySelector("#minutes");
            TimePomo1(duration, display);
    }

    function TimeShort(duration, display){
        var timerS = duration, minutes, seconds;
    
        setInterval(function(){
            minutes = parseInt(timerS / 60, 10);
            seconds = parseInt(timerS % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds
    
            display.textContent = minutes + ":" + seconds;
    
            if(--timerS < 0){
                console.log("modo 2 " + duration);
                timerS = 0;
                modo = 3;
            }
            
        }, 300)
    }
    
    function StartShort(){
            duration = 60 * short;
            display = document.querySelector("#short-minutes");
            TimeShort(duration, display);
            
}

function TimePomo2(duration, display){
        var timerP2 = duration, minutes, seconds;
    
        setInterval(function(){
            minutes = parseInt(timerP2 / 60, 10);
            seconds = parseInt(timerP2 % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds
    
            display.textContent = minutes + ":" + seconds;
    
                if(--timerP2 < 0){
                    console.log("modo 3 " + duration);
                    timerP2 = 0;
                    modo = 4;   
                }
    
        }, 300)

    }
    
    function StartPomo2(){
        duration = 60 * pomodoro;
        display = document.querySelector("#minutes");
        TimePomo2(duration, display);
        
}
    
  
function TimeLong(duration, display){
        var timerL = duration, minutes, seconds;
    
        setInterval(function(){
            minutes = parseInt(timerL / 60, 10);
            seconds = parseInt(timerL % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds
    
            display.textContent = minutes + ":" + seconds;
    
                if(--timerL < 0){
                    console.log("modo 4 " + duration);
                    timerL = 0;
                    modo = 5;
                }
        }, 300)
    }
    
    function StartLong(){
            duration = 60 * short;
            display = document.querySelector("#long-minutes");
            TimeLong(duration, display);
            
}

function TimePomo3(duration, display){
        var timerP3 = duration, minutes, seconds;
    
        setInterval(function(){
            minutes = parseInt(timerP3 / 60, 10);
            seconds = parseInt(timerP3 % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds
    
            display.textContent = minutes + ":" + seconds;
    
                if(--timerP3 < 0){
                    console.log("modo 5 " + duration);
                    timerP3 = 0;
                    modo = 6;
                }
    
        }, 300)
    }
    
    
    function StartPomo3(){
            duration = 60 * pomodoro;
            display = document.querySelector("#minutes");
            TimePomo3(duration, display);
}

function TimeShort1(duration, display){
        var timerS1 = duration, minutes, seconds;
    
        setInterval(function(){
            minutes = parseInt(timerS1 / 60, 10);
            seconds = parseInt(timerS1 % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds
    
            display.textContent = minutes + ":" + seconds;
    
                if(--timerS1 < 0){
                    console.log("modo 6 " + duration);
                    timerS1 = 0;
                    modo = 7;
                }
    
        }, 300)
    }
    

    function StartShort1(){
            duration = 60 * short;
            display = document.querySelector("#short-minutes");
            TimeShort1(duration, display);
            
}

function TimePomo4(duration, display){
        var timerP4 = duration, minutes, seconds;
    
        setInterval(function(){
            minutes = parseInt(timerP4 / 60, 10);
            seconds = parseInt(timerP4 % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds
    
            display.textContent = minutes + ":" + seconds;
            
                if(--timerP4 < 0){
                    console.log("modo 7 " + duration);
                    timerP4 = 0;
            }
    
        }, 300)
        
    }
    
    function StartPomo4(){
            duration = 60 * pomodoro;
            display = document.querySelector("#minutes");
            TimePomo4(duration, display);
            
}


function TrocaMod(){
    if(modo == 2){
        document.getElementById("short-re").style.display = "flex";
        StartShort();
    }
    if(modo == 3){
        document.getElementById("short-re").style.display = "none";
        StartPomo2();
    }
    if(modo == 4){
        document.getElementById("short-re").style.display = "none";
        document.getElementById("long-relo").style.display = "flex";
        StartLong();
    }
    if(modo == 5){
        document.getElementById("short-re").style.display = "none";
        document.getElementById("long-relo").style.display = "none";
        StartPomo3();
    }
    if(modo == 6){
        document.getElementById("short-re").style.display = "flex";
        StartShort1();
    }
    if(modo == 7){
        document.getElementById("short-re").style.display = "none";
        document.getElementById("short-re").style.display = "none";
        StartPomo4();
    }
}


function Pause(){
    timer = 0;
    duration = 0;
}