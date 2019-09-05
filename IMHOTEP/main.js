var game;
var boat;
var players;
var pyramid;

$(document).ready( startApp );

function startApp(){
    game = new Imhotep('body');
    players = new PlayerData();
    // pyramid = new Pyramid(1, ['black', 'white', 'black', 'black']);
    var playerMoveCount = players.getPlayerMoveCount();
    boat = new Boat(playerMoveCount);
    console.log("test", playerMoveCount);
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
        var blackScore = pyramid.getBlackScore();
        var whiteScore = pyramid.getWhiteScore();
        console.log(blackScore);
        console.log(whiteScore);
        $("#loadMap").addClass("hidden");


    })

    $("#shed1").click(function(){
        console.log("asdfkasjdf");
    })
    $(".pyramid").click(function(){
        console.log("hello");
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

