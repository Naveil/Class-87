canvas = new fabric.Canvas("mycanvas");
var player_x = 10;
var player_y = 10;
var block_image_width = 30;
var block_image_height = 30;
var player_image = "";
var block_image = "";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_image = Img;
        player_image.scaleToHeight(140);
        player_image.scaleToWidth(100);
        player_image.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_image);
    });
}

function block_update(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image = Img;
        block_image.scaleToHeight(block_image_height);
        block_image.scaleToWidth(block_image_width);
        block_image.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image)
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    key_pressed = e.keyCode;
    if(e.shiftKey == true && key_pressed == '80'){
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;

    }

    if(e.shiftKey == true && key_pressed == '77'){
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(key_pressed == '37'){
        left();
    }

    if(key_pressed == '39'){
        right();
    }

    if(key_pressed == '38'){
        up();
    }

    if(key_pressed == '40'){
        down();
    }

    if(key_pressed == '87'){
        block_update('wall.jpg');
    }

    if(key_pressed == '71'){
        block_update('ground.png');
    }

    if(key_pressed == '76'){
        block_update('light_green.png');
    }

    if(key_pressed == '84'){
        block_update('trunk.jpg');
    }

    if(key_pressed == '82'){
        block_update('roof.jpg');
    }

    if(key_pressed == '89'){
        block_update('yellow_wall.png');
    }

    if(key_pressed == '68'){
        block_update('dark_green.png');
    }

    if(key_pressed == '85'){
        block_update('unique.png');
    }

    if(key_pressed == '67'){
        block_update('cloud.jpg');
    }
}