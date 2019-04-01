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

document.querySelectorAll('.button')[0].addEventListener('click', function (event) {
  var menu = document.getElementsByClassName('menuContainer')[0];
  var canvas = document.getElementsByClassName('canvasContainer')[0];
  menu.style.display = 'none';
  canvas.style.display = 'block';
  var audio = new Audio("./songs/ppp.mp3");
  audio.play();
});
var body = document.getElementsByTagName('body')[0];
var id;

function gameLoop() {
  // Animate stuff
  id = requestAnimationFrame(gameLoop);
}

if (body) {
  body.addEventListener('click', function () {
    cancelAnimationFrame(id);
  });
}

var img = new Image();
var right_arrow = new Image();
var left_arrow = new Image();
var up_arrow = new Image();
var down_arrow = new Image();
right_arrow.src = "./sprites/arrow_right.png";
left_arrow.src = "./sprites/arrow_left.png";
up_arrow.src = "./sprites/arrow_up.png";
down_arrow.src = "./sprites/arrow_down.png";
var right_arrow_active = new Image();
var left_arrow_active = new Image();
var up_arrow_active = new Image();
var down_arrow_active = new Image();
right_arrow_active.src = "./sprites/arrow_right_active.png";
left_arrow_active.src = "./sprites/arrow_left_active.png";
up_arrow_active.src = "./sprites/arrow_up_active.png";
down_arrow_active.src = "./sprites/arrow_down_active.png"; // User Variables - customize these to change the image being scrolled, its
// direction, and the speed.

img.src = './sprites/song_template.png';
var CanvasXSize = 600;
var CanvasYSize = 600;
var speed = 10; // lower is faster

var scale = 1.05;
var y = 600; // vertical offset
// Main program

var dx = 1.5;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;
var upPressed = false;
var downPressed = false;
var rightPressed = false;
var leftPressed = false;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

img.onload = function () {
  imgW = img.width * scale;
  imgH = img.height * scale;

  if (imgW > CanvasXSize) {
    // image larger than canvas
    x = CanvasXSize - imgW;
  }

  if (imgW > CanvasXSize) {
    // image width larger than canvas
    clearX = imgW;
  } else {
    clearX = CanvasXSize;
  }

  if (imgH > CanvasYSize) {
    // image height larger than canvas
    clearY = imgH;
  } else {
    clearY = CanvasYSize;
  } // get canvas context


  ctx = document.getElementById('canvas').getContext('2d'); // set refresh rate

  return setInterval(draw, speed);
};

function keyDownHandler(e) {
  switch (e.key) {
    case "ArrowUp":
      upPressed = true;
      break;

    case "ArrowDown":
      downPressed = true;
      break;

    case "ArrowRight":
      rightPressed = true;
      break;

    case "ArrowLeft":
      leftPressed = true;
      break;
  }
}

function keyUpHandler(e) {
  switch (e.key) {
    case "ArrowUp":
      upPressed = false;
      break;

    case "ArrowDown":
      downPressed = false;
      break;

    case "ArrowRight":
      rightPressed = false;
      break;

    case "ArrowLeft":
      leftPressed = false;
      break;
  }
}

function draw() {
  ctx.clearRect(0, 0, clearX, clearY); // clear the canvas
  // reset, start from beginning

  if (x > CanvasXSize) {
    x = -imgW + x;
  } // draw additional image1


  if (x > 0) {
    ctx.drawImage(img, -imgW + x, y, imgW, imgH);
  } // draw additional image2


  if (x - imgW > 0) {
    ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
  } // draw image


  if (rightPressed) {
    ctx.drawImage(right_arrow_active, 400, 0);
  } else {
    ctx.drawImage(right_arrow, 400, 0);
  }

  if (upPressed) {
    ctx.drawImage(up_arrow_active, 300, 0);
  } else {
    ctx.drawImage(up_arrow, 300, 0);
  }

  if (downPressed) {
    ctx.drawImage(down_arrow_active, 200, 0);
  } else {
    ctx.drawImage(down_arrow, 200, 0);
  }

  if (leftPressed) {
    ctx.drawImage(left_arrow_active, 100, 0);
  } else {
    ctx.drawImage(left_arrow, 100, 0);
  }

  ctx.drawImage(img, x, y, imgW, imgH); // amount to move

  y -= dx;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIm1lbnUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2FudmFzIiwic3R5bGUiLCJkaXNwbGF5IiwiYXVkaW8iLCJBdWRpbyIsInBsYXkiLCJib2R5IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpZCIsImdhbWVMb29wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpbWciLCJJbWFnZSIsInJpZ2h0X2Fycm93IiwibGVmdF9hcnJvdyIsInVwX2Fycm93IiwiZG93bl9hcnJvdyIsInNyYyIsInJpZ2h0X2Fycm93X2FjdGl2ZSIsImxlZnRfYXJyb3dfYWN0aXZlIiwidXBfYXJyb3dfYWN0aXZlIiwiZG93bl9hcnJvd19hY3RpdmUiLCJDYW52YXNYU2l6ZSIsIkNhbnZhc1lTaXplIiwic3BlZWQiLCJzY2FsZSIsInkiLCJkeCIsImltZ1ciLCJpbWdIIiwieCIsImNsZWFyWCIsImNsZWFyWSIsImN0eCIsInVwUHJlc3NlZCIsImRvd25QcmVzc2VkIiwicmlnaHRQcmVzc2VkIiwibGVmdFByZXNzZWQiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsIm9ubG9hZCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0Iiwic2V0SW50ZXJ2YWwiLCJkcmF3IiwiZSIsImtleSIsImNsZWFyUmVjdCIsImRyYXdJbWFnZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtB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RURtQixLQUFHLENBQUNpQixTQUFKLENBQWN2QyxHQUFkLEVBQW1CbUIsQ0FBbkIsRUFBc0JKLENBQXRCLEVBQXlCRSxJQUF6QixFQUErQkMsSUFBL0IsRUE1Q1ksQ0FpRFo7O0FBQ0FILEdBQUMsSUFBSUMsRUFBTDtBQUNILEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24nKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudUNvbnRhaW5lcicpWzBdO1xuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYW52YXNDb250YWluZXInKVswXTtcbiAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhcIi4vc29uZ3MvcHBwLm1wM1wiKTtcbiAgICBhdWRpby5wbGF5KCk7XG5cbn0pO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbmxldCBpZDtcblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gICAgLy8gQW5pbWF0ZSBzdHVmZlxuICAgIGlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKVxufVxuaWYoYm9keSkge1xuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKVxuICAgIH0pXG59XG5cblxudmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuXG5sZXQgcmlnaHRfYXJyb3cgPSBuZXcgSW1hZ2UoKTtcbmxldCBsZWZ0X2Fycm93ID0gbmV3IEltYWdlKCk7XG5sZXQgdXBfYXJyb3cgPSBuZXcgSW1hZ2UoKTtcbmxldCBkb3duX2Fycm93ID0gbmV3IEltYWdlKCk7XG5cbnJpZ2h0X2Fycm93LnNyYyA9IFwiLi9zcHJpdGVzL2Fycm93X3JpZ2h0LnBuZ1wiO1xubGVmdF9hcnJvdy5zcmMgPSBcIi4vc3ByaXRlcy9hcnJvd19sZWZ0LnBuZ1wiO1xudXBfYXJyb3cuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfdXAucG5nXCI7XG5kb3duX2Fycm93LnNyYyA9IFwiLi9zcHJpdGVzL2Fycm93X2Rvd24ucG5nXCI7XG5cbmxldCByaWdodF9hcnJvd19hY3RpdmUgPSBuZXcgSW1hZ2UoKTtcbmxldCBsZWZ0X2Fycm93X2FjdGl2ZSA9IG5ldyBJbWFnZSgpO1xubGV0IHVwX2Fycm93X2FjdGl2ZSA9IG5ldyBJbWFnZSgpO1xubGV0IGRvd25fYXJyb3dfYWN0aXZlID0gbmV3IEltYWdlKCk7XG5cbnJpZ2h0X2Fycm93X2FjdGl2ZS5zcmMgPSBcIi4vc3ByaXRlcy9hcnJvd19yaWdodF9hY3RpdmUucG5nXCI7XG5sZWZ0X2Fycm93X2FjdGl2ZS5zcmMgPSBcIi4vc3ByaXRlcy9hcnJvd19sZWZ0X2FjdGl2ZS5wbmdcIjtcbnVwX2Fycm93X2FjdGl2ZS5zcmMgPSBcIi4vc3ByaXRlcy9hcnJvd191cF9hY3RpdmUucG5nXCI7XG5kb3duX2Fycm93X2FjdGl2ZS5zcmMgPSBcIi4vc3ByaXRlcy9hcnJvd19kb3duX2FjdGl2ZS5wbmdcIjtcblxuLy8gVXNlciBWYXJpYWJsZXMgLSBjdXN0b21pemUgdGhlc2UgdG8gY2hhbmdlIHRoZSBpbWFnZSBiZWluZyBzY3JvbGxlZCwgaXRzXG4vLyBkaXJlY3Rpb24sIGFuZCB0aGUgc3BlZWQuXG5cbmltZy5zcmMgPSAnLi9zcHJpdGVzL3NvbmdfdGVtcGxhdGUucG5nJztcbnZhciBDYW52YXNYU2l6ZSA9IDYwMDtcbnZhciBDYW52YXNZU2l6ZSA9IDYwMDtcbnZhciBzcGVlZCA9IDEwOyAvLyBsb3dlciBpcyBmYXN0ZXJcbnZhciBzY2FsZSA9IDEuMDU7XG52YXIgeSA9IDYwMDsgLy8gdmVydGljYWwgb2Zmc2V0XG5cbi8vIE1haW4gcHJvZ3JhbVxuXG52YXIgZHggPSAxLjU7XG52YXIgaW1nVztcbnZhciBpbWdIO1xudmFyIHggPSAwO1xudmFyIGNsZWFyWDtcbnZhciBjbGVhclk7XG52YXIgY3R4O1xuXG5sZXQgdXBQcmVzc2VkID0gZmFsc2U7XG5sZXQgZG93blByZXNzZWQgPSBmYWxzZTtcbmxldCByaWdodFByZXNzZWQgPSBmYWxzZTtcbmxldCBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlciwgZmFsc2UpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGtleVVwSGFuZGxlciwgZmFsc2UpO1xuXG5pbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGltZ1cgPSBpbWcud2lkdGggKiBzY2FsZTtcbiAgICBpbWdIID0gaW1nLmhlaWdodCAqIHNjYWxlO1xuXG4gICAgaWYgKGltZ1cgPiBDYW52YXNYU2l6ZSkge1xuICAgICAgICAvLyBpbWFnZSBsYXJnZXIgdGhhbiBjYW52YXNcbiAgICAgICAgeCA9IENhbnZhc1hTaXplIC0gaW1nVztcbiAgICB9XG4gICAgaWYgKGltZ1cgPiBDYW52YXNYU2l6ZSkge1xuICAgICAgICAvLyBpbWFnZSB3aWR0aCBsYXJnZXIgdGhhbiBjYW52YXNcbiAgICAgICAgY2xlYXJYID0gaW1nVztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhclggPSBDYW52YXNYU2l6ZTtcbiAgICB9XG5cbiAgICBpZiAoaW1nSCA+IENhbnZhc1lTaXplKSB7XG4gICAgICAgIC8vIGltYWdlIGhlaWdodCBsYXJnZXIgdGhhbiBjYW52YXNcbiAgICAgICAgY2xlYXJZID0gaW1nSDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhclkgPSBDYW52YXNZU2l6ZTtcbiAgICB9XG5cbiAgICAvLyBnZXQgY2FudmFzIGNvbnRleHRcbiAgICBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIC8vIHNldCByZWZyZXNoIHJhdGVcbiAgICByZXR1cm4gc2V0SW50ZXJ2YWwoZHJhdywgc3BlZWQpO1xufVxuXG5cbmZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGUpIHtcbiAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICB1cFByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgIGRvd25QcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgcmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICBsZWZ0UHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGtleVVwSGFuZGxlcihlKSB7XG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgdXBQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgZG93blByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgcmlnaHRQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBkcmF3KCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2xlYXJYLCBjbGVhclkpOyAvLyBjbGVhciB0aGUgY2FudmFzXG4gICAgXG4gICAgLy8gcmVzZXQsIHN0YXJ0IGZyb20gYmVnaW5uaW5nXG4gICAgaWYgKHggPiBDYW52YXNYU2l6ZSkge1xuICAgICAgICB4ID0gLWltZ1cgKyB4O1xuICAgIH1cbiAgICAvLyBkcmF3IGFkZGl0aW9uYWwgaW1hZ2UxXG4gICAgaWYgKHggPiAwKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAtaW1nVyArIHgsIHksIGltZ1csIGltZ0gpO1xuICAgIH1cbiAgICAvLyBkcmF3IGFkZGl0aW9uYWwgaW1hZ2UyXG4gICAgaWYgKHggLSBpbWdXID4gMCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgLWltZ1cgKiAyICsgeCwgeSwgaW1nVywgaW1nSCk7XG4gICAgfVxuICAgIFxuICAgIC8vIGRyYXcgaW1hZ2VcbiAgICBcbiAgICBpZiAocmlnaHRQcmVzc2VkKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UocmlnaHRfYXJyb3dfYWN0aXZlLCA0MDAsIDApO1xuICAgICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHJpZ2h0X2Fycm93LCA0MDAsIDApO1xuICAgIH1cbiAgICBpZiAodXBQcmVzc2VkKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodXBfYXJyb3dfYWN0aXZlLCAzMDAsIDApO1xuICAgICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHVwX2Fycm93LCAzMDAsIDApO1xuICAgIH1cbiAgICBcbiAgICBpZiAoZG93blByZXNzZWQpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShkb3duX2Fycm93X2FjdGl2ZSwgMjAwLCAwKTtcbiAgICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShkb3duX2Fycm93LCAyMDAsIDApO1xuICAgIH1cbiAgICBpZiAobGVmdFByZXNzZWQpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShsZWZ0X2Fycm93X2FjdGl2ZSwgMTAwLCAwKTtcbiAgICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShsZWZ0X2Fycm93LCAxMDAsIDApO1xuICAgIH1cbiAgICBcbiAgICBjdHguZHJhd0ltYWdlKGltZywgeCwgeSwgaW1nVywgaW1nSCk7XG4gICAgXG5cblxuXG4gICAgLy8gYW1vdW50IHRvIG1vdmVcbiAgICB5IC09IGR4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==