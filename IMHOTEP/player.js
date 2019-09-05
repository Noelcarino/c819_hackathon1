class PlayerData {
    constructor () {
      this.players = [

      ],
      this.playerMove = null;
      this.numberOfRounds = null;

    }
     makeSheds() {
    if (this.players.length === 2) {
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

    if (this.players.length > 2) {
      var player3Div = $('<div>').addClass("sheds").css({
        'background-color': 'black',
        'right': '30%',
      })
      $(player3Div).appendTo('#shed');
    }
    if (this.players.length > 2) {
      var player4Div = $('<div>').addClass("sheds").css({
        'background-color': 'gray',
        'right': '15%',
      })
      $(player4Div).appendTo('#shed');
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
        return this.playerArray = [
          {
          playerNumber: 1,
          currentColorOfBricks: null,
          numberOfBricks: null,
          numberOfPoints: null,
        },
        {
          playerNumber: 2,
          currentColorOfBricks: null,
          numberOfBricks: null,
          numberOfPoints: null,
        },
      ];
      }

    }
    addBrickToBoat(){
      this.currentBricks -1;
    }
    initializeBricks(){
      this.currentBricks;
    }
    addBrickToShed(){
      if(this.currentBricks <=2){
        this.currentBricks +3;
      } else {
        alert('You cannot have more than 5 blocks');
      }
    }
    addBrickToBoat(){

    }

    sendBoat(){
      // Boat.shipSailed = true;
    }


}




































































//leave here for if we decide to do 4 players
// if(numberOfPlayers === 3){
      //   return this.playerArray = [
      //     {
      //       playerNumber: 1;
      //       currentColorOfBricks: null;
      //       numberOfBricks: null;
      //       numberOfPoints: null,
      //     },
      //     {
      //       playerNumber: 2;
      //       currentColorOfBricks: null;
      //       numberOfBricks: null;
      //       numberOfPoints: null,
      //     },
      //     {
      //       playerNumber: 3;
      //       currentColorOfBricks: null;
      //       numberOfBricks: null;
      //       numberOfPoints: null,
      //     },
      //   ];
      // }
      // if(numberOfPlayers === 4){
      //   return this.players = [
      //     {
      //       playerNumber: 1;
      //       currentColorOfBricks: null;
      //       numberOfBricks: null;
      //       numberOfPoints: null,
      //     },
      //     {
      //       playerNumber: 2;
      //       currentColorOfBricks: null;
      //       numberOfBricks: null;
      //       numberOfPoints: null,
      //     },
      //     {
      //       playerNumber: 3;
      //       currentColorOfBricks: null;
      //       numberOfBricks: null;
      //       numberOfPoints: null,
      //     },
      //     {
      //       playerNumber: 4;
      //       currentColorOfBricks: null;
      //       numberOfBricks: null;
      //       numberOfPoints: null,
      //     },
        // ];
      // }
