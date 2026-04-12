# Configuration and Setup Guide for Resource Monitor Power-Up

## Local Development Setup

### Using ngrok for HTTPS

Since Trello requires HTTPS, you can use ngrok to tunnel your local server:

1. Install ngrok from https://ngrok.com
2. Run your server: `npm start` (runs on http://localhost:3000)
3. In another terminal, tunnel it: `ngrok http 3000`
4. Copy the HTTPS URL provided by ngrok (e.g., `https://abc123.ngrok.io`)
5. Use this URL as your Iframe Connector in the Trello Power-Up Admin

### Using Glitch

Glitch automatically provides HTTPS hosting:

1. Go to https://glitch.com and sign up
2. Create a new Node project
3. Copy the files from this repository
4. Glitch will automatically provide a HTTPS URL like `https://your-project-name.glitch.me`
5. Use this URL as your Iframe Connector

## Environment Variables

Create a `.env` file if needed:

```
PORT=3000
NODE_ENV=development
```

## Capabilities Reference

### Common Capabilities to Implement

**card-buttons** - Add buttons to card backs

- Usage: Provide interactive actions on individual cards
- Returns: Array of button objects with icon, text, and callback

**card-badges** - Display badges on card fronts

- Usage: Show quick stats or status on board view
- Returns: Array of badge objects with icon and text

**card-detail-badges** - Display badges in card details

- Usage: Show detailed info when card is opened
- Returns: Array of detail badge objects with title, text, and color

**board-buttons** - Add buttons to boards

- Usage: Provide board-level actions
- Returns: Array of button objects

**list-actions** - Add actions to list headers

- Usage: Provide list-level functionality
- Returns: Array of action objects

## Data Storage with Trello

### Scopes

- `card` - Data specific to a card
- `board` - Data specific to a board
- `member` - Data specific to a user
- `organization` - Data specific to an organization

### Access Levels

- `shared` - Accessible to all Power-Ups and Trello
- `private` - Accessible only to this Power-Up

### Example: Storing Data

```javascript
// Store data
t.set("card", "shared", "myKey", { value: "something" });

// Retrieve data
t.get("card", "shared", "myKey").then((data) => console.log(data));
```

## Security Best Practices

1. **Never expose tokens** - Use server-side authentication when possible
2. **Validate user actions** - Check permissions before making changes
3. **Use HTTPS everywhere** - All connections must be encrypted
4. **Store sensitive data in `private` scope** - Not `shared`
5. **Validate data from Trello** - Don't trust client-side data

## Debugging

### Browser Console

- Right-click on Trello and select "Inspect"
- Check the Console tab for JavaScript errors
- The `t` object is available in the console for debugging

### Network Tab

- Check for failed requests in the Network tab
- Ensure CORS headers are correct

### Common Issues

**"Power-Up failed to load"**

- Check if your HTTPS URL is correct
- Verify CORS is enabled in your server
- Check browser console for specific errors

**"Data not persisting"**

- Verify you're using the correct scope (card/board/member)
- Check that `t.set()` is being called correctly
- Look for error messages in the console

## File Structure Explanation

- **server.js** - Express server that hosts your Power-Up
- **public/index.html** - HTML connector file that Trello loads
- **public/js/client.js** - Main Power-Up initialization and capability handlers
- **public/js/** - Additional JavaScript files for specific features

## Next Steps

1. Create your first capability in `public/js/client.js`
2. Enable the capability in Trello Power-Up Admin
3. Test on a board
4. Expand with additional capabilities as needed

## Resources

- [Trello Power-Up Capabilities](https://developer.atlassian.com/cloud/trello/power-ups/capabilities)
- [Trello Client.js API](https://developer.atlassian.com/cloud/trello/guides/client-js/client-js-reference/)
- [Trello REST API](https://developer.atlassian.com/cloud/trello/rest/api-group-actions/)
