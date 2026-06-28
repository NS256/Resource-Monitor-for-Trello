# Quick Start Guide

## 1. Install Dependencies

```bash
npm install
```

## 2. Start the Server

```bash
npm start
```

The server will run on `http://localhost:3000`

## 3. Setup HTTPS (Required by Trello)

Choose one approach:

### Option A: Using ngrok (Easiest for testing)

```bash
ngrok http 3000
# Copy the HTTPS URL like: https://abc123.ngrok.io
```

### Option B: Using Glitch (Best for beginners)

- Go to https://glitch.com and create a new project
- Upload all files from this repo
- Glitch provides automatic HTTPS

## 4. Register Your Power-Up

1. Visit https://trello.com/power-ups/admin
2. Select your workspace
3. Click "New" to create a new Power-Up
4. Fill in the form:
    - Name: "Resource Monitor"
    - Iframe Connector URL: Your HTTPS URL (from ngrok or Glitch)
5. Save

## 5. Enable Capabilities

1. Go back to your Power-Up in the admin panel
2. Click the "Capabilities" tab
3. Enable any capabilities you want to use (e.g., "card-buttons")
4. Save

## 6. Test Your Power-Up

1. Go to a Trello board in your workspace
2. Click the "Power-Ups" button in the top right
3. Search for your Power-Up name
4. Click "Enable"
5. Open a card - your Power-Up should appear!

## 7. Add Your First Feature

Edit `public/js/client.js` and uncomment one of the examples from `CAPABILITY-EXAMPLES.md`:

```javascript
TrelloPowerUp.initialize({
    "card-buttons": function (t, options) {
        return [
            {
                icon: "https://example.com/icon.png",
                text: "My First Button",
                callback: function (t) {
                    // Do something when clicked
                },
            },
        ];
    },
});
```

## 8. Debug

- Open browser Developer Tools (F12)
- Go to the Console tab
- Look for any JavaScript errors
- Type `t` to interact with the Power-Up API

## File Structure

```
├── server.js              # Your Express server
├── public/
│   ├── index.html         # Main connector (edit rarely)
│   ├── popup-template.html # Template for popups
│   └── js/
│       ├── client.js      # ← MAIN FILE - Add your capabilities here
│       └── popup.js       # Template for popup functionality
├── CAPABILITY-EXAMPLES.md # Copy examples from here
├── SETUP.md              # Detailed setup guide
└── README.md             # Project overview
```

## Most Common Tasks

### Show a popup

```javascript
t.popup({
    title: "My Popup",
    url: "popup.html",
});
```

### Store data on a card

```javascript
t.set("card", "shared", "myKey", "myValue");
```

### Get data from a card

```javascript
t.get("card", "shared", "myKey").then((value) => console.log(value));
```

### Close a popup

```javascript
t.closePopup();
```

## Next Steps

1. Read `SETUP.md` for detailed configuration options
2. Check `CAPABILITY-EXAMPLES.md` for more examples
3. Visit https://developer.atlassian.com/cloud/trello/guides/power-ups/ for official docs

## Troubleshooting

**"Power-Up not appearing on board"**

- Make sure it's enabled in the Power-Up directory
- Check that your server is running
- Verify HTTPS URL is correct in admin panel

**"Getting CORS errors"**

- Your server isn't being served over HTTPS
- Use ngrok or Glitch to add HTTPS

**"Data not saving"**

- Check browser console for errors
- Verify you're using correct scope ('card', 'board', etc.)
- Use correct access level ('shared' or 'private')

**"Popup not appearing"**

- Make sure the URL in `t.popup()` is correct
- Check that the HTML file exists
- Look for errors in browser console
