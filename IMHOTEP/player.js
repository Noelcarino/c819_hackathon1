class PlayerData {
    constructor () {
      this.players = [

      ],
      this.playerMoveCount = 1;
      this.numberOfRounds = null;
      this.addBrickToShed = this.addBrickToShed.bind(this);
      this.player1CurrentBricks = null;
      this.player2CurrentBricks = null;
      this.player1MoveCount = null;
      this.player2MoveCount = null;
      this.player1Array = [];
      this.player2Array = [];

    }
    newPlayer(numberOfPlayers) {
      if(numberOfPlayers === 2){
        return this.players = [
          {
          playerNumber: 1,
          currentColorOfBricks: null
        },
        {
          playerNumber: 2,
          currentColorOfBricks: null,
        },
      ];
      }

    }
     makeSheds() {
    if (this.players.length === 2) {

      var player1Div = $('<div>').addClass("sheds").attr("id", "shed1");
      var player2Div = $('<div>').addClass("sheds").attr("id", "shed2");


      $(player1Div).appendTo('#shed');
      $(player2Div).appendTo('#shed');
    }
  }

    addBrickToBoat(){
      if (this.playerMoveCount === 1){
        this.player1MoveCount++;
        this.player1CurrentBricks--;
      } else {
        this.player2MoveCount++;
        this.player2CurrentBricks--;
      }
    }
    initializeBricks(){
      this.player1CurrentBricks = 2;
      this.player2CurrentBricks = 2;
      var newDiv1 = $("<div>").addClass('pyramid-blocks').css({
        'background-color' : 'white'
      });
      var newDiv2 = $("<div>").addClass('pyramid-blocks').css({
        'background-color': 'white'
      });


      var newDiv3 = $("<div>").addClass('pyramid-blocks').css({
        'background-color': 'black'
      });
      var newDiv4 = $("<div>").addClass('pyramid-blocks').css({
        'background-color': 'black'
      });
      var newDiv5 = $("<div>").addClass('pyramid-blocks').css({
        'background-color': 'black'
      });

      $("#shed1").append(newDiv1);
      $("#shed1").append(newDiv2);

      $("#shed2").append(newDiv3);
      $("#shed2").append(newDiv4);
      $("#shed2").append(newDiv5);


    }
    removeBrickFromShed(){
      if (this.playerMoveCount === 1) {
        this.player1CurrentBricks--;
      } else {
        this.player2CurrentBricks--;
      }
    }
    addBrickToShed(){
      var currentBricks = null;
      var blockColor = '';
      if (this.playerMoveCount === 1){
        currentBricks = this.player1CurrentBricks;
        blockColor = 'white';
      }
      else {
        currentBricks = this.player2CurrentBricks;
        blockColor = 'black';
      }
      if(currentBricks < 3){
        var newDiv1 = $("<div>").addClass('pyramid-blocks').css({
          'background-color' : blockColor
        });
        var newDiv2 = $("<div>").addClass('pyramid-blocks').css({
          'background-color': blockColor
        });
        var newDiv3 = $("<div>").addClass('pyramid-blocks').css({
          'background-color': blockColor
        });

        $("#shed"+this.playerMoveCount).append(newDiv1);
        $("#shed"+this.playerMoveCount).append(newDiv2);
        $("#shed"+this.playerMoveCount).append(newDiv3);

        if (this.playerMoveCount == 1){
          this.player1CurrentBricks += 3;
          this.player1MoveCount++;
          this.playerMoveCount = 2;

        }
        else {
          this.player2CurrentBricks += 3;
          this.player2MoveCount++;
          this.playerMoveCount = 1;
        }
      console.log("move count: ", this.playerMoveCount);
    }
    else{
      alert('You can not have more than 5 blocks');
    }
    }

    addShedClick(){
     $("#shed"+this.playerMoveCount).click(this.addBrickToShed);
    }
    getPlayer1BrickCount(){
      return this.player1CurrentBricks;
    }
    getPlayer2BrickCount() {
      return this.player2CurrentBricks;
    }
    getPlayerMoveCount() {
      return this.playerMoveCount;
    }
    getPlayer1MoveCount() {
      return this.player1MoveCount;
    }
    getPlayer2MoveCount() {
      return this.player2MoveCount;
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
