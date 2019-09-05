class Players {
    constructor () {
      this.playerArray = [];
      // this.startingNumberOfBlocks = numberOfBlocks;
      this.currentBricks = null;
      // this.colorOfBlocks = colorOfBlocks;
      this.currentNumberOfPoints = null;
      this.numberOfRounds = null;
      // this.shed = makeShed();
    }
     makeSheds() {
    if (this.playerArray.length === 2) {
      var player1Div = $('<div>').addClass("sheds").css({
        'background-color': 'white',
        'left': '15%',
      })
      var player2Div = $('<div>').addClass("sheds").css({
        'background-color': 'dark brown',
        'left': '30%',
      })
      $(player1Div).appendTo('#shed');
      $(player2Div).appendTo('#shed');
    }

    if (this.playerArray.length > 2) {
      var player3Div = $('<div>').addClass("sheds").css({
        'background-color': 'black',
        'right': '30%',
      })
      $(player3Div).appendTo('#ship');
    }
    if (this.playerArray.length > 2) {
      var player4Div = $('<div>').addClass("sheds").css({
        'background-color': 'gray',
        'right': '15%',
      })
      $(player4Div).appendTo('#ship');
    }
  }

    playRound (){
      ++this.numberOfRounds;
      if(this.numberOfRounds === 6){
        this.numberOfRounds = 0;
      }
    }
    newPlayer(numberOfPlayers) {
      if(numberOfPlayers === 2){
        return this.playerArray = ['player1', 'player2'];
      }
      if(numberOfPlayers === 3){
        return this.playerArray = ['player1', 'player2', 'player3'];
      }
      if(numberOfPlayers === 4){
        return this.playerArray = ['player1', 'player2', 'player3', 'player4'];
      }
    }
    addBrickToBoat(){
      this.currentBricks -1;
    }
    addBrickToShed(){
      if(this.currentBricks <=2){
        this.currentBricks +3;
      } else {
        alert('You cannot have more than 5 blocks');
      }
    }
    sendBoat(){
      Boat.shipSailed = true;
    }


}
