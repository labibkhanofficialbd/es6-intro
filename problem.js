//write a function isJavaScriptFile that takes a filename as a parameter and returns true if the file extension is .js, otherwise return false.
function isJavaScriptFile(filename) {
  return filename.endsWith('.js');
}
const filename = 'index.js';
console.log(isJavaScriptFile(filename));
