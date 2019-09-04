class Imhotep {
    constructor (displayDom) {
        this.dom = {
            container: $(displayDom)
        }

        this.dom.container.append( boardElements );
        var boardElements = this.render();

    }

    // render the game boards here
    render(){
        this.dom.container = $("<div>", {
            class: 'gameArea',
            id: 'gameArea'
        })


        var gameAreaDiv = $("body");

        this.dom.container.appendTo(gameAreaDiv);

        var shedAreaDiv = $("<div>")
                    .addClass("container shed");
                    shedAreaDiv.appendTo('#gameArea');

    }
}