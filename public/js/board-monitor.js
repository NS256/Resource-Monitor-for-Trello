

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
    consoleLog('Cards: ' + JSON.stringify(cards));
    consoleLog('Lists: ' + JSON.stringify(lists));
    consoleLog('Board ID: ' + board.id);

    // Update the display
    // document.getElementById('totalCards').textContent = cards.length;
    // document.getElementById('totalLists').textContent = lists.length;

    // Authorize and fetch board limits
    /**
     * LIMITS JSON FILE DOESN'T INCLUDE COLLABORATORS WOULD BE GOOD TO INCLUDE THIS WHERE POSSIBLE JUST FOR CONTEXT
     */


    return restAPI.isAuthorized().then(function(isAuthorized) {
        // Confirmed via comment code enters this block
      if (!isAuthorized) {
        consoleLog('Not authorized, requesting authorization...');
        return restAPI.authorize({ scope: 'read' }).then(function(result) {
          consoleLog('Authorization completed, result: ' + JSON.stringify(result));
          return result;
        });
      } else {
        return Promise.resolve();
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
        // consoleLog('Board Limits: ' + JSON.stringify(boardData));
        // document.getElementById('limitsLog').textContent = JSON.stringify(boardData.limits, null, 2);
        
        renderLimitsList(boardData.limits);
      });
    }).catch(function(authError) {
      consoleError('Authorization or API error: ' + authError.message);
    //   document.getElementById('limitsLog').textContent = 'Error: ' + authError.message;
    });
  })
  .catch(function(error) {
    consoleError('Error fetching board data: ' + error.message);
    // document.getElementById('totalCards').textContent = 'Error';
    // document.getElementById('totalLists').textContent = 'Error';
    // document.getElementById('limitsLog').textContent = 'Error: ' + error.message;
  });


const renderLimitsList = (limitsJSON) => {
    //Find the div on the DOM
    const LIMITSCONTAINER = document.querySelector('.board-limits-container');

    LIMITSCONTAINER.removeChild(LIMITSCONTAINER.children[0]);

    //Create the parent UL element
    try {
        let limitsList = createLimitsList(limitsJSON, 'board-limits-list');
        //add limits list to the parent container
        LIMITSCONTAINER.appendChild(limitsList);
    } catch (e) {
        consoleError(`Failed to create board limits list: ${e}`);

        //create an output to show there's been an error
        let errorOutput = document.createElement('span');
        errorOutput.textContent = "Whoops! Looks like we couldn't fetch the limits for your board right now.\nTry again later!";
        LIMITSCONTAINER.appendChild(errorOutput);
    }
    
    // Resize the modal to fit content
    t.sizeTo(document.body);
}

t.sizeTo(document.body);