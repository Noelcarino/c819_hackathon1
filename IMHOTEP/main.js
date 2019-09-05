var game;
var boat;
var players;
$(document).ready( startApp );

function startApp(){
    game = new Imhotep('body');
    players = new Players();
    boat = new Boat();

    $("#loadMap").click(function(){
        // load the map
        game.startGame();
        players.newPlayer(2);
        players.makeSheds();
        boat.render();
    })
    
}

