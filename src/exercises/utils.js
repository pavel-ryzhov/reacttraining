
/**
* Convert a string to a number, or return a default value if it couldn't be converted.
*/
export function stringToNumber(inputStr, defaultVal) {
   return (!inputStr || isNaN(inputStr)) ? defaultVal : parseFloat(inputStr);
}
