class Player extends BaseClass {
  constructor(x,y){
    super(x,y,100,200);
    this.image = loadImage("Game Assets/Character.png");

  }
changePosition(x,y){
  this.body.position.x= this.body.position.x+x;
  this.body.position.y= this.body.position.y+y;
}
  display() {
   

    super.display();

 
  }
}
