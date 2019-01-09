

function CelebrarRespuesta(callback, pregunta,esCorrecte){
   if(esCorrecte){
    var respostaAleatoria = Math.floor(Math.random() * 2 );
    document.getElementById("feedback").innerHTML = respostes["celebracions"][respostaAleatoria] ;
   }
   else{
    var respostaAleatoria = Math.floor(Math.random() * 2);
    document.getElementById("feedback").innerHTML = respostes["fracas"][respostaAleatoria] ;
   }
   setInterval(callback(pregunta,esCorrecte), 10000);
}

function test(pregunta, esCorrecte){
    document.getElementById("pregunta").innerHTML = pregunta;
    if(esCorrecte){
        document.getElementById("feedback").innerHTML = "la resposta anterior ha sigut correcte";
       }
}

CelebrarRespuesta(test,"Soc la pregunta de prova", true);