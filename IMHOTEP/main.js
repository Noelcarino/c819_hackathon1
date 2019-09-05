var game;
var boat;
$(document).ready( startApp );

function startApp(){
    game = new Imhotep('body');
    boat = new Boat();
    $("#button").click(function(){
        game.startGame();
        boat.render();
    })

    // boat = new Boat();
    // boat.render();
}
