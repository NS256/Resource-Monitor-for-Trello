/* global TrelloPowerUp */

// Get the TrelloPowerUp instance for this iframe
var t = TrelloPowerUp.iframe({
  appKey: "df57a286a5a1027ff8a5e8f94ceeb036",
  appName: "Resource Monitor",
});

// Fetch and display board resource information
Promise.all([
  t.cards('id'),
  t.lists('id'),
  t.board('id', 'limits')
//   t.members('id', 'fullName', 'username')
])
  .then(function(data) {
    var cards = data[0];
    var lists = data[1];
    var board = data[2];

    // Log to console
    console.log('Cards:', cards);
    console.log('Lists:', lists);
    console.log('Board:', board);

    // Display board limits
    if (board.limits) {
      document.getElementById('limitsLog').textContent = JSON.stringify(board.limits, null, 2);
    }

    // Update the display
    document.getElementById('totalCards').textContent = cards.length;
    document.getElementById('totalLists').textContent = lists.length;
    // document.getElementById('boardMembers').textContent = members.length;
  })
  .catch(function(error) {
    console.error('Error fetching board data:', error);
    document.getElementById('totalCards').textContent = 'Error';
    document.getElementById('totalLists').textContent = 'Error';
    // document.getElementById('boardMembers').textContent = 'Error';
  });

// Resize the modal to fit content
t.render(function() {
  return t.sizeTo('#content');
});
