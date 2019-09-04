var game;
var boat;
$(document).ready( startApp );

function startApp(){
    game = new Imhotep('body');
    boat = new Boat();
    boat.render();
}
