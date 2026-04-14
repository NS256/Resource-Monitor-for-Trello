/* global TrelloPowerUp */

// Get the TrelloPowerUp instance for this iframe
var t = TrelloPowerUp.iframe({
  appKey: "df57a286a5a1027ff8a5e8f94ceeb036",
  appName: "Resource Monitor",
});

// Get the REST API instance for authorization
var restAPI = t.getRestApi();

// Fetch and display board resource information
Promise.all([
  t.cards('id'),
  t.lists('id'),
  t.board('id')
])
  .then(function(data) {
    var cards = data[0];
    var lists = data[1];
    var board = data[2];

    // Log to console
    console.log('Cards:', cards);
    console.log('Lists:', lists);
    console.log('Board ID:', board.id);

    // Update the display
    document.getElementById('totalCards').textContent = cards.length;
    document.getElementById('totalLists').textContent = lists.length;

    // Authorize and fetch board limits
    return restAPI.isAuthorized().then(function(isAuthorized) {
      if (!isAuthorized) {
        return restAPI.authorize({ scope: 'read' });
      }
    }).then(function() {
      return restAPI.getToken();
    }).then(function(token) {
      return fetch(
        'https://api.trello.com/1/boards/' + board.id + '/?fields=limits' +
        '&key=df57a286a5a1027ff8a5e8f94ceeb036&token=' + token
      ).then(function(res) {
        return res.json();
      }).then(function(boardData) {
        console.log('Board Limits:', boardData);
        document.getElementById('limitsLog').textContent = JSON.stringify(boardData.limits, null, 2);
      });
    });
  })
  .catch(function(error) {
    console.error('Error fetching board data:', error);
    document.getElementById('totalCards').textContent = 'Error';
    document.getElementById('totalLists').textContent = 'Error';
    document.getElementById('limitsLog').textContent = 'Error: ' + error.message;
  });

// Resize the modal to fit content
t.render(function() {
  return t.sizeTo('#content');
});
