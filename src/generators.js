const convert = require("color-convert");
const colorContainerTemplate = require('./templates/color-container');
const colorShadeTemplate = require('./templates/color-shade');

module.exports = {
    colorShades: (name, colors) => {
        const shades = [];

        if (typeof colors === 'string') {
            const hex = colors;
            const rgb = convert.hex.rgb(hex);

            shades.push(colorShadeTemplate({
                name,
                hex,
                rgb
            }));
        } else if (typeof colors === 'object') {
            for (let shade in colors) {
                if (colors.hasOwnProperty(shade)) {
                    const hex = colors[shade];
                    const rgb = convert.hex.rgb(hex);

                    shades.push(colorShadeTemplate({
                        name: shade,
                        hex,
                        rgb
                    }));
                }
            }
        }

        return colorContainerTemplate({
            name,
            shades
        });
    }
}