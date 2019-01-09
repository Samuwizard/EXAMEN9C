console.log("funciono");

function CelebrarRespuesta(pregunta , esCorrecte){
    document.getElementById("pregunta").innerHTML = pregunta;
   if(esCorrecte){
    var respostaAleatoria = Math.floor(Math.random() * 2 );
    document.getElementById("feedback").innerHTML = respostes["celebracions"][respostaAleatoria] ;
   }
   else{
    var respostaAleatoria = Math.floor(Math.random() * 2);
    document.getElementById("feedback").innerHTML = respostes["fracas"][respostaAleatoria] ;
   }

}
CelebrarRespuesta("asdfkjasdklf", true);