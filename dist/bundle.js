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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _songs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./songs.js */ "./src/songs.js");

document.getElementById('songBtn').addEventListener('click', function (event) {
  var menu = document.getElementsByClassName('menuContainer')[0];
  var songs = document.getElementsByClassName('songsContainer')[0];
  menu.style.display = 'none';
  songs.style.display = 'block';
  document.getElementById('stylesheet').href = './css/songs.css';
  document.addEventListener("keydown", _songs_js__WEBPACK_IMPORTED_MODULE_0__["songsDownHandler"], false);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      document.getElementById('stylesheet').href = './css/styles.css';
      var _menu = document.getElementsByClassName('songsContainer')[0];
      var canvas = document.getElementsByClassName('canvasContainer')[0];
      _menu.style.display = 'none';
      canvas.style.display = 'block';
      var audio = new Audio("./songs/ppp.mp3");
      audio.play();
      var bpm = 375;
      drawNote([]);

      var _loop = function _loop(i) {
        var beat = song[i];

        if (beat) {
          setTimeout(function () {
            return drawNote(beat);
          }, i * bpm);
        }
      };

      for (var i = 0; i < song.length; i++) {
        _loop(i);
      }
    }
  });
});
var right = new Image();
var left = new Image();
var up = new Image();
var down = new Image();
right.src = "./sprites/arrow_right_note.png";
left.src = "./sprites/arrow_left_note.png";
up.src = "./sprites/arrow_up_note.png";
down.src = "./sprites/arrow_down_note.png";
var song = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, [left], null, [right], null, [down], null, [up], null, [right], null, [left], null, [up], null, [down], null, [left], null, [up], null, [down], null, [right], null, [left], null, [down], null, [right], null, [up], null, [right], null, [down], null, [up], null, [left], null, [right], null, [up], null, [left], null, [down], null, [left], null, [down], null, [up], null, [right], null, [up], null, [down], null, [left], null, null, [right], [down], null, [up], null, [right], null, [left], null, [right], null, [up], null, [down], null, null, [up], [right], null, [up], null, [down], null, [left], null, [down], null, [up], null, [right], null, null, [left], [up], null, [right], null, [left], null, [down], null, [left], null, [right], null, [up], null, null, [down], [left, right], null, [left], [right], [up], [down], [up], [down], [right], null, [left], null, [right], [left], [down], [up], [left, right], null, [right], [down], [left], [up], [left], [up], [down], null, [right], null, [down], [right], [up], [left], [up], null, [down], null, [left], [up, down], [right], [up, down], [down], null, [up], null, [right], [up, down], [left], [up, down], [right], null, [left], null, [down], [left, right], [up], [left, right], [left], null, [right], null, [left, right], null, null, null, [left], null, [right], null, [down], null, [up], null, [down], null, [right], null, [left], null, null, [right], [down], null, [up], null, [right], null, [left], null, [right], null, [up], null, [down], null, null, [up], [right], [down], [up], [left], [right], [up], [left], [down], [left], [up], [down], [right], [left], [down], [right], [up], [right], [up], [down], [left], [right], [left], [up], [down], [left], [down], [up], [right], [left], [right], [down], [left, right]];
var dx = 1;
var ctx;
var notes = [];
var combo = 0;
var speed = 1; // lower is faster

var y = 600; // vertical offset

var run;

var drawNote = function drawNote(beat) {
  if (beat) {
    var noteX;
    beat.forEach(function (note) {
      if (note.src.includes('left')) noteX = 100;
      if (note.src.includes('down')) noteX = 200;
      if (note.src.includes('up')) noteX = 300;
      if (note.src.includes('right')) noteX = 400;
      notes.push({
        img: note,
        x: noteX,
        y: y,
        score: null,
        displayed: 0
      });
    });
  }

  ctx = document.getElementById('canvas').getContext('2d');
  clearInterval(run);
  run = setInterval(function () {
    return draw(notes);
  }, speed);
};

