class Players {
    constructor (numberOfPlayers) {
      this.player = [];
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
        this.player.push(availablePlayers[0], availablePlayers[1]);
      }
      if(numberOfPlayers === 3){
        this.player.push(availablePlayers[0], availablePlayers[1],availablePlayers[2]);
      }
    }
    addBrickToBoat(){
      this.currentBricks -1;
    }
    sendBoat(){
      this.shipSailed = true;
    }
    makeShed();
    $('<div>',
    css {
      class: 'shed',
      backgroundImage

    }
}
