var vector = [];

function constructorObjeto(nombre,color,peso){
    this.nombre = nombre;
    this.color = color;
    this.peso = peso;
}

var objeto0 = new constructorObjeto("Remera","Rojo","0.25kg");
vector.push(objeto0);
var objeto1 = new constructorObjeto("Pelota","Blanco","0.45kg");
vector.push(objeto1);
var objeto2 = new constructorObjeto("Celular","Negro","0.2kg");
vector.push(objeto2);


function Add(){
    let name = prompt("Ingrese el nombre de su objeto");
    let color = prompt("Ingrese el color de su objeto");
    let weight = prompt("Ingrese el peso de su objeto");
    let tempObject = new constructorObjeto(name,color,weight);
    vector.push(tempObject);
    let caja = document.createElement("div");
    let contenido = `<h1> ${name}</h1><h2>${color}</h2><h3>${weight}</h3><h1>--------------------------</h1>`;
    caja.innerHTML = contenido;
    document.body.appendChild(caja);
    Menu(true);
}

function Menu (msg) {
    if(msg == false){
        var answer = prompt("Desea agregar un objeto a su mochila?y/n");
        while (answer!= "y" && answer!="n") {
            answer = prompt("Desea agregar un objeto a su mochila?y/n");
        }
    }
    else{
        var answer = prompt("Desea agregar otro objeto a su mochila?y/n");
        while (answer!= "y" && answer!="n") {
            answer = prompt("Desea agregar otro objeto a su mochila?y/n");
        }
    }
    if(answer == "y") {
        console.log(vector);
        Add();
    }
}


alert("Hola! Bienvenido a su mochila virtual");
Menu(false);
alert("Gracias por usar su mochila! Que tenga un buen dia");



    
    


