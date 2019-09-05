var game;
var boat;
var players;
var pyramid;

$(document).ready( startApp );

function startApp(){
    game = new Imhotep('body');
    players = new PlayerData();
    // pyramid = new Pyramid(1, ['black', 'white', 'black', 'black']);
    var player1blocks = players.getPlayer1Array;
    var player2blocks = players.getPlayer2Array;
    boat = new Boat(players.getPlayerMoveCount.bind(players),player1blocks,player2blocks);
    $("#loadMap").click(function(){
        game.startGame();
        boat.render();
        players.newPlayer(2);
        players.makeSheds();
        players.initializeBricks();
        players.addShedClick();
        boat = new Boat(players.getPlayerMoveCount.bind(players), player1blocks, player2blocks);
        boat.boatClickHandler();
        var blockArray = boat.getBoatBrickArray();
        // pyramid = new Pyramid(playerMoveCount, blockArray);
        // pyramid.render();
        // pyramid.pyramidClickHandler();
        // var blackScore = pyramid.getBlackScore();
        // var whiteScore = pyramid.getWhiteScore();
        // console.log(blackScore);
        // console.log(whiteScore);

    })

}


//     var pyramid = new Pyramid(1, ['black', 'white', 'black', 'black']);
//     boat = new Boat();
//     $("#button").click(function(){
//         game.startGame();
        // pyramid.render();
        // pyramid.addPyramidBlocks();
        // pyramid.doScore();
        // var blackScore = pyramid.getBlackScore();
        // var whiteScore = pyramid.getWhiteScore();
        // console.log(blackScore);
        // console.log(whiteScore);
//         boat.render();
//     })

//     boat = new Boat();


//     })
