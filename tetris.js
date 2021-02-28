const canvas = document.querySelector('canvas') 
const c = canvas.getContext("2d") 
canvas.width = innerWidth 
canvas.height = innerHeight 
 
//Class 
class Box { 
 constructor(x,y,width,color) { 
  this.x=x 
  this.y=y 
  this.width=width 
  this.color=color 
 } 
 draw(){ 
  c.beginPath() 
  c.rect(this.x,this.y,this.width,this.width) 
  c.fillStyle='black' 
  c.fill() 
  c.beginPath() 
  c.rect(this.x+0.00475*0.5*canvas.height,this.y+0.5*0.00475*canvas.height,this.width-0.00475*canvas.height,this.width-0.00475*canvas.height) 
  c.fillStyle=this.color 
  c.fill() 
 } 
 dropping(){ 
  this.y=this.y+this.width 
  this.draw() 
 } 
 left(){ 
  this.x=this.x-this.width 
  this.draw() 
 } 
 right(){ 
  this.x=this.x+this.width 
  this.draw() 
 } 
} 
 
//array and const 
const boxes=[] 
const nextboxes=[] 
var fields=[] 
const h=canvas.height 
const w=canvas.width 
for (let i=0;i<20;i++){ 
 fields.push([0,0,0,0,0,0,0,0,0,0]) 
} 
let floored=0 
let sided=0 
let rollcount=0 
let type=0 
 
//Function 
 
function Type(){ 
 type = Math.floor(Math.random()*7) //0-6 
 rollcount=0 
 //1 -> O 
 if (type==0){ 
  boxes.push(new Box(0.25*w+0.4*0.475*h,0.025*h,0.0475*h,'yellow')) 
  boxes.push(new Box(0.25*w+0.5*0.475*h,0.025*h,0.0475*h,'yellow')) 
  boxes.push(new Box(0.25*w+0.4*0.475*h,0.025*h-0.0475*h,0.0475*h,'yellow')) 
  boxes.push(new Box(0.25*w+0.5*0.475*h,0.025*h-0.0475*h,0.0475*h,'yellow')) 
 } 
 // 1 -> z 
 else if (type==1){ 
  boxes.push(new Box(0.25*w+0.4*0.475*h,0.025*h,0.0475*h,'red')) 
  boxes.push(new Box(0.25*w+0.5*0.475*h,0.025*h,0.0475*h,'red')) 
  boxes.push(new Box(0.25*w+0.4*0.475*h,0.025*h-0.0475*h,0.0475*h,'red')) 
  boxes.push(new Box(0.25*w+0.3*0.475*h,0.025*h-0.0475*h,0.0475*h,'red')) 
 } 
 // 2 -> reverse-z 
 else if (type==2){ 
  boxes.push(new Box(0.25*w+0.4*0.475*h,0.025*h,0.0475*h,'green')) 
  boxes.push(new Box(0.25*w+0.3*0.475*h,0.025*h,0.0475*h,'green')) 
  boxes.push(new Box(0.25*w+0.4*0.475*h,0.025*h-0.0475*h,0.0475*h,'green')) 
  boxes.push(new Box(0.25*w+0.5*0.475*h,0.025*h-0.0475*h,0.0475*h,'green')) 
 } 
 // 3 -> T 
 else if (type==3){ 
  boxes.push(new Box(0.25*w+0.4*0.475*h,0.025*h,0.0475*h,'purple')) 
  boxes.push(new Box(0.25*w+0.3*0.475*h,0.025*h,0.0475*h,'purple')) 
  boxes.push(new Box(0.25*w+0.5*0.475*h,0.025*h,0.0475*h,'purple')) 
  boxes.push(new Box(0.25*w+0.4*0.475*h,0.025*h-0.0475*h,0.0475*h,'purple')) 
 } 
 // 4 -> I 
 else if (type==4){ 
  boxes.push(new Box(0.25*w+0.4*0.475*h,0.025*h,0.0475*h,'rgb(0,191,255)')) 
  boxes.push(new Box(0.25*w+0.4*0.475*h,0.025*h-0.0475*h,0.0475*h,'rgb(0,191,255)')) 
  boxes.push(new Box(0.25*w+0.4*0.475*h,0.025*h-0.0475*2*h,0.0475*h,'rgb(0,191,255)')) 
  boxes.push(new Box(0.25*w+0.4*0.475*h,0.025*h-0.0475*3*h,0.0475*h,'rgb(0,191,255)')) 
 } 
 // 5 -> L 
 else if (type==5){ 
  boxes.push(new Box(0.25*w+0.4*0.475*h,0.025*h,0.0475*h,'orange')) 
  boxes.push(new Box(0.25*w+0.5*0.475*h,0.025*h,0.0475*h,'orange')) 
  boxes.push(new Box(0.25*w+0.4*0.475*h,0.025*h-0.0475*1*h,0.0475*h,'orange')) 
  boxes.push(new Box(0.25*w+0.4*0.475*h,0.025*h-0.0475*2*h,0.0475*h,'orange')) 
 } 
 // 6 -> reverse-L 
 else if (type==6){ 
  boxes.push(new Box(0.25*w+0.4*0.475*h,0.025*h,0.0475*h,'blue')) 
  boxes.push(new Box(0.25*w+0.3*0.475*h,0.025*h,0.0475*h,'blue')) 
  boxes.push(new Box(0.25*w+0.4*0.475*h,0.025*h-0.0475*1*h,0.0475*h,'blue')) 
  boxes.push(new Box(0.25*w+0.4*0.475*h,0.025*h-0.0475*2*h,0.0475*h,'blue')) 
 } 
} 
 
