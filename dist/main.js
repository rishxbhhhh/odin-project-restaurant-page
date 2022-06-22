/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\r\n    const contact = document.createElement(\"div\");\r\n    contact.classList.add(\"contact\");\r\n  \r\n    const phoneNumber = document.createElement(\"p\");\r\n    phoneNumber.textContent = \"Phone: +91 123456789\";\r\n  \r\n    const address = document.createElement(\"p\");\r\n    address.textContent = \"Addres: 7, Race Course Road, New Delhi, India\";\r\n  \r\n    const restaurantLocation = document.createElement(\"img\");\r\n    restaurantLocation.src = \"images/restaurant-location.jpg\";\r\n    restaurantLocation.alt = \"Image of The Coffee Shack restaurant's location\";\r\n  \r\n    contact.appendChild(phoneNumber);\r\n    contact.appendChild(address);\r\n    contact.appendChild(restaurantLocation);\r\n  \r\n    return contact;\r\n  }\r\n  \r\n  function loadContact() {\r\n    const main = document.querySelector(\".main\");\r\n    main.textContent = \"\";\r\n    main.appendChild(createContact());\r\n  }\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://odin-project-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHome(){\r\n    const main = document.querySelector(\".main\");\r\n    main.textContent= \"\";\r\n\r\n    // creating elements of home page\r\n    const rest_image = document.createElement(\"img\");\r\n    rest_image.src=\"images/restaurant-image.jpg\";\r\n    rest_image.alt=\"Restaurant Image\";\r\n    rest_image.className = \"restaurant__image\";\r\n    const p1 = document.createElement(\"p\");\r\n    p1.className = \"restaurant__about\";\r\n    p1.textContent = \"World's Best Coffee and Now our Little Secret...\";\r\n    const p2 = document.createElement(\"p\");\r\n    p2.className = \"restaurant__about\";\r\n    p2.textContent = \"Since 1967\";\r\n    \r\n    // loading elements of home\r\n    main.appendChild(rest_image);\r\n    main.appendChild(p1);\r\n    main.appendChild(p2);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://odin-project-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n\r\n\r\n\r\n(0,_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://odin-project-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\n\r\nfunction activateNavItem(x) {\r\n  const navitems = document.querySelectorAll(\".navitem\");\r\n  navitems.forEach((navitem) => {\r\n    if (navitem !== this) {\r\n      navitem.classList.remove(\"selected__menu\");\r\n    }\r\n  });\r\n\r\n  x.classList.add(\"selected__menu\");\r\n}\r\n\r\nfunction initializeNavBar() {\r\n  const homeButton = document.querySelector(\".homebtn\");\r\n  homeButton.addEventListener(\"click\", () => {\r\n    activateNavItem(homeButton);\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n\r\n  const menuButton = document.querySelector(\".menubtn\");\r\n  menuButton.addEventListener(\"click\", () => {\r\n    activateNavItem(menuButton);\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n\r\n  const contactButton = document.querySelector(\".contactbtn\");\r\n  contactButton.addEventListener(\"click\", () => {\r\n    activateNavItem(contactButton);\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeNavBar);\r\n\n\n//# sourceURL=webpack://odin-project-restaurant-page/./src/load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\r\n  const menu = document.createElement(\"div\");\r\n  menu.classList.add(\"menu\");\r\n\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      \"Cappuccino\",\"Price: $83\")\r\n  );\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      \"Americano\",\"Price: $64\")\r\n  );\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      \"Espresso\",\"Price: $75\")\r\n  );\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      \"Macchiato\",\"Price: $72\")\r\n  );\r\n\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      \"Mocha\",\"Price: $85\")\r\n  );\r\n\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      \"Latte\",\"Price: $80\")\r\n  );\r\n  return menu;\r\n}\r\n\r\nfunction createMenuItem(name, description) {\r\n  const menuItem = document.createElement(\"div\");\r\n  menuItem.classList.add(\"menu-item\");\r\n\r\n  const foodName = document.createElement(\"h2\");\r\n  foodName.textContent = name;\r\n\r\n  const foodDescription = document.createElement(\"p\");\r\n  foodDescription.textContent = description;\r\n\r\n  const line = document.createElement(\"hr\");\r\n  line.className=\"menu__item__separation\";\r\n\r\n  const foodImage = document.createElement(\"img\");\r\n  foodImage.src = `images/${name.toLowerCase()}.jpg`;\r\n  foodImage.alt = `An image of ${name} coffee`;\r\n\r\n  menuItem.appendChild(line);\r\n  menuItem.appendChild(foodImage);\r\n  menuItem.appendChild(foodName);\r\n  menuItem.appendChild(foodDescription);\r\n\r\n  return menuItem;\r\n}\r\n\r\nfunction loadMenu() {\r\n  const main = document.querySelector(\".main\");\r\n  main.textContent = \"\";\r\n  const ingredients = document.createElement(\"img\");\r\n  ingredients.src = \"images/ingredients.jpg\";\r\n  ingredients.alt = \"Graphical Representation of Ingredients.\";\r\n  ingredients.className = \"ingredients\";\r\n  main.appendChild(ingredients);\r\n  main.appendChild(createMenu());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\r\n\n\n//# sourceURL=webpack://odin-project-restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;