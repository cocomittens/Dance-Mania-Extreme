/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var upPressed = false;
var downPressed = false;
var rightPressed = false;
var leftPressed = false;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function handleInput(key, action) {
  var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d');
  var right_arrow = new Image();
  var left_arrow = new Image();
  var up_arrow = new Image();
  var down_arrow = new Image();
  var right_arrow_active = new Image();
  var left_arrow_active = new Image();
  var up_arrow_active = new Image();
  var down_arrow_active = new Image();
  right_arrow.src = "/Users/cgripens/Desktop/AppAcademy/dmr/Sprites/arrow_right.png";
  left_arrow.src = "/Users/cgripens/Desktop/AppAcademy/dmr/Sprites/arrow_left.png";
  up_arrow.src = "/Users/cgripens/Desktop/AppAcademy/dmr/Sprites/arrow_up.png";
  down_arrow.src = "/Users/cgripens/Desktop/AppAcademy/dmr/Sprites/arrow_down.png";
  right_arrow_active.src = "/Users/cgripens/Desktop/AppAcademy/dmr/Sprites/arrow_right_active.png";
  left_arrow_active.src = "/Users/cgripens/Desktop/AppAcademy/dmr/Sprites/arrow_left_active.png";
  up_arrow_active.src = "/Users/cgripens/Desktop/AppAcademy/dmr/Sprites/arrow_up_active.png";
  down_arrow_active.src = "/Users/cgripens/Desktop/AppAcademy/dmr/Sprites/arrow_down_active.png";

  if (action === "down") {
    switch (key) {
      case "ArrowUp":
        c.drawImage(up_arrow_active, 200, 0);
        break;

      case "ArrowDown":
        c.drawImage(down_arrow_active, 400, 0);
        break;

      case "ArrowRight":
        c.drawImage(right_arrow_active, 100, 0);
        break;

      case "ArrowLeft":
        c.drawImage(left_arrow_active, 300, 0);
        break;
    }
  } else {
    switch (key) {
      case "ArrowUp":
        c.drawImage(up_arrow, 200, 0);
        break;

      case "ArrowDown":
        c.drawImage(down_arrow, 400, 0);
        break;

      case "ArrowRight":
        c.drawImage(right_arrow, 100, 0);
        break;

      case "ArrowLeft":
        c.drawImage(left_arrow, 300, 0);
        break;
    }
  }
}

function keyDownHandler(e) {
  switch (e.key) {
    case "ArrowUp":
      upPressed = true;

    case "ArrowDown":
      downPressed = true;

    case "ArrowRight":
      rightPressed = true;

    case "ArrowLeft":
      leftPressed = true;
  }

  handleInput(e.key, "down");
}

