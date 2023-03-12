const plugin = require("tailwindcss/plugin");
const colorPaletteTemplate = require('./templates/color-palette');
const { colorShades } = require('./generators');
const fs = require('fs');

module.exports = plugin(
    function ({ theme }) {
        const colors = theme('colors');

        const palette = [];

        for (let name in colors) {
            if (colors.hasOwnProperty(name)) {
                palette.push(colorShades(name, colors[name]));
            }
        }

        const colorPalette = colorPaletteTemplate({
            palette
        });

        fs.writeFile('./dist/color-palette.html', colorPalette, function (err) {
            if (err) {
                return console.log(err)
            }
        })
    }
);