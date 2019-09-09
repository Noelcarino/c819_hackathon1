class Pyramid {
  constructor(currentPlayer, blockArray) {
    this.currentPlayer = currentPlayer;
    this.blockArray = blockArray;
    this.blackScore = null;
    this.whiteScore = null;
    this.addPyramidBlocks = this.addPyramidBlocks.bind(this);
    this.emptyBoat = this.emptyBoat.bind(this);
    this.doScore = this.doScore.bind(this);
    this.displayScore = this.displayScore.bind(this);
    this.allBlocksForRoundArray = [];
    this.pointsArray = [3, 1, 2, 3, 4, 2, 3, 1, 2, 3, 2, 3, 1, 4];
    this.domElements = {
    pyramidContainer: null
    }
  }
  doScore (){
    for (var integerI = 0;integerI < this.allBlocksForRoundArray.length; integerI++){
      if (this.allBlocksForRoundArray[integerI] === 'black') {
        this.blackScore += this.pointsArray[integerI];
      }
      else {
        this.whiteScore += this.pointsArray[integerI];
      }
    }
  }

  getBlackScore () {
    return this.blackScore;
  }

  getWhiteScore() {
    return this.whiteScore;
  }

  displayScore() {
    var blackScore = this.blackScore;
    var whiteScore = this.whiteScore;
    $("#whiteScoreTarget").text(whiteScore);
    $("#blackScoreTarget").text(blackScore);
  }

  addPyramidBlocks (){
    for (var integerI = 0; integerI< this.blockArray.length; integerI++ ){
      this.allBlocksForRoundArray.push(this.blockArray[integerI]);
      var pyramidBlocks = $("<div>").addClass('pyramid-blocks');
      pyramidBlocks.css({
        'background-color':this.blockArray[integerI]
      });
      this.domElements.pyramidContainer.append(pyramidBlocks);
    }
  }

  pyramidClickHandler(){

    var pyramidClassDom = $(".pyramid");
    pyramidClassDom.click(this.addPyramidBlocks);
    pyramidClassDom.click(this.doScore);
    pyramidClassDom.click(this.displayScore);
    pyramidClassDom.click(this.emptyBoat);
    pyramidClassDom.click(function(){
      pyramidClassDom.addClass('pyramid-clicked');
  })
  }
  emptyBoat() {
    $(".boat").empty();
  }

  render() {
    this.domElements.pyramidContainer = $("<div>", {
      class: 'pyramid',
      css: {
        text: "Pyramid",
      }
    });
    var boardContainer = $(".pyramid-container");
    boardContainer.append(this.domElements.pyramidContainer);
  }
}