function draw(notes) {
  ctx.font = "30px Helvetica";
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

      if (note.x === 100 && !note.score && leftPressed) {
        if (note.y <= 30 && note.y >= 25) note.score = 'Bad';
        if (note.y <= 25 && note.y >= 20) note.score = 'OK';
        if (note.y <= 20 && note.y >= 10) note.score = 'Good';
        if (note.y <= 10) note.score = 'Perfect!';
      }

      if (note.x === 200 && !note.score && downPressed) {
        if (note.y <= 30 && note.y >= 25) note.score = 'Bad';
        if (note.y <= 25 && note.y >= 20) note.score = 'OK';
        if (note.y <= 20 && note.y >= 10) note.score = 'Good';
        if (note.y <= 10) note.score = 'Perfect!';
      }

      if (note.x === 300 && !note.score && upPressed) {
        if (note.y <= 30 && note.y >= 25) note.score = 'Bad';
        if (note.y <= 25 && note.y >= 20) note.score = 'OK';
        if (note.y <= 20 && note.y >= 10) note.score = 'Good';
        if (note.y <= 10) note.score = 'Perfect!';
      }

      if (note.x === 400 && !note.score && rightPressed) {
        if (note.y <= 30 && note.y >= 25) note.score = 'Bad';
        if (note.y <= 25 && note.y >= 20) note.score = 'OK';
        if (note.y <= 20 && note.y >= 10) note.score = 'Good';
        if (note.y <= 10) note.score = 'Perfect!';
      }

      if (note.y < 0 && !note.score) {
        note.score = 'Miss';
        combo = 0;
      }

      if (note.score && !note.displayed) {
        if (note.score == 'Good' || note.score == 'Perfect!') combo++;else combo = 0;
      } // Display score for 70 frames


      if (note.score && note.displayed <= 70) {
        var color;

        switch (note.score) {
          case 'Miss':
            color = '#FA887B';
            break;

          case 'Bad':
            color = '#CCABDA';
            break;

          case 'OK':
            color = '#FFDD94';
            break;

          case 'Good':
            color = '#D0E6A5';
            break;

          case 'Perfect!':
            color = '#85E3CE';
            break;
        }

        ctx.fillStyle = color;
        ctx.fillText(note.score, 250, 150);
        note.displayed++;
        ctx.fillStyle = '#000';
      }

      note.y -= dx;
    });
  }

  if (combo >= 2) {
    var comboText = "".concat(combo, " combo");
    ctx.fillText(comboText, 235, 200);
  }
}

document.getElementById('startBtn').addEventListener('click', function (event) {
  var menu = document.getElementsByClassName('menuContainer')[0];
  var canvas = document.getElementsByClassName('canvasContainer')[0];
  menu.style.display = 'none';
  canvas.style.display = 'block';
  var audio = new Audio("./songs/ppp.mp3");
  audio.play();
  var bpm = 375;
  drawNote([]);

  var _loop2 = function _loop2(i) {
    var beat = song[i];

    if (beat) {
      setTimeout(function () {
        return drawNote(beat);
      }, i * bpm);
    }
  };

  for (var i = 0; i < song.length; i++) {
    _loop2(i);
  }
});
var body = document.getElementsByTagName('body')[0];
var id;

function gameLoop() {
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
      setTimeout(function () {
        return keyUpHandler(e);
      }, 100);
      break;

    case "ArrowDown":
      downPressed = true;
      setTimeout(function () {
        return keyUpHandler(e);
      }, 100);
      break;

    case "ArrowRight":
      rightPressed = true;
      setTimeout(function () {
        return keyUpHandler(e);
      }, 100);
      break;

    case "ArrowLeft":
      leftPressed = true;
      setTimeout(function () {
        return keyUpHandler(e);
      }, 100);
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

/***/ }),

/***/ "./src/songs.js":
/*!**********************!*\
  !*** ./src/songs.js ***!
  \**********************/
