var jogador = "X";
var jgUm = "";
var jgDois = "";
var jgTres = "";
var jgQuatro = "";
var jgCinco = "";
var jgSeis = "";
var jgSete = "";
var jgOito = "";
var jgNove = "";
var ganhador = "";
var jogadas = 0;
var placarX = 0;
var placarTie = 0;
var placarO = 0;
var modo = 1;
var continuar = true;

function ModoDupla(){
    modo = 1;
    document.getElementById("modoUm").style.backgroundColor = "#31c4be";
    document.getElementById("modoDois").style.backgroundColor = "#a8bec9";
    Reset();
    placarO = 0;
    placarX = 0;
    placarTie = 0;
    document.getElementById("placarX").innerText = "placar x \n" + placarX;
    document.getElementById("placarTie").innerText = "placar tie \n" + placarTie;
    document.getElementById("placarO").innerText = "placar o \n" + placarO;
}

function ModoRobo(){
    modo = 2;
    document.getElementById("modoDois").style.backgroundColor = "#31c4be";
    document.getElementById("modoUm").style.backgroundColor = "#a8bec9";
    Reset();
    placarO = 0;
    placarX = 0;
    placarTie = 0;
    document.getElementById("placarX").innerText = "placar x \n" + placarX;
    document.getElementById("placarTie").innerText = "placar tie \n" + placarTie;
    document.getElementById("placarO").innerText = "placar o \n" + placarO;
}

function PlayUm(){
    jgUm = document.getElementById('um').innerText;
    console.log(jgUm)
        if(jgUm == ""){
            jgUm = jogador;
            document.getElementById('um').innerText = jgUm;
            jogadas++;
            VerificationWin();
            Tie();
            TrocaJog();
            JogadaRobot();
        }else {
            alert("Posição ocupada, escolha novamente.")
  
        }
    console.log("PlayUm clicked");
}

