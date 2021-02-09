class Player2 {
    constructor(x,y,width,height) {
      var options = {
        isStatic:false,
        'restitution':0.3,
        'friction':2,
        'density':0.8
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
   
     
  
    display(){
      var pos =this.body.position;
      if(gameState=="level1"){
        pos.x=20000;
        pos.y=2000;
        }
        if(gameState=="level2"){
          pos.x=50;
          pos.y=270;
          
      
          }
      
      rectMode(CENTER);
      fill(rgb(128, 0, 34));
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  };