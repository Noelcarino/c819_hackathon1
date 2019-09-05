class PlayerData {
    constructor () {
      this.players = [

      ],
      this.playerMoveCount = 1;
      this.numberOfRounds = null;
      this.addBrickToShed = this.addBrickToShed.bind(this);
      this.currentBricks = 1;

    }
    newPlayer(numberOfPlayers) {
      if(numberOfPlayers === 2){
        return this.players = [
          {
          playerNumber: 1,
          currentColorOfBricks: null,
          numberOfBricks: 2,
          numberOfPoints: null,
        },
        {
          playerNumber: 2,
          currentColorOfBricks: null,
          numberOfBricks: 3,
          numberOfPoints: null,
        },
      ];
      }

    }
     makeSheds() {
    if (this.players.length === 2) {
      var player1Div = $('<div>').addClass("sheds").attr("id", "shed1").css({
        'background-color': 'white',
        'left': '15%',
      })
      var player2Div = $('<div>').addClass("sheds").attr("id", "shed2").css({
        'background-color': 'white',
        'left': '30%',
      })
      $(player1Div).appendTo('#shed');
      $(player2Div).appendTo('#shed');
    }

    // if (this.players.length > 2) {
    //   var player3Div = $('<div>').addClass("sheds").css({
    //     'background-color': 'black',
    //     'right': '30%',
    //   })
    //   $(player3Div).appendTo('#shed');
    // }
    // if (this.players.length > 2) {
    //   var player4Div = $('<div>').addClass("sheds").css({
    //     'background-color': 'gray',
    //     'right': '15%',
    //   })
    //   $(player4Div).appendTo('#shed');
    // }
  }

    // playRound (){
    //   ++this.numberOfRounds;
    //   if(this.numberOfRounds === 6){
    //     this.numberOfRounds = 0;
    //   }
    // }

    addBrickToBoat(){
      this.currentBricks --;
    }
    initializeBricks(){
      var newDiv1 = $("<div>").addClass('pyramid-blocks');
      var newDiv2 = $("<div>").addClass('pyramid-blocks');
      var newDiv3 = $("<div>").addClass('pyramid-blocks');
      var newDiv4 = $("<div>").addClass('pyramid-blocks');
      var newDiv5 = $("<div>").addClass('pyramid-blocks');

      $("#shed1").append(newDiv1);
      $("#shed1").append(newDiv2);

      $("#shed2").append(newDiv3);
      $("#shed2").append(newDiv4);
      $("#shed2").append(newDiv5);


      // $('#shed1').append(newDiv).addClass('pyramid-blocks');
      // // $('#shed1').append(newD).addClass('pyramid-blocks');
      


      


      this.currentBricks;
    }
    addBrickToShed(){
      
      if(this.currentBricks < 3){
        var newDiv1 = $("<div>").addClass('pyramid-blocks');
        var newDiv2 = $("<div>").addClass('pyramid-blocks');
        var newDiv3 = $("<div>").addClass('pyramid-blocks');

        $("#shed"+this.playerMoveCount).append(newDiv1);
        $("#shed"+this.playerMoveCount).append(newDiv2);
        $("#shed"+this.playerMoveCount).append(newDiv3);

        this.currentBricks += 3;
        console.log("move count: ", this.playerMoveCount);

      } else {
        alert('You cannot have more than 5 blocks');
      }
      if (this.playerMoveCount == 1){
        this.playerMoveCount = 2;
      }
      else {
        this.playerMoveCount = 1;
      }
      console.log("move count: ", this.playerMoveCount);
      return this.playerMoveCount;
    }
  
    addShedClick(){
     $("#shed"+this.playerMoveCount).click(this.addBrickToShed);
    }

    getPlayerMoveCount() {
      return this.playerMoveCount;
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
