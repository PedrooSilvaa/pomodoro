var pomodoro = 0;
var short = 0;
var long = 0;
var font = "";
var color = "#151932";
var modo = 0;
var tmp = 0;
var duration = 0;
var display = "";

var colorPDesativado = "transparent";


function Apply(){
    pomodoro = document.getElementById('pomodoro').value;
    short = document.getElementById('shortBreak').value;
    long = document.getElementById('longBreak').value;
    console.log(pomodoro);
    console.log(short);
    console.log(long);
    document.getElementById("minutes").innerText = pomodoro + ":00";
    document.getElementById("relogio").style.backgroundColor = color;
    document.getElementById("title-principal").style.color = color;
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

    
    //Time pomodoro 1
    function TimePomodoro1(duration, display, nextTimerFunction) {
        var timerPomodoro1  = duration, minutes, seconds;
    
        var intervalId = setInterval(function () {
            minutes = parseInt(timerPomodoro1 / 60, 10);
            seconds = parseInt(timerPomodoro1 % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timerPomodoro1 < 0) {
                console.log("Pomodoro 1 concluído!");
                clearInterval(intervalId);  // Para o intervalo quando o timer do short break chegar a zero
                nextTimerFunction();  // Chama a função para iniciar o próximo timer (pomodoro)
            }
        }, 1000);  // Alterei para 1000 milissegundos (1 segundo) para um timer mais preciso
    }
    
    function StartPomodoro1() {
        duration = 60 * pomodoro;  // Substitua pelo valor desejado para o timer do short break
        display = document.querySelector("#minutes");
        TimePomodoro1(duration, display, StartShortBreak1);  // Adiciona a função StartPomo1 como argumento
    }


    //Time short break 1
    function TimeShortBreak1(duration, display, nextTimerFunction) {
        var timerShortBreak1 = duration, minutes, seconds;
    
        var intervalId = setInterval(function () {
            minutes = parseInt(timerShortBreak1 / 60, 10);
            seconds = parseInt(timerShortBreak1 % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timerShortBreak1 < 0) {
                console.log("Short break 1 concluído!");
                voltarParaPaginaAnterior();
                clearInterval(intervalId);  // Para o intervalo quando o timer do short break chegar a zero
                nextTimerFunction();  // Chama a função para iniciar o próximo timer (pomodoro)
            }
        }, 1000);  // Alterei para 1000 milissegundos (1 segundo) para um timer mais preciso
    }
    
    function StartShortBreak1() {
        document.getElementById("game").style.display = "flex";
        document.getElementById("p-short").style.backgroundColor = color;
        document.getElementById("p-pomodoro").style.backgroundColor = colorPDesativado;
        duration = 60 * short;  // Substitua pelo valor desejado para o timer do short break
        display = document.querySelector("#minutes");
        TimeShortBreak1(duration, display, StartPomodoro2);  // Adiciona a função StartPomo1 como argumento
    }


      //Time pomodoro 2
      function TimePomodoro2(duration, display, nextTimerFunction) {
        var timerPomodoro2  = duration, minutes, seconds;
    
        var intervalId = setInterval(function () {
            minutes = parseInt(timerPomodoro2 / 60, 10);
            seconds = parseInt(timerPomodoro2 % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timerPomodoro2 < 0) {
                console.log("Pomodoro 2 concluído!");
                clearInterval(intervalId);  // Para o intervalo quando o timer do short break chegar a zero
                nextTimerFunction();  // Chama a função para iniciar o próximo timer (pomodoro)
            }
        }, 1000);  // Alterei para 1000 milissegundos (1 segundo) para um timer mais preciso
    }
    
    function StartPomodoro2() {
        document.getElementById("p-short").style.backgroundColor = colorPDesativado;
        document.getElementById("p-pomodoro").style.backgroundColor = color;
        duration = 60 * pomodoro;  // Substitua pelo valor desejado para o timer do short break
        display = document.querySelector("#minutes");
        TimePomodoro2(duration, display, StartLongBreak);  // Adiciona a função StartPomo1 como argumento
    }


    // Time long break 
    function TimeLongBreak(duration, display, nextTimerFunction) {
        var timerLongBreak = duration, minutes, seconds;
    
        var intervalId = setInterval(function () {
            minutes = parseInt(timerLongBreak / 60, 10);
            seconds = parseInt(timerLongBreak % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timerLongBreak < 0) {
                voltarParaPaginaAnterior();
                console.log("Short long concluído!");
                clearInterval(intervalId);  // Para o intervalo quando o timer do short break chegar a zero
                nextTimerFunction();  // Chama a função para iniciar o próximo timer (pomodoro)
            }
        }, 1000);  // Alterei para 1000 milissegundos (1 segundo) para um timer mais preciso
    }
    
    function StartLongBreak() {
        document.getElementById("game").style.display = "flex";
        document.getElementById("p-long").style.backgroundColor = color;
        document.getElementById("p-pomodoro").style.backgroundColor = colorPDesativado;
        duration = 60 * long;  // Substitua pelo valor desejado para o timer do short break
        display = document.querySelector("#minutes");
        TimeLongBreak(duration, display, StartPomodoro3);  // Adiciona a função StartPomo1 como argumento
    }

      //Time pomodoro 3
      function TimePomodoro3(duration, display, nextTimerFunction) {
        var timerPomodoro3  = duration, minutes, seconds;
    
        var intervalId = setInterval(function () {
            minutes = parseInt(timerPomodoro3 / 60, 10);
            seconds = parseInt(timerPomodoro3 % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timerPomodoro3 < 0) {
                console.log("Pomodoro 3 concluído!");
                clearInterval(intervalId);  // Para o intervalo quando o timer do short break chegar a zero
                nextTimerFunction();  // Chama a função para iniciar o próximo timer (pomodoro)
            }
        }, 1000);  // Alterei para 1000 milissegundos (1 segundo) para um timer mais preciso
    }
    
    function StartPomodoro3() {
        document.getElementById("p-long").style.backgroundColor = colorPDesativado;
        document.getElementById("p-pomodoro").style.backgroundColor = color;
        duration = 60 * pomodoro;  // Substitua pelo valor desejado para o timer do short break
        display = document.querySelector("#minutes");
        TimePomodoro3(duration, display, StartShortBreak2);  // Adiciona a função StartPomo1 como argumento
    }


    // Time short break 2
    function TimeShortBreak2(duration, display, nextTimerFunction) {
        var timerShortBreak2 = duration, minutes, seconds;
    
        var intervalId = setInterval(function () {
            minutes = parseInt(timerShortBreak2 / 60, 10);
            seconds = parseInt(timerShortBreak2 % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timerShortBreak2 < 0) {
                voltarParaPaginaAnterior();
                console.log("Short break 2 concluído!");
                clearInterval(intervalId);  // Para o intervalo quando o timer do short break chegar a zero
                nextTimerFunction();  // Chama a função para iniciar o próximo timer (pomodoro)
            }
        }, 1000);  // Alterei para 1000 milissegundos (1 segundo) para um timer mais preciso
    }
    
    function StartShortBreak2() {
        document.getElementById("game").style.display = "flex";
        document.getElementById("p-short").style.backgroundColor = color;
        document.getElementById("p-pomodoro").style.backgroundColor = colorPDesativado;
        duration = 60 * short;  // Substitua pelo valor desejado para o timer do short break
        display = document.querySelector("#minutes");
        TimeShortBreak2(duration, display, StartPomodoro4);  // Adiciona a função StartPomo1 como argumento
    }

      //Time pomodoro 4
      function TimePomodoro4(duration, display, nextTimerFunction) {
        var timerPomodoro4  = duration, minutes, seconds;
    
        var intervalId = setInterval(function () {
            minutes = parseInt(timerPomodoro4 / 60, 10);
            seconds = parseInt(timerPomodoro4 % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timerPomodoro4 < 0) {
                console.log("Pomodoro 4 concluído!");
                clearInterval(intervalId);  // Para o intervalo quando o timer do short break chegar a zero
                nextTimerFunction();  // Chama a função para iniciar o próximo timer (pomodoro)
            }
        }, 1000);  // Alterei para 1000 milissegundos (1 segundo) para um timer mais preciso
    }
    
    function StartPomodoro4() {
        document.getElementById("p-short").style.backgroundColor = colorPDesativado;
        document.getElementById("p-pomodoro").style.backgroundColor = color;
        duration = 60 * pomodoro; 
        display = document.querySelector("#minutes");
        TimePomodoro4(duration, display, Fim);  
    }
    function Fim() {
        document.getElementById("p-pomodoro").style.backgroundColor = colorPDesativado;  
    }

    function Game(){
        document.getElementById("jogoVelha").style.display = "flex";
        document.getElementById("game").style.display = "none";
    }

    function voltarParaPaginaAnterior() {
        document.getElementById("jogoVelha").style.display = "none";
    }

    function Back(){
        document.getElementById("game").style.display = "none";
    }