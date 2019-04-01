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

var right = new Image();
var left = new Image();
var up = new Image();
var down = new Image();
right.src = "./sprites/arrow_right_note.png";
left.src = "./sprites/arrow_left_note.png";
up.src = "./sprites/arrow_up_note.png";
down.src = "./sprites/arrow_down_note.png";
var song = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, [left], null, [right], null, [down], null, [up], null, [right], null, [left], null, [up], null, [down], null, [left], null, [up], null];
var dx = 1.5;
var ctx;
var notes = [];
var CanvasXSize = 600;
var CanvasYSize = 600;
var speed = 100; // lower is faster

var y = 600; // vertical offset

var drawNote = function drawNote(note) {
  if (note) {
    var noteX;
    if (note.src.includes('left')) noteX = 100;
    if (note.src.includes('down')) noteX = 200;
    if (note.src.includes('up')) noteX = 300;
    if (note.src.includes('right')) noteX = 400;
    notes.push({
      img: note,
      x: noteX,
      y: 600
    });
  }

  ctx = document.getElementById('canvas').getContext('2d');
  return setInterval(function () {
    return draw(notes);
  }, speed);
};

function draw(notes) {
  ctx.clearRect(0, 0, 600, 600); // clear the canvas

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

  if (notes.length) {
    notes.forEach(function (note) {
      ctx.drawImage(note.img, note.x, note.y);
      note.y -= dx;
    });
  }
}

