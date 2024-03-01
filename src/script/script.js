var pomodoro = 0;
var short = 0;
var long = 0;
var font = "";
var color = "";
var modo = 0;
var tmp = 0;

function Apply(){
    pomodoro = document.getElementById('pomodoro').value;
    short = document.getElementById('shortBreak').value;
    long = document.getElementById('longBreak').value;
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
    setInterval(function(){

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        display.textContent = minutes + ":" + seconds;
       
        // TrocaMod();
        
        if(--timer < 0 && modo == 1){
            modo = 2;
            console.log(duration);
            StartTime();
            timer = duration;
        }
        if(--timer < 0  && modo == 2){
            modo = 3;
            console.log(duration);
            StartTime();
            timer = duration;
        }
        if(--timer < 0  && modo == 3){
            modo = 4;
            console.log(duration);
            StartTime();
            timer = duration;
            
        }
        if(--timer < 0  && modo == 4){
            modo = 5;
            console.log(duration);
            StartTime();
            timer = duration;

        }
        if(--timer < 0  && modo == 5){
            modo = 6;
            console.log(duration);
            StartTime();
            timer = duration;

        }
        if(--timer < 0  && modo == 6){
            modo = 7;
            console.log(duration);
            StartTime();
            timer = duration;

        }
        if(--timer < 0  && modo == 7){
            modo = 7;
            console.log(duration);
            StartTime();
            timer = 0;
            
        }

    }, 500)
}

function StartTime(){
    if(modo == 1){
        var duration = (60 * pomodoro);
        console.log("modo1");
    }
    if(modo == 2){
        duration = (60 * short);
        console.log("modo2");
    }
    if(modo == 3){
        duration = 60 * pomodoro;
        console.log("modo3");
    }
    if(modo == 4){
        duration = 60 * long;
        console.log("modo4");
    }
    if(modo == 5){
        duration = 60 * pomodoro;
        console.log("modo5");
    }
    if(modo == 6){
        duration = 60 * short;
    }
    if(modo == 7){
        duration = 60 * pomodoro;
    }
    var display = document.querySelector("#minutes");
    Time(duration, display);

}



// function ModoP(){
//     // document.getElementById("p-pomodoro").style.backgroundColor = color;
//     // document.getElementById("p-shortBreak").style.backgroundColor = "transparent";
//     // document.getElementById("p-longBreak").style.backgroundColor = "transparent";
// }
// function ModoShort(){
//     // document.getElementById("p-pomodoro").style.backgroundColor = "transparent";
//     // document.getElementById("p-shortBreak").style.backgroundColor = color;
// }
// function ModoLong(){
//     // document.getElementById("p-pomodoro").style.backgroundColor = "transparent";
//     // document.getElementById("p-longBreak").style.backgroundColor = color;
// }

// function TrocaMod(){

//     // if(modo == 1){
//     //     ModoP();
//     // }
//     // if(modo == 2){
//     //     ModoShort();
//     // }
//     // if(modo == 3){
//     //     ModoP();
//     // }

//     // if(modo == 4){ 
//     //     ModoLong();
//     // }

//     // if(modo == 5){
//     //     ModoP();
//     // }
//     // if(modo == 6){
//     //     ModoShort();
//     // }
//     // if(modo == 7){
//     //     ModoP();
//     // }
// }