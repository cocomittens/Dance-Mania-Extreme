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

img.src = './sprites/arrow_down_note.png';
var CanvasXSize = 600;
var CanvasYSize = 600;
var speed = 2; // lower is faster

var scale = 1.05;
var y = 600; // vertical offset
// Main program

var dx = 0.75;
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


  ctx.drawImage(img, x, y, imgW, imgH);

  if (rightPressed) {
    ctx.drawImage(right_arrow_active, 100, 0);
  } else {
    ctx.drawImage(right_arrow, 100, 0);
  }

  if (upPressed) {
    ctx.drawImage(up_arrow_active, 200, 0);
  } else {
    ctx.drawImage(up_arrow, 200, 0);
  }

  if (leftPressed) {
    ctx.drawImage(left_arrow_active, 300, 0);
  } else {
    ctx.drawImage(left_arrow, 300, 0);
  }

  if (downPressed) {
    ctx.drawImage(down_arrow_active, 400, 0);
  } else {
    ctx.drawImage(down_arrow, 400, 0);
  } // amount to move


  y -= dx;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIm1lbnUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2FudmFzIiwic3R5bGUiLCJkaXNwbGF5IiwiYm9keSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaWQiLCJnYW1lTG9vcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaW1nIiwiSW1hZ2UiLCJyaWdodF9hcnJvdyIsImxlZnRfYXJyb3ciLCJ1cF9hcnJvdyIsImRvd25fYXJyb3ciLCJzcmMiLCJyaWdodF9hcnJvd19hY3RpdmUiLCJsZWZ0X2Fycm93X2FjdGl2ZSIsInVwX2Fycm93X2FjdGl2ZSIsImRvd25fYXJyb3dfYWN0aXZlIiwiQ2FudmFzWFNpemUiLCJDYW52YXNZU2l6ZSIsInNwZWVkIiwic2NhbGUiLCJ5IiwiZHgiLCJpbWdXIiwiaW1nSCIsIngiLCJjbGVhclgiLCJjbGVhclkiLCJjdHgiLCJ1cFByZXNzZWQiLCJkb3duUHJlc3NlZCIsInJpZ2h0UHJlc3NlZCIsImxlZnRQcmVzc2VkIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJvbmxvYWQiLCJ3aWR0aCIsImhlaWdodCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsInNldEludGVydmFsIiwiZHJhdyIsImUiLCJrZXkiLCJjbGVhclJlY3QiLCJkcmF3SW1hZ2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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Q1o7OztBQUNBVSxHQUFDLElBQUlDLEVBQUw7QUFDSCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uJylbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnVDb250YWluZXInKVswXTtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FudmFzQ29udGFpbmVyJylbMF07XG4gICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn0pO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbmxldCBpZDtcblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gICAgLy8gQW5pbWF0ZSBzdHVmZlxuICAgIGlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKVxufVxuaWYoYm9keSkge1xuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKVxuICAgIH0pXG59XG5cblxudmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuXG5sZXQgcmlnaHRfYXJyb3cgPSBuZXcgSW1hZ2UoKTtcbmxldCBsZWZ0X2Fycm93ID0gbmV3IEltYWdlKCk7XG5sZXQgdXBfYXJyb3cgPSBuZXcgSW1hZ2UoKTtcbmxldCBkb3duX2Fycm93ID0gbmV3IEltYWdlKCk7XG5cbnJpZ2h0X2Fycm93LnNyYyA9IFwiLi9zcHJpdGVzL2Fycm93X3JpZ2h0LnBuZ1wiO1xubGVmdF9hcnJvdy5zcmMgPSBcIi4vc3ByaXRlcy9hcnJvd19sZWZ0LnBuZ1wiO1xudXBfYXJyb3cuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfdXAucG5nXCI7XG5kb3duX2Fycm93LnNyYyA9IFwiLi9zcHJpdGVzL2Fycm93X2Rvd24ucG5nXCI7XG5cbmxldCByaWdodF9hcnJvd19hY3RpdmUgPSBuZXcgSW1hZ2UoKTtcbmxldCBsZWZ0X2Fycm93X2FjdGl2ZSA9IG5ldyBJbWFnZSgpO1xubGV0IHVwX2Fycm93X2FjdGl2ZSA9IG5ldyBJbWFnZSgpO1xubGV0IGRvd25fYXJyb3dfYWN0aXZlID0gbmV3IEltYWdlKCk7XG5cbnJpZ2h0X2Fycm93X2FjdGl2ZS5zcmMgPSBcIi4vc3ByaXRlcy9hcnJvd19yaWdodF9hY3RpdmUucG5nXCI7XG5sZWZ0X2Fycm93X2FjdGl2ZS5zcmMgPSBcIi4vc3ByaXRlcy9hcnJvd19sZWZ0X2FjdGl2ZS5wbmdcIjtcbnVwX2Fycm93X2FjdGl2ZS5zcmMgPSBcIi4vc3ByaXRlcy9hcnJvd191cF9hY3RpdmUucG5nXCI7XG5kb3duX2Fycm93X2FjdGl2ZS5zcmMgPSBcIi4vc3ByaXRlcy9hcnJvd19kb3duX2FjdGl2ZS5wbmdcIjtcblxuLy8gVXNlciBWYXJpYWJsZXMgLSBjdXN0b21pemUgdGhlc2UgdG8gY2hhbmdlIHRoZSBpbWFnZSBiZWluZyBzY3JvbGxlZCwgaXRzXG4vLyBkaXJlY3Rpb24sIGFuZCB0aGUgc3BlZWQuXG5cbmltZy5zcmMgPSAnLi9zcHJpdGVzL2Fycm93X2Rvd25fbm90ZS5wbmcnO1xudmFyIENhbnZhc1hTaXplID0gNjAwO1xudmFyIENhbnZhc1lTaXplID0gNjAwO1xudmFyIHNwZWVkID0gMjsgLy8gbG93ZXIgaXMgZmFzdGVyXG52YXIgc2NhbGUgPSAxLjA1O1xudmFyIHkgPSA2MDA7IC8vIHZlcnRpY2FsIG9mZnNldFxuXG4vLyBNYWluIHByb2dyYW1cblxudmFyIGR4ID0gMC43NTtcbnZhciBpbWdXO1xudmFyIGltZ0g7XG52YXIgeCA9IDA7XG52YXIgY2xlYXJYO1xudmFyIGNsZWFyWTtcbnZhciBjdHg7XG5cbmxldCB1cFByZXNzZWQgPSBmYWxzZTtcbmxldCBkb3duUHJlc3NlZCA9IGZhbHNlO1xubGV0IHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xubGV0IGxlZnRQcmVzc2VkID0gZmFsc2U7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5VXBIYW5kbGVyLCBmYWxzZSk7XG5cbmltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaW1nVyA9IGltZy53aWR0aCAqIHNjYWxlO1xuICAgIGltZ0ggPSBpbWcuaGVpZ2h0ICogc2NhbGU7XG5cbiAgICBpZiAoaW1nVyA+IENhbnZhc1hTaXplKSB7XG4gICAgICAgIC8vIGltYWdlIGxhcmdlciB0aGFuIGNhbnZhc1xuICAgICAgICB4ID0gQ2FudmFzWFNpemUgLSBpbWdXO1xuICAgIH1cbiAgICBpZiAoaW1nVyA+IENhbnZhc1hTaXplKSB7XG4gICAgICAgIC8vIGltYWdlIHdpZHRoIGxhcmdlciB0aGFuIGNhbnZhc1xuICAgICAgICBjbGVhclggPSBpbWdXO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFyWCA9IENhbnZhc1hTaXplO1xuICAgIH1cblxuICAgIGlmIChpbWdIID4gQ2FudmFzWVNpemUpIHtcbiAgICAgICAgLy8gaW1hZ2UgaGVpZ2h0IGxhcmdlciB0aGFuIGNhbnZhc1xuICAgICAgICBjbGVhclkgPSBpbWdIO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFyWSA9IENhbnZhc1lTaXplO1xuICAgIH1cblxuICAgIC8vIGdldCBjYW52YXMgY29udGV4dFxuICAgIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgLy8gc2V0IHJlZnJlc2ggcmF0ZVxuICAgIHJldHVybiBzZXRJbnRlcnZhbChkcmF3LCBzcGVlZCk7XG59XG5cblxuZnVuY3Rpb24ga2V5RG93bkhhbmRsZXIoZSkge1xuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgIHVwUHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgZG93blByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICByaWdodFByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgIGxlZnRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZnVuY3Rpb24ga2V5VXBIYW5kbGVyKGUpIHtcbiAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICB1cFByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICBkb3duUHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICByaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjbGVhclgsIGNsZWFyWSk7IC8vIGNsZWFyIHRoZSBjYW52YXNcbiAgICBcbiAgICAvLyByZXNldCwgc3RhcnQgZnJvbSBiZWdpbm5pbmdcbiAgICBpZiAoeCA+IENhbnZhc1hTaXplKSB7XG4gICAgICAgIHggPSAtaW1nVyArIHg7XG4gICAgfVxuICAgIC8vIGRyYXcgYWRkaXRpb25hbCBpbWFnZTFcbiAgICBpZiAoeCA+IDApIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIC1pbWdXICsgeCwgeSwgaW1nVywgaW1nSCk7XG4gICAgfVxuICAgIC8vIGRyYXcgYWRkaXRpb25hbCBpbWFnZTJcbiAgICBpZiAoeCAtIGltZ1cgPiAwKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAtaW1nVyAqIDIgKyB4LCB5LCBpbWdXLCBpbWdIKTtcbiAgICB9XG4gICAgXG4gICAgLy8gZHJhdyBpbWFnZVxuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCB4LCB5LCBpbWdXLCBpbWdIKTtcblxuICAgIGlmIChyaWdodFByZXNzZWQpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShyaWdodF9hcnJvd19hY3RpdmUsIDEwMCwgMCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHJpZ2h0X2Fycm93LCAxMDAsIDApO1xuICAgIH1cbiAgICBpZiAodXBQcmVzc2VkKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodXBfYXJyb3dfYWN0aXZlLCAyMDAsIDApO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh1cF9hcnJvdywgMjAwLCAwKTtcbiAgICB9XG4gICAgaWYgKGxlZnRQcmVzc2VkKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UobGVmdF9hcnJvd19hY3RpdmUsIDMwMCwgMCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGxlZnRfYXJyb3csIDMwMCwgMCk7XG4gICAgfVxuXG4gICAgaWYgKGRvd25QcmVzc2VkKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZG93bl9hcnJvd19hY3RpdmUsIDQwMCwgMCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGRvd25fYXJyb3csIDQwMCwgMCk7XG4gICAgfVxuXG5cblxuICAgIC8vIGFtb3VudCB0byBtb3ZlXG4gICAgeSAtPSBkeDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=