const characters =["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8",
"9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordEl = document.getElementById("passwd1-el")
let passwordE2 = document.getElementById("passwd2-el")

function randomCar(){
    let indiceRandom = 0;
    indiceRandom = Math.floor(Math.random()*characters.length)
    return characters[indiceRandom]
}
function generarContraseña(){
    let contraseña = "";
    for(let i=0;i<16;i++){
        contraseña += randomCar();
    }
    return contraseña;
}
function generarContraseñas(){
    passwordEl.textContent = generarContraseña()
    passwordE2.textContent = generarContraseña()
}
function copy(selector){

    if(selector === 1){
        var passwdEl = document.getElementById("passwd1-el")
    }else{
        var passwdEl = document.getElementById("passwd2-el")
    }
    
    const textarea = document.createElement('textarea');
    textarea.setAttribute('readonly','');
    textarea.style.position = 'absolute';
    textarea.value = passwdEl.textContent
    document.body.appendChild(textarea);
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    document.body.removeChild(textarea)
}