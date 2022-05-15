
const inputText= document.querySelector(".input_text");
const mensaje= document.querySelector(".input_text_area");
const encripText= document.querySelector(".input_text_area");


function btnEncriptar(){
    var getText= encriptar(inputText.value)
    mensaje.value= getText;
    var x = document.getElementById('content_text_editID');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }
  

function encriptar(evento){
    const matrizCodigo= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    evento= evento.toLowerCase()
    for(let i = 0; i <matrizCodigo.length; i++){
        if(evento.includes(matrizCodigo[i][0]))
        evento=evento.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

    }
    return(evento)
}

function btnDesencriptar(){
    var getEncriptar= desencriptar(mensaje.value)
    inputText.value= getEncriptar;

}
function desencriptar(eventChange){
    const matrizCodigo= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
  
    for(let i = 0; i <matrizCodigo.length; i++){
        if(eventChange.includes(matrizCodigo[i][1]))
        eventChange=eventChange.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])

    }
    return(eventChange)
    
}
function copyText(text){
text.select()
document.execCommand("#btn_copy");

} 