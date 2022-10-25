// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;


function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 0;
  cycle = 150;
}

function windowResized(){
  resizeCanvas(windowwindth,windowHeight);
}


function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;//0から99で繰り返される
  // BLANK[1]
  

  if(KeyIsDown(" ".charCodeAt(0))){
  
    if(count<25){
      size=2*count;
    }
     else if(count>25 && count<50){
      size=100-(2*count);
     }
     else if(count>50 && count<75){
      size=-100+(2*count);
     }
     else if(count>75){
      size=200-(2*count);
     }


  }


  else{
    if(count<50){
      size=count;
    }
    else{size=100-(1*count);
    }
  }
  ellipse(width / 2, height / 2, size);
  


   }



