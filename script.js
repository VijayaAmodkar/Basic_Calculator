// Get the display element
const display = document.getElementById("display"); //display here is a global variable as it is declared outside any block.

// Function to append a value to the display
function appendToDisplay(value) {
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  display.value = "";
}

// Function to delete the last digit from the display
function deleteDigit() {
  display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
  try {
    const result = eval(display.value); // Use eval to evaluate the expression
    if (Number.isNaN(result) || !Number.isFinite(result)) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Error"; //Displays 'error' if invalid expression is evaluated
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Backspace') {
    event.preventDefault(); // Prevents the default backspace behavior of navigating back in the browser history
    deleteDigit(); // Call the deleteDigit function when the Backspace key is pressed which deletes the last digit in the display
  }
  
  switch (event.key) {
    case 'c':
    case 'C':
      document.getElementById('C').click(); // Simulate a click on the 'C' button when 'c' or 'C' key is pressed
      break;
    case '/':
      document.getElementById('/').click();  // Simulate a click on the '/' button when '/' key is pressed
      break;
    case '*':
      document.getElementById('*').click(); // Simulate a click on the '*' button when '*' key is pressed
      break;
    case '7':
      document.getElementById('7').click(); // Simulate a click on the '7' button when '7' key is pressed
      break;
      // ... Repeat the above cases for the remaining keys/buttons
    case '8':
      document.getElementById('8').click();
      break;
    case '9':
      document.getElementById('9').click();
      break;
    case '-':
      document.getElementById('-').click();
      break;
    case '4':
      document.getElementById('4').click();
      break;
    case '5':
      document.getElementById('5').click();
      break;
    case '6':
      document.getElementById('6').click();
      break;
    case '+':
      document.getElementById('+').click();
      break;
    case '1':
      document.getElementById('1').click();
      break;
    case '2':
      document.getElementById('2').click();
      break;
    case '3':
      document.getElementById('3').click();
      break;
    case '=':
    case 'Enter':
      document.getElementById('res').click(); // Simulate a click on the '=' button when '=' or 'Enter' key is pressed
      break;
    // ... Repeat the above case for the remaining keys/buttons      
    case '0':
      document.getElementById('0').click();
      break;
    case '.':
      document.getElementById('.').click();
      break;
  }
});

function changeStylesheet(sheetName) {
  let stylesheet = document.getElementById('stylesheet'); // Get the reference to the stylesheet element
  stylesheet.href = sheetName; // Change the href attribute of the stylesheet element to switch stylesheets
}