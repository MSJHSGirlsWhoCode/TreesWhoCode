

var plants = [
  { light: "low", name: "cactus", water: "low"},
  { light: "high", name: "flower", water: "high" },
  { light: 'high', name: 'rose', water: "medium"}
];

var light = document.getElementsByName("light");
var water = document.getElementsByName("water");
//var radio = document.getElementById("radio");
//var button = document.getElementById("button");


function searchItems() {
  var results = plants;

  for (let i=0; i<light.length; i++) {
    if (light[i].checked===true){
      var lightValue = light[i].value;
      results = findPlantsByProperty("light", lightValue, results);
    }
  }
  for (let i=0; i<water.length; i++) {
    if (water[i].checked===true){
      var waterValue = water[i].value;
      results = findPlantsByProperty("water", waterValue, results);
    }
  }
  console.log(results);
}

function findPlantsByProperty(property, value, currentPlants) {
  var results=[];
  for (let i=0; i < currentPlants.length; i++) {
    var plant = plants[i];
    if (plant[property] === value) {
      results.push(plant);
    }
  }
  return results;
}
//put between bracket
//variables only inside obj
// ];

// radio button, check box, text box w/ button
// size
