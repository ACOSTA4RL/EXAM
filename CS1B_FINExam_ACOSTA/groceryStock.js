//Rjay Luis Acosta 1B

// groceryStacks.js

// Empty array to act as a stack
let groceryStack = [];

// Peek function to check the top item or if it's empty
function peek(stack) {
  if (stack.length === 0) {
    console.log("The stack is currently empty.");
    return null;
  } else {
    console.log("Top of the stack:", stack[stack.length - 1]);
    return stack[stack.length - 1];
  }
}

// Push function to add item to the stack
function push(stack, item) {
  stack.push(item);
  console.log(item + " added to the stack.");
  peek(stack); // Show top item after pushing
  console.log("Current Stack:", stack);
}

// Pop function to remove the last item from the stack
function pop(stack) {
  if (stack.length === 0) {
    alert("Cannot pop. The stack is empty!");
    return;
  }
  let removedItem = stack.pop();
  alert("Removed: " + removedItem);
  peek(stack); // Show top item after popping
  console.log("Current Stack:", stack);
}

// Ask the user for 5 grocery items
for (let i = 0; i < 5; i++) {
  let item = prompt("Enter grocery item " + (i + 1) + ":");
  push(groceryStack, item);
}

// Ask user if they want to remove (pop) an item
let remove = prompt("Do you want to remove the last item? (yes/no):");
if (remove.toLowerCase() === "yes") {
  pop(groceryStack);
}