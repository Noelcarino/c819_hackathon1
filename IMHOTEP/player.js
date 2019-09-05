class PlayerData {
    constructor () {
      this.players = [

      ],
      this.playerMoveCount = 1;
      this.numberOfRounds = null;
      this.addBrickToShed = this.addBrickToShed.bind(this);
      this.currentBricks1 = null;
      this.player1array = [];
      this.currentBricks2 = null;
      this.player2array = [];

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
        'background-color': 'burlywood',
        'left': '15%',
      })
      var player2Div = $('<div>').addClass("sheds").attr("id", "shed2").css({
        'background-color': 'burlywood',
        'left': '30%',
      })
      $(player1Div).appendTo('#shed');
      $(player2Div).appendTo('#shed');
    }
  }
    addBrickToBoat(){
      if (this.playerMoveCount === 1){
        this.currentBricks1--;
        this.player1array.pop();
      }
      else {
        this.currentBricks2--;
        this.player2array.pop();

      }

    }
    initializeBricks(){
      this.currentBricks1 = 2;
      this.currentBricks2 = 3;
      this.player1array = ['white','white'];
      this.player2array = ['black','black','black'];
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
    addBrickToShed(){
      var currentBricks = null;
      var blockColor = "";
      if (this.playerMoveCount === 1){
        currentBricks = this.currentBricks1;
        blockColor = "white";
      }
      else {
        currentBricks = this.currentBricks2;
        blockColor = "black";
      }

      if(currentBricks < 3){
        var newDiv1 = $("<div>").addClass('pyramid-blocks').css({
          'background-color': blockColor
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
          this.currentBricks1 += 3;
          for (var integerI = 0; integerI < 3;integerI ++){
            this.player1array.push("white");
          }
        }
        else {
          this.currentBricks2 += 3;
          for (var newIntegerI = 0; newIntegerI < 3; integerI++) {
            this.player1array.push("black");
          }
        }

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
    getPlayer1Array() {
      return this.player1array;
    }
    getPlayer2Array() {
      return this.player2array;
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
