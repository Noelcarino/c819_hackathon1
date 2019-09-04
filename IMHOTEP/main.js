var game;

$(document).ready( startApp );

function startApp(){
    game = new Imhotep('body');
    $("#button").click(function(){
        game.startGame();

    })
    
}

