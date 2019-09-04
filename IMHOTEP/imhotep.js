class Imhotep {
    constructor (displayDom) {
        this.dom = {
            container: $(displayDom)
        }



    }
    startGame(){
        //render board;
        this.dom.container.append( boardElements );
        var boardElements = this.render();

    }

    // render the game boards her
    render(){
        this.dom.container = $("<div>", {
            class: 'gameArea',
            id: 'gameArea'
        })

        var gameAreaDiv = $("body");
        this.dom.container.appendTo(gameAreaDiv);

        var pyramidAreaDiv = $("<div>").addClass("container pyramid-container").appendTo("#gameArea");
        var shipAreaDiv = $("<div>").addClass("container ship-container").appendTo("#gameArea");
        var shedAreaDiv = $("<div>").attr("id", "shed").addClass("container shed-container").appendTo('#gameArea');
        console.log('asdff');
    }
}

