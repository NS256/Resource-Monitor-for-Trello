/* global TrelloPowerUp */

// Get the TrelloPowerUp instance for this iframe
var t = TrelloPowerUp.iframe();

// Fetch and display board resource information
t.board('id', 'name', 'cards', 'memberships')
  .then(function(board) {
    // Get total cards on the board
    t.cards('id')
      .then(function(cards) {
        document.getElementById('totalCards').textContent = cards.length;
      });

    // Get total lists on the board
    t.lists('id')
      .then(function(lists) {
        document.getElementById('totalLists').textContent = lists.length;
      });

    // Get board members
    t.members('id', 'fullName')
      .then(function(members) {
        document.getElementById('boardMembers').textContent = members.length;
      });
  });

// Resize the modal to fit content
t.render(function() {
  return t.sizeTo('#content');
});
