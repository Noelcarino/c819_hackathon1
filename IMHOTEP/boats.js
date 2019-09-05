class Boat {
  constructor(playerMoveCount) {
    this.playerMoveCount = playerMoveCount;
    this.shipSailed = false;
    this.blockArray = [];
    this.addBrickToBoat = this.addBrickToBoat.bind(this);
    // this.boatBrickArray: null



    this.domElements = {
      container: null,
      boatBrickArray: null
    }
  }
  addBrickToBoat(){
    if (this.playerMoveCount == 1){
      var divToBoat = $("<div>", {
        class: "pyramid-blocks",
        css: {
          'background-color' : 'white'
        }
      });
      divToBoat.appendTo("#boat");
      this.blockArray.push("white");

    } else {
      var divToBoat = $("<div>", {
        class: "pyramid-blocks",
        css: {
          'background-color' : 'black'
        }
  
      });

      divToBoat.appendTo("#boat");
      this.blockArray.push("black");
    }
    if (this.playerMoveCount == 1){
      this.playerMoveCount = 2;
    }
    else {
      this.playerMoveCount = 1;
    }

    
  }
  boatClickHandler(){
      $("#boat").click(this.addBrickToBoat);
      console.log("dafgsdfbvsdfv");
  }

  getBoatBrickArray() {
    return this.blockArray;
  }


  render() {
    this.domElements.container = $("<div>", {
      class: 'boat',
      id: 'boat',
      // onclick: 'boat.render()',
      // css: {
      //   "float": "left"
      // }
      // css: {
      //   "height": "120px",
      //   "width": "500px",
      //   // "background-color": "white",
      //   "background- image": "url()",
      //   "border": "3px solid #73AD21",
      //   "position": "relative",
      //   "top": "50px",
      //   "right": "-310px",

      // }

    })

    this.domElements.container.appendTo(".ship-container");


    // var inventorySizeContainer = $("<aside>", {
    //   class: 'inventorySizeContainer'
    // });
    // this.domElemenets.inventorySizePoints = $("<span>", {
    //   text: this.points.initialInventorySize
    // })
    // inventorySizeContainer.append(this.domElements.inventorySize);
    // this.domElements.container.append(inventorySizePoints);

  }
}


//boatBrickArray
