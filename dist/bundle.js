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
var body = document.getElementsByTagName('body')[0];
var id;

function gameLoop() {
  // Animate stuff
  id = requestAnimationFrame(gameLoop);
}

body.addEventListener('click', function () {
  cancelAnimationFrame(id);
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInVwUHJlc3NlZCIsImRvd25QcmVzc2VkIiwicmlnaHRQcmVzc2VkIiwibGVmdFByZXNzZWQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImJvZHkiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImlkIiwiZ2FtZUxvb3AiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImhhbmRsZUlucHV0Iiwia2V5IiwiYWN0aW9uIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjIiwiZ2V0Q29udGV4dCIsInJpZ2h0X2Fycm93IiwiSW1hZ2UiLCJsZWZ0X2Fycm93IiwidXBfYXJyb3ciLCJkb3duX2Fycm93IiwicmlnaHRfYXJyb3dfYWN0aXZlIiwibGVmdF9hcnJvd19hY3RpdmUiLCJ1cF9hcnJvd19hY3RpdmUiLCJkb3duX2Fycm93X2FjdGl2ZSIsInNyYyIsImRyYXdJbWFnZSIsImUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FB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aGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImxldCB1cFByZXNzZWQgPSBmYWxzZTtcbmxldCBkb3duUHJlc3NlZCA9IGZhbHNlO1xubGV0IHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xubGV0IGxlZnRQcmVzc2VkID0gZmFsc2U7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5VXBIYW5kbGVyLCBmYWxzZSk7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xubGV0IGlkO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgICAvLyBBbmltYXRlIHN0dWZmXG4gICAgaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApXG59XG5cbmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpXG59KVxuXG5cbmZ1bmN0aW9uIGhhbmRsZUlucHV0KGtleSwgYWN0aW9uKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IGMgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGxldCByaWdodF9hcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIGxldCBsZWZ0X2Fycm93ID0gbmV3IEltYWdlKCk7XG4gICAgbGV0IHVwX2Fycm93ID0gbmV3IEltYWdlKCk7XG4gICAgbGV0IGRvd25fYXJyb3cgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGxldCByaWdodF9hcnJvd19hY3RpdmUgPSBuZXcgSW1hZ2UoKTtcbiAgICBsZXQgbGVmdF9hcnJvd19hY3RpdmUgPSBuZXcgSW1hZ2UoKTtcbiAgICBsZXQgdXBfYXJyb3dfYWN0aXZlID0gbmV3IEltYWdlKCk7XG4gICAgbGV0IGRvd25fYXJyb3dfYWN0aXZlID0gbmV3IEltYWdlKCk7XG5cbiAgICByaWdodF9hcnJvdy5zcmMgPSBcIi9Vc2Vycy9jZ3JpcGVucy9EZXNrdG9wL0FwcEFjYWRlbXkvZG1yL1Nwcml0ZXMvYXJyb3dfcmlnaHQucG5nXCI7XG4gICAgbGVmdF9hcnJvdy5zcmMgPSBcIi9Vc2Vycy9jZ3JpcGVucy9EZXNrdG9wL0FwcEFjYWRlbXkvZG1yL1Nwcml0ZXMvYXJyb3dfbGVmdC5wbmdcIjtcbiAgICB1cF9hcnJvdy5zcmMgPSBcIi9Vc2Vycy9jZ3JpcGVucy9EZXNrdG9wL0FwcEFjYWRlbXkvZG1yL1Nwcml0ZXMvYXJyb3dfdXAucG5nXCI7XG4gICAgZG93bl9hcnJvdy5zcmMgPSBcIi9Vc2Vycy9jZ3JpcGVucy9EZXNrdG9wL0FwcEFjYWRlbXkvZG1yL1Nwcml0ZXMvYXJyb3dfZG93bi5wbmdcIjtcblxuICAgIHJpZ2h0X2Fycm93X2FjdGl2ZS5zcmMgPSBcIi9Vc2Vycy9jZ3JpcGVucy9EZXNrdG9wL0FwcEFjYWRlbXkvZG1yL1Nwcml0ZXMvYXJyb3dfcmlnaHRfYWN0aXZlLnBuZ1wiO1xuICAgIGxlZnRfYXJyb3dfYWN0aXZlLnNyYyA9IFwiL1VzZXJzL2NncmlwZW5zL0Rlc2t0b3AvQXBwQWNhZGVteS9kbXIvU3ByaXRlcy9hcnJvd19sZWZ0X2FjdGl2ZS5wbmdcIjtcbiAgICB1cF9hcnJvd19hY3RpdmUuc3JjID0gXCIvVXNlcnMvY2dyaXBlbnMvRGVza3RvcC9BcHBBY2FkZW15L2Rtci9TcHJpdGVzL2Fycm93X3VwX2FjdGl2ZS5wbmdcIjtcbiAgICBkb3duX2Fycm93X2FjdGl2ZS5zcmMgPSBcIi9Vc2Vycy9jZ3JpcGVucy9EZXNrdG9wL0FwcEFjYWRlbXkvZG1yL1Nwcml0ZXMvYXJyb3dfZG93bl9hY3RpdmUucG5nXCI7XG5cbiAgICBpZihhY3Rpb24gPT09IFwiZG93blwiKSB7XG4gICAgICAgIHN3aXRjaChrZXkpe1xuICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgICAgICBjLmRyYXdJbWFnZSh1cF9hcnJvd19hY3RpdmUsIDIwMCwgMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICAgICAgYy5kcmF3SW1hZ2UoZG93bl9hcnJvd19hY3RpdmUsIDQwMCwgMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgICAgIGMuZHJhd0ltYWdlKHJpZ2h0X2Fycm93X2FjdGl2ZSwgMTAwLCAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgICAgICBjLmRyYXdJbWFnZShsZWZ0X2Fycm93X2FjdGl2ZSwgMzAwLCAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgICAgIGMuZHJhd0ltYWdlKHVwX2Fycm93LCAyMDAsIDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgICAgIGMuZHJhd0ltYWdlKGRvd25fYXJyb3csIDQwMCwgMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgICAgIGMuZHJhd0ltYWdlKHJpZ2h0X2Fycm93LCAxMDAsIDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgICAgIGMuZHJhd0ltYWdlKGxlZnRfYXJyb3csIDMwMCwgMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGUpIHtcbiAgICBzd2l0Y2goZS5rZXkpe1xuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgdXBQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgZG93blByZXNzZWQgPSB0cnVlO1xuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgcmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgbGVmdFByZXNzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGhhbmRsZUlucHV0KGUua2V5LCBcImRvd25cIilcbn1cblxuZnVuY3Rpb24ga2V5VXBIYW5kbGVyKGUpIHtcbiAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICB1cFByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgZG93blByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgIHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGhhbmRsZUlucHV0KGUua2V5LCBcInVwXCIpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9