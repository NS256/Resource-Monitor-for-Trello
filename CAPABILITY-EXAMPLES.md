/\*

- CAPABILITY EXAMPLES
-
- This file contains examples of how to implement various Power-Up capabilities.
- Copy and adapt these examples to your needs in public/js/client.js
  \*/

// ============================================================================
// EXAMPLE 1: Card Buttons
// ============================================================================
// Adds buttons to the back of cards that users can click
//
// 'card-buttons': function(t, options) {
// return [{
// icon: 'https://example.com/icon.png',
// text: 'My Button',
// callback: function(t) {
// return t.popup({
// title: 'My Popup',
// url: 'popup.html',
// });
// },
// }];
// },

// ============================================================================
// EXAMPLE 2: Card Badges
// ============================================================================
// Displays badges on the front of cards visible from the board view
//
// 'card-badges': function(t, options) {
// return t.get('card', 'shared', 'estimate')
// .then(function(estimate) {
// return [{
// icon: 'https://example.com/rocket.png',
// text: estimate || 'No Estimate',
// color: estimate ? null : 'red',
// }];
// });
// },

// ============================================================================
// EXAMPLE 3: Card Detail Badges
// ============================================================================
// Displays badges in the card detail view (when a card is opened)
//
// 'card-detail-badges': function(t, options) {
// return t.get('card', 'shared', 'myData')
// .then(function(data) {
// return [{
// title: 'My Data',
// text: data || 'None',
// color: data ? 'green' : 'gray',
// callback: function(t) {
// return t.popup({
// title: 'Set Data',
// url: 'popup.html',
// });
// }
// }];
// });
// },

// ============================================================================
// EXAMPLE 4: Board Buttons
// ============================================================================
// Adds buttons to the board view
//
// 'board-buttons': function(t, options) {
// return [{
// icon: 'https://example.com/icon.png',
// text: 'Board Action',
// callback: function(t) {
// return t.popup({
// title: 'Board Popup',
// url: 'board-popup.html',
// });
// },
// }];
// },

// ============================================================================
// EXAMPLE 5: Authorization Status
// ============================================================================
// Determines if the user is authorized with your Power-Up
//
// 'authorization-status': function(t, options) {
// return t.get('member', 'private', 'authToken')
// .then(function(authToken) {
// return { authorized: !!authToken };
// });
// },

// ============================================================================
// EXAMPLE 6: Show Authorization
// ============================================================================
// Shows authorization UI when user clicks "Authorize Account"
//
// 'show-authorization': function(t, options) {
// return t.popup({
// title: 'Authorize',
// url: 'auth.html',
// height: 200,
// });
// },

// ============================================================================
// TIPS FOR IMPLEMENTATION
// ============================================================================
// 1. Enable capabilities in https://trello.com/power-ups/admin
// 2. Each capability handler receives (t, options) as parameters
// 3. Return promises when getting/setting data
// 4. Use t.popup() to show interactive UIs
// 5. Store data with t.set() and retrieve with t.get()
// 6. Use 'shared' scope for public data, 'private' for sensitive data
// 7. Always include icons and text for better UX
// 8. Test in the browser console with the 't' object
