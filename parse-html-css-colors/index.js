/*
https://www.codewars.com/kata/58b57ae2724e3c63df000006/train/javascript

In this kata you parse RGB colors represented by strings. The formats are primarily used in HTML and CSS. Your task is to implement a function which takes a color as a string and returns the parsed color as a map (see Examples).

Input:
The input string represents one of the following:

6-digit hexadecimal - "#RRGGBB"
e.g. "#012345", "#789abc", "#FFA077"
Each pair of digits represents a value of the channel in hexadecimal: 00 to FF

3-digit hexadecimal - "#RGB"
e.g. "#012", "#aaa", "#F5A"
Each digit represents a value 0 to F which translates to 2-digit hexadecimal: 0->00, 1->11, 2->22,
and so on.

Preset color name
e.g. "red", "BLUE", "LimeGreen"
You have to use the predefined map PRESET_COLORS (JavaScript, Python, Ruby), presetColors (Java, C#,
    Haskell), or preset-colors (Clojure). The keys are the names of preset colors in lower-case and
    the values are the corresponding colors in 6-digit hexadecimal (same as 1. "#RRGGBB").

Examples:
parseHTMLColor('#80FFA0');    // => { r: 128, g: 255, b: 160 }
parseHTMLColor('#3B7');       // => { r: 51,  g: 187, b: 119 }
parseHTMLColor('LimeGreen');  // => { r: 50,  g: 205, b: 50  }
*/

const PRESET_COLORS = {
	red: '#FF0000',
	green: '#008000',
	blue: '#0000FF',
	limegreen: '#32CD32',
};

function parseHTMLColor(color) {
	color = color.toLowerCase();

	if (color.startsWith('#')) {
		color = color.slice(1);

		if (color.length === 3) {
			color = color.replace(/./g, '$&$&');
		}
		console.log('color', color);

		const r = parseInt(color.substring(0, 2), 16);
		const g = parseInt(color.substring(2, 4), 16);
		const b = parseInt(color.substring(4), 16);
		console.log('r', r);
		console.log('g', g);
		console.log('b', b);

		return { r, g, b };
	}

	if (color in PRESET_COLORS) {
		return parseHTMLColor(PRESET_COLORS[color]);
	}

	return null;
}

console.log(parseHTMLColor('#80FFA0'));
//{ r: 128, g: 255, b: 160 }
console.log(parseHTMLColor('#3B7'));
//{ r: 51, g: 187, b: 119 }
console.log(parseHTMLColor('LimeGreen'));
//{ r: 50, g: 205, b: 50 }
