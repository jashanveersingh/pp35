var dog,dogImage,doghappy;
var food;
var database;
var foodS,foodStock;

function preload(){

dogImage=loadImage("images/dogImg.png");
doghappy=loadImage("images/dogImg1.png");


	
}

function setup() {
	createCanvas(500,500);
   database=firebase.database() ;
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImage) ;
  dog.scale=0.15;
  foodStock=database.ref(' Food');
  foodStock.on("value",readStock);
  textSize(20)



}


function draw() {  
 
  background("pink");
 if(keyWentDown(UP_ARROW)) {
  
  
  dog.addImage(doghappy);
  dog .scale=0.16;

 }






  drawSprites();
  text("foodremaing"+foodS,170,200)
  textSize(13);
  text("note:prees up-arrow to feed milk",130,10,300,20);
  

}

function readStock(data){
foodS=data.val()

}
function writeStock(x){
if(x<=0){
  x=0
}else{
  x=x-1
}
database.ref("/").update({
Food:x

})
}
