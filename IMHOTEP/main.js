var game;
var boat;
var players;
var pyramid;

$(document).ready( startApp );

function startApp(){
    game = new Imhotep('body');
    players = new PlayerData();
    var playerMoveCount = players.getPlayerMoveCount();
    boat = new Boat(playerMoveCount);
    $("#loadMap").click(function(){
        game.startGame();
        boat.render();
        players.newPlayer(2);
        players.makeSheds();
        players.initializeBricks();
        players.addShedClick();
        boat.boatClickHandler();
        var blockArray = boat.getBoatBrickArray();
        pyramid = new Pyramid(playerMoveCount, blockArray);
        pyramid.render();
        pyramid.pyramidClickHandler();
        pyramid.doScore();
        $("#loadMap").addClass("hidden");
        $("#directions").addClass("hidden");


    })
}
