class Boat {
  constructor(img, boatBrickArray) {
    this.image = img;
    this.shipSailed = false;
    // this.boatBrickArray: null


    this.domElements = {
      container: null,
      boatBrickArray: null
    }
  }
  render() {
    this.domElements.container = $("<div>", {
      class: 'boat',
      onclick: 'boat.render()',
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
    console.log("hello");

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
