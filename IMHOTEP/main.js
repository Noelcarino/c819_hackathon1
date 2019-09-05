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

        // load the sheds
    })
    
    players.newPlayer(2);

    $("#loadPlayers").click(function(){
        players.makeSheds();
    })
    
    $("#addBoat").click(function(){
        boat.render();
    })
}

