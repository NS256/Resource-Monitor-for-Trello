/* global TrelloPowerUp */

// Get the TrelloPowerUp instance for this iframe
var t = TrelloPowerUp.iframe();

// Get the REST API instance (handles authentication automatically)
var restAPI = t.getRestApi();

// Fetch and display board resource information
Promise.all([
  t.cards('id'),
  t.lists('id'),
  t.getContext().board
//   t.members('id', 'fullName', 'username')
])
  .then(function(data) {
    var cards = data[0];
    var lists = data[1];
    var boardID = data[2];

    // Log to console
    console.log('Cards:', cards);
    console.log('Lists:', lists);

    // Make authenticated API call using Power-Up REST API
    restAPI.get('/boards/' + boardID, { fields: 'limits' })
      .then(function(boardData) {
        console.log('Board Limits:', boardData);
        document.getElementById('limitsLog').textContent = JSON.stringify(boardData, null, 2);
      })
      .catch(function(error) {
        console.error('Error fetching board limits:', error);
        document.getElementById('limitsLog').textContent = 'Error: ' + error.message;
      });

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
