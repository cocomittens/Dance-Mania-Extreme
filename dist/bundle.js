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

var right = new Image();
var left = new Image();
var up = new Image();
var down = new Image();
right.src = './sprites/arrow_right_note.png';
left.src = './sprites/arrow_left_note.png';
up.src = './sprites/arrow_up_note.png';
down.src = './sprites/arrow_down_note.png';
var body = document.getElementsByTagName('body')[0];
var id;
var song = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, [left], null, [right], null, [down], null, [up], null, [right], null, [left], null, [up], null, [down], null, [left], null, [up], null, [down], null, [right], null, [left], null, [down], null, [right], null, [up], null, [right], null, [down], null, [up], null, [left], null, [right], null, [up], null, [left], null, [down], null, [left], null, [down], null, [up], null, [right], null, [up], null, [down], null, [left], null, null, [right], [down], null, [up], null, [right], null, [left], null, [right], null, [up], null, [down], null, null, [up], [right], null, [up], null, [down], null, [left], null, [down], null, [up], null, [right], null, null, [left], [up], null, [right], null, [left], null, [down], null, [left], null, [right], null, [up], null, null, [down], [left, right], null, [left], [right], [up], [down], [up], [down], [right], null, [left], null, [right], [left], [down], [up], [left, right], null, [right], [down], [left], [up], [left], [up], [down], null, [right], null, [down], [right], [up], [left], [up], null, [down], null, [left], [up, down], [right], [up, down], [down], null, [up], null, [right], [up, down], [left], [up, down], [right], null, [left], null, [down], [left, right], [up], [left, right], [left], null, [right], null, [left, right], null, null, null, [left], null, [right], null, [down], null, [up], null, [down], null, [right], null, [left], null, null, [right], [down], null, [up], null, [right], null, [left], null, [right], null, [up], null, [down], null, null, [up], [right], [down], [up], [left], [right], [up], [left], [down], [left], [up], [down], [right], [left], [down], [right], [up], [right], [up], [down], [left], [right], [left], [up], [down], [left], [down], [up], [right], [left], [right], [down], [left, right]];
var song2 = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, [up], null, null, null, [down], null, null, null, [up], null, null, null, [down], null, null, null, [right], null, [right], null, [down], null, [down], null, [right], null, [right], null, [left], null, [left], null, [right], [right], [right], null, [left], [left], [left], null, [right], null, [left], null, [left, right], null, null, null, [up], null, [down], null, [up], null, [down], null, [up], null, [down], null, [up], [up], [down], [down], [up], [down], [up], null, [down], null, [down], null];
document.getElementById('songBtn').addEventListener('click', function (event) {
  var menu = document.getElementsByClassName('menuContainer')[0];
  var songs = document.getElementsByClassName('songsContainer')[0];
  menu.style.display = 'none';
  songs.style.display = 'block';
  document.getElementById('stylesheet').href = './css/songs.css';
  document.addEventListener('keydown', _songs_js__WEBPACK_IMPORTED_MODULE_0__["songsDownHandler"], false);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      document.getElementById('stylesheet').href = './css/styles.css';
      var active = document.getElementsByClassName('active')[0].classList.contains('c-3');
      var _menu = document.getElementsByClassName('songsContainer')[0];
      var canvas = document.getElementsByClassName('canvasContainer')[0];
      var audio;
      _menu.style.display = 'none';

      if (active) {
        audio = new Audio('./songs/ppp.mp3');
        body.style.backgroundImage = "url('./backgrounds/ppp_bg.png')";
      } else {
        audio = new Audio('./songs/www.ogg');
        body.style.backgroundImage = "url('./backgrounds/abstract.mp4')";
      }

      canvas.style.display = 'block';
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
        ctx.fillStyle = '#fff';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zb25ncy5qcyJdLCJuYW1lcyI6WyJyaWdodCIsIkltYWdlIiwibGVmdCIsInVwIiwiZG93biIsInNyYyIsImJvZHkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaWQiLCJzb25nIiwic29uZzIiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIm1lbnUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic29uZ3MiLCJzdHlsZSIsImRpc3BsYXkiLCJocmVmIiwic29uZ3NEb3duSGFuZGxlciIsImUiLCJrZXkiLCJhY3RpdmUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNhbnZhcyIsImF1ZGlvIiwiQXVkaW8iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwbGF5IiwiYnBtIiwiZHJhd05vdGUiLCJpIiwiYmVhdCIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJkeCIsImN0eCIsIm5vdGVzIiwiY29tYm8iLCJzcGVlZCIsInkiLCJydW4iLCJub3RlWCIsImZvckVhY2giLCJub3RlIiwiaW5jbHVkZXMiLCJwdXNoIiwiaW1nIiwieCIsInNjb3JlIiwiZGlzcGxheWVkIiwiZ2V0Q29udGV4dCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImRyYXciLCJmb250IiwiY2xlYXJSZWN0IiwicmlnaHRQcmVzc2VkIiwiZHJhd0ltYWdlIiwicmlnaHRfYXJyb3dfYWN0aXZlIiwicmlnaHRfYXJyb3ciLCJ1cFByZXNzZWQiLCJ1cF9hcnJvd19hY3RpdmUiLCJ1cF9hcnJvdyIsImRvd25QcmVzc2VkIiwiZG93bl9hcnJvd19hY3RpdmUiLCJkb3duX2Fycm93IiwibGVmdFByZXNzZWQiLCJsZWZ0X2Fycm93X2FjdGl2ZSIsImxlZnRfYXJyb3ciLCJjb2xvciIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwiY29tYm9UZXh0IiwiZ2FtZUxvb3AiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImtleURvd25IYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwic29uZ3NMaXN0IiwiZm91bmRBY3RpdmUiLCJjdXJyIiwibmV4dCIsImN1cnJQb3MiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInZhbHVlcyIsInNwbGl0IiwiY3VyclgiLCJwYXJzZUludCIsInNsaWNlIiwiY3VyclkiLCJ0cmFuc2Zvcm0iLCJuZXdQb3MiLCJyZW1vdmUiLCJhZGQiLCJzaGlmdCIsInVuc2hpZnQiLCJwb3AiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBRUEsSUFBSUEsS0FBSyxHQUFHLElBQUlDLEtBQUosRUFBWjtBQUNBLElBQUlDLElBQUksR0FBRyxJQUFJ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QUFzQixRQUF0Qjs7QUFDQWIsYUFBSSxDQUFDNUQsU0FBTCxDQUFlMEUsR0FBZixDQUFtQixRQUFuQjtBQUNIOztBQUVELFVBQUlqRSxFQUFDLEtBQUssQ0FBVixFQUFha0QsS0FBSSxDQUFDbEUsS0FBTCxDQUFXOEUsU0FBWCx1QkFBb0MsRUFBcEMsVUFBNkMsR0FBN0MsU0FBYixLQUNLO0FBQ0QsWUFBSUMsT0FBTSxTQUFWOztBQUNBQSxlQUFNLEdBQUdkLFlBQVcsdUJBQWdCUyxNQUFLLEdBQUcsRUFBeEIsaUJBQWlDRyxNQUFLLEdBQUcsRUFBekMsK0JBQWdFSCxNQUFLLEdBQUcsRUFBeEUsaUJBQWlGRyxNQUFLLEdBQUcsRUFBekYsUUFBcEI7QUFDQVgsYUFBSSxDQUFDbEUsS0FBTCxDQUFXOEUsU0FBWCxHQUF1QkMsT0FBdkI7QUFDSDtBQUNKOztBQUNEZixhQUFTLENBQUNtQixPQUFWLENBQWtCbkIsU0FBUyxDQUFDb0IsR0FBVixFQUFsQjtBQUNIO0FBRUosQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IHNvbmdzRG93bkhhbmRsZXJ9IGZyb20gJy4vc29uZ3MuanMnO1xuXG5sZXQgcmlnaHQgPSBuZXcgSW1hZ2UoKTtcbmxldCBsZWZ0ID0gbmV3IEltYWdlKCk7XG5sZXQgdXAgPSBuZXcgSW1hZ2UoKTtcbmxldCBkb3duID0gbmV3IEltYWdlKCk7XG5cbnJpZ2h0LnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfcmlnaHRfbm90ZS5wbmcnO1xubGVmdC5zcmMgPSAnLi9zcHJpdGVzL2Fycm93X2xlZnRfbm90ZS5wbmcnO1xudXAuc3JjID0gJy4vc3ByaXRlcy9hcnJvd191cF9ub3RlLnBuZyc7XG5kb3duLnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfZG93bl9ub3RlLnBuZyc7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbmxldCBpZDtcblxuXG5sZXQgc29uZyA9IFtcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIG51bGwsIG51bGwsIG51bGwsIG51bGwsXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgbnVsbCwgW3JpZ2h0XSxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBudWxsLCBbdXBdLFxuICAgIFtyaWdodF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIG51bGwsIFtsZWZ0XSxcbiAgICBbdXBdLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBudWxsLCBbZG93bl0sXG4gICAgW2xlZnQsIHJpZ2h0XSwgbnVsbCwgW2xlZnRdLCBbcmlnaHRdLFxuICAgIFt1cF0sIFtkb3duXSwgW3VwXSwgW2Rvd25dLFxuICAgIFtyaWdodF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbcmlnaHRdLCBbbGVmdF0sIFtkb3duXSwgW3VwXSxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBbcmlnaHRdLCBbZG93bl0sXG4gICAgW2xlZnRdLCBbdXBdLCBbbGVmdF0sIFt1cF0sXG4gICAgW2Rvd25dLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtkb3duXSwgW3JpZ2h0XSwgW3VwXSwgW2xlZnRdLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbbGVmdF0sIFt1cCwgZG93bl0sIFtyaWdodF0sIFt1cCwgZG93bl0sXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtyaWdodF0sIFt1cCwgZG93bl0sIFtsZWZ0XSwgW3VwLCBkb3duXSxcbiAgICBbcmlnaHRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW2Rvd25dLCBbbGVmdCwgcmlnaHRdLCBbdXBdLCBbbGVmdCwgcmlnaHRdLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgbnVsbCwgW3JpZ2h0XSxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBudWxsLCBbdXBdLFxuICAgIFtyaWdodF0sIFtkb3duXSwgW3VwXSwgW2xlZnRdLFxuICAgIFtyaWdodF0sIFt1cF0sIFtsZWZ0XSwgW2Rvd25dLFxuICAgIFtsZWZ0XSwgW3VwXSwgW2Rvd25dLCBbcmlnaHRdLFxuICAgIFtsZWZ0XSwgW2Rvd25dLCBbcmlnaHRdLCBbdXBdLFxuICAgIFtyaWdodF0sIFt1cF0sIFtkb3duXSwgW2xlZnRdLFxuICAgIFtyaWdodF0sIFtsZWZ0XSwgW3VwXSwgW2Rvd25dLFxuICAgIFtsZWZ0XSwgW2Rvd25dLCBbdXBdLCBbcmlnaHRdLFxuICAgIFtsZWZ0XSwgW3JpZ2h0XSwgW2Rvd25dLCBbbGVmdCwgcmlnaHRdXG5dO1xuXG5sZXQgc29uZzIgPSBbXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIG51bGwsIG51bGwsIG51bGwsIG51bGwsXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgW3JpZ2h0XSwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdF0sIFtsZWZ0XSwgW2xlZnRdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFt1cF0sIFt1cF0sIFtkb3duXSwgW2Rvd25dLFxuICAgIFt1cF0sIFtkb3duXSwgW3VwXSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFtkb3duXSwgbnVsbFxuXTtcblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29uZ0J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0bGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51Q29udGFpbmVyJylbMF07XG4gICAgbGV0IHNvbmdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc29uZ3NDb250YWluZXInKVswXTtcblx0bWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRzb25ncy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0eWxlc2hlZXQnKS5ocmVmID0gJy4vY3NzL3NvbmdzLmNzcyc7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzb25nc0Rvd25IYW5kbGVyLCBmYWxzZSk7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3R5bGVzaGVldCcpLmhyZWYgPSAnLi9jc3Mvc3R5bGVzLmNzcyc7XG4gICAgICAgICAgICBsZXQgYWN0aXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJylbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjLTMnKTtcblx0XHRcdGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc29uZ3NDb250YWluZXInKVswXTtcblx0XHRcdGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYW52YXNDb250YWluZXInKVswXTtcbiAgICAgICAgICAgIGxldCBhdWRpbztcblx0XHRcdG1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBhdWRpbyA9IG5ldyBBdWRpbygnLi9zb25ncy9wcHAubXAzJyk7XG4gICAgICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi9iYWNrZ3JvdW5kcy9wcHBfYmcucG5nJylcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXVkaW8gPSBuZXcgQXVkaW8oJy4vc29uZ3Mvd3d3Lm9nZycpO1xuICAgICAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnLi9iYWNrZ3JvdW5kcy9hYnN0cmFjdC5tcDQnKWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cblx0XHRcdGF1ZGlvLnBsYXkoKTtcblx0XHRcdGxldCBicG0gPSAzNzU7XG5cdFx0XHRkcmF3Tm90ZShbXSk7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNvbmcubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IGJlYXQgPSBzb25nW2ldO1xuXHRcdFx0XHRpZiAoYmVhdCkge1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4gZHJhd05vdGUoYmVhdCksIGkgKiBicG0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG5cblxubGV0IGR4ID0gMTtcbmxldCBjdHg7XG5sZXQgbm90ZXMgPSBbXTtcbmxldCBjb21ibyA9IDA7XG5sZXQgc3BlZWQgPSAxOyAvLyBsb3dlciBpcyBmYXN0ZXJcbmxldCB5ID0gNjAwOyAvLyB2ZXJ0aWNhbCBvZmZzZXRcbmxldCBydW47XG5cbmxldCBkcmF3Tm90ZSA9IChiZWF0KSA9PiB7XG4gICAgaWYoYmVhdCkge1xuICAgICAgICBsZXQgbm90ZVg7XG4gICAgICAgICAgICBiZWF0LmZvckVhY2gobm90ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUuc3JjLmluY2x1ZGVzKCdsZWZ0JykpIG5vdGVYID0gMTAwO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnNyYy5pbmNsdWRlcygnZG93bicpKSBub3RlWCA9IDIwMDtcbiAgICAgICAgICAgICAgICBpZiAobm90ZS5zcmMuaW5jbHVkZXMoJ3VwJykpIG5vdGVYID0gMzAwO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnNyYy5pbmNsdWRlcygncmlnaHQnKSkgbm90ZVggPSA0MDA7XG4gICAgICAgICAgICAgICAgbm90ZXMucHVzaCh7IGltZzogbm90ZSwgXG4gICAgICAgICAgICAgICAgICAgIHg6IG5vdGVYLCBcbiAgICAgICAgICAgICAgICAgICAgeSwgXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ZWQ6IDBcbiAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNsZWFySW50ZXJ2YWwocnVuKTtcbiAgICBydW4gPSBzZXRJbnRlcnZhbCgoKSA9PiBkcmF3KG5vdGVzKSwgc3BlZWQpO1xufVxuXG5mdW5jdGlvbiBkcmF3KG5vdGVzKSB7XG4gICAgY3R4LmZvbnQgPSBcIjMwcHggSGVsdmV0aWNhXCI7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCA2MDAsIDYwMCk7IC8vIGNsZWFyIHRoZSBjYW52YXNcbiAgICBpZiAocmlnaHRQcmVzc2VkKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UocmlnaHRfYXJyb3dfYWN0aXZlLCA0MDAsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UocmlnaHRfYXJyb3csIDQwMCwgMCk7XG4gICAgfVxuICAgIGlmICh1cFByZXNzZWQpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh1cF9hcnJvd19hY3RpdmUsIDMwMCwgMCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHVwX2Fycm93LCAzMDAsIDApO1xuICAgIH1cbiAgICBpZiAoZG93blByZXNzZWQpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShkb3duX2Fycm93X2FjdGl2ZSwgMjAwLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGRvd25fYXJyb3csIDIwMCwgMCk7XG4gICAgfVxuICAgIGlmIChsZWZ0UHJlc3NlZCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGxlZnRfYXJyb3dfYWN0aXZlLCAxMDAsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UobGVmdF9hcnJvdywgMTAwLCAwKTtcbiAgICB9XG5cbiAgICBpZihub3Rlcy5sZW5ndGgpIHtcbiAgICAgICAgbm90ZXMuZm9yRWFjaChub3RlID0+IHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2Uobm90ZS5pbWcsIG5vdGUueCwgbm90ZS55KTtcblxuICAgICAgICAgICAgaWYobm90ZS54ID09PSAxMDAgJiYgIW5vdGUuc2NvcmUgJiYgbGVmdFByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICBpZihub3RlLnkgPD0gMzAgJiYgbm90ZS55ID49IDI1KSBub3RlLnNjb3JlID0gJ0JhZCc7XG4gICAgICAgICAgICAgICAgaWYobm90ZS55IDw9IDI1ICYmIG5vdGUueSA+PSAyMCkgbm90ZS5zY29yZSA9ICdPSyc7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAyMCAmJiBub3RlLnkgPj0gMTApIG5vdGUuc2NvcmUgPSAnR29vZCc7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAxMCkgbm90ZS5zY29yZSA9ICdQZXJmZWN0ISc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub3RlLnggPT09IDIwMCAmJiAhbm90ZS5zY29yZSAmJiBkb3duUHJlc3NlZCkge1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMzAgJiYgbm90ZS55ID49IDI1KSBub3RlLnNjb3JlID0gJ0JhZCc7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAyNSAmJiBub3RlLnkgPj0gMjApIG5vdGUuc2NvcmUgPSAnT0snO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMjAgJiYgbm90ZS55ID49IDEwKSBub3RlLnNjb3JlID0gJ0dvb2QnO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMTApIG5vdGUuc2NvcmUgPSAnUGVyZmVjdCEnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm90ZS54ID09PSAzMDAgJiYgIW5vdGUuc2NvcmUgJiYgdXBQcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAzMCAmJiBub3RlLnkgPj0gMjUpIG5vdGUuc2NvcmUgPSAnQmFkJztcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDI1ICYmIG5vdGUueSA+PSAyMCkgbm90ZS5zY29yZSA9ICdPSyc7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAyMCAmJiBub3RlLnkgPj0gMTApIG5vdGUuc2NvcmUgPSAnR29vZCc7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAxMCkgbm90ZS5zY29yZSA9ICdQZXJmZWN0ISc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub3RlLnggPT09IDQwMCAmJiAhbm90ZS5zY29yZSAmJiByaWdodFByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDMwICYmIG5vdGUueSA+PSAyNSkgbm90ZS5zY29yZSA9ICdCYWQnO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMjUgJiYgbm90ZS55ID49IDIwKSBub3RlLnNjb3JlID0gJ09LJztcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDIwICYmIG5vdGUueSA+PSAxMCkgbm90ZS5zY29yZSA9ICdHb29kJztcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDEwKSBub3RlLnNjb3JlID0gJ1BlcmZlY3QhJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vdGUueSA8IDAgJiYgIW5vdGUuc2NvcmUpIHtcbiAgICAgICAgICAgICAgICBub3RlLnNjb3JlID0gJ01pc3MnO1xuICAgICAgICAgICAgICAgIGNvbWJvID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vdGUuc2NvcmUgJiYgIW5vdGUuZGlzcGxheWVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUuc2NvcmUgPT0gJ0dvb2QnIHx8IG5vdGUuc2NvcmUgPT0gJ1BlcmZlY3QhJykgY29tYm8rKztcbiAgICAgICAgICAgICAgICBlbHNlIGNvbWJvID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRGlzcGxheSBzY29yZSBmb3IgNzAgZnJhbWVzXG4gICAgICAgICAgICBpZiAobm90ZS5zY29yZSAmJiBub3RlLmRpc3BsYXllZCA8PSA3MCkge1xuICAgICAgICAgICAgICAgIGxldCBjb2xvcjtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5vdGUuc2NvcmUpIHtcblx0XHRcdFx0XHRjYXNlICdNaXNzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0gJyNGQTg4N0InO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnQmFkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0gJyNDQ0FCREEnO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnT0snOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPSAnI0ZGREQ5NCc7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdHb29kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0gJyNEMEU2QTUnO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnUGVyZmVjdCEnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPSAnIzg1RTNDRSc7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQobm90ZS5zY29yZSwgMjUwLCAxNTApO1xuICAgICAgICAgICAgICAgIG5vdGUuZGlzcGxheWVkKys7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmJztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub3RlLnkgLT0gZHg7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY29tYm8gPj0gMikge1xuICAgICAgICBsZXQgY29tYm9UZXh0ID0gYCR7Y29tYm99IGNvbWJvYDtcbiAgICAgICAgY3R4LmZpbGxUZXh0KGNvbWJvVGV4dCwgMjM1LCAyMDApO1xuICAgIH1cbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0QnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnVDb250YWluZXInKVswXTtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FudmFzQ29udGFpbmVyJylbMF07XG5cbiAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhcIi4vc29uZ3MvcHBwLm1wM1wiKTtcbiAgICBhdWRpby5wbGF5KCk7XG4gICAgbGV0IGJwbSA9IDM3NTtcbiAgICBkcmF3Tm90ZShbXSk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHNvbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGJlYXQgPSBzb25nW2ldO1xuICAgICAgICBpZiAoYmVhdCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkcmF3Tm90ZShiZWF0KSwgaSAqIGJwbSk7XG4gICAgICAgIH0gXG4gICAgfVxufSk7XG5cblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gICAgaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApXG59XG5cbmlmKGJvZHkpIHtcbiAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShpZClcbiAgICB9KVxufVxuXG5sZXQgcmlnaHRfYXJyb3cgPSBuZXcgSW1hZ2UoKTtcbmxldCBsZWZ0X2Fycm93ID0gbmV3IEltYWdlKCk7XG5sZXQgdXBfYXJyb3cgPSBuZXcgSW1hZ2UoKTtcbmxldCBkb3duX2Fycm93ID0gbmV3IEltYWdlKCk7XG5cbnJpZ2h0X2Fycm93LnNyYyA9IFwiLi9zcHJpdGVzL2Fycm93X3JpZ2h0LnBuZ1wiO1xubGVmdF9hcnJvdy5zcmMgPSBcIi4vc3ByaXRlcy9hcnJvd19sZWZ0LnBuZ1wiO1xudXBfYXJyb3cuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfdXAucG5nXCI7XG5kb3duX2Fycm93LnNyYyA9IFwiLi9zcHJpdGVzL2Fycm93X2Rvd24ucG5nXCI7XG5cbmxldCByaWdodF9hcnJvd19hY3RpdmUgPSBuZXcgSW1hZ2UoKTtcbmxldCBsZWZ0X2Fycm93X2FjdGl2ZSA9IG5ldyBJbWFnZSgpO1xubGV0IHVwX2Fycm93X2FjdGl2ZSA9IG5ldyBJbWFnZSgpO1xubGV0IGRvd25fYXJyb3dfYWN0aXZlID0gbmV3IEltYWdlKCk7XG5cbnJpZ2h0X2Fycm93X2FjdGl2ZS5zcmMgPSBcIi4vc3ByaXRlcy9hcnJvd19yaWdodF9hY3RpdmUucG5nXCI7XG5sZWZ0X2Fycm93X2FjdGl2ZS5zcmMgPSBcIi4vc3ByaXRlcy9hcnJvd19sZWZ0X2FjdGl2ZS5wbmdcIjtcbnVwX2Fycm93X2FjdGl2ZS5zcmMgPSBcIi4vc3ByaXRlcy9hcnJvd191cF9hY3RpdmUucG5nXCI7XG5kb3duX2Fycm93X2FjdGl2ZS5zcmMgPSBcIi4vc3ByaXRlcy9hcnJvd19kb3duX2FjdGl2ZS5wbmdcIjtcblxubGV0IHVwUHJlc3NlZCA9IGZhbHNlO1xubGV0IGRvd25QcmVzc2VkID0gZmFsc2U7XG5sZXQgcmlnaHRQcmVzc2VkID0gZmFsc2U7XG5sZXQgbGVmdFByZXNzZWQgPSBmYWxzZTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkhhbmRsZXIsIGZhbHNlKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlVcEhhbmRsZXIsIGZhbHNlKTtcblxuZnVuY3Rpb24ga2V5RG93bkhhbmRsZXIoZSkge1xuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgIHVwUHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGtleVVwSGFuZGxlcihlKSwgMTAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICBkb3duUHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGtleVVwSGFuZGxlcihlKSwgMTAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgcmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ga2V5VXBIYW5kbGVyKGUpLCAxMDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgIGxlZnRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ga2V5VXBIYW5kbGVyKGUpLCAxMDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBrZXlVcEhhbmRsZXIoZSkge1xuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgIHVwUHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgIGRvd25QcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgIHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgIGxlZnRQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59IiwibGV0IHNvbmdzTGlzdCA9IFsnYy0xJywgJ2MtMicsICdjLTMnLCAnYy00JywgJ2MtNSddO1xuXG5leHBvcnQgZnVuY3Rpb24gc29uZ3NEb3duSGFuZGxlcihlKSB7XG4gICAgaWYgKGUua2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgIGxldCBmb3VuZEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvbmdzTGlzdC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBsZXQgY3VyciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc29uZ3NMaXN0W2ldKVswXTtcbiAgICAgICAgICAgIGxldCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzb25nc0xpc3RbaSArIDFdKVswXTtcblxuICAgICAgICAgICAgbGV0IGN1cnJQb3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjdXJyLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKFwidHJhbnNmb3JtXCIpO1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IGN1cnJQb3Muc3BsaXQoJygnKVsxXSxcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuc3BsaXQoJyknKVswXSxcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGxldCBjdXJyWCA9IHBhcnNlSW50KHZhbHVlc1s0XS5zbGljZSgxKSk7XG4gICAgICAgICAgICBsZXQgY3VyclkgPSBwYXJzZUludCh2YWx1ZXNbNV0pO1xuICAgICAgICAgICAgaWYgKGkgPT09IDApIGN1cnIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgkezYwfXB4LCAkey0xNjB9cHgpYDtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBuZXdQb3M7XG4gICAgICAgICAgICAgICAgbmV3UG9zID0gKGZvdW5kQWN0aXZlKSA/IGB0cmFuc2xhdGUoJHtjdXJyWCAtIDMwfXB4LCAke2N1cnJZICsgODB9cHgpYCA6IGB0cmFuc2xhdGUoJHtjdXJyWCArIDMwfXB4LCAke2N1cnJZICsgODB9cHgpYFxuICAgICAgICAgICAgICAgIGN1cnIuc3R5bGUudHJhbnNmb3JtID0gbmV3UG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN1cnIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSAmJiAhZm91bmRBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBmb3VuZEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY3Vyci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBuZXh0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgc29uZ3NMaXN0LnB1c2goc29uZ3NMaXN0LnNoaWZ0KCkpO1xuICAgIH1cblxuXG4gICAgaWYgKGUua2V5ID09PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICBsZXQgZm91bmRBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb25nc0xpc3QubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgbGV0IGN1cnIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNvbmdzTGlzdFtpXSlbMF07XG4gICAgICAgICAgICBsZXQgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc29uZ3NMaXN0W2kgLSAxXSlbMF07XG5cbiAgICAgICAgICAgIGxldCBjdXJyUG9zID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY3VyciwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShcInRyYW5zZm9ybVwiKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBjdXJyUG9zLnNwbGl0KCcoJylbMV0sXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLnNwbGl0KCcpJylbMF0sXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBsZXQgY3VyclggPSBwYXJzZUludCh2YWx1ZXNbNF0uc2xpY2UoMSkpO1xuICAgICAgICAgICAgbGV0IGN1cnJZID0gcGFyc2VJbnQodmFsdWVzWzVdKTtcbiAgICAgICAgICAgIGlmIChjdXJyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgJiYgIWZvdW5kQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZm91bmRBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGN1cnIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgbmV4dC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGkgPT09IDQpIGN1cnIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgkezYwfXB4LCAkezE2MH1weClgO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1BvcztcbiAgICAgICAgICAgICAgICBuZXdQb3MgPSBmb3VuZEFjdGl2ZSA/IGB0cmFuc2xhdGUoJHtjdXJyWCArIDMwfXB4LCAke2N1cnJZIC0gODB9cHgpYCA6IGB0cmFuc2xhdGUoJHtjdXJyWCAtIDMwfXB4LCAke2N1cnJZIC0gODB9cHgpYDtcbiAgICAgICAgICAgICAgICBjdXJyLnN0eWxlLnRyYW5zZm9ybSA9IG5ld1BvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzb25nc0xpc3QudW5zaGlmdChzb25nc0xpc3QucG9wKCkpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=