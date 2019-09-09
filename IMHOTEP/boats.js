class Boat {
  constructor(playerMoveCount) {
    this.playerMoveCount = playerMoveCount;
    this.player1MoveCount= null;
    this.player2MoveCount = null;
    this.shipSailed = false;
    this.blockArray = [];
    this.addBrickToBoat = this.addBrickToBoat.bind(this);
    this.removeBlockFromPlayerShed = this.removeBlockFromPlayerShed.bind(this);
    this.domElements = {
      container: null,
      boatBrickArray: null
    }
  }
  addBrickToBoat(){
    var divToBoat = null;
    if (this.playerMoveCount == 1){
      divToBoat = $("<div>", {
        class: "pyramid-blocks",
        css: {
          'background-color' : 'white'
        }
      });
      divToBoat.appendTo("#boat");
      this.blockArray.push("white");

    } else  {
      divToBoat = $("<div>", {
        class: "pyramid-blocks",
        css: {
          'background-color' : 'black'
        }

      });

      divToBoat.appendTo("#boat");
      this.blockArray.push("black");
    }
  }
  boatClickHandler(){
    var boatId = $("#boat");
    boatId.click(this.addBrickToBoat);
    boatId.click(this.removeBlockFromPlayerShed);
  }

  getBoatBrickArray() {
    return this.blockArray;
  }


  render() {
    this.domElements.container = $("<div>", {
      class: 'boat',
      id: 'boat',
    })

    this.domElements.container.appendTo(".ship-container");
  }
  getPlayer1MoveCount() {
    return this.player1MoveCount;
  }
  getPlayer2MoveCount() {
    return this.player2MoveCount;
  }
  removeBlockFromPlayerShed() {
    if (this.playerMoveCount === 1) {
      $('#shed1 div:last-child').remove();
      this.player1MoveCount++;
    } else if (this.playerMoveCount === 2) {
      $('#shed2 div:last-child').remove();
      this.player2MoveCount++;
    }
    if (this.playerMoveCount == 1) {
      this.playerMoveCount = 2;
    }
    else {
      this.playerMoveCount = 1;
    }
  }
}
