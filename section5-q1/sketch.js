// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46",20,20,125,125,125);
}

function balloon(t,x,y,cr,cg,cb){
  let w = textWidth(t);
  let h = textAscent() + textDescent();//h=テキストの幅
  let p = 2;//p=文字と図形の隙間
  fill(cr,cg,cb);
  noStroke();//枠線
  rect(x, y, x+w+p*2, y+h+p*2);
  triangle(x+w+p*2-20, y+h+p*2+20, x+w+p*2, y+h+p*2+40, x+w+p*2, y+h+p*2+20);
  fill(0);
  text(t, x+p+10, y+h+p*2);
}
