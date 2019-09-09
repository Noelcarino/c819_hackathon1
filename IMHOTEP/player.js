class PlayerData {
    constructor () {
      this.players = [];
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
        return this.players = [ 'player1', 'player2'];
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
        this.playerMoveCount = 2;
        this.addShedClick();

      } else {
        this.player2MoveCount++;
        this.player2CurrentBricks--;
        this.player1MoveCount = 1;
        this.addShedClick();
      }
    }
    initializeBricks(){
      this.player1CurrentBricks = 2;
      this.player2CurrentBricks = 3;
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

      var shed1Id = $("#shed1");
      var shed2Id = $("#shed2");

      shed1Id.append(newDiv1);
      shed1Id.append(newDiv2);

      shed2Id.append(newDiv3);
      shed2Id.append(newDiv4);
      shed2Id.append(newDiv5);


    }
    removeBrickFromShed(){
      if (this.playerMoveCount === 1) {
        this.player1CurrentBricks--;
        this.playerMoveCount = 2;
        this.addShedClick();
      } else {
        this.player2CurrentBricks--;
        this.playerMoveCount = 1;
        this.addShedClick();
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

      if(currentBricks < 3 ){
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
          this.addShedClick();

        }
        else {
          this.player2CurrentBricks += 3;
          this.player2MoveCount++;
          this.playerMoveCount = 1;
          this.addShedClick();
        }
    }
    else{
      alert('You cannot have more than 5 blocks');
    }
  }

  addShedClick() {
      $("#shed" +this.playerMoveCount).on("click", this.addBrickToShed);
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