/*! exports provided: songsDownHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "songsDownHandler", function() { return songsDownHandler; });
var songsList = ['c-1', 'c-2', 'c-3', 'c-4', 'c-5'];
function songsDownHandler(e) {
  if (e.key === "ArrowLeft") {
    var foundActive = false;

    for (var i = 0; i < songsList.length; i++) {
      var curr = document.getElementsByClassName(songsList[i])[0];
      var next = document.getElementsByClassName(songsList[i + 1])[0];
      var currPos = window.getComputedStyle(curr, null).getPropertyValue("transform");
      var values = currPos.split('(')[1],
          values = values.split(')')[0],
          values = values.split(',');
      var currX = parseInt(values[4].slice(1));
      var currY = parseInt(values[5]);
      if (i === 0) curr.style.transform = "translate(".concat(60, "px, ", -160, "px)");else {
        var newPos = void 0;
        newPos = foundActive ? "translate(".concat(currX - 30, "px, ").concat(currY + 80, "px)") : "translate(".concat(currX + 30, "px, ").concat(currY + 80, "px)");
        curr.style.transform = newPos;
      }

      if (curr.classList.contains('active') && !foundActive) {
        foundActive = true;
        curr.classList.remove('active');
        next.classList.add('active');
      }
    }

    songsList.push(songsList.shift());
  }

  if (e.key === "ArrowRight") {
    var _foundActive = false;

    for (var _i = 0; _i < songsList.length; _i++) {
      var _curr = document.getElementsByClassName(songsList[_i])[0];
      var _next = document.getElementsByClassName(songsList[_i - 1])[0];

      var _currPos = window.getComputedStyle(_curr, null).getPropertyValue("transform");

      var values = _currPos.split('(')[1],
          values = values.split(')')[0],
          values = values.split(',');

      var _currX = parseInt(values[4].slice(1));

      var _currY = parseInt(values[5]);

      if (_curr.classList.contains('active') && !_foundActive) {
        _foundActive = true;

        _curr.classList.remove('active');

        _next.classList.add('active');
      }

      if (_i === 4) _curr.style.transform = "translate(".concat(60, "px, ", 160, "px)");else {
        var _newPos = void 0;

        _newPos = _foundActive ? "translate(".concat(_currX + 30, "px, ").concat(_currY - 80, "px)") : "translate(".concat(_currX - 30, "px, ").concat(_currY - 80, "px)");
        _curr.style.transform = _newPos;
      }
    }

    songsList.unshift(songsList.pop());
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zb25ncy5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwibWVudSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzb25ncyIsInN0eWxlIiwiZGlzcGxheSIsImhyZWYiLCJzb25nc0Rvd25IYW5kbGVyIiwiZSIsImtleSIsImNhbnZhcyIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5IiwiYnBtIiwiZHJhd05vdGUiLCJpIiwiYmVhdCIsInNvbmciLCJzZXRUaW1lb3V0IiwibGVuZ3RoIiwicmlnaHQiLCJJbWFnZSIsImxlZnQiLCJ1cCIsImRvd24iLCJzcmMiLCJkeCIsImN0eCIsIm5vdGVzIiwiY29tYm8iLCJzcGVlZCIsInkiLCJydW4iLCJub3RlWCIsImZvckVhY2giLCJub3RlIiwiaW5jbHVkZXMiLCJwdXNoIiwiaW1nIiwieCIsInNjb3JlIiwiZGlzcGxheWVkIiwiZ2V0Q29udGV4dCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImRyYXciLCJmb250IiwiY2xlYXJSZWN0IiwicmlnaHRQcmVzc2VkIiwiZHJhd0ltYWdlIiwicmlnaHRfYXJyb3dfYWN0aXZlIiwicmlnaHRfYXJyb3ciLCJ1cFByZXNzZWQiLCJ1cF9hcnJvd19hY3RpdmUiLCJ1cF9hcnJvdyIsImRvd25QcmVzc2VkIiwiZG93bl9hcnJvd19hY3RpdmUiLCJkb3duX2Fycm93IiwibGVmdFByZXNzZWQiLCJsZWZ0X2Fycm93X2FjdGl2ZSIsImxlZnRfYXJyb3ciLCJjb2xvciIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwiY29tYm9UZXh0IiwiYm9keSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaWQiLCJnYW1lTG9vcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJzb25nc0xpc3QiLCJmb3VuZEFjdGl2ZSIsImN1cnIiLCJuZXh0IiwiY3VyclBvcyIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwidmFsdWVzIiwic3BsaXQiLCJjdXJyWCIsInBhcnNlSW50Iiwic2xpY2UiLCJjdXJyWSIsInRyYW5zZm9ybSIsIm5ld1BvcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwic2hpZnQiLCJ1bnNoaWZ0IiwicG9wIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUVBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNDLGdCQUFuQyxDQUFvRCxPQUFwRCxFQUE2RCxVQUFVQyxLQUFWLEVBQWlCO0FBQzFFLE1BQUlDLElB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MUMsRUFBdUQ7QUFDbkRBLG9CQUFXLEdBQUcsSUFBZDs7QUFDQUMsYUFBSSxDQUFDYyxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsUUFBdEI7O0FBQ0FmLGFBQUksQ0FBQ2EsU0FBTCxDQUFlRyxHQUFmLENBQW1CLFFBQW5CO0FBQ0g7O0FBRUQsVUFBSTdFLEVBQUMsS0FBSyxDQUFWLEVBQWE0RCxLQUFJLENBQUN4RSxLQUFMLENBQVdvRixTQUFYLHVCQUFvQyxFQUFwQyxVQUE2QyxHQUE3QyxTQUFiLEtBQ0s7QUFDRCxZQUFJQyxPQUFNLFNBQVY7O0FBQ0FBLGVBQU0sR0FBR2QsWUFBVyx1QkFBZ0JTLE1BQUssR0FBRyxFQUF4QixpQkFBaUNHLE1BQUssR0FBRyxFQUF6QywrQkFBZ0VILE1BQUssR0FBRyxFQUF4RSxpQkFBaUZHLE1BQUssR0FBRyxFQUF6RixRQUFwQjtBQUNBWCxhQUFJLENBQUN4RSxLQUFMLENBQVdvRixTQUFYLEdBQXVCQyxPQUF2QjtBQUNIO0FBQ0o7O0FBQ0RmLGFBQVMsQ0FBQ3FCLE9BQVYsQ0FBa0JyQixTQUFTLENBQUNzQixHQUFWLEVBQWxCO0FBQ0g7QUFFSixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgc29uZ3NEb3duSGFuZGxlcn0gZnJvbSAnLi9zb25ncy5qcyc7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb25nQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnVDb250YWluZXInKVswXTtcbiAgICBsZXQgc29uZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzb25nc0NvbnRhaW5lcicpWzBdO1xuICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBzb25ncy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3R5bGVzaGVldCcpLmhyZWYgPSAnLi9jc3Mvc29uZ3MuY3NzJztcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBzb25nc0Rvd25IYW5kbGVyLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0eWxlc2hlZXQnKS5ocmVmID0gJy4vY3NzL3N0eWxlcy5jc3MnO1xuXG4gICAgICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NvbmdzQ29udGFpbmVyJylbMF07XG4gICAgICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FudmFzQ29udGFpbmVyJylbMF07XG4gICAgICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oXCIuL3NvbmdzL3BwcC5tcDNcIik7XG4gICAgICAgICAgICBhdWRpby5wbGF5KCk7XG4gICAgICAgICAgICBsZXQgYnBtID0gMzc1O1xuICAgICAgICAgICAgZHJhd05vdGUoW10pO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb25nLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJlYXQgPSBzb25nW2ldO1xuICAgICAgICAgICAgICAgIGlmIChiZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZHJhd05vdGUoYmVhdCksIGkgKiBicG0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cbmxldCByaWdodCA9IG5ldyBJbWFnZSgpO1xubGV0IGxlZnQgPSBuZXcgSW1hZ2UoKTtcbmxldCB1cCA9IG5ldyBJbWFnZSgpO1xubGV0IGRvd24gPSBuZXcgSW1hZ2UoKTtcblxucmlnaHQuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfcmlnaHRfbm90ZS5wbmdcIjtcbmxlZnQuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfbGVmdF9ub3RlLnBuZ1wiO1xudXAuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfdXBfbm90ZS5wbmdcIjtcbmRvd24uc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfZG93bl9ub3RlLnBuZ1wiO1xuXG5sZXQgc29uZyA9IFtcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIG51bGwsIG51bGwsIG51bGwsIG51bGwsXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgbnVsbCwgW3JpZ2h0XSxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBudWxsLCBbdXBdLFxuICAgIFtyaWdodF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIG51bGwsIFtsZWZ0XSxcbiAgICBbdXBdLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBudWxsLCBbZG93bl0sXG4gICAgW2xlZnQsIHJpZ2h0XSwgbnVsbCwgW2xlZnRdLCBbcmlnaHRdLFxuICAgIFt1cF0sIFtkb3duXSwgW3VwXSwgW2Rvd25dLFxuICAgIFtyaWdodF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbcmlnaHRdLCBbbGVmdF0sIFtkb3duXSwgW3VwXSxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBbcmlnaHRdLCBbZG93bl0sXG4gICAgW2xlZnRdLCBbdXBdLCBbbGVmdF0sIFt1cF0sXG4gICAgW2Rvd25dLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtkb3duXSwgW3JpZ2h0XSwgW3VwXSwgW2xlZnRdLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbbGVmdF0sIFt1cCwgZG93bl0sIFtyaWdodF0sIFt1cCwgZG93bl0sXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtyaWdodF0sIFt1cCwgZG93bl0sIFtsZWZ0XSwgW3VwLCBkb3duXSxcbiAgICBbcmlnaHRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW2Rvd25dLCBbbGVmdCwgcmlnaHRdLCBbdXBdLCBbbGVmdCwgcmlnaHRdLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgbnVsbCwgW3JpZ2h0XSxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBudWxsLCBbdXBdLFxuICAgIFtyaWdodF0sIFtkb3duXSwgW3VwXSwgW2xlZnRdLFxuICAgIFtyaWdodF0sIFt1cF0sIFtsZWZ0XSwgW2Rvd25dLFxuICAgIFtsZWZ0XSwgW3VwXSwgW2Rvd25dLCBbcmlnaHRdLFxuICAgIFtsZWZ0XSwgW2Rvd25dLCBbcmlnaHRdLCBbdXBdLFxuICAgIFtyaWdodF0sIFt1cF0sIFtkb3duXSwgW2xlZnRdLFxuICAgIFtyaWdodF0sIFtsZWZ0XSwgW3VwXSwgW2Rvd25dLFxuICAgIFtsZWZ0XSwgW2Rvd25dLCBbdXBdLCBbcmlnaHRdLFxuICAgIFtsZWZ0XSwgW3JpZ2h0XSwgW2Rvd25dLCBbbGVmdCwgcmlnaHRdXG5cbl07XG5cbmxldCBkeCA9IDE7XG5sZXQgY3R4O1xubGV0IG5vdGVzID0gW107XG5sZXQgY29tYm8gPSAwO1xubGV0IHNwZWVkID0gMTsgLy8gbG93ZXIgaXMgZmFzdGVyXG5sZXQgeSA9IDYwMDsgLy8gdmVydGljYWwgb2Zmc2V0XG5sZXQgcnVuO1xuXG5sZXQgZHJhd05vdGUgPSAoYmVhdCkgPT4ge1xuICAgIGlmKGJlYXQpIHtcbiAgICAgICAgbGV0IG5vdGVYO1xuICAgICAgICAgICAgYmVhdC5mb3JFYWNoKG5vdGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnNyYy5pbmNsdWRlcygnbGVmdCcpKSBub3RlWCA9IDEwMDtcbiAgICAgICAgICAgICAgICBpZiAobm90ZS5zcmMuaW5jbHVkZXMoJ2Rvd24nKSkgbm90ZVggPSAyMDA7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUuc3JjLmluY2x1ZGVzKCd1cCcpKSBub3RlWCA9IDMwMDtcbiAgICAgICAgICAgICAgICBpZiAobm90ZS5zcmMuaW5jbHVkZXMoJ3JpZ2h0JykpIG5vdGVYID0gNDAwO1xuICAgICAgICAgICAgICAgIG5vdGVzLnB1c2goeyBpbWc6IG5vdGUsIFxuICAgICAgICAgICAgICAgICAgICB4OiBub3RlWCwgXG4gICAgICAgICAgICAgICAgICAgIHksIFxuICAgICAgICAgICAgICAgICAgICBzY29yZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheWVkOiAwXG4gICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjbGVhckludGVydmFsKHJ1bik7XG4gICAgcnVuID0gc2V0SW50ZXJ2YWwoKCkgPT4gZHJhdyhub3RlcyksIHNwZWVkKTtcbn1cblxuZnVuY3Rpb24gZHJhdyhub3Rlcykge1xuICAgIGN0eC5mb250ID0gXCIzMHB4IEhlbHZldGljYVwiO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgNjAwLCA2MDApOyAvLyBjbGVhciB0aGUgY2FudmFzXG4gICAgaWYgKHJpZ2h0UHJlc3NlZCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHJpZ2h0X2Fycm93X2FjdGl2ZSwgNDAwLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHJpZ2h0X2Fycm93LCA0MDAsIDApO1xuICAgIH1cbiAgICBpZiAodXBQcmVzc2VkKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodXBfYXJyb3dfYWN0aXZlLCAzMDAsIDApO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh1cF9hcnJvdywgMzAwLCAwKTtcbiAgICB9XG4gICAgaWYgKGRvd25QcmVzc2VkKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZG93bl9hcnJvd19hY3RpdmUsIDIwMCwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShkb3duX2Fycm93LCAyMDAsIDApO1xuICAgIH1cbiAgICBpZiAobGVmdFByZXNzZWQpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShsZWZ0X2Fycm93X2FjdGl2ZSwgMTAwLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGxlZnRfYXJyb3csIDEwMCwgMCk7XG4gICAgfVxuXG4gICAgaWYobm90ZXMubGVuZ3RoKSB7XG4gICAgICAgIG5vdGVzLmZvckVhY2gobm90ZSA9PiB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKG5vdGUuaW1nLCBub3RlLngsIG5vdGUueSk7XG5cbiAgICAgICAgICAgIGlmKG5vdGUueCA9PT0gMTAwICYmICFub3RlLnNjb3JlICYmIGxlZnRQcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgaWYobm90ZS55IDw9IDMwICYmIG5vdGUueSA+PSAyNSkgbm90ZS5zY29yZSA9ICdCYWQnO1xuICAgICAgICAgICAgICAgIGlmKG5vdGUueSA8PSAyNSAmJiBub3RlLnkgPj0gMjApIG5vdGUuc2NvcmUgPSAnT0snO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMjAgJiYgbm90ZS55ID49IDEwKSBub3RlLnNjb3JlID0gJ0dvb2QnO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMTApIG5vdGUuc2NvcmUgPSAnUGVyZmVjdCEnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm90ZS54ID09PSAyMDAgJiYgIW5vdGUuc2NvcmUgJiYgZG93blByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDMwICYmIG5vdGUueSA+PSAyNSkgbm90ZS5zY29yZSA9ICdCYWQnO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMjUgJiYgbm90ZS55ID49IDIwKSBub3RlLnNjb3JlID0gJ09LJztcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDIwICYmIG5vdGUueSA+PSAxMCkgbm90ZS5zY29yZSA9ICdHb29kJztcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDEwKSBub3RlLnNjb3JlID0gJ1BlcmZlY3QhJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vdGUueCA9PT0gMzAwICYmICFub3RlLnNjb3JlICYmIHVwUHJlc3NlZCkge1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMzAgJiYgbm90ZS55ID49IDI1KSBub3RlLnNjb3JlID0gJ0JhZCc7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAyNSAmJiBub3RlLnkgPj0gMjApIG5vdGUuc2NvcmUgPSAnT0snO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMjAgJiYgbm90ZS55ID49IDEwKSBub3RlLnNjb3JlID0gJ0dvb2QnO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMTApIG5vdGUuc2NvcmUgPSAnUGVyZmVjdCEnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm90ZS54ID09PSA0MDAgJiYgIW5vdGUuc2NvcmUgJiYgcmlnaHRQcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAzMCAmJiBub3RlLnkgPj0gMjUpIG5vdGUuc2NvcmUgPSAnQmFkJztcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDI1ICYmIG5vdGUueSA+PSAyMCkgbm90ZS5zY29yZSA9ICdPSyc7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAyMCAmJiBub3RlLnkgPj0gMTApIG5vdGUuc2NvcmUgPSAnR29vZCc7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAxMCkgbm90ZS5zY29yZSA9ICdQZXJmZWN0ISc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub3RlLnkgPCAwICYmICFub3RlLnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgbm90ZS5zY29yZSA9ICdNaXNzJztcbiAgICAgICAgICAgICAgICBjb21ibyA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub3RlLnNjb3JlICYmICFub3RlLmRpc3BsYXllZCkge1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnNjb3JlID09ICdHb29kJyB8fCBub3RlLnNjb3JlID09ICdQZXJmZWN0IScpIGNvbWJvKys7XG4gICAgICAgICAgICAgICAgZWxzZSBjb21ibyA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERpc3BsYXkgc2NvcmUgZm9yIDcwIGZyYW1lc1xuICAgICAgICAgICAgaWYgKG5vdGUuc2NvcmUgJiYgbm90ZS5kaXNwbGF5ZWQgPD0gNzApIHtcbiAgICAgICAgICAgICAgICBsZXQgY29sb3I7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChub3RlLnNjb3JlKSB7XG5cdFx0XHRcdFx0Y2FzZSAnTWlzcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9ICcjRkE4ODdCJztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ0JhZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9ICcjQ0NBQkRBJztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ09LJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0gJyNGRkREOTQnO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnR29vZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9ICcjRDBFNkE1Jztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ1BlcmZlY3QhJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0gJyM4NUUzQ0UnO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KG5vdGUuc2NvcmUsIDI1MCwgMTUwKTtcbiAgICAgICAgICAgICAgICBub3RlLmRpc3BsYXllZCsrO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzAwMCc7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm90ZS55IC09IGR4O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNvbWJvID49IDIpIHtcbiAgICAgICAgbGV0IGNvbWJvVGV4dCA9IGAke2NvbWJvfSBjb21ib2A7XG4gICAgICAgIGN0eC5maWxsVGV4dChjb21ib1RleHQsIDIzNSwgMjAwKTtcbiAgICB9XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51Q29udGFpbmVyJylbMF07XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhbnZhc0NvbnRhaW5lcicpWzBdO1xuICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKFwiLi9zb25ncy9wcHAubXAzXCIpO1xuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICBsZXQgYnBtID0gMzc1O1xuICAgIGRyYXdOb3RlKFtdKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc29uZy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgYmVhdCA9IHNvbmdbaV07XG4gICAgICAgIGlmIChiZWF0KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRyYXdOb3RlKGJlYXQpLCBpICogYnBtKTtcbiAgICAgICAgfSBcbiAgICB9XG59KTtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG5sZXQgaWQ7XG5cbmZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICAgIGlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKVxufVxuXG5pZihib2R5KSB7XG4gICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpXG4gICAgfSlcbn1cblxubGV0IHJpZ2h0X2Fycm93ID0gbmV3IEltYWdlKCk7XG5sZXQgbGVmdF9hcnJvdyA9IG5ldyBJbWFnZSgpO1xubGV0IHVwX2Fycm93ID0gbmV3IEltYWdlKCk7XG5sZXQgZG93bl9hcnJvdyA9IG5ldyBJbWFnZSgpO1xuXG5yaWdodF9hcnJvdy5zcmMgPSBcIi4vc3ByaXRlcy9hcnJvd19yaWdodC5wbmdcIjtcbmxlZnRfYXJyb3cuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfbGVmdC5wbmdcIjtcbnVwX2Fycm93LnNyYyA9IFwiLi9zcHJpdGVzL2Fycm93X3VwLnBuZ1wiO1xuZG93bl9hcnJvdy5zcmMgPSBcIi4vc3ByaXRlcy9hcnJvd19kb3duLnBuZ1wiO1xuXG5sZXQgcmlnaHRfYXJyb3dfYWN0aXZlID0gbmV3IEltYWdlKCk7XG5sZXQgbGVmdF9hcnJvd19hY3RpdmUgPSBuZXcgSW1hZ2UoKTtcbmxldCB1cF9hcnJvd19hY3RpdmUgPSBuZXcgSW1hZ2UoKTtcbmxldCBkb3duX2Fycm93X2FjdGl2ZSA9IG5ldyBJbWFnZSgpO1xuXG5yaWdodF9hcnJvd19hY3RpdmUuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfcmlnaHRfYWN0aXZlLnBuZ1wiO1xubGVmdF9hcnJvd19hY3RpdmUuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfbGVmdF9hY3RpdmUucG5nXCI7XG51cF9hcnJvd19hY3RpdmUuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfdXBfYWN0aXZlLnBuZ1wiO1xuZG93bl9hcnJvd19hY3RpdmUuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfZG93bl9hY3RpdmUucG5nXCI7XG5cbmxldCB1cFByZXNzZWQgPSBmYWxzZTtcbmxldCBkb3duUHJlc3NlZCA9IGZhbHNlO1xubGV0IHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xubGV0IGxlZnRQcmVzc2VkID0gZmFsc2U7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5VXBIYW5kbGVyLCBmYWxzZSk7XG5cbmZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGUpIHtcbiAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICB1cFByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBrZXlVcEhhbmRsZXIoZSksIDEwMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgZG93blByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBrZXlVcEhhbmRsZXIoZSksIDEwMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgIHJpZ2h0UHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGtleVVwSGFuZGxlcihlKSwgMTAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICBsZWZ0UHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGtleVVwSGFuZGxlcihlKSwgMTAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZnVuY3Rpb24ga2V5VXBIYW5kbGVyKGUpIHtcbiAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICB1cFByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICBkb3duUHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICByaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSIsImxldCBzb25nc0xpc3QgPSBbJ2MtMScsICdjLTInLCAnYy0zJywgJ2MtNCcsICdjLTUnXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNvbmdzRG93bkhhbmRsZXIoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICBsZXQgZm91bmRBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb25nc0xpc3QubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgbGV0IGN1cnIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNvbmdzTGlzdFtpXSlbMF07XG4gICAgICAgICAgICBsZXQgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc29uZ3NMaXN0W2kgKyAxXSlbMF07XG5cbiAgICAgICAgICAgIGxldCBjdXJyUG9zID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY3VyciwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShcInRyYW5zZm9ybVwiKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBjdXJyUG9zLnNwbGl0KCcoJylbMV0sXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLnNwbGl0KCcpJylbMF0sXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBsZXQgY3VyclggPSBwYXJzZUludCh2YWx1ZXNbNF0uc2xpY2UoMSkpO1xuICAgICAgICAgICAgbGV0IGN1cnJZID0gcGFyc2VJbnQodmFsdWVzWzVdKTtcbiAgICAgICAgICAgIGlmIChpID09PSAwKSBjdXJyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHs2MH1weCwgJHstMTYwfXB4KWA7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3UG9zO1xuICAgICAgICAgICAgICAgIG5ld1BvcyA9IChmb3VuZEFjdGl2ZSkgPyBgdHJhbnNsYXRlKCR7Y3VyclggLSAzMH1weCwgJHtjdXJyWSArIDgwfXB4KWAgOiBgdHJhbnNsYXRlKCR7Y3VyclggKyAzMH1weCwgJHtjdXJyWSArIDgwfXB4KWBcbiAgICAgICAgICAgICAgICBjdXJyLnN0eWxlLnRyYW5zZm9ybSA9IG5ld1BvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgJiYgIWZvdW5kQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZm91bmRBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGN1cnIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgbmV4dC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHNvbmdzTGlzdC5wdXNoKHNvbmdzTGlzdC5zaGlmdCgpKTtcbiAgICB9XG5cblxuICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgbGV0IGZvdW5kQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29uZ3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGxldCBjdXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzb25nc0xpc3RbaV0pWzBdO1xuICAgICAgICAgICAgbGV0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNvbmdzTGlzdFtpIC0gMV0pWzBdO1xuXG4gICAgICAgICAgICBsZXQgY3VyclBvcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGN1cnIsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoXCJ0cmFuc2Zvcm1cIik7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gY3VyclBvcy5zcGxpdCgnKCcpWzFdLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zcGxpdCgnKScpWzBdLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgbGV0IGN1cnJYID0gcGFyc2VJbnQodmFsdWVzWzRdLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIGxldCBjdXJyWSA9IHBhcnNlSW50KHZhbHVlc1s1XSk7XG4gICAgICAgICAgICBpZiAoY3Vyci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICYmICFmb3VuZEFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGZvdW5kQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjdXJyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIG5leHQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpID09PSA0KSBjdXJyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHs2MH1weCwgJHsxNjB9cHgpYDtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBuZXdQb3M7XG4gICAgICAgICAgICAgICAgbmV3UG9zID0gZm91bmRBY3RpdmUgPyBgdHJhbnNsYXRlKCR7Y3VyclggKyAzMH1weCwgJHtjdXJyWSAtIDgwfXB4KWAgOiBgdHJhbnNsYXRlKCR7Y3VyclggLSAzMH1weCwgJHtjdXJyWSAtIDgwfXB4KWA7XG4gICAgICAgICAgICAgICAgY3Vyci5zdHlsZS50cmFuc2Zvcm0gPSBuZXdQb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc29uZ3NMaXN0LnVuc2hpZnQoc29uZ3NMaXN0LnBvcCgpKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9