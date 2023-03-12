# Tailwind CSS Export Color Palette

**This plugin generates an HTML file containing a preview of the color palette.**

**Compatibility: Tailwind CSS ^1.8.3, ^2.X., ^3.X**

## Installation

### 1. Install the Tailwind CSS Export Color Palette plugin:

```bash
# Install using npm
npm install --save-dev @hexadog/tailwind-css-plugin-export-color-palette
# Install using yarn
yarn add -D @hexadog/tailwind-css-plugin-export-color-palette
```

### 2. Add it to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
    // ...
    plugins: [
        require("@hexadog/tailwind-css-plugin-export-color-palette"),
    ],
};
```

### 3. Build your Tailwind CSS Template
Generated color palette preview is available in `dist/color-palette.html`.