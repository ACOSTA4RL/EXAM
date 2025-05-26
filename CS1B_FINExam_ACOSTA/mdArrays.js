//Rjay Luis Acosta 1B

// Prompt for names
var namesInput = prompt("Enter names separated by commas:", "Genevieve, Juan, Luna, Gabriel, Elise");
// Prompt for ages
var agesInput = prompt("Enter ages separated by commas:", "24, 65, 21, 5, 9");

// Convert names input into an array
var names = [];
var nameParts = namesInput.split(",");
for (var i = 0; i < nameParts.length; i++) {
  var name = nameParts[i].trim();
  if (name.length > 0) {
    names.push(name);
  }
}

// Convert ages input into an array of numbers
var ages = [];
var ageParts = agesInput.split(",");
for (var i = 0; i < ageParts.length; i++) {
  var age = parseInt(ageParts[i].trim());
  if (!isNaN(age)) {
    ages.push(age);
  }
}

// Create restructured array [name, age]
var structuredArray = [];
for (var i = 0; i < names.length; i++) {
  if (i < ages.length) {
    structuredArray.push([names[i], ages[i]]);
  }
}

// Log each [name, age] pair to console
console.log("Restructured Array [name, age]:");
for (var i = 0; i < structuredArray.length; i++) {
  var pair = structuredArray[i];
  console.log(pair[0] + ", " + pair[1]);
}

// Prepare alert text
var alertText = "Restructured Array:\n";
for (var i = 0; i < structuredArray.length; i++) {
  alertText += structuredArray[i][0] + ", " + structuredArray[i][1] + "\n";
}

// Show alert
alert(alertText);
