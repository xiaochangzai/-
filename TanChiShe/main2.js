var timer;
var tds;
var way = 39;
var speed = 100;
var pause = true;
var snake = [{
    X:0,
    Y:0
},{
    X:1,
    Y:0
},{
    X:2,
    Y:0
}];
window.onload = function(){
    tds = $("table tr td");
    timer = setInterval(function(){
        move();
    },speed);
    createfood();
}

            window.onkeydown = function(e){
                e = event || window.event;
                if(e.keyCode == 32){
                    if(pause){
                        clearInterval(timer);
                        pause = false;
                    }else{
                        timer = setInterval(function(){
                            move();
                        },speed);
                        pause = true;
                    }
                }
                if(e.keyCode >= 37 && e.keyCode <= 40){
                    way = e.keyCode;
                }
            }

//
        function move(){
            switch (way){
                case 37:    //左
                    if(snake[snake.length - 1].X == 0){  //
                        die();
                    }
                    movetail();
                    snake.push({X:snake[snake.length-1].X-1,Y:snake[snake.length-1].Y});
                    break;
                case 38:    //上
                    if(snake[snake.length - 1].Y == 0){  //
                        die();
                    }
                    movetail();
                    snake.push({X:snake[snake.length-1].X,Y:snake[snake.length-1].Y-1});
                    break;
                case 39:    //右
                    if(snake[snake.length - 1].X == 19){  //
                        die();
                    }
                    movetail();
                    snake.push({X:snake[snake.length-1].X+1,Y:snake[snake.length-1].Y});
            break;
        case 40:    //下
            if(snake[snake.length - 1].Y == 19){  //
                die();
            }
            movetail();
            snake.push({X:snake[snake.length-1].X,Y:snake[snake.length-1].Y+1});
            break;
    }
            eat();
}
function createfood(){
    var food = parseInt(Math.random()*400);
    if(tds[food].style.backgroundColor == "red"){
        createfood();
    }
    tds[food].style.backgroundColor = "yellow";
}
function die(){
    clearInterval(timer);
    alert("You are die!")

}
function eat(){
    var td = tds[snake[snake.length-1].Y*20+snake[snake.length-1].X];
    if(td.style.background != "yellow"){
        if(td.style.background == "red"){
            die();
        }
        tds[snake[0].Y*20 + snake[0].X].style.background = "#0033FF";   //
        snake.shift();

    }else{
        createfood();
    }
    tds[snake[snake.length-1].Y*20+snake[snake.length-1].X].style.background = "red";
}
function movetail(){    //移除蛇尾
    tds[snake[0].Y*20 + snake[0].Y].style.background = "#0033FF";
}