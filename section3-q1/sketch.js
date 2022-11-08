// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
count = 0;
cycle = 200;
     let size = count



function setup(){
  createCanvas(windowWidth, windowHeight);
}

function windowResized(){ 
  resizeCanvas(windowWidth, windowHeight); 
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle; //0から99で繰り返される
  // BLANK[1]
  ellipse(width / 2, height / 2, size); //size=半径


  if(mouseIsPressed){
  
    if(count<25){
      size=2*count;
     }
     if(count>25&&count<50){
      size=100-(2*count)
      }
     if(count>50 && count<75){
      size=-100+(2*count);
     }
     if(count>75){
      size=200-(2*count);
     }

  }

  else{
    if(count<50){
      size=count;
    }
    else{
      size=100-count
    }
    }
  }



