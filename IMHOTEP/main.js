var game;
var boat;
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
}
