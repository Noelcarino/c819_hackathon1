class Boat {
  constructor(img, inventorySize) {
    this.image = img;
    this.points = {
      invetorySize: null

    }
    this.domElements = {
      container: null,
      inventorySize: null
    }
  }
  render() {
    this.domElements.container = $("<div>", {
      class: 'boat',
      css: {
        "height": "50px",
        "width": "50px",
        "background-color": "white",
      }
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
    // var shipContainer = $(".ship");
    // shipContainer.append(this.domElements.container);
    // return this.domElements.container;
  }
}
