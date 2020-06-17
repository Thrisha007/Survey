var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player;
var allPlayers;
var playerAnswers


function setup(){
  canvas = createCanvas(800,800);
  database = firebase.database();

  form = new Form();
  form.display();
  player = new Player();
}

function draw(){
  //form.display();
}


