class Ground2{
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibilty=255;
    
      World.add(world, this.body);
    }
    display(){
        push();
      var pos =this.body.position;
      if(gameState=="level1"){
      pos.x=2000
      pos.y=7000
      World.remove(world, this.body);
      }
      if(gameState=="level2"){
        pos.x=350
        pos.y=350
        
        strokeWeight(0);
      }
      rectMode(CENTER);
      fill(rgb(225, 46, 14));
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
    };