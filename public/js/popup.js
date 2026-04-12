/* global TrelloPowerUp */

// Get the TrelloPowerUp instance for this iframe
var t = TrelloPowerUp.iframe();

// Handle rendering and sizing of the popup
t.render(function() {
  // Resize the popup to fit content
  return t.sizeTo('#content');
});

// Example: Get data from context
// t.get('card', 'shared', 'myData')
//   .then(data => {
//     // Use data to populate the popup
//   });

// Example: Handle form submission
// document.getElementById('myForm').addEventListener('submit', function(e) {
//   e.preventDefault();
//   // Store data
//   return t.set('card', 'shared', 'myData', myValue)
//     .then(() => {
//       t.closePopup();
//     });
// });
