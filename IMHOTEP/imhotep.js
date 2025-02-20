class Imhotep {
    constructor (displayDom) {
        this.dom = {
            container: $(displayDom)
        }
    }
    startGame(){
        this.dom.container.append( boardElements );
        var boardElements = this.render();
    }
    render(){
        this.dom.container = $("<div>", {
            class: 'gameArea',
            id: 'gameArea'
        })

        var gameAreaDiv = $("body");
        this.dom.container.appendTo(gameAreaDiv);

        var statsDiv = $("<div>").addClass('container stats').appendTo("#gameArea").text("SCOREBOARD");
        var pyramidAreaDiv = $("<div>").addClass("container pyramid-container").appendTo("#gameArea");
        var shipAreaDiv = $("<div>").addClass("container ship-container").appendTo("#gameArea");
        var shedAreaDiv = $("<div>").attr("id", "shed").addClass("container shed-container").appendTo('#gameArea');

        var scoreBoardDiv = $("<div>").attr("id","scoreBoard").appendTo(statsDiv);
        var whiteScore = $("<div>").attr("id", "whiteScore").addClass("scoreBox").appendTo(scoreBoardDiv).text("white");
        var blackScore = $("<div>").attr("id", "blackScore").addClass("scoreBox").appendTo(scoreBoardDiv).text("black");
        var whiteScoreTarget = $("<div>").attr("id","whiteScoreTarget").addClass("scoreTargetBox").appendTo(whiteScore)
        var blackScoreTarget = $("<div>").attr("id","blackScoreTarget").addClass("scoreTargetBox").appendTo(blackScore)

        var roundCountDiv = $("<div>").attr("id", "roundCountDiv").addClass("scoreBox").appendTo(statsDiv).text("Round");

    }
}