function Roll(){ 
 // 1 -> z rollcount=0,1 
 if (type==1){ 
  if (rollcount==0){ 
   boxes[0].x-=0.0475*h 
   boxes[0].y-=0.0475*h 
   boxes[1].x-=2*0.0475*h 
   boxes[3].x+=0.0475*h 
   boxes[3].y-=0.0475*h 
   rollcount=1 
  } 
  else{ 
   boxes[0].x+=0.0475*h 
   boxes[0].y+=0.0475*h 
   boxes[1].x+=2*0.0475*h 
   boxes[3].x-=0.0475*h 
   boxes[3].y+=0.0475*h 
   rollcount=0 
  } 
 } 
 // 2 -> reverse-z rollcount=0,1 
 else if (type==2){ 
  if (rollcount==0){ 
   boxes[0].x-=0.0475*h 
   boxes[0].y-=0.0475*h 
   boxes[1].y-=2*0.0475*h 
   boxes[3].x-=0.0475*h 
   boxes[3].y+=0.0475*h 
   rollcount=1 
  } 
  else{ 
   boxes[0].x+=0.0475*h 
   boxes[0].y+=0.0475*h 
   boxes[1].y+=2*0.0475*h 
   boxes[3].x+=0.0475*h 
   boxes[3].y-=0.0475*h 
   rollcount=0 
  } 
 } 
 // 3 -> T rollcount=0,1,2,3 
 else if (type==3){ 
  if(rollcount==0){ 
   boxes[0].x-=0.0475*h 
   boxes[0].y-=0.0475*h 
   boxes[1].y-=2*0.0475*h 
   boxes[2].x-=2*0.0475*h 
   rollcount=1 
  } 
  else if(rollcount==1){ 
   boxes[0].x+=0.0475*h 
   boxes[0].y-=0.0475*h 
   boxes[1].x+=2*0.0475*h 
   boxes[2].y-=2*0.0475*h 
   rollcount=2 
  } 
  else if(rollcount==2){ 
   boxes[0].x+=0.0475*h 
   boxes[0].y+=0.0475*h 
   boxes[1].y+=2*0.0475*h 
   boxes[2].x+=2*0.0475*h 
   rollcount=3 
  } 
  else{ 
   boxes[0].x-=0.0475*h 
   boxes[0].y+=0.0475*h 
   boxes[1].x-=2*0.0475*h 
   boxes[2].y+=2*0.0475*h 
   rollcount=0 
  } 
 } 
 // 4 -> I rollcount=0,1 
 else if (type==4){ 
  if (rollcount==0){ 
   boxes[0].x-=0.0475*h 
   boxes[0].y-=0.0475*h 
   boxes[2].x+=0.0475*h 
   boxes[2].y+=0.0475*h 
   boxes[3].x+=2*0.0475*h 
   boxes[3].y+=2*0.0475*h 
   rollcount=1 
  } 
  else{ 
   boxes[0].x+=0.0475*h 
   boxes[0].y+=0.0475*h 
   boxes[2].x-=0.0475*h 
   boxes[2].y-=0.0475*h 
   boxes[3].x-=2*0.0475*h 
   boxes[3].y-=2*0.0475*h 
   rollcount=0 
  } 
 } 
 // 5 -> L rollcount=0,1,2,3 
 else if (type==5){ 
  if(rollcount==0){ 
   boxes[0].y-=2*0.0475*h 
   boxes[1].x-=0.0475*h 
   boxes[1].y-=0.0475*h 
   boxes[2].x+=0.0475*h 
   boxes[2].y-=0.0475*h 
   boxes[3].x+=2*0.0475*h 
   rollcount=1 
  } 
  else if(rollcount==1){ 
   boxes[0].x+=2*0.0475*h 
   boxes[1].x+=0.0475*h 
   boxes[1].y-=0.0475*h 
   boxes[2].x+=0.0475*h 
   boxes[2].y+=0.0475*h 
   boxes[3].y+=2*0.0475*h 
   rollcount=2 
  } 
  else if(rollcount==2){ 
   boxes[0].y+=2*0.0475*h 
   boxes[1].x+=0.0475*h 
   boxes[1].y+=0.0475*h 
   boxes[2].x-=0.0475*h 
   boxes[2].y+=0.0475*h 
   boxes[3].x-=2*0.0475*h 
   rollcount=3 
  } 
  else{ 
   boxes[0].x-=2*0.0475*h 
   boxes[1].x-=0.0475*h 
   boxes[1].y+=0.0475*h 
   boxes[2].x-=0.0475*h 
   boxes[2].y-=0.0475*h 
   boxes[3].y-=2*0.0475*h 
   rollcount=0 
  } 
 } 
 // 6 -> reverse-L rollcount=0,1,2,3 
 else if (type==6){ 
  if(rollcount==0){ 
   boxes[0].x-=2*0.0475*h 
   boxes[1].x-=0.0475*h 
   boxes[1].y-=0.0475*h 
   boxes[2].x-=0.0475*h 
   boxes[2].y+=0.0475*h 
   boxes[3].y+=2*0.0475*h 
   rollcount=1 
  } 
  else if(rollcount==1){ 
   boxes[0].y-=2*0.0475*h 
   boxes[1].x+=0.0475*h 
   boxes[1].y-=0.0475*h 
   boxes[2].x-=0.0475*h 
   boxes[2].y-=0.0475*h 
   boxes[3].x-=2*0.0475*h 
   rollcount=2 
  } 
  else if(rollcount==2){ 
   boxes[0].x+=2*0.0475*h 
   boxes[1].x+=0.0475*h 
   boxes[1].y+=0.0475*h 
   boxes[2].x+=0.0475*h 
   boxes[2].y-=0.0475*h 
   boxes[3].y-=2*0.0475*h 
   rollcount=3 
  } 
  else{ 
   boxes[0].y+=2*0.0475*h 
   boxes[1].x-=0.0475*h 
   boxes[1].y+=0.0475*h 
   boxes[2].x+=0.0475*h 
   boxes[2].y+=0.0475*h 
   boxes[3].x+=2*0.0475*h 
   rollcount=0 
  } 
 } 
} 
 
//0=left, 1=right, 2=bottom, 3=roll 
function CheckSide(number){ 
 if(number==0){ 
  for(box of boxes){ 
   var yy = Math.round((box.y-0.025*h)/(0.0475*h)) 
   var xx = Math.round((box.x-0.25*w)/(0.0475*h)) 
   if ( xx<0 ){xx=0} 
   if ( yy<0 ){yy=0} 
   if ( xx-1 < 0 || fields[yy][xx-1]!=0){ 
    sided=1 
   } 
  } 
 } 
 if(number==1){ 
  for(box of boxes){ 
   var yy = Math.round((box.y-0.025*h)/(0.0475*h)) 
   var xx = Math.round((box.x-0.25*w)/(0.0475*h)) 
   if ( xx<0 ){xx=0} 
   if ( yy<0 ){yy=0} 
   if ( xx+1 > 9 || fields[yy][xx+1]!=0){ 
    sided=1 
   } 
  } 
 } 
 if(number==2){ 
  for(box of boxes){ 
   var yy = Math.round((box.y-0.025*h)/(0.0475*h)) 
   var xx = Math.round((box.x-0.25*w)/(0.0475*h)) 
   if ( xx<0 ){xx=0} 
   if ( yy<0 ){yy=0} 
   if ( yy >= 19 || fields[yy+1][xx]!=0){ 
    sided=1 
   } 
  } 
 } 
} 
 
function Timing(){ 
 setInterval(() => { 
  Map() 
  if (boxes.length==0){ 
   Type() 
   floored=0 
   boxes.forEach(box => { 
    box.draw() 
   }) 
  } 
  else{ 
   (async function(){ 
    for await ( [index,box] of boxes.entries()){ 
     var yy = Math.round((box.y-0.025*h)/(0.0475*h)) 
     var xx = Math.round((box.x-0.25*w)/(0.0475*h)) 
     if ( xx<0 ){xx=0} 
     if ( yy<0 ){yy=0} 
     if ( yy >= 19 || fields[yy+1][xx]!=0){ 
      floored=1 
     } 
    } 
    if (floored==1){ 
     for ( [index,box] of boxes.entries()){ 
      const yy = Math.round((box.y-0.025*h)/(0.0475*h)) 
      const xx = Math.round((box.x-0.25*w)/(0.0475*h)) 
      if (xx<0){xx=0} 
      if (yy<0){yy=0} 
      fields[yy][xx]=1 
      box.draw() 
     } 
     boxes.splice(0,4) 
     floored=0 
     Map() 
     CheckLine() 
     Map() 
    } 
    else { 
     for (const [index,box] of boxes.entries()){ 
      box.dropping() 
     } 
    } 
   })() 
  } 
 },400) 
} 
 
function CheckLine(){ 
 var n=0 
 var nn=0 
 var nnn=0 
 var removerow=[] 
 for (const [row,ValueY] of fields.entries()){ 
  for (const [collumn,ValueX] of ValueY.entries()){ 
   if (fields[row][collumn]==1){ 
    n+=1 
   } 
  } 
  if (n>=10){ 
   nn+=1 
   nnn+=1 
   removerow.push(row) 
  } 
  n=0 
 } 
 if (nn>0){ 
  for (;nn>0;nn--){ 
   delete fields[removerow[0]] 
   removerow.shift() 
   console.log(fields) 
  } 
  fields=fields.filter(function () { return true}) 
 } 
 for (;nnn>0;nnn--){ 
  fields.unshift([0,0,0,0,0,0,0,0,0,0]) 
 } 
} 
 
function CheckArray(){ 
 for (const [row,ValueY] of fields.entries()){ 
  for (const [collumn,ValueX] of ValueY.entries()){ 
   if (fields[row][collumn]==1){ 
    c.fillStyle = 'pink' 
    c.fillRect(collumn*0.0475*h+0.25*w,row*0.0475*h+0.025*h,0.0475*h,0.0475*h) 
   } 
  } 
 } 
} 
async function Dropped(){ 
  var x = await CheckArray() 
 } 
function Map(){ 
 //map 
 c.fillStyle = 'rgb(230,230,230)' 
 c.fillRect(0,0,canvas.width,canvas.height) 
 c.fillStyle = 'rgb(80,80,80)' 
 c.fillRect(0.25*w,0.025*h,0.475*h,0.95*h) 
 c.fillStyle = 'rgb(80,80,80)' 
 c.fillRect(0.25*w+0.475*h+0.025*h,0.025*h,0.125*h,0.5*h) 
 Dropped() 
 c.lineWidth='4' 
 for (let i=1;i<20;i++){ 
  c.beginPath() 
  c.strokeStyle = 'rgb(25,25,25)' 
  c.moveTo(0.25*canvas.width,0.025*1*canvas.height+0.0475*i*canvas.height) 
  c.lineTo(0.25*canvas.width+0.0475*10*canvas.height,0.025*canvas.height+0.0475*i*canvas.height) 
  c.stroke() 
 } 
 for (let i=1;i<10;i++) { 
  c.beginPath() 
  c.strokeStyle = 'rgb(25,25,25)' 
  c.moveTo(0.25*canvas.width+0.0475*i*canvas.height,0.025*1*canvas.height) 
  c.lineTo(0.25*canvas.width+0.0475*i*canvas.height,0.975*canvas.height) 
  c.stroke() 
 } 
} 
 
function keydown(e){ 
 sided=0 
 console.log(e.key) 
 if (e.key=='ArrowLeft'){ 
  CheckSide(0) 
  if (sided!=1){ 
   Map() 
   for (const box of boxes){ 
    box.left() 
   } 
   sided=0 
  } 
 } 
 else if (e.key=='ArrowRight'){ 
  CheckSide(1) 
  if (sided!=1){ 
   Map() 
   for (const box of boxes){ 
    box.right()  
   } 
  } 
 } 
 else if (e.key=='ArrowDown'){ 
  CheckSide(2) 
  if (sided!=1){ 
   Map() 
   for (const box of boxes){ 
    box.dropping()  
   } 
  } 
 } 
 else if (e.key=='z'){ 
  CheckSide(0) 
  CheckSide(1) 
  if (sided!=1){ 
   Map() 
   Roll()  
   for ( box of boxes){ 
    box.draw() 
   } 
  } 
 } 
} 
 
//Start 
Map() 
Timing()
window.addEventListener('keydown', keydown)