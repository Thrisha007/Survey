class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Submit');
    this.greeting = createElement('h2');
    this.qOne = createElement('h2',"Should disadvantaged kids be given free meals in the canteen?");
    this.aOne = createRadio('h1');
    this.aOne.option('Yes');
    this.aOne.option('No');
    this.qTwo = createElement('h2', "Would you be willing to contribute a small amount each month for this?");
    this.aTwo = createRadio('h1');
    this.aTwo.option('Yes');
    this.aTwo.option('No');
    this.qThree = createElement('h2', "How much per month would you be willing to pay?");
    this.aThree = createRadio('h1');
    this.aThree.option('£300');
    this.aThree.option('£500');
    this.aThree.option('£1000');
  } 

hide(){
  this.button.hide();
  this.input.hide();
}

  display(){
    var title = createElement('h2')
    title.html("School survey");
    title.position(350, 0);
  
    this.input.position(330, 90);
    this.button.position(400, 450);
  
    this.qOne.position(110,160);
    this.aOne.position(380,215);

    this.qTwo.position(70,255);
    this.aTwo.position(380,305);

    this.qThree.position(145,340);
    this.aThree.position(350,390);



    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      this.qOne.hide();
      this.aOne.hide();
      this.qTwo.hide();
      this.aTwo.hide();
      this.qThree.hide();
      this.aThree.hide();

      player.name = this.input.value();
      playerCount = playerCount + 1;
      
     this.greeting.html("Thank you for your feedback "+player.name)
     this.greeting.position(290, 90);

    player.index = playerCount;

    player.update();

      player.updateCount(playerCount);

   
    });

  }
}
