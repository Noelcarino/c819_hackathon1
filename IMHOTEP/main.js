var game;
var boat;
$(document).ready( startApp );

function startApp(){
    game = new Imhotep('body');
    $("#button").click(function(){
        game.startGame();

    })
    
    boat = new Boat();
    boat.render();
}

