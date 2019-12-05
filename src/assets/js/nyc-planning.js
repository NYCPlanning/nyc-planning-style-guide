import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// To choose modules to include, comment out above and uncomment below
//import './lib/foundation-explicit-pieces';

// turn an RGB color into a Hex color
function rgbToHex(rgb) {
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  rgb = rgb.substr(4).split(")")[0].split(sep);

  let r = (+rgb[0]).toString(16);
  let g = (+rgb[1]).toString(16);
  let b = (+rgb[2]).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}

// init Foundation
$(document).foundation();

$(document).ready(function() {

  // add meta info to color swatches
  $('.color-swatch').each(function( index ) {
    const bgColor = $(this).css('background-color');
    const colorName = $(this).attr('data-colorname');
    const bgHexColor = rgbToHex(bgColor);

    $(this).append(`
      <li class="text-tiny text-weight-bold nowrap">${colorName}</li>
      <li class="text-tiny">${bgHexColor}</li>
      <li class="text-tiny">${bgColor}</li>
    ` );
  });

  // toggle code samples
  // $('.code-example').addClass('closed');
  // $('#showCodesCheckbox').click(function() {
  //   if ($(this).is(":checked")) {
  //     $('.code-example').removeClass('closed');
  //   } else {
  //     $('.code-example').addClass('closed');
  //   }
  // });

});
