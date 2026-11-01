# PayPal Open

**Name:** Shubham Eknath Sukhadare

**Roll No:** 150097926053

A single page landing page UI inspired by PayPal Open, built with React and Vite. The page content is loaded from a static data file, so no backend or API is needed.

## Features

- Responsive navigation bar with the PayPal logo, menu items and Log In / Sign Up buttons
- Hero section with a Personal / Business account switch
- Headline, subtitle, description and call to action buttons
- Content kept separate from the components in a single data file
- Accessible markup with ARIA roles and labels

## Tech Stack

- React 18
- Vite 5
- JavaScript (JSX)
- CSS

## Project Structure

```
paypal-open/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data.js
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        └── Logo.jsx
```

| File | Purpose |
| --- | --- |
| `src/main.jsx` | Entry point that mounts the app into the page |
| `src/App.jsx` | Root component that combines the Navbar and Hero |
| `src/data.js` | Static content: menu items, tabs, hero text and button labels |
| `src/components/Navbar.jsx` | Top navigation bar |
| `src/components/Hero.jsx` | Hero section with the account type switch |
| `src/components/Logo.jsx` | PayPal logo as an inline SVG |
| `src/index.css` | All styling for the page |

## Prerequisites

- Node.js (LTS version) and npm

Check that they are installed:

```
node -v
npm -v
```

## Getting Started

1. Clone the repository
    
    ```
    git clone https://github.com/shubhammm25/PAYPAL_UI-REPO.git
    cd PAYPAL_UI-REPO
    ```
    
2. Install dependencies
    
    ```
    npm install
    ```
    
3. Start the development server
    
    ```
    npm run dev
    ```
    
4. Open the local address shown in the terminal, usually `http://localhost:5173/`

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates a production build in the `dist` folder |
| `npm run preview` | Serves the production build locally |

## Customizing Content

All text on the page comes from `src/data.js`. Edit the values there to change the menu items, tabs, hero title, subtitle, description or button labels, and the page updates automatically.

## Disclaimer

This project is for educational purposes only. PayPal and the PayPal logo are trademarks of PayPal, Inc. This project is not affiliated with or endorsed by PayPal.