canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

greencarWidth = 75;
greencarHeight = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencarX = 5;
greencarY = 225

function add() {

background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

greencar_imgTag = new Image();
greencar_imgTag.onload = uploadgreencar;
greencar_imgTag.src = greencar_image;
}

function uploadBackground() {

ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}



function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencarX,greencarY, greencarWidth, greencarHeight);
}


window.addEventListener("keydown", my_keydown);
console.log();

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up() {
    if (greencarY >= 1) {
        greencarY = greencarY - 10;
        console.log("green car x position = "+ greencarX + "green car y position = "+ greencarY);
        uploadBackground();
        uploadgreencar();
    }
}
function down() {
    if (greencarY <= 300) {
        greencarY = greencarY + 10;
        console.log("green car x position = "+ greencarX + "green car y position = "+ greencarY);
        uploadBackground();
        uploadgreencar();
    }
}
function left() {
    if (greencarX >= 1) {
        greencarX = greencarX - 10;
        console.log("green car x position = "+ greencarX + "green car y position = "+ greencarY);
        uploadBackground();
        uploadgreencar();
    }
}
function right() {

    if (greencarX <= 700) {
        greencarX = greencarX + 10;
        console.log("green car x position = "+ greencarX + "Green car y position = "+ greencarY);
        uploadBackground();
        uploadgreencar();
    }
}