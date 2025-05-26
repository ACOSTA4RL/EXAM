//Rjay Luis Acosta 1B

// Prompt for numbers and names
var numbersInput = prompt("Enter numbers separated by commas:", "24,65,21,5,9,32,42,80,57");
var namesInput = prompt("Enter names separated by commas:", "Zenvo,Erica,Jordie,Alicia,Redon");

// Convert numbers input to array of numbers
var numbers = [];
var parts = numbersInput.split(",");
for (var i = 0; i < parts.length; i++) {
  var n = parseInt(parts[i].trim());
  if (!isNaN(n)) {
    numbers.push(n);
  }
}

// Convert names input to array of strings
var names = [];
var partsNames = namesInput.split(",");
for (var i = 0; i < partsNames.length; i++) {
  var name = partsNames[i].trim();
  if (name.length > 0) {
    names.push(name);
  }
}

// Merge arrays
var merged = [];
for (var i = 0; i < numbers.length; i++) {
  merged.push(numbers[i]);
}
for (var i = 0; i < names.length; i++) {
  merged.push(names[i]);
}
console.log("Merged array:");
console.log(merged);

// Sort numbers descending (simple bubble sort)
for (var i = 0; i < numbers.length - 1; i++) {
  for (var j = 0; j < numbers.length - 1 - i; j++) {
    if (numbers[j] < numbers[j + 1]) {
      var temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}
console.log("Numbers sorted descending:");
console.log(numbers);

// Sort names alphabetically (simple bubble sort)
for (var i = 0; i < names.length - 1; i++) {
  for (var j = 0; j < names.length - 1 - i; j++) {
    if (names[j].toLowerCase() > names[j + 1].toLowerCase()) {
      var temp = names[j];
      names[j] = names[j + 1];
      names[j + 1] = temp;
    }
  }
}
console.log("Names sorted alphabetically:");
console.log(names);

alert("Numbers sorted descending: " + numbers.join(", "));
alert("Names sorted alphabetically: " + names.join(", "));
