class Player {

  constructor(){
    this.index = null;
    //this.distance = 0;
    this.name = null;
  }


  update(){
    var playerIndex = "player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      playerAnswer: []
    });
  }

  updateCount(count){
database.ref('/').update({playerCount: count});
  }

}


