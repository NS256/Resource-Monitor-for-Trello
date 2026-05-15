/* global TrelloPowerUp */

const WHITE_ICON = 'https://your-cdn.com/icon-white.svg';
const BLACK_ICON = 'https://your-cdn.com/icon-black.svg';

// Initialize the Power-Up
TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      text: 'Resource Monitor',
      callback: function(t) {
        return t.modal({
          icon: { dark: WHITE_ICON, light: BLACK_ICON },
          title: 'Resource Monitor for Trello',
          url: 'board-monitor.html',
          fullscreen: false,
        });
      },
    }];
  },
  'authorization-status': function(t, options) {
    // Check if the user is authorized
    return t.getRestApi().isAuthorized().then(function(isAuthorized) {
      return { authorized: isAuthorized };
    });
  },
  'show-authorization': function(t, options) {
    // Show authorization modal when user clicks "Authorize Account"
    return t.modal({
      title: 'Authorize: Resource Monitor for Trello',
      url: 'authorize.html',
      fullscreen: false,
    });
  },
  'on-enable': function(t, options) {
    // Fallback in case on-enable is called
    return t.getRestApi().isAuthorized().then(function(isAuthorized) {
      if (!isAuthorized) {
        return t.modal({
          title: 'Authorize: Resource Monitor for Trello',
          url: 'authorize.html',
          fullscreen: false,
        });
      }
    });
  }
});
