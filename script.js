// Get references to the form and result elements. We use const because these variables do not change.
const form = document.getElementById("form"); // form element does not change
const result = document.getElementById("result"); // result element does not change

// Add an event listener to the form for the submit event
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the page from reloading

  // Get the values from the input fields. We use const because these values are only read, not reassigned.
  const noun = document.getElementById("noun").value;
  const verb = document.getElementById("verb").value;
  const adjective = document.getElementById("adjective").value;

  // Create the sentence using template literals for easier string formatting
  var sentence = `${verb}ing ${adjective} ${noun} is the real test of character. #LifeRules`;

  // Capitalize the first letter of the sentence
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

  // Display the sentence in the result paragraph
  result.textContent = sentence;

  // Clear the input fields
  document.getElementById("noun").value = "";
  document.getElementById("verb").value = "";
  document.getElementById("adjective").value = "";
});
