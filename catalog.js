

var plants = [
  { light: "low", name: "cactus" },
  { light: "high", name: "flower" }
];

var light = document.getElementById("light");
var radio = document.getElementById("radio");
var button = document.getElementById("button");


function searchItems() {
  var inputValue = light.value;

  for (let i = 0; i < plants.length; i++) {
    var plant = plants[i];
    if (plant.light === inputValue) {
      console.log(plant);
      var plantDiv = document.createElement("div");

      var content = document.createTextNode(plant.name);
      plantDiv.appendChild(content);
      document.body.appendChild(plantDiv);
    }
  }
}
//put between bracket
//variables only inside obj
];

// radio button, check box, text box w/ button
size
