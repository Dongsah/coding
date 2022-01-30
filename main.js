canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
nasa_mars_images_array = ["mars.gif","mars.gif","mars.gif","mars.gif"];

random_number=Math.floor(Math.random() * 4);
console.log(random_number);
rover_width=100;
rober_height= 90;
background_image = nasa_mars_images_array[random_number];
console.log("background_image = "+background_image);
rover_image = "rover.png";
rover_x=10;
rpver_y=10;
function add(){
    background_imgTag = new  Image(); 
    background_imgTag.onload=uploadBackground;
    background_imgtag.src= rover_image;
rover_imgTag=new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.src=rover_image;
}
function uploadBackground(){
    ctx.drowImage(background_imgTag,0,0, canvas.width, canvas.height);

}
function uploaddrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width,rover_height);

}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");

    }
    {
    if(keyPressed == '37')
     left();
        console.log("left");
    }
    {
        if(keyPressed == '39')
         right();
            console.log("right");
        }
    }
        function up()
        {
            if(rover_y >=0)
            {
                rover_y=rover_y-18;
                console.log("When up arrow is pressed, x=" +rover_x+"_y ="+rover_y);
                uploadBackground();
                uploaddrover();
            }

        }
        function down()
        {
            if(rover_y >=500)
            {
                rover_y=rover_y+10;
                console.log("When down arrow is pressed, x=" +rover_x+"_y ="+rover_y);
                uploadBackground();
                uploaddrover();
            }

        }
        function left()
        {
            if(rover_y >=0)
            {
                rover_y=rover_x-10;
                console.log("When up left is pressed, x=" +rover_x+"_y ="+rover_y);
                uploadBackground();
                uploaddrover();
            }
        }
            function right()
            {
                if(rover_y >=700)
                {
                    rover_y=rover_x+10;
                    console.log("When right arrow is pressed, x=" +rover_x+"_y ="+rover_y);
                    uploadBackground();
                    uploaddrover();
                }
    
            }
        

