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
    playRound (){
      ++this.numberOfRounds;
      if(this.numberOfRounds === 6){
        this.numberOfRounds = 0;
      }
    }
    newPlayer(numberOfPlayers) {
      var availablePlayers = ['player1', 'player2', 'player3',];
      // 'player4', 'player5', 'player6'  (for it we decide to go further)
      if(numberOfPlayers === 2){
        this.playerArray.push(availablePlayers[0], availablePlayers[1]);
      }
      if(numberOfPlayers === 3){
        this.playerArray.push(availablePlayers[0], availablePlayers[1],availablePlayers[2]);
      }
    }
    addBrickToBoat(){
      this.currentBricks -1;
    }
    sendBoat(){
      this.shipSailed = true;
    }
    makeSheds(){
    if(this.playerArray.length ===2){
      var player1Div = $('<div>').addClass("sheds").css({
        'background-color': 'white',
        'left': '15%',
      })
      var player2Div = $('<div>').addClass("sheds").css({
        'background-color': 'da brown',
        'left': '30%',
      })
      $(player1Div).appendTo('#shed');
      $(player2Div).appendTo('#shed');
    }

  if(this.playerArray.length > 2) {
    var player3Div = $('<div>').addClass("sheds").css({
      'background-color': 'black',
      'right': '30%',
    })
      }
  if (this.playerArray.length > 2) {
    var player4Div = $('<div>').addClass("sheds").css({
      'background-color': 'gray',
      'right': '15%',
    })
  }
    }
}
