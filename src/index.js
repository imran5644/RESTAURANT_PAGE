document.body.onload = createHeader;

function createHeader(){
const header = document.createElement("header");  
header.innerHTML = "Special Burgers";                   
document.body.appendChild(header);
}



