class Ground{
constructor(x,y,width,height) {
  var options = {
      isStatic: true
  }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  this.visibilty=255;

  World.add(world, this.body);
}
display(){
  var pos =this.body.position;
  if(gameState=="level2"){
  pos.x=2000
  pos.y=2000
  }
 
  rectMode(CENTER);
  fill(rgb(32,10,36));
  rect(pos.x, pos.y, this.width, this.height);
}
};