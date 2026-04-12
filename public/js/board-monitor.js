/* global TrelloPowerUp */

// Get the TrelloPowerUp instance for this iframe
var t = TrelloPowerUp.iframe();

// Fetch and display board resource information
Promise.all([
  t.cards('id'),
  t.lists('id'),
  t.members('id', 'fullName', 'username')
])
  .then(function(data) {
    var cards = data[0];
    var lists = data[1];
    var members = data[2];

    // Update the display
    document.getElementById('totalCards').textContent = cards.length;
    document.getElementById('totalLists').textContent = lists.length;
    document.getElementById('boardMembers').textContent = members.length;
  })
  .catch(function(error) {
    console.error('Error fetching board data:', error);
    document.getElementById('totalCards').textContent = 'Error';
    document.getElementById('totalLists').textContent = 'Error';
    document.getElementById('boardMembers').textContent = 'Error';
  });

// Resize the modal to fit content
t.render(function() {
  return t.sizeTo('#content');
});
