var game;
var boat;
var players;
$(document).ready( startApp );

function startApp(){
    game = new Imhotep('body');

    var pyramid = new Pyramid(1, ['black', 'white', 'black', 'black']);
    boat = new Boat();
    $("#button").click(function(){
        game.startGame();
        pyramid.render();
        pyramid.addPyramidBlocks();
        pyramid.doScore();
        var blackScore = pyramid.getBlackScore();
        var whiteScore = pyramid.getWhiteScore();
        console.log(blackScore);
        console.log(whiteScore);
        boat.render();
    })

    players = new Players();
    boat = new Boat();

    $("#loadMap").click(function(){
        // load the map
        game.startGame();
        players.newPlayer(2);
        players.makeSheds();
        boat.render();
    })
