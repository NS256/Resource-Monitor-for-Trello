# Resource Monitor Power-Up

A Trello Power-Up for monitoring resources.

## Project Structure

```
resource-monitor-power-up/
├── public/
│   ├── index.html          # Main connector file loaded by Trello
│   └── js/
│       └── client.js       # Power-Up initialization and capabilities
├── server.js               # Express server to host the Power-Up
├── package.json            # Project dependencies
├── .gitignore              # Git ignore file
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn
- HTTPS hosting (required by Trello)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

The server will run on `http://localhost:3000` by default.

### Hosting

For local development, you can use services like:

- **Glitch** (recommended for beginners)
- **ngrok** (for local tunneling to HTTPS)
- Your own HTTPS server

> **Note:** Trello requires all Power-Up assets to be served over HTTPS.

## Creating the Power-Up in Trello

1. Go to [Trello Power-Up Admin](https://trello.com/power-ups/admin)
2. Create a new Power-Up in your workspace
3. Set the **Iframe Connector URL** to your hosted server URL (e.g., `https://your-domain.com`)
4. Enable the capabilities you need in the **Capabilities** tab
5. Save and enable the Power-Up on a board

## Power-Up Capabilities

Add capabilities to your Power-Up by:

1. Enabling them in the [Trello Power-Up Admin](https://trello.com/power-ups/admin)
2. Implementing the capability handlers in `public/js/client.js`

Common capabilities:

- `card-buttons` - Add buttons to card backs
- `card-badges` - Display badges on card fronts
- `card-detail-badges` - Display badges in card details
- `board-buttons` - Add buttons to boards
- And many more...

## Example: Adding a Card Button

```javascript
TrelloPowerUp.initialize({
    "card-buttons": function (t, options) {
        return [
            {
                icon: "https://example.com/icon.png",
                text: "My Button",
                callback: function (t) {
                    return t.popup({
                        title: "My Popup",
                        url: "popup.html",
                    });
                },
            },
        ];
    },
});
```

## Documentation

- [Trello Power-Up Development Guide](https://developer.atlassian.com/cloud/trello/guides/power-ups/)
- [Power-Up Client Library Reference](https://developer.atlassian.com/cloud/trello/guides/client-js/client-js-reference/)
- [Trello API Documentation](https://developer.atlassian.com/cloud/trello/rest/api-group-actions/)

## Development Tips

- Use the browser console to debug your Power-Up
- The `t` object (TrelloPowerUp instance) provides access to Trello data and UI
- Store data using `t.set()` and retrieve using `t.get()`
- Use `t.popup()` to show interactive dialogs

## License

MIT