function PlayDois() {
    jgDois = document.getElementById('dois').innerText;
    console.log(jgDois);
    if (jgDois == "") {
        jgDois = jogador;
        document.getElementById('dois').innerText = jgDois;
        jogadas++;
        VerificationWin();
        Tie();
        TrocaJog();
        JogadaRobot();
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlayDois clicked");
}

function PlayTres() {
    jgTres = document.getElementById('tres').innerText;
    console.log(jgTres);
    if (jgTres == "") {
        jgTres = jogador;
        document.getElementById('tres').innerText = jgTres;
        jogadas++;
        VerificationWin();
        Tie();
        TrocaJog();
        JogadaRobot();
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlayTres clicked");
}

function PlayQuatro() {
    jgQuatro = document.getElementById('quatro').innerText;
    console.log(jgQuatro);
    if (jgQuatro == "") {
        jgQuatro = jogador;
        document.getElementById('quatro').innerText = jgQuatro;
        jogadas++;
        VerificationWin();
        Tie();
        TrocaJog();
        JogadaRobot();
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlayQuatro clicked");
}

function PlayCinco() {
    jgCinco = document.getElementById('cinco').innerText;
    console.log(jgCinco);
    if (jgCinco == "") {
        jgCinco = jogador;
        document.getElementById('cinco').innerText = jgCinco;
        jogadas++;
        VerificationWin();
        Tie();
        TrocaJog();
        JogadaRobot();
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlayCinco clicked");
}

function PlaySeis() {
    jgSeis = document.getElementById('seis').innerText;
    console.log(jgSeis);
    if (jgSeis == "") {
        jgSeis = jogador;
        document.getElementById('seis').innerText = jgSeis;
        jogadas++;
        VerificationWin();
        Tie();
        TrocaJog();
        JogadaRobot();
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlaySeis clicked");
}

function PlaySete() {
    jgSete = document.getElementById('sete').innerText;
    console.log(jgSete);
    if (jgSete == "") {
        jgSete = jogador;
        document.getElementById('sete').innerText = jgSete;
        jogadas++; 
        VerificationWin();
        Tie();
        TrocaJog();
        JogadaRobot();
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlaySete clicked");
}

function PlayOito() {
    jgOito = document.getElementById('oito').innerText;
    console.log(jgOito);
    if (jgOito == "") {
        jgOito = jogador;
        document.getElementById('oito').innerText = jgOito;
        jogadas++;
        VerificationWin();
        Tie();
        TrocaJog();
        JogadaRobot();
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlayOito clicked");
}

function PlayNove() {
    jgNove = document.getElementById('nove').innerText;
    console.log(jgNove);
    if (jgNove == "") {
        jgNove = jogador;
        document.getElementById('nove').innerText = jgNove;
        jogadas++;
        VerificationWin();
        Tie();
        TrocaJog();
        JogadaRobot();
    } else {
        alert("Posição ocupada, escolha novamente.");
    }
    console.log("PlayNove clicked");
}

function Reset(){
    document.getElementById('um').innerText = "";
    document.getElementById('dois').innerText = "";
    document.getElementById('tres').innerText = "";
    document.getElementById('quatro').innerText = "";
    document.getElementById('cinco').innerText = "";
    document.getElementById('seis').innerText = "";
    document.getElementById('sete').innerText = "";
    document.getElementById('oito').innerText = "";
    document.getElementById('nove').innerText = "";
    jogador = "X";
    jgUm = "";
    jgDois = "";
    jgTres = "";
    jgQuatro = "";  
    jgCinco = "";
    jgSeis = "";
    jgSete = "";
    jgOito = "";
    jgNove = "";
    jogadas = 0;
    continuar = true;
}

function VerificationWin(){

    if(jgUm == jgDois && jgDois == jgTres){
        if(jgUm != ""){
            ganhador = jgUm;
            ImprimirWin();
        }
    }
        
   else if(jgQuatro == jgCinco && jgCinco == jgSeis){
        if(jgQuatro != ""){
            ganhador = jgQuatro;
            ImprimirWin();
        }
    }

    else if(jgSete == jgOito && jgOito == jgNove){
        if(jgSete != ""){     
            ganhador = jgSete;
            ImprimirWin();
        }
    }
    // p
    // 147
    // 258
    // 369

    else if(jgUm == jgQuatro && jgQuatro == jgSete){
        if(jgUm != ""){
            ganhador = jgUm;
            ImprimirWin();
        }
    }

    else if(jgDois == jgCinco && jgCinco == jgOito){
        if(jgDois != ""){
            ganhador = jgDois;
            ImprimirWin();
        }
    }

    else if(jgTres == jgSeis && jgSeis == jgNove){
        if(jgTres != ""){
            ganhador = jgTres;
            ImprimirWin();
        }
    }
        // c
        // 159
        // 357

    else if(jgUm == jgCinco && jgCinco == jgNove){
        if(jgUm != ""){
            ganhador = jgUm;
            ImprimirWin();
        }
    }

    else if(jgTres == jgCinco && jgCinco == jgSete){
        if(jgTres != ""){
            ganhador = jgTres;
        ImprimirWin();
        }
    }
}

function ImprimirWin(){
    if(ganhador == "X" || ganhador == "O"){
        continuar = false;
        document.getElementById("winner").style.display = 'flex';
        document.getElementById("saida-winner").innerText = "(" + ganhador + ") TAKES THE ROUND";
    }
    if(ganhador == "X"){
    placarX++
    document.getElementById("placarX").innerText = "placar x \n" + placarX;
    }else{
    placarO++;
    document.getElementById("placarO").innerText = "placar o \n" + placarO;
    }
}

function Tie(){
    if(jogadas == 9 & ganhador == ""){
        document.getElementById("winner").style.display = 'flex';
        document.getElementById("paragraph-winner").innerText = "";
        document.getElementById("saida-winner").innerText = "Tie";
        placarTie++;
        document.getElementById("placarTie").innerText = "placar tie \n" + placarTie;
        Reset();
    }
}

function Restart (){
    ganhador = "";
    Reset();
    document.getElementById("winner").style.display = 'none';
}

function Quit(){
    document.getElementById("quiter").style.display = 'flex';
}

function TrocaJog(){
    if (jogador == "X") {
        jogador = "O";
    }else if(jogador == "O"){
        jogador = "X";
    }
}


function JogadaRobot(){
if(modo == 2){
    if(continuar == true){
        if(jogador == "O"){
            //123
            if (jgUm == "O" && jgDois == "O" && jgTres == "") {
                jgTres = jogador;
                document.getElementById("tres").innerText = jgTres;
                jogadas++;
                jogador = "X";
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgUm == "O" && jgDois == "" && jgTres == "O") {
                jgDois = jogador;
                document.getElementById("dois").innerText = jgDois;
                jogadas++;
                jogador = "X";
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgUm == "" && jgDois == "O" && jgTres == "O") {
                jgUm = jogador;
                document.getElementById("um").innerText = jgUm;
                jogadas++;
                jogador = "X";
                TrocaJog();
                VerificationWin();
                Tie();
            }

            //456
            else if (jgQuatro == "O" && jgCinco == "O" && jgSeis == "") {
                jgSeis = jogador;
                document.getElementById("seis").innerText = jgSeis;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgQuatro == "O" && jgCinco == "" && jgSeis == "O") {
                jgCinco = jogador;
                document.getElementById("cinco").innerText = jgCinco;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgQuatro == "" && jgCinco == "O" && jgSeis == "O") {
                jgQuatro = jogador;
                document.getElementById("quatro").innerText = jgQuatro;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            }
            
            //789
            
            else if (jgSete == "O" && jgOito == "O" && jgNove == "") {
                jgNove = jogador;
                document.getElementById("nove").innerText = jgNove;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgSete == "O" && jgOito == "" && jgNove == "O") {
                jgOito = jogador;
                document.getElementById("oito").innerText = jgOito;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgSete == "" && jgOito == "O" && jgNove == "O") {
                jgSete = jogador;
                document.getElementById("sete").innerText = jgSete;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            }
            
            //147
            else if (jgUm == "O" && jgQuatro == "O" && jgSete == "") {
                jgSete = jogador;
                document.getElementById("sete").innerText = jgSete;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgUm == "O" && jgQuatro == "" && jgSete == "O") {
                jgQuatro = jogador;
                document.getElementById("quatro").innerText = jgQuatro;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgUm == "" && jgQuatro == "O" && jgSete == "O") {
                jgUm = jogador;
                document.getElementById("um").innerText = jgUm;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            }
            
            //258
            else if (jgDois == "O" && jgCinco == "O" && jgOito == "") {
                jgOito = jogador;
                document.getElementById("oito").innerText = jgOito;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgDois == "O" && jgCinco == "" && jgOito == "O") {
                jgCinco = jogador;
                document.getElementById("cinco").innerText = jgCinco;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgDois == "" && jgCinco == "O" && jgOito == "O") {
                jgDois = jogador;
                document.getElementById("dois").innerText = jgDois;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            }
            
            //369
            
            else if (jgTres == "O" && jgSeis == "O" && jgNove == "") {
                jgNove = jogador;
                document.getElementById("nove").innerText = jgNove;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgTres == "O" && jgSeis == "" && jgNove == "O") {
                jgSeis = jogador;
                document.getElementById("seis").innerText = jgSeis;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgTres == "" && jgSeis == "O" && jgNove == "O") {
                jgTres = jogador;
                document.getElementById("tres").innerText = jgTres;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            }
            
            //159
            else if (jgUm == "O" && jgCinco == "O" && jgNove == "") {
                jgNove = jogador;
                document.getElementById("nove").innerText = jgNove;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgUm == "O" && jgCinco == "" && jgNove == "O") {
                jgCinco = jogador;
                document.getElementById("cinco").innerText = jgCinco;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgUm == "" && jgCinco == "O" && jgNove == "O") {
                jgUm = jogador;
                document.getElementById("um").innerText = jgUm;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            }
            
            //357
            
            else if (jgTres == "O" && jgCinco == "O" && jgSete == "") {
                jgSete = jogador;
                document.getElementById("sete").innerText = jgSete;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgTres == "O" && jgCinco == "" && jgSete == "O") {
                jgCinco = jogador;
                document.getElementById("cinco").innerText = jgCinco;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgTres == "" && jgCinco == "O" && jgSete == "O") {
                jgTres = jogador;
                document.getElementById("tres").innerText = jgTres;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            }

            //123
            else if(jgUm == "X" && jgDois == "X" && jgTres == ""){
                jgTres = jogador;
                document.getElementById("tres").innerText = jgTres;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            }else if(jgUm == "X" && jgDois == "" && jgTres == "X"){
                jgDois = jogador;
                document.getElementById("dois").innerText = jgDois;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie(); 
            }else if(jgUm == "" && jgDois == "X" && jgTres == "X"){
                jgUm = jogador;
                document.getElementById("um").innerText = jgUm;
                jogadas++; 
                TrocaJog();
                VerificationWin();
                Tie();
            }

            //456

            else if(jgQuatro == "X" && jgCinco == "X" && jgSeis == ""){
                jgSeis = jogador;
                document.getElementById("seis").innerText = jgSeis;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            }else if(jgQuatro == "X" && jgCinco == "" && jgSeis == "X"){
                jgCinco = jogador;
                document.getElementById("cinco").innerText = jgCinco;
                jogadas++;  
            TrocaJog();
                VerificationWin();
                Tie();
            }else if(jgQuatro == "" && jgCinco == "X" && jgSeis == "X"){
                jgQuatro = jogador;
                document.getElementById("quatro").innerText = jgQuatro;
                jogadas++; 
                TrocaJog();
                VerificationWin();
                Tie();
            }


            //789

            else if(jgSete == "X" && jgOito == "X" && jgNove == ""){
                jgNove = jogador;
                document.getElementById("nove").innerText = jgNove;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            }else if(jgSete == "X" && jgOito == "" && jgNove == "X"){
                jgOito = jogador;
                document.getElementById("oito").innerText = jgOito;
                jogadas++; 
                TrocaJog();
                VerificationWin();
                Tie();
            }else if(jgSete == "" && jgOito == "X" && jgNove == "X"){
                jgSete = jogador;
                document.getElementById("sete").innerText = jgSete;
                jogadas++; 
                TrocaJog();
                VerificationWin();
                Tie();
            }

            //147
            else if(jgUm == "X" && jgQuatro == "X" && jgSete == ""){
                jgSete = jogador;
                document.getElementById("sete").innerText = jgSete;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            }else if(jgUm == "X" && jgQuatro == "" && jgSete == "X"){
                jgQuatro = jogador;
                document.getElementById("quatro").innerText = jgQuatro;
                jogadas++; 
                TrocaJog();
                VerificationWin();
                Tie();
            }else if(jgUm == "" && jgQuatro == "X" && jgSete == "X"){
                jgUm = jogador;
                document.getElementById("um").innerText = jgUm;
                jogadas++; 
                TrocaJog();
                VerificationWin();
                Tie();
            }

            //258
            else if (jgDois == "X" && jgCinco == "X" && jgOito == "") {
                jgOito = jogador;
                document.getElementById("oito").innerText = jgOito;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgDois == "X" && jgCinco == "" && jgOito == "X") {
                jgCinco = jogador;
                document.getElementById("cinco").innerText = jgCinco;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgDois == "" && jgCinco == "X" && jgOito == "X") {
                jgDois = jogador;
                document.getElementById("dois").innerText = jgDois;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            }
            
            //369

            else if (jgTres == "X" && jgSeis == "X" && jgNove == "") {
                jgNove = jogador;
                document.getElementById("nove").innerText = jgNove;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgTres == "X" && jgSeis == "" && jgNove == "X") {
                jgSeis = jogador;
                document.getElementById("seis").innerText = jgSeis;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgTres == "" && jgSeis == "X" && jgNove == "X") {
                jgTres = jogador;
                document.getElementById("tres").innerText = jgTres;
                jogadas++;
            TrocaJog();
                VerificationWin();
                Tie();
            }

            //159
            else if(jgUm == "X" && jgCinco == "X" && jgNove == ""){
                jgNove = jogador;
                document.getElementById("nove").innerText = jgNove;
                jogadas++;
            TrocaJog();
                VerificationWin();
                Tie();
            }else if(jgUm == "X" && jgCinco == "" && jgNove == "X"){
                jgCinco = jogador;
                document.getElementById("cinco").innerText = jgCinco;
                jogadas++; 
                TrocaJog();
                VerificationWin();
                Tie();
            }else if(jgUm == "" && jgCinco == "X" && jgNove == "X"){
                jgUm = jogador;
                document.getElementById("um").innerText = jgUm;
                jogadas++; 
                TrocaJog();
                VerificationWin();
                Tie();
            }
            //357

            else if (jgTres == "X" && jgCinco == "X" && jgSete == "") {
                jgSete = jogador;
                document.getElementById("sete").innerText = jgSete;
                jogadas++;
            TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgTres == "X" && jgCinco == "" && jgSete == "X") {
                jgCinco = jogador;
                document.getElementById("cinco").innerText = jgCinco;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgTres == "" && jgCinco == "X" && jgSete == "X") {
                jgTres = jogador;
                document.getElementById("tres").innerText = jgTres;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            }

            //jg
            else if(jgUm == "X" && jgCinco == "X" && jgNove == ""){
                jgNove = jogador;
                document.getElementById("nove").innerText = jgNove;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            }else if(jgUm == "X" && jgCinco == "" && jgNove == "X"){
                jgCinco = jogador;
                document.getElementById("cinco").innerText = jgCinco;
                jogadas++; 
                TrocaJog();
                VerificationWin();
                Tie();
            }else if(jgUm == "" && jgCinco == "X" && jgNove == "X"){
                jgUm = jogador;
                document.getElementById("um").innerText = jgUm;
                jogadas++; 
                TrocaJog();
                VerificationWin();
                Tie(); 
            }
            //357

            else if (jgTres == "X" && jgCinco == "X" && jgSete == "") {
                jgSete = jogador;
                document.getElementById("sete").innerText = jgSete;
                jogadas++;
                TrocaJog();
                VerificationWin();
                Tie();
            } else if (jgTres == "X" && jgCinco == "" && jgSete == "X") {
                jgCinco = jogador;
                document.getElementById("cinco").innerText = jgCinco;
                jogadas++;
                VerificationWin();
                Tie();
                TrocaJog();
            } else if (jgTres == "" && jgCinco == "X" && jgSete == "X") {
                jgTres = jogador;
                document.getElementById("tres").innerText = jgTres;
                jogadas++;
                VerificationWin();
                Tie();
                TrocaJog();
            }

            
            else if(jgCinco == ""){
                jgCinco = jogador;
                document.getElementById("cinco").innerText = jgCinco;
                jogadas++;
                VerificationWin();
                Tie();
                TrocaJog();
            }
            else if (jgUm == ""){
                jgUm = jogador;
                document.getElementById("um").innerText = jgUm;
                jogadas++; 
                VerificationWin();
                Tie();
                TrocaJog();
            }
            else if (jgTres == ""){
                jgTres = jogador;
                document.getElementById("tres").innerText = jgTres;
                jogadas++; 
                VerificationWin();
                Tie();
                TrocaJog();
            }
            else if (jgNove == ""){
                jgNove = jogador;
                document.getElementById("nove").innerText = jgNove;
                jogadas++; 
                VerificationWin();
                Tie();
                TrocaJog();
            } 
            else if (jgSete == ""){
                jgSete = jogador;
                document.getElementById("sete").innerText = jgSete;
                jogadas++; 
                VerificationWin();
                Tie();
                TrocaJog();
            } 
            else if (jgSeis == ""){
                jgSeis = jogador;
                document.getElementById("seis").innerText = jgSeis;
                jogadas++; 
                VerificationWin();
                Tie();
                TrocaJog();
            } 
            else if (jgDois == ""){
                jgDois = jogador;
                document.getElementById("dois").innerText = jgDois;
                jogadas++; 
                VerificationWin();
                Tie();
                TrocaJog();
            } 
            else if (jgQuatro == ""){
                jgQuatro = jogador;
                document.getElementById("quatro").innerText = jgQuatro;
                jogadas++; 
                VerificationWin();
                Tie();
                TrocaJog();
            } 
            else if (jgOito == ""){
                jgOito = jogador;
                document.getElementById("oito").innerText = jgOito;
                jogadas++; 
                VerificationWin();
                Tie();
                TrocaJog();
            } 
        }
    } 
}
}