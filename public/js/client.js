/* global TrelloPowerUp */

// Initialize the Power-Up
TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      text: 'Resource Monitor',
      callback: function(t) {
        return t.modal({
          title: 'Resource Monitor for Trello',
          url: 'board-monitor.html',
          fullscreen: false,
        });
      },
    }];
  },
  'on-enable': function(t,options) {
        return [{
        text: 'Resource Monitor',
        callback: function(t) {
            return t.modal({
            title: 'Authorize: Resource Monitor for Trello',
            url: 'authorize.html',
            fullscreen: false,
            });
        },
        }];
  }
});

const authorizePup = () => {

}