function keyUpHandler(e) {
  switch (e.key) {
    case "ArrowUp":
      upPressed = false;

    case "ArrowDown":
      downPressed = false;

    case "ArrowRight":
      rightPressed = false;

    case "ArrowLeft":
      leftPressed = false;
  }

  handleInput(e.key, "up");
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInVwUHJlc3NlZCIsImRvd25QcmVzc2VkIiwicmlnaHRQcmVzc2VkIiwibGVmdFByZXNzZWQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImhhbmRsZUlucHV0Iiwia2V5IiwiYWN0aW9uIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjIiwiZ2V0Q29udGV4dCIsInJpZ2h0X2Fycm93IiwiSW1hZ2UiLCJsZWZ0X2Fycm93IiwidXBfYXJyb3ciLCJkb3duX2Fycm93IiwicmlnaHRfYXJyb3dfYWN0aXZlIiwibGVmdF9hcnJvd19hY3RpdmUiLCJ1cF9hcnJvd19hY3RpdmUiLCJkb3duX2Fycm93X2FjdGl2ZSIsInNyYyIsImRyYXdJbWFnZSIsImUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFz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VUFBT0EsQ0FBQyxDQUFDakIsR0FBVDtBQUNJLFNBQUssU0FBTDtBQUNJVCxlQUFTLEdBQUcsSUFBWjs7QUFDSixTQUFLLFdBQUw7QUFDSUMsaUJBQVcsR0FBRyxJQUFkOztBQUNKLFNBQUssWUFBTDtBQUNJQyxrQkFBWSxHQUFHLElBQWY7O0FBQ0osU0FBSyxXQUFMO0FBQ0lDLGlCQUFXLEdBQUcsSUFBZDtBQVJSOztBQVdBSyxhQUFXLENBQUNrQixDQUFDLENBQUNqQixHQUFILEVBQVEsTUFBUixDQUFYO0FBQ0g7O0FBRUQsU0FBU0YsWUFBVCxDQUFzQm1CLENBQXRCLEVBQXlCO0FBQ3JCLFVBQVFBLENBQUMsQ0FBQ2pCLEdBQVY7QUFDSSxTQUFLLFNBQUw7QUFDSVQsZUFBUyxHQUFHLEtBQVo7O0FBQ0osU0FBSyxXQUFMO0FBQ0lDLGlCQUFXLEdBQUcsS0FBZDs7QUFDSixTQUFLLFlBQUw7QUFDSUMsa0JBQVksR0FBRyxLQUFmOztBQUNKLFNBQUssV0FBTDtBQUNJQyxpQkFBVyxHQUFHLEtBQWQ7QUFSUjs7QUFXQUssYUFBVyxDQUFDa0IsQ0FBQyxDQUFDakIsR0FBSCxFQUFRLElBQVIsQ0FBWDtBQUNILEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJsZXQgdXBQcmVzc2VkID0gZmFsc2U7XG5sZXQgZG93blByZXNzZWQgPSBmYWxzZTtcbmxldCByaWdodFByZXNzZWQgPSBmYWxzZTtcbmxldCBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlciwgZmFsc2UpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGtleVVwSGFuZGxlciwgZmFsc2UpO1xuXG5mdW5jdGlvbiBoYW5kbGVJbnB1dChrZXksIGFjdGlvbikge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICBjb25zdCBjID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBsZXQgcmlnaHRfYXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICBsZXQgbGVmdF9hcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIGxldCB1cF9hcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIGxldCBkb3duX2Fycm93ID0gbmV3IEltYWdlKCk7XG5cbiAgICBsZXQgcmlnaHRfYXJyb3dfYWN0aXZlID0gbmV3IEltYWdlKCk7XG4gICAgbGV0IGxlZnRfYXJyb3dfYWN0aXZlID0gbmV3IEltYWdlKCk7XG4gICAgbGV0IHVwX2Fycm93X2FjdGl2ZSA9IG5ldyBJbWFnZSgpO1xuICAgIGxldCBkb3duX2Fycm93X2FjdGl2ZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgcmlnaHRfYXJyb3cuc3JjID0gXCIvVXNlcnMvY2dyaXBlbnMvRGVza3RvcC9BcHBBY2FkZW15L2Rtci9TcHJpdGVzL2Fycm93X3JpZ2h0LnBuZ1wiO1xuICAgIGxlZnRfYXJyb3cuc3JjID0gXCIvVXNlcnMvY2dyaXBlbnMvRGVza3RvcC9BcHBBY2FkZW15L2Rtci9TcHJpdGVzL2Fycm93X2xlZnQucG5nXCI7XG4gICAgdXBfYXJyb3cuc3JjID0gXCIvVXNlcnMvY2dyaXBlbnMvRGVza3RvcC9BcHBBY2FkZW15L2Rtci9TcHJpdGVzL2Fycm93X3VwLnBuZ1wiO1xuICAgIGRvd25fYXJyb3cuc3JjID0gXCIvVXNlcnMvY2dyaXBlbnMvRGVza3RvcC9BcHBBY2FkZW15L2Rtci9TcHJpdGVzL2Fycm93X2Rvd24ucG5nXCI7XG5cbiAgICByaWdodF9hcnJvd19hY3RpdmUuc3JjID0gXCIvVXNlcnMvY2dyaXBlbnMvRGVza3RvcC9BcHBBY2FkZW15L2Rtci9TcHJpdGVzL2Fycm93X3JpZ2h0X2FjdGl2ZS5wbmdcIjtcbiAgICBsZWZ0X2Fycm93X2FjdGl2ZS5zcmMgPSBcIi9Vc2Vycy9jZ3JpcGVucy9EZXNrdG9wL0FwcEFjYWRlbXkvZG1yL1Nwcml0ZXMvYXJyb3dfbGVmdF9hY3RpdmUucG5nXCI7XG4gICAgdXBfYXJyb3dfYWN0aXZlLnNyYyA9IFwiL1VzZXJzL2NncmlwZW5zL0Rlc2t0b3AvQXBwQWNhZGVteS9kbXIvU3ByaXRlcy9hcnJvd191cF9hY3RpdmUucG5nXCI7XG4gICAgZG93bl9hcnJvd19hY3RpdmUuc3JjID0gXCIvVXNlcnMvY2dyaXBlbnMvRGVza3RvcC9BcHBBY2FkZW15L2Rtci9TcHJpdGVzL2Fycm93X2Rvd25fYWN0aXZlLnBuZ1wiO1xuXG4gICAgaWYoYWN0aW9uID09PSBcImRvd25cIikge1xuICAgICAgICBzd2l0Y2goa2V5KXtcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICAgICAgYy5kcmF3SW1hZ2UodXBfYXJyb3dfYWN0aXZlLCAyMDAsIDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgICAgIGMuZHJhd0ltYWdlKGRvd25fYXJyb3dfYWN0aXZlLCA0MDAsIDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgICAgICBjLmRyYXdJbWFnZShyaWdodF9hcnJvd19hY3RpdmUsIDEwMCwgMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICAgICAgYy5kcmF3SW1hZ2UobGVmdF9hcnJvd19hY3RpdmUsIDMwMCwgMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgICAgICBjLmRyYXdJbWFnZSh1cF9hcnJvdywgMjAwLCAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgICAgICBjLmRyYXdJbWFnZShkb3duX2Fycm93LCA0MDAsIDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgICAgICBjLmRyYXdJbWFnZShyaWdodF9hcnJvdywgMTAwLCAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgICAgICBjLmRyYXdJbWFnZShsZWZ0X2Fycm93LCAzMDAsIDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBrZXlEb3duSGFuZGxlcihlKSB7XG4gICAgXG4gICAgc3dpdGNoKGUua2V5KXtcbiAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgIHVwUHJlc3NlZCA9IHRydWU7XG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgIGRvd25QcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgIHJpZ2h0UHJlc3NlZCA9IHRydWU7XG4gICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgIGxlZnRQcmVzc2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dChlLmtleSwgXCJkb3duXCIpXG59XG5cbmZ1bmN0aW9uIGtleVVwSGFuZGxlcihlKSB7XG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgdXBQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgIGRvd25QcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICByaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dChlLmtleSwgXCJ1cFwiKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==