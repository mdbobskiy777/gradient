export const isValidHex = (color) => {
    if (!color) return "Enter hex-code of color";
    if (color.substring(0, 1) !== '#') return "First value must be #"
    color = color.substring(1);
    switch (color.length) {
        case 3:
            return (/^[0-9A-F]{3}$/i.test(color) === false) ? "#xxx [0-9A-F]" : null;
        case 6:
            return (/^[0-9A-F]{6}$/i.test(color)===false) ? "#xxxxxx [0-9A-F]" : null;
        default:
            return "Enter right code (#xxx [0-9A-F] of #xxxxxx [0-9A-F]";
    }
}