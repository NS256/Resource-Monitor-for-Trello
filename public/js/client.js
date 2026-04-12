/* global TrelloPowerUp */

// Initialize the Power-Up
TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      text: 'Resource Monitor',
      callback: function(t) {
        return t.modal({
          title: 'Resource Monitor',
          url: 'board-monitor.html',
          fullscreen: false,
        });
      },
    }];
  },
});
