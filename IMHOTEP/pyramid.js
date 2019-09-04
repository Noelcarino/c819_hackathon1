class Pyramid {
  constructor(currentPlayer, blockArray) {
    this.currentPlayer = currentPlayer;
    this.blockArray = blockArray;
    this.pointsArray = [3, 1, 2, 3, 4, 2, 3, 1, 2, 3, 2, 3, 1, 4];
    this.domElements = {
      pyramidContainer: null,
      pyramidBlocks: null,
    }
  }
  render() {
    this.domElements.pyramidContainer = $("<div>", {
      class: 'pyramid',
      css: {
        'background-color': 'rgb(154, 175, 31)',
        text: "Pyramid",
      }
    });
    var boardContainer = $(".container.board");
    boardContainer.append(this.domElements.pyramidContainer);
    this.domElements.pyramidBlocks = $("<div>", {
      class: 'pyramid-blocks',
      css: {
        'background-color': 'rgb(212, 27, 126)'
      }
    })
    this.domElements.pyramidContainer.append(this.domElements.pyramidBlocks);
  }
}
