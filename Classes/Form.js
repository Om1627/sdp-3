class Form{
    constructor(){
       
    }
    hide(){
        this.PlayButton.hide();
        this.ControlsButton.hide();
    }
    display(){
      
            if(y===-300){
                
       
                
        this.PlayButton= createButton("Play")
        this.ControlsButton=createButton("View Controls");

        this.PlayButton.position(400,200);
        this.ControlsButton.position(810,200);
     
        this.PlayButton.size(200,50);
        this.ControlsButton.size(200,50);
        
     
      this.PlayButton.mousePressed(()=>{
          if (frameCount<300){
         background(0)

         state=2;
        // this.PlayButton.hide();
 
     
            camera.position.y=camera.position.y+1
  

         var heading=createElement('Morning of 21st Jan,1930')  
                             
         heading.position(displayWidth/2-500,300)
         heading.style('color',"white")
         heading.style('font-size', '70px')

         var StoryTillNow=createElement('Me and my friend took off for hiking on this mountain 5 days ago. We lost our way and we could not find our way back. There are clouds everywhere.Things got worse yesterday, when my friend disappeared in a dark cave. He started screaming, but I could not risk my life to save his. I tried to find someone for help, and today I have come across this little, neat house. I hope someone lives here....')  
                             
         StoryTillNow.position(displayWidth/2-600,500)
         StoryTillNow.style('color',"white")
         StoryTillNow.style('font-size', '50px')
       
        
         removeElement(heading)

      }
      

      
            
        })

    }
    
        letter1=createDiv('D') 
        letter2=createDiv('A') 
        letter3=createDiv('R') 
        letter4=createDiv('K') 

        letter1.position(displayWidth/2-425,100);
        letter2.position(displayWidth/2-152.5, 100);
        letter3.position(displayWidth/2+ 122.5,100);
        letter4.position(displayWidth/2+375, 100);

        letter1.style( 'font-size', '100px');
        letter2.style('font-size', '100px' );
        letter3.style('font-size', '100px' );
        letter4.style( 'font-size', '100px');


    
    if (frameCount===700){
        letter1.hide();
        letter2.hide();
        letter3.hide();
        letter4.hide();
    }
  }
}