document.querySelectorAll('.button')[0].addEventListener('click', function (event) {
  var menu = document.getElementsByClassName('menuContainer')[0];
  var canvas = document.getElementsByClassName('canvasContainer')[0];
  menu.style.display = 'none';
  canvas.style.display = 'block';
  var audio = new Audio("./songs/ppp.mp3");
  audio.play();
  var bpm = 300;

  var _loop = function _loop(i) {
    var note = song[i];

    if (note) {
      setTimeout(function () {
        return drawNote(note[0]);
      }, i * bpm);
    } else {
      setTimeout(function () {
        return drawNote(null);
      }, i * bpm);
    }
  };

  for (var i = 0; i < song.length; i++) {
    _loop(i);
  }
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
down_arrow_active.src = "./sprites/arrow_down_active.png";
var upPressed = false;
var downPressed = false;
var rightPressed = false;
var leftPressed = false;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInJpZ2h0IiwiSW1hZ2UiLCJsZWZ0IiwidXAiLCJkb3duIiwic3JjIiwic29uZyIsImR4IiwiY3R4Iiwibm90ZXMiLCJDYW52YXNYU2l6ZSIsIkNhbnZhc1lTaXplIiwic3BlZWQiLCJ5IiwiZHJhd05vdGUiLCJub3RlIiwibm90ZVgiLCJpbmNsdWRlcyIsInB1c2giLCJpbWciLCJ4IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJzZXRJbnRlcnZhbCIsImRyYXciLCJjbGVhclJlY3QiLCJyaWdodFByZXNzZWQiLCJkcmF3SW1hZ2UiLCJyaWdodF9hcnJvd19hY3RpdmUiLCJyaWdodF9hcnJvdyIsInVwUHJlc3NlZCIsInVwX2Fycm93X2FjdGl2ZSIsInVwX2Fycm93IiwiZG93blByZXNzZWQiLCJkb3duX2Fycm93X2FjdGl2ZSIsImRvd25fYXJyb3ciLCJsZWZ0UHJlc3NlZCIsImxlZnRfYXJyb3dfYWN0aXZlIiwibGVmdF9hcnJvdyIsImxlbmd0aCIsImZvckVhY2giLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwibWVudSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjYW52YXMiLCJzdHlsZSIsImRpc3BsYXkiLCJhdWRpbyIsIkF1ZGlvIiwicGxheSIsImJwbSIsImkiLCJzZXRUaW1lb3V0IiwiYm9keSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaWQiLCJnYW1lTG9vcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJlIiwia2V5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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TDtBQUNJbEMsZUFBUyxHQUFHLEtBQVo7QUFDQTs7QUFDSixTQUFLLFdBQUw7QUFDSUcsaUJBQVcsR0FBRyxLQUFkO0FBQ0E7O0FBQ0osU0FBSyxZQUFMO0FBQ0lQLGtCQUFZLEdBQUcsS0FBZjtBQUNBOztBQUNKLFNBQUssV0FBTDtBQUNJVSxpQkFBVyxHQUFHLEtBQWQ7QUFDQTtBQVpSO0FBY0gsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImxldCByaWdodCA9IG5ldyBJbWFnZSgpO1xubGV0IGxlZnQgPSBuZXcgSW1hZ2UoKTtcbmxldCB1cCA9IG5ldyBJbWFnZSgpO1xubGV0IGRvd24gPSBuZXcgSW1hZ2UoKTtcblxucmlnaHQuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfcmlnaHRfbm90ZS5wbmdcIjtcbmxlZnQuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfbGVmdF9ub3RlLnBuZ1wiO1xudXAuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfdXBfbm90ZS5wbmdcIjtcbmRvd24uc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfZG93bl9ub3RlLnBuZ1wiO1xuXG5sZXQgc29uZyA9IFtcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIG51bGwsIG51bGwsIG51bGwsIG51bGwsXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFt1cF0sIG51bGxcbl07XG5cbmxldCBkeCA9IDEuNTtcbmxldCBjdHg7XG5sZXQgbm90ZXMgPSBbXTtcblxubGV0IENhbnZhc1hTaXplID0gNjAwO1xubGV0IENhbnZhc1lTaXplID0gNjAwO1xubGV0IHNwZWVkID0gMTAwOyAvLyBsb3dlciBpcyBmYXN0ZXJcbmxldCB5ID0gNjAwOyAvLyB2ZXJ0aWNhbCBvZmZzZXRcblxubGV0IGRyYXdOb3RlID0gKG5vdGUpID0+IHtcbiAgICBpZihub3RlKSB7XG4gICAgICAgIGxldCBub3RlWDtcbiAgICAgICAgaWYgKG5vdGUuc3JjLmluY2x1ZGVzKCdsZWZ0JykpIG5vdGVYID0gMTAwO1xuICAgICAgICBpZiAobm90ZS5zcmMuaW5jbHVkZXMoJ2Rvd24nKSkgbm90ZVggPSAyMDA7XG4gICAgICAgIGlmIChub3RlLnNyYy5pbmNsdWRlcygndXAnKSkgbm90ZVggPSAzMDA7XG4gICAgICAgIGlmIChub3RlLnNyYy5pbmNsdWRlcygncmlnaHQnKSkgbm90ZVggPSA0MDA7XG4gICAgICAgIG5vdGVzLnB1c2goeyBpbWc6IG5vdGUsIHg6IG5vdGVYLCB5OiA2MDAgfSk7XG4gICAgfVxuXG4gICAgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJyk7XG4gICAgcmV0dXJuIHNldEludGVydmFsKCgpID0+IGRyYXcobm90ZXMpLCBzcGVlZCk7XG59XG5cbmZ1bmN0aW9uIGRyYXcobm90ZXMpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDYwMCwgNjAwKTsgLy8gY2xlYXIgdGhlIGNhbnZhc1xuICAgIGlmIChyaWdodFByZXNzZWQpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShyaWdodF9hcnJvd19hY3RpdmUsIDQwMCwgMCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHJpZ2h0X2Fycm93LCA0MDAsIDApO1xuICAgIH1cbiAgICBpZiAodXBQcmVzc2VkKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodXBfYXJyb3dfYWN0aXZlLCAzMDAsIDApO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh1cF9hcnJvdywgMzAwLCAwKTtcbiAgICB9XG5cbiAgICBpZiAoZG93blByZXNzZWQpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShkb3duX2Fycm93X2FjdGl2ZSwgMjAwLCAwKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZG93bl9hcnJvdywgMjAwLCAwKTtcbiAgICB9XG4gICAgaWYgKGxlZnRQcmVzc2VkKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UobGVmdF9hcnJvd19hY3RpdmUsIDEwMCwgMCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGxlZnRfYXJyb3csIDEwMCwgMCk7XG4gICAgfVxuXG4gICAgaWYobm90ZXMubGVuZ3RoKSB7XG4gICAgICAgIG5vdGVzLmZvckVhY2gobm90ZSA9PiB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKG5vdGUuaW1nLCBub3RlLngsIG5vdGUueSk7XG4gICAgICAgICAgICBub3RlLnkgLT0gZHg7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbicpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51Q29udGFpbmVyJylbMF07XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhbnZhc0NvbnRhaW5lcicpWzBdO1xuICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKFwiLi9zb25ncy9wcHAubXAzXCIpO1xuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICBsZXQgYnBtID0gMzAwO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzb25nLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBub3RlID0gc29uZ1tpXTtcbiAgICAgICAgaWYgKG5vdGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZHJhd05vdGUobm90ZVswXSksIGkgKiBicG0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkcmF3Tm90ZShudWxsKSwgaSAqIGJwbSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxufSk7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xubGV0IGlkO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgICAvLyBBbmltYXRlIHN0dWZmXG4gICAgaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApXG59XG5pZihib2R5KSB7XG4gICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpXG4gICAgfSlcbn1cblxubGV0IHJpZ2h0X2Fycm93ID0gbmV3IEltYWdlKCk7XG5sZXQgbGVmdF9hcnJvdyA9IG5ldyBJbWFnZSgpO1xubGV0IHVwX2Fycm93ID0gbmV3IEltYWdlKCk7XG5sZXQgZG93bl9hcnJvdyA9IG5ldyBJbWFnZSgpO1xuXG5yaWdodF9hcnJvdy5zcmMgPSBcIi4vc3ByaXRlcy9hcnJvd19yaWdodC5wbmdcIjtcbmxlZnRfYXJyb3cuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfbGVmdC5wbmdcIjtcbnVwX2Fycm93LnNyYyA9IFwiLi9zcHJpdGVzL2Fycm93X3VwLnBuZ1wiO1xuZG93bl9hcnJvdy5zcmMgPSBcIi4vc3ByaXRlcy9hcnJvd19kb3duLnBuZ1wiO1xuXG5sZXQgcmlnaHRfYXJyb3dfYWN0aXZlID0gbmV3IEltYWdlKCk7XG5sZXQgbGVmdF9hcnJvd19hY3RpdmUgPSBuZXcgSW1hZ2UoKTtcbmxldCB1cF9hcnJvd19hY3RpdmUgPSBuZXcgSW1hZ2UoKTtcbmxldCBkb3duX2Fycm93X2FjdGl2ZSA9IG5ldyBJbWFnZSgpO1xuXG5yaWdodF9hcnJvd19hY3RpdmUuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfcmlnaHRfYWN0aXZlLnBuZ1wiO1xubGVmdF9hcnJvd19hY3RpdmUuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfbGVmdF9hY3RpdmUucG5nXCI7XG51cF9hcnJvd19hY3RpdmUuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfdXBfYWN0aXZlLnBuZ1wiO1xuZG93bl9hcnJvd19hY3RpdmUuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfZG93bl9hY3RpdmUucG5nXCI7XG5cbmxldCB1cFByZXNzZWQgPSBmYWxzZTtcbmxldCBkb3duUHJlc3NlZCA9IGZhbHNlO1xubGV0IHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xubGV0IGxlZnRQcmVzc2VkID0gZmFsc2U7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5VXBIYW5kbGVyLCBmYWxzZSk7XG5cbmZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGUpIHtcbiAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICB1cFByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgIGRvd25QcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgcmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICBsZWZ0UHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGtleVVwSGFuZGxlcihlKSB7XG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgdXBQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgZG93blByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgcmlnaHRQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9