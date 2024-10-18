function setup() {
  createCanvas(400, 400);
}

function inicializaCores(){//cores
  background("#7587EE");
  fill("#EB83A6");// cor do texto
  textSize(64);//tamanho da palavra
  textAlign(CENTER,CENTER);
}

function draw() {
  inicializaCores();
  
  let maximo = width;
  let minimo = 1;
  //mouseX, 0, width ==> 0, palavra.length
  let palavra = "☄PiquMaria";
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  //console.log(quantidade);
  let parcial = palavra.substring(0,quantidade);
  text(parcial,200,200);
}
