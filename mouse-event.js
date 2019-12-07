document.addEventListener('mousemove', drawMove);
document.addEventListener('mousedown', presionado);
document.addEventListener('mouseup', despresionado);
var boton = document.getElementById('btn').addEventListener('click', deleteDraw);

var lienzo = document.getElementById('area_dibujo');
var paper = lienzo.getContext('2d');

var colorcito;

var toDraw = false;
function presionado() {
  toDraw = true;
}
function despresionado() {
  toDraw = false
}

//INVOCANDO LOS ELEEMENTOS/COLORES DE HTML
var colorCafe = document.getElementById('cafe');
var CCafe = colorCafe.addEventListener('click', cafecito);
function cafecito() {
  colorcito = '#BA4A00';
}
var colorAzul = document.getElementById('azul');
var CAzul = colorAzul.addEventListener('click', azulito);
function azulito() {
colorcito = '#3498DB';
}
var colorVerde = document.getElementById('verde');
var CVerde = colorVerde.addEventListener('click', verdesito);
function verdesito() {
  colorcito = '#229954';
}
var colorRojo = document.getElementById('rojo');
var CRojo = colorRojo.addEventListener('click', rojito);
function rojito() {
  colorcito = '#E74C3C';
}
var colorAmarillo = document.getElementById('amarillo');
var CAmarillo = colorAmarillo.addEventListener('click', amarillito);
function amarillito() {
  colorcito = '#F1C40F';
}

//FUNCION PARA DIBUJAR
function drawMove(evento) {
  if (toDraw == true) {
    var x = evento.layerX;
    var y = evento.layerY;
    drawLines(colorcito, x, y, x-1, y-1, paper);
  }
}

//FUNCION PARA DIBUJAR TRAZOS
function drawLines(color, xInicial, yInicial, xFinal, yFinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 5;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

//FUNCION PARA BORRAR DIBUJO
function deleteDraw(evento) {
  paper.clearRect(0, 0, lienzo.width, lienzo.height);
}
