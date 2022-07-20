/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const body = document.querySelector('body');\n let form = document.createElement('form');\nform.classList.add('submit-form');\nform.setAttribute('id', 'form');\nform.innerHTML = `\n<div>\n<input class=\"display-name\" type=\"text\" placeholder=\"Enter your Name\"><br>\n<input class=\"display-score\" type=\"text\" placeholder=\"What is your score\"><br>\n<button>Submit</button>\n</div>\n`;\nbody.appendChild(form);\n\nbody.addEventListener('click', (e) => {\n  if (e.target.classList.contains('remove-button')) {\n  e.target.parentElement.remove();\n  }\n});\n\nconst displayLearderbord = () => {\n  const displayName = document.querySelector('.display-name').value;\n  const displayScore = document.querySelector('.display-score').value;\n  const container = document.createElement('div');\n  container.classList.add('container');\n  container.innerHTML = `\n    <div class=\"display-dynamic-container\">\n    <div class=\"dynamic\">\n        <p>${displayName}</p>\n        <p>${displayScore}</p>\n    </div>\n    <button class=\"remove-button\">Remove</button>\n</div>\n    `;\n    body.appendChild(container);\n};\n\nform.addEventListener('submit', (e) => {\n    e.preventDefault();\n    let displayName = document.querySelector('.display-name').value;\n  let displayScore = document.querySelector('.display-score').value;\n  if (displayName !== '' && displayScore !== '') {\n    displayLearderbord();\n  form.reset();\n  }\n});\n\n\n//# sourceURL=webpack://webpackconfig/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;