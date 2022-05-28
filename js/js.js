//ui metodos//

const key= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
const text = document.querySelector('#text_forEncript');
const mensaje= document.querySelector(".input_text_area");

function btnEncript(){
    const getText = encriptar(text.value)
    mensaje.value = getText;
    const imgContent= document.querySelector('#content_text_editID');
    const divResult =document.querySelector('#result');
    imgContent.classList.add('hide');
    divResult.classList.remove('hide')
}

function encriptar(evento){
 evento = evento.toLowerCase();
 for(let i=0 ; i <key.length; i++){
     if(evento.includes(key[i][0])){
         evento = evento.replaceAll(key[i][0],key[i][1] )
        }
    }return(evento)
}

function btnDesencriptar(){
    var getEncriptar= desencriptar(mensaje.value)
    text.value= getEncriptar;

}

function desencriptar(eventChange){
 for(let i= 0;i <key.length; i++ ){
     if(eventChange.includes(key[i][1])){
         eventChange = eventChange.replaceAll(key[i][1], key[i][0])
     }
 }return(eventChange)
}
 
function myCopyText() {
    var copyText = document.getElementById("text_Encript");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  
    alert("Usted copió:  " + copyText.value + " (Presione Ctrl+V para pegar el texto)");
  } 































































