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
/*! exports provided: keyDownHandler, keyUpHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyDownHandler", function() { return keyDownHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyUpHandler", function() { return keyUpHandler; });
/* harmony import */ var _songs_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./songs_menu.js */ "./src/songs_menu.js");
/* harmony import */ var _songs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./songs.js */ "./src/songs.js");


var body = document.getElementsByTagName('body')[0];
var id;
var right_arrow = new Image();
var left_arrow = new Image();
var up_arrow = new Image();
var down_arrow = new Image();
right_arrow.src = './sprites/arrow_right.png';
left_arrow.src = './sprites/arrow_left.png';
up_arrow.src = './sprites/arrow_up.png';
down_arrow.src = './sprites/arrow_down.png';
var right_arrow_active = new Image();
var left_arrow_active = new Image();
var up_arrow_active = new Image();
var down_arrow_active = new Image();
right_arrow_active.src = './sprites/arrow_right_active.png';
left_arrow_active.src = './sprites/arrow_left_active.png';
up_arrow_active.src = './sprites/arrow_up_active.png';
down_arrow_active.src = './sprites/arrow_down_active.png';
document.getElementById('startBtn').addEventListener('click', function (event) {
  var menu = document.getElementsByClassName('menuContainer')[0];
  var canvas = document.getElementsByClassName('canvasContainer')[0];
  var song = Object(_songs_js__WEBPACK_IMPORTED_MODULE_1__["getSong"])(1);
  body.style.backgroundImage = "url('./backgrounds/ppp_bg.png')";
  menu.style.display = 'none';
  body.style.backgroundImage = "url('./backgrounds/ppp_bg.png')";
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
});
document.getElementById('songBtn').addEventListener('click', function (event) {
  var menu = document.getElementsByClassName('menuContainer')[0];
  var songs = document.getElementsByClassName('songsContainer')[0];
  menu.style.display = 'none';
  songs.style.display = 'block';
  var menuAudio = new Audio('./songs/bensound-popdance.mp3');
  menuAudio.play();
  document.getElementById('stylesheet').href = './css/songs.css';
  document.addEventListener('keydown', Object(_songs_menu_js__WEBPACK_IMPORTED_MODULE_0__["scrollMenu"])(_songs_menu_js__WEBPACK_IMPORTED_MODULE_0__["songsDownHandler"], 400), false);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      menuAudio.pause();
      document.getElementById('stylesheet').href = './css/styles.css';
      var active = document.getElementsByClassName('active')[0].classList.contains('c-3');
      var _menu = document.getElementsByClassName('songsContainer')[0];
      var canvas = document.getElementsByClassName('canvasContainer')[0];
      var audio;
      var bpm;
      var song;
      _menu.style.display = 'none';

      if (active) {
        audio = new Audio('./songs/ppp.mp3');
        body.style.backgroundImage = "url('./backgrounds/ppp_bg.png')";
        bpm = 375;
        song = Object(_songs_js__WEBPACK_IMPORTED_MODULE_1__["getSong"])(1);
      } else {
        audio = new Audio('./songs/www.ogg');
        body.style.backgroundImage = "url('./backgrounds/www_bg.png')";
        bpm = 400;
        song = Object(_songs_js__WEBPACK_IMPORTED_MODULE_1__["getSong"])(2);
      }

      canvas.style.display = 'block';
      audio.play();
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
  ctx.font = "bold 30px Helvetica";
  ctx.strokeStyle = '#000';
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
        var score = new Image();

        switch (note.score) {
          case 'Miss':
            score.src = './sprites/miss.png';
            break;

          case 'Bad':
            score.src = './sprites/bad.png';
            break;

          case 'OK':
            score.src = './sprites/ok.png';
            break;

          case 'Good':
            score.src = './sprites/great.png';
            break;

          case 'Perfect!':
            score.src = './sprites/perfect.png';
            break;
        }

        ctx.drawImage(score, 250, 150);
        note.displayed++;
      }

      note.y -= dx;
    });
  }

  if (combo >= 2) {
    var comboText = "".concat(combo, " combo");
    ctx.fillStyle = '#fff';
    ctx.fillText(comboText, 260, 225);
    ctx.strokeText(comboText, 260, 225);
  }
}

function gameLoop() {
  id = requestAnimationFrame(gameLoop);
}

if (body) {
  body.addEventListener('click', function () {
    cancelAnimationFrame(id);
  });
}

var upPressed = false;
var downPressed = false;
var rightPressed = false;
var leftPressed = false;
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
function keyDownHandler(e) {
  switch (e.key) {
    case 'w':
    case 'ArrowUp':
      upPressed = true;
      setTimeout(function () {
        return keyUpHandler(e);
      }, 100);
      break;

    case 's':
    case 'ArrowDown':
      downPressed = true;
      setTimeout(function () {
        return keyUpHandler(e);
      }, 100);
      break;

    case 'ArrowRight':
    case 'd':
      rightPressed = true;
      setTimeout(function () {
        return keyUpHandler(e);
      }, 100);
      break;

    case 'a':
    case 'ArrowLeft':
      leftPressed = true;
      setTimeout(function () {
        return keyUpHandler(e);
      }, 100);
      break;
  }
}
function keyUpHandler(e) {
  switch (e.key) {
    case 'w':
    case 'ArrowUp':
      upPressed = false;
      break;

    case 's':
    case 'ArrowDown':
      downPressed = false;
      break;

    case 'd':
    case 'ArrowRight':
      rightPressed = false;
      break;

    case 'a':
    case 'ArrowLeft':
      leftPressed = false;
      break;
  }
}

/***/ }),

/***/ "./src/songs.js":
/*!**********************!*\
  !*** ./src/songs.js ***!
  \**********************/
/*! exports provided: getSong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSong", function() { return getSong; });
var right = new Image();
var left = new Image();
var up = new Image();
var down = new Image();
right.src = './sprites/arrow_right_note.png';
left.src = './sprites/arrow_left_note.png';
up.src = './sprites/arrow_up_note.png';
down.src = './sprites/arrow_down_note.png';
var song1 = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, [left], null, [right], null, [down], null, [up], null, [right], null, [left], null, [up], null, [down], null, [left], null, [up], null, [down], null, [right], null, [left], null, [down], null, [right], null, [up], null, [right], null, [down], null, [up], null, [left], null, [right], null, [up], null, [left], null, [down], null, [left], null, [down], null, [up], null, [right], null, [up], null, [down], null, [left], null, null, [right], [down], null, [up], null, [right], null, [left], null, [right], null, [up], null, [down], null, null, [up], [right], null, [up], null, [down], null, [left], null, [down], null, [up], null, [right], null, null, [left], [up], null, [right], null, [left], null, [down], null, [left], null, [right], null, [up], null, null, [down], [left, right], null, [left], [right], [up], [down], [up], [down], [right], null, [left], null, [right], [left], [down], [up], [left, right], null, [right], [down], [left], [up], [left], [up], [down], null, [right], null, [down], [right], [up], [left], [up], null, [down], null, [left], [up, down], [right], [up, down], [down], null, [up], null, [right], [up, down], [left], [up, down], [right], null, [left], null, [down], [left, right], [up], [left, right], [left], null, [right], null, [left, right], null, null, null, [left], null, [right], null, [down], null, [up], null, [down], null, [right], null, [left], null, null, [right], [down], null, [up], null, [right], null, [left], null, [right], null, [up], null, [down], null, null, [up], [right], [down], [up], [left], [right], [up], [left], [down], [left], [up], [down], [right], [left], [down], [right], [up], [right], [up], [down], [left], [right], [left], [up], [down], [left], [down], [up], [right], [left], [right], [down], [left, right]];
var song2 = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, [up], null, null, null, [down], null, null, null, [up], null, null, null, [down], null, null, null, [right], null, [right], null, [down], null, [down], null, [right], null, [right], null, [left], null, [left], null, [right], [right], [right], null, [left], [left], [left], null, [right], null, [left], null, [left, right], null, null, null, [up], null, [down], null, [up], null, [down], null, [up], null, [down], null, [up], [up], [down], [down], [up], [down], [up], null, [down], null, [down], null, [right], null, null, null, [left], null, [left], null, [down], null, null, null, [left], null, [left], null, [up], null, null, null, [down], null, [down], null, [left, right], null, null, null, [up], null, null, null, [up], [up], [up], null, [down], null, null, null, [down], [down], [down], null, [right], null, null, null, [right], [right], [right], null, [left], null, [left], null, [left], [left], [left], null, [up], null, null, null, [left], null, null, null, [left], null, null, null, [right], null, null, null, [down], null, null, null, [right], null, null, null, [left], null, [right], null, [left, right], null, null, null, [right], null, [right], null, [right], null, [down], [down], [down], null, [down], null, [down], null, [up], [up], [up], null, [up], null, [up], null, [left], [left], [left], null, [left], null, [left], null, null, null, [right], [right], [right], null, [left], null, [left], null, [up], [up], [up], null, [down], null, [down], null, [up], [up], [up], null, [down], [down], [down], null, [up], null, [down], null, [up, down], null, null, null, [left], null, null, null];
function getSong(songNum) {
  switch (songNum) {
    case 1:
      return song1;

    case 2:
      return song2;
  }
}

/***/ }),

/***/ "./src/songs_menu.js":
/*!***************************!*\
  !*** ./src/songs_menu.js ***!
  \***************************/
/*! exports provided: songsDownHandler, scrollMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "songsDownHandler", function() { return songsDownHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollMenu", function() { return scrollMenu; });
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
function scrollMenu(func, interval) {
  var lastCall = 0;
  return function () {
    var now = Date.now();

    if (lastCall + interval < now) {
      lastCall = now;
      return func.apply(this, arguments);
    }
  };
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zb25ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc29uZ3NfbWVudS5qcyJdLCJuYW1lcyI6WyJib2R5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImlkIiwicmlnaHRfYXJyb3ciLCJJbWFnZSIsImxlZnRfYXJyb3ciLCJ1cF9hcnJvdyIsImRvd25fYXJyb3ciLCJzcmMiLCJyaWdodF9hcnJvd19hY3RpdmUiLCJsZWZ0X2Fycm93X2FjdGl2ZSIsInVwX2Fycm93X2FjdGl2ZSIsImRvd25fYXJyb3dfYWN0aXZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJtZW51IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNhbnZhcyIsInNvbmciLCJnZXRTb25nIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJkaXNwbGF5IiwiYXVkaW8iLCJBdWRpbyIsInBsYXkiLCJicG0iLCJkcmF3Tm90ZSIsImkiLCJiZWF0Iiwic2V0VGltZW91dCIsImxlbmd0aCIsInNvbmdzIiwibWVudUF1ZGlvIiwiaHJlZiIsInNjcm9sbE1lbnUiLCJzb25nc0Rvd25IYW5kbGVyIiwiZSIsImtleSIsInBhdXNlIiwiYWN0aXZlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJkeCIsImN0eCIsIm5vdGVzIiwiY29tYm8iLCJzcGVlZCIsInkiLCJydW4iLCJub3RlWCIsImZvckVhY2giLCJub3RlIiwiaW5jbHVkZXMiLCJwdXNoIiwiaW1nIiwieCIsInNjb3JlIiwiZGlzcGxheWVkIiwiZ2V0Q29udGV4dCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImRyYXciLCJmb250Iiwic3Ryb2tlU3R5bGUiLCJjbGVhclJlY3QiLCJyaWdodFByZXNzZWQiLCJkcmF3SW1hZ2UiLCJ1cFByZXNzZWQiLCJkb3duUHJlc3NlZCIsImxlZnRQcmVzc2VkIiwiY29tYm9UZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJzdHJva2VUZXh0IiwiZ2FtZUxvb3AiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImtleURvd25IYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwicmlnaHQiLCJsZWZ0IiwidXAiLCJkb3duIiwic29uZzEiLCJzb25nMiIsInNvbmdOdW0iLCJzb25nc0xpc3QiLCJmb3VuZEFjdGl2ZSIsImN1cnIiLCJuZXh0IiwiY3VyclBvcyIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwidmFsdWVzIiwic3BsaXQiLCJjdXJyWCIsInBhcnNlSW50Iiwic2xpY2UiLCJjdXJyWSIsInRyYW5zZm9ybSIsIm5ld1BvcyIsInJlbW92ZSIsImFkZCIsInNoaWZ0IiwidW5zaGlmdCIsInBvcCIsImZ1bmMiLCJpbnRlcnZhbCIsImxhc3RDYWxsIiwibm93IiwiRGF0ZSIsImFwcGx5IiwiYXJndW1lbnRzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQWI7QUFDQSxJQUFJQyxFQUFKO0FBRUEsSUFBSUMsV0FBVyxHQUFHLElBQUlDLEtBQUosRUFBbEI7QUFDQSxJQUFJQyxVQUFVLEdBQUcsSUFBSUQsS0FBSixFQUFqQjtBQUNBLElBQUlFLFFBQVEsR0FBRyxJQUFJRixLQUFKLEVBQWY7QUFDQSxJQUFJRyxVQUFVLEdBQUcsSUFBSUgsS0FBSixFQUFqQjtBQUVBRCxXQUFXLENBQUNLLEdBQVosR0FBa0IsMkJBQWxCO0FBQ0FILFVBQVUsQ0FBQ0csR0FBWCxHQUFpQiwwQkFBakI7QUFDQUYsUUFBUSxDQUFDRSxHQUFULEdBQWUsd0JBQWY7QUFDQUQsVUFBVSxDQUFDQyxHQUFYLEdBQWlCLDBCQUFqQjtBQUVBLElBQUlDLGtCQUFrQixHQUFHLElBQUlMLEtBQUosRUFBekI7QUFDQSxJQUFJTSxpQkFBaUIsR0FBRyxJQUFJTixLQUFKLEVBQXhCO0FBQ0EsSUFBSU8sZUFBZSxHQUFHLElBQUlQLEtBQUosRUFBdEI7QUFDQSxJQUFJUSxpQkFBaUIsR0FBRyxJQUFJUixLQUFKLEVBQXhCO0FBRUFLLGtCQUFrQixDQUFDRCxHQUFuQixHQUF5QixrQ0FBekI7QUFDQUUsaUJBQWlCLENBQUNGLEdBQWxCLEdBQXdCLGlDQUF4QjtBQUNBRyxlQUFlLENBQUNILEdBQWhCLEdBQXNCLCtCQUF0QjtBQUNBSSxpQkFBaUIsQ0FBQ0osR0FBbEIsR0FBd0IsaUNBQXhCO0FBRUFSLFFBQVEsQ0FBQ2EsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsZ0JBQXBDLENBQXFELE9BQXJELEVBQThELFVBQVVDLEtBQVYsRUFBaUI7QUFDM0UsTUFBSUMsSUFBSSxHQUFHaEIsUUFBUSxDQUFDaUIsc0JBQVQsQ0FBZ0MsZUFBaEMsRUFBaUQsQ0FBakQsQ0FBWDtBQUNBLE1BQUlDLE1BQU0sR0FBR2xCLFFBQVEsQ0FBQ2lCLHNCQUFULENBQWdDLGlCQUFoQyxFQUFtRCxDQUFuRCxDQUFiO0FBQ0EsTUFBSUUsSUFBSSxHQUFHQyx5REFBTyxDQUFDLENBQUQsQ0FBbEI7QUFDQXJCLE1BQUksQ0FBQ3NCLEtBQUwsQ0FBV0MsZUFBWDtBQUVBTixNQUFJLENBQUNLLEtBQUwsQ0FBV0UsT0FBWCxHQUFxQixNQUFyQjtBQUNBeEIsTUFBSSxDQUFDc0IsS0FBTCxDQUFXQyxlQUFYO0FBRUFKLFFBQU0sQ0FBQ0csS0FBUCxDQUFhRSxPQUFiLEdBQXVCLE9BQXZCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLElBQUlDLEtBQUosQ0FBVSxpQkFBVixDQUFaO0FBQ0FELE9BQUssQ0FBQ0UsSUFBTjtBQUNBLE1BQUlDLEdBQUcsR0FBRyxHQUFWO0FBQ0FDLFVBQVEsQ0FBQyxFQUFELENBQVI7O0FBYjJFLDZCQWNsRUMsQ0Fka0U7QUFldkUsUUFBSUMsSUFBSSxHQUFHWCxJQUFJLENBQUNVLENBQUQsQ0FBZjs7QUFDQSxRQUFJQyxJQUFKLEVBQVU7QUFDTkMsZ0JBQVUsQ0FBQztBQUFBLGVBQU1ILFFBQVEsQ0FBQ0UsSUFBRCxDQUFkO0FBQUEsT0FBRCxFQUF1QkQsQ0FBQyxHQUFHRixHQUEzQixDQUFWO0FBQ0g7QUFsQnNFOztBQWMzRSxPQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdWLElBQUksQ0FBQ2EsTUFBekIsRUFBaUNILENBQUMsRUFBbEMsRUFBc0M7QUFBQSxVQUE3QkEsQ0FBNkI7QUFLckM7QUFDSixDQXBCRDtBQXNCQTdCLFFBQVEsQ0FBQ2EsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0MsZ0JBQW5DLENBQW9ELE9BQXBELEVBQTZELFVBQVNDLEtBQVQsRUFBZ0I7QUFDNUUsTUFBSUMsSUFBSSxHQUFHaEIsUUFBUSxDQUFDaUIsc0JBQVQsQ0FBZ0MsZUFBaEMsRUFBaUQsQ0FBakQsQ0FBWDtBQUNHLE1BQUlnQixLQUFLLEdBQUdqQyxRQUFRLENBQUNpQixzQkFBVCxDQUFnQyxnQkFBaEMsRUFBa0QsQ0FBbEQsQ0FBWjtBQUNIRCxNQUFJLENBQUNLLEtBQUwsQ0FBV0UsT0FBWCxHQUFxQixNQUFyQjtBQUNHVSxPQUFLLENBQUNaLEtBQU4sQ0FBWUUsT0FBWixHQUFzQixPQUF0QjtBQUNBLE1BQUlXLFNBQVMsR0FBRyxJQUFJVCxLQUFKLENBQVUsK0JBQVYsQ0FBaEI7QUFDQVMsV0FBUyxDQUFDUixJQUFWO0FBQ0gxQixVQUFRLENBQUNhLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NzQixJQUF0QyxHQUE2QyxpQkFBN0M7QUFDQW5DLFVBQVEsQ0FBQ2MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNzQixpRUFBVSxDQUFDQywrREFBRCxFQUFtQixHQUFuQixDQUEvQyxFQUF3RSxLQUF4RTtBQUNBckMsVUFBUSxDQUFDYyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFTd0IsQ0FBVCxFQUFZO0FBQ2hELFFBQUlBLENBQUMsQ0FBQ0MsR0FBRixLQUFVLE9BQWQsRUFBdUI7QUFDYkwsZUFBUyxDQUFDTSxLQUFWO0FBQ1R4QyxjQUFRLENBQUNhLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NzQixJQUF0QyxHQUE2QyxrQkFBN0M7QUFDUyxVQUFJTSxNQUFNLEdBQUd6QyxRQUFRLENBQUNpQixzQkFBVCxDQUFnQyxRQUFoQyxFQUEwQyxDQUExQyxFQUE2Q3lCLFNBQTdDLENBQXVEQyxRQUF2RCxDQUFnRSxLQUFoRSxDQUFiO0FBQ1QsVUFBSTNCLEtBQUksR0FBR2hCLFFBQVEsQ0FBQ2lCLHNCQUFULENBQWdDLGdCQUFoQyxFQUFrRCxDQUFsRCxDQUFYO0FBQ0EsVUFBSUMsTUFBTSxHQUFHbEIsUUFBUSxDQUFDaUIsc0JBQVQsQ0FBZ0MsaUJBQWhDLEVBQW1ELENBQW5ELENBQWI7QUFDUyxVQUFJTyxLQUFKO0FBQ0EsVUFBSUcsR0FBSjtBQUNBLFVBQUlSLElBQUo7QUFDVEgsV0FBSSxDQUFDSyxLQUFMLENBQVdFLE9BQVgsR0FBcUIsTUFBckI7O0FBQ1MsVUFBSWtCLE1BQUosRUFBWTtBQUNSakIsYUFBSyxHQUFHLElBQUlDLEtBQUosQ0FBVSxpQkFBVixDQUFSO0FBQ0ExQixZQUFJLENBQUNzQixLQUFMLENBQVdDLGVBQVgsR0FBNkIsaUNBQTdCO0FBQ0FLLFdBQUcsR0FBRyxHQUFOO0FBQ0FSLFlBQUksR0FBR0MseURBQU8sQ0FBQyxDQUFELENBQWQ7QUFDSCxPQUxELE1BS087QUFDSEksYUFBSyxHQUFHLElBQUlDLEtBQUosQ0FBVSxpQkFBVixDQUFSO0FBQ0ExQixZQUFJLENBQUNzQixLQUFMLENBQVdDLGVBQVg7QUFDQUssV0FBRyxHQUFHLEdBQU47QUFDQVIsWUFBSSxHQUFHQyx5REFBTyxDQUFDLENBQUQsQ0FBZDtBQUNIOztBQUNERixZQUFNLENBQUNHLEtBQVAsQ0FBYUUsT0FBYixHQUF1QixPQUF2QjtBQUVUQyxXQUFLLENBQUNFLElBQU47QUFDQUUsY0FBUSxDQUFDLEVBQUQsQ0FBUjs7QUF4QnNCLG1DQXlCYkMsQ0F6QmE7QUEwQnJCLFlBQUlDLElBQUksR0FBR1gsSUFBSSxDQUFDVSxDQUFELENBQWY7O0FBQ0EsWUFBSUMsSUFBSixFQUFVO0FBQ1RDLG9CQUFVLENBQUM7QUFBQSxtQkFBTUgsUUFBUSxDQUFDRSxJQUFELENBQWQ7QUFBQSxXQUFELEVBQXVCRCxDQUFDLEdBQUdGLEdBQTNCLENBQVY7QUFDQTtBQTdCb0I7O0FBeUJ0QixXQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdWLElBQUksQ0FBQ2EsTUFBekIsRUFBaUNILENBQUMsRUFBbEMsRUFBc0M7QUFBQSxlQUE3QkEsQ0FBNkI7QUFLckM7QUFDRDtBQUNELEdBakNEO0FBa0NBLENBM0NEO0FBNkNBLElBQUllLEVBQUUsR0FBRyxDQUFUO0FBQ0EsSUFBSUMsR0FBSjtBQUNBLElBQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBWixDLENBQWU7O0FBQ2YsSUFBSUMsQ0FBQyxHQUFHLEdBQVIsQyxDQUFhOztBQUNiLElBQUlDLEdBQUo7O0FBRUEsSUFBSXRCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNFLElBQUQsRUFBVTtBQUNyQixNQUFHQSxJQUFILEVBQVM7QUFDTCxRQUFJcUIsS0FBSjtBQUNJckIsUUFBSSxDQUFDc0IsT0FBTCxDQUFhLFVBQUFDLElBQUksRUFBSTtBQUNqQixVQUFJQSxJQUFJLENBQUM3QyxHQUFMLENBQVM4QyxRQUFULENBQWtCLE1BQWxCLENBQUosRUFBK0JILEtBQUssR0FBRyxHQUFSO0FBQy9CLFVBQUlFLElBQUksQ0FBQzdDLEdBQUwsQ0FBUzhDLFFBQVQsQ0FBa0IsTUFBbEIsQ0FBSixFQUErQkgsS0FBSyxHQUFHLEdBQVI7QUFDL0IsVUFBSUUsSUFBSSxDQUFDN0MsR0FBTCxDQUFTOEMsUUFBVCxDQUFrQixJQUFsQixDQUFKLEVBQTZCSCxLQUFLLEdBQUcsR0FBUjtBQUM3QixVQUFJRSxJQUFJLENBQUM3QyxHQUFMLENBQVM4QyxRQUFULENBQWtCLE9BQWxCLENBQUosRUFBZ0NILEtBQUssR0FBRyxHQUFSO0FBQ2hDTCxXQUFLLENBQUNTLElBQU4sQ0FBVztBQUFFQyxXQUFHLEVBQUVILElBQVA7QUFDUEksU0FBQyxFQUFFTixLQURJO0FBRVBGLFNBQUMsRUFBREEsQ0FGTztBQUdQUyxhQUFLLEVBQUUsSUFIQTtBQUlQQyxpQkFBUyxFQUFFO0FBSkosT0FBWDtBQU1ILEtBWEQ7QUFZUDs7QUFFRGQsS0FBRyxHQUFHN0MsUUFBUSxDQUFDYSxjQUFULENBQXdCLFFBQXhCLEVBQWtDK0MsVUFBbEMsQ0FBNkMsSUFBN0MsQ0FBTjtBQUNBQyxlQUFhLENBQUNYLEdBQUQsQ0FBYjtBQUNBQSxLQUFHLEdBQUdZLFdBQVcsQ0FBQztBQUFBLFdBQU1DLElBQUksQ0FBQ2pCLEtBQUQsQ0FBVjtBQUFBLEdBQUQsRUFBb0JFLEtBQXBCLENBQWpCO0FBQ0gsQ0FwQkQ7O0FBc0JBLFNBQVNlLElBQVQsQ0FBY2pCLEtBQWQsRUFBcUI7QUFDakJELEtBQUcsQ0FBQ21CLElBQUosR0FBVyxxQkFBWDtBQUNBbkIsS0FBRyxDQUFDb0IsV0FBSixHQUFrQixNQUFsQjtBQUVBcEIsS0FBRyxDQUFDcUIsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsR0FBcEIsRUFBeUIsR0FBekIsRUFKaUIsQ0FJYzs7QUFDL0IsTUFBSUMsWUFBSixFQUFrQjtBQUNkdEIsT0FBRyxDQUFDdUIsU0FBSixDQUFjM0Qsa0JBQWQsRUFBa0MsR0FBbEMsRUFBdUMsQ0FBdkM7QUFDSCxHQUZELE1BRU87QUFDSG9DLE9BQUcsQ0FBQ3VCLFNBQUosQ0FBY2pFLFdBQWQsRUFBMkIsR0FBM0IsRUFBZ0MsQ0FBaEM7QUFDSDs7QUFDRCxNQUFJa0UsU0FBSixFQUFlO0FBQ1h4QixPQUFHLENBQUN1QixTQUFKLENBQWN6RCxlQUFkLEVBQStCLEdBQS9CLEVBQW9DLENBQXBDO0FBRUgsR0FIRCxNQUdPO0FBQ0hrQyxPQUFHLENBQUN1QixTQUFKLENBQWM5RCxRQUFkLEVBQXdCLEdBQXhCLEVBQTZCLENBQTdCO0FBQ0g7O0FBQ0QsTUFBSWdFLFdBQUosRUFBaUI7QUFDYnpCLE9BQUcsQ0FBQ3VCLFNBQUosQ0FBY3hELGlCQUFkLEVBQWlDLEdBQWpDLEVBQXNDLENBQXRDO0FBQ0gsR0FGRCxNQUVPO0FBQ0hpQyxPQUFHLENBQUN1QixTQUFKLENBQWM3RCxVQUFkLEVBQTBCLEdBQTFCLEVBQStCLENBQS9CO0FBQ0g7O0FBQ0QsTUFBSWdFLFdBQUosRUFBaUI7QUFDYjFCLE9BQUcsQ0FBQ3VCLFNBQUosQ0FBYzFELGlCQUFkLEVBQWlDLEdBQWpDLEVBQXNDLENBQXRDO0FBQ0gsR0FGRCxNQUVPO0FBQ0htQyxPQUFHLENBQUN1QixTQUFKLENBQWMvRCxVQUFkLEVBQTBCLEdBQTFCLEVBQStCLENBQS9CO0FBQ0g7O0FBRUQsTUFBR3lDLEtBQUssQ0FBQ2QsTUFBVCxFQUFpQjtBQUNiYyxTQUFLLENBQUNNLE9BQU4sQ0FBYyxVQUFBQyxJQUFJLEVBQUk7QUFDbEJSLFNBQUcsQ0FBQ3VCLFNBQUosQ0FBY2YsSUFBSSxDQUFDRyxHQUFuQixFQUF3QkgsSUFBSSxDQUFDSSxDQUE3QixFQUFnQ0osSUFBSSxDQUFDSixDQUFyQzs7QUFFQSxVQUFHSSxJQUFJLENBQUNJLENBQUwsS0FBVyxHQUFYLElBQWtCLENBQUNKLElBQUksQ0FBQ0ssS0FBeEIsSUFBaUNhLFdBQXBDLEVBQWlEO0FBQzdDLFlBQUdsQixJQUFJLENBQUNKLENBQUwsSUFBVSxFQUFWLElBQWdCSSxJQUFJLENBQUNKLENBQUwsSUFBVSxFQUE3QixFQUFpQ0ksSUFBSSxDQUFDSyxLQUFMLEdBQWEsS0FBYjtBQUNqQyxZQUFHTCxJQUFJLENBQUNKLENBQUwsSUFBVSxFQUFWLElBQWdCSSxJQUFJLENBQUNKLENBQUwsSUFBVSxFQUE3QixFQUFpQ0ksSUFBSSxDQUFDSyxLQUFMLEdBQWEsSUFBYjtBQUNqQyxZQUFJTCxJQUFJLENBQUNKLENBQUwsSUFBVSxFQUFWLElBQWdCSSxJQUFJLENBQUNKLENBQUwsSUFBVSxFQUE5QixFQUFrQ0ksSUFBSSxDQUFDSyxLQUFMLEdBQWEsTUFBYjtBQUNsQyxZQUFJTCxJQUFJLENBQUNKLENBQUwsSUFBVSxFQUFkLEVBQWtCSSxJQUFJLENBQUNLLEtBQUwsR0FBYSxVQUFiO0FBQ3JCOztBQUVELFVBQUlMLElBQUksQ0FBQ0ksQ0FBTCxLQUFXLEdBQVgsSUFBa0IsQ0FBQ0osSUFBSSxDQUFDSyxLQUF4QixJQUFpQ1ksV0FBckMsRUFBa0Q7QUFDOUMsWUFBSWpCLElBQUksQ0FBQ0osQ0FBTCxJQUFVLEVBQVYsSUFBZ0JJLElBQUksQ0FBQ0osQ0FBTCxJQUFVLEVBQTlCLEVBQWtDSSxJQUFJLENBQUNLLEtBQUwsR0FBYSxLQUFiO0FBQ2xDLFlBQUlMLElBQUksQ0FBQ0osQ0FBTCxJQUFVLEVBQVYsSUFBZ0JJLElBQUksQ0FBQ0osQ0FBTCxJQUFVLEVBQTlCLEVBQWtDSSxJQUFJLENBQUNLLEtBQUwsR0FBYSxJQUFiO0FBQ2xDLFlBQUlMLElBQUksQ0FBQ0osQ0FBTCxJQUFVLEVBQVYsSUFBZ0JJLElBQUksQ0FBQ0osQ0FBTCxJQUFVLEVBQTlCLEVBQWtDSSxJQUFJLENBQUNLLEtBQUwsR0FBYSxNQUFiO0FBQ2xDLFlBQUlMLElBQUksQ0FBQ0osQ0FBTCxJQUFVLEVBQWQsRUFBa0JJLElBQUksQ0FBQ0ssS0FBTCxHQUFhLFVBQWI7QUFDckI7O0FBRUQsVUFBSUwsSUFBSSxDQUFDSSxDQUFMLEtBQVcsR0FBWCxJQUFrQixDQUFDSixJQUFJLENBQUNLLEtBQXhCLElBQWlDVyxTQUFyQyxFQUFnRDtBQUM1QyxZQUFJaEIsSUFBSSxDQUFDSixDQUFMLElBQVUsRUFBVixJQUFnQkksSUFBSSxDQUFDSixDQUFMLElBQVUsRUFBOUIsRUFBa0NJLElBQUksQ0FBQ0ssS0FBTCxHQUFhLEtBQWI7QUFDbEMsWUFBSUwsSUFBSSxDQUFDSixDQUFMLElBQVUsRUFBVixJQUFnQkksSUFBSSxDQUFDSixDQUFMLElBQVUsRUFBOUIsRUFBa0NJLElBQUksQ0FBQ0ssS0FBTCxHQUFhLElBQWI7QUFDbEMsWUFBSUwsSUFBSSxDQUFDSixDQUFMLElBQVUsRUFBVixJQUFnQkksSUFBSSxDQUFDSixDQUFMLElBQVUsRUFBOUIsRUFBa0NJLElBQUksQ0FBQ0ssS0FBTCxHQUFhLE1BQWI7QUFDbEMsWUFBSUwsSUFBSSxDQUFDSixDQUFMLElBQVUsRUFBZCxFQUFrQkksSUFBSSxDQUFDSyxLQUFMLEdBQWEsVUFBYjtBQUNyQjs7QUFFRCxVQUFJTCxJQUFJLENBQUNJLENBQUwsS0FBVyxHQUFYLElBQWtCLENBQUNKLElBQUksQ0FBQ0ssS0FBeEIsSUFBaUNTLFlBQXJDLEVBQW1EO0FBQy9DLFlBQUlkLElBQUksQ0FBQ0osQ0FBTCxJQUFVLEVBQVYsSUFBZ0JJLElBQUksQ0FBQ0osQ0FBTCxJQUFVLEVBQTlCLEVBQWtDSSxJQUFJLENBQUNLLEtBQUwsR0FBYSxLQUFiO0FBQ2xDLFlBQUlMLElBQUksQ0FBQ0osQ0FBTCxJQUFVLEVBQVYsSUFBZ0JJLElBQUksQ0FBQ0osQ0FBTCxJQUFVLEVBQTlCLEVBQWtDSSxJQUFJLENBQUNLLEtBQUwsR0FBYSxJQUFiO0FBQ2xDLFlBQUlMLElBQUksQ0FBQ0osQ0FBTCxJQUFVLEVBQVYsSUFBZ0JJLElBQUksQ0FBQ0osQ0FBTCxJQUFVLEVBQTlCLEVBQWtDSSxJQUFJLENBQUNLLEtBQUwsR0FBYSxNQUFiO0FBQ2xDLFlBQUlMLElBQUksQ0FBQ0osQ0FBTCxJQUFVLEVBQWQsRUFBa0JJLElBQUksQ0FBQ0ssS0FBTCxHQUFhLFVBQWI7QUFDckI7O0FBRUQsVUFBSUwsSUFBSSxDQUFDSixDQUFMLEdBQVMsQ0FBVCxJQUFjLENBQUNJLElBQUksQ0FBQ0ssS0FBeEIsRUFBK0I7QUFDM0JMLFlBQUksQ0FBQ0ssS0FBTCxHQUFhLE1BQWI7QUFDQVgsYUFBSyxHQUFHLENBQVI7QUFDSDs7QUFFRCxVQUFJTSxJQUFJLENBQUNLLEtBQUwsSUFBYyxDQUFDTCxJQUFJLENBQUNNLFNBQXhCLEVBQW1DO0FBQy9CLFlBQUlOLElBQUksQ0FBQ0ssS0FBTCxJQUFjLE1BQWQsSUFBd0JMLElBQUksQ0FBQ0ssS0FBTCxJQUFjLFVBQTFDLEVBQXNEWCxLQUFLLEdBQTNELEtBQ0tBLEtBQUssR0FBRyxDQUFSO0FBQ1IsT0F2Q2lCLENBeUNsQjs7O0FBQ0EsVUFBSU0sSUFBSSxDQUFDSyxLQUFMLElBQWNMLElBQUksQ0FBQ00sU0FBTCxJQUFrQixFQUFwQyxFQUF3QztBQUNwQyxZQUFJRCxLQUFLLEdBQUcsSUFBSXRELEtBQUosRUFBWjs7QUFFQSxnQkFBUWlELElBQUksQ0FBQ0ssS0FBYjtBQUNYLGVBQUssTUFBTDtBQUNtQkEsaUJBQUssQ0FBQ2xELEdBQU4sR0FBWSxvQkFBWjtBQUNsQjs7QUFDRCxlQUFLLEtBQUw7QUFDbUJrRCxpQkFBSyxDQUFDbEQsR0FBTixHQUFZLG1CQUFaO0FBQ2xCOztBQUNELGVBQUssSUFBTDtBQUNtQmtELGlCQUFLLENBQUNsRCxHQUFOLEdBQVksa0JBQVo7QUFDbEI7O0FBQ0QsZUFBSyxNQUFMO0FBQ21Ca0QsaUJBQUssQ0FBQ2xELEdBQU4sR0FBWSxxQkFBWjtBQUNsQjs7QUFDRCxlQUFLLFVBQUw7QUFDbUJrRCxpQkFBSyxDQUFDbEQsR0FBTixHQUFZLHVCQUFaO0FBQ2xCO0FBZlU7O0FBaUJBcUMsV0FBRyxDQUFDdUIsU0FBSixDQUFjVixLQUFkLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCO0FBQ0FMLFlBQUksQ0FBQ00sU0FBTDtBQUNIOztBQUVETixVQUFJLENBQUNKLENBQUwsSUFBVUwsRUFBVjtBQUNILEtBbkVEO0FBb0VIOztBQUNELE1BQUlHLEtBQUssSUFBSSxDQUFiLEVBQWdCO0FBQ1osUUFBSXlCLFNBQVMsYUFBTXpCLEtBQU4sV0FBYjtBQUNBRixPQUFHLENBQUM0QixTQUFKLEdBQWdCLE1BQWhCO0FBQ0E1QixPQUFHLENBQUM2QixRQUFKLENBQWFGLFNBQWIsRUFBd0IsR0FBeEIsRUFBNkIsR0FBN0I7QUFDQTNCLE9BQUcsQ0FBQzhCLFVBQUosQ0FBZUgsU0FBZixFQUEwQixHQUExQixFQUErQixHQUEvQjtBQUNIO0FBQ0o7O0FBR0QsU0FBU0ksUUFBVCxHQUFvQjtBQUNoQjFFLElBQUUsR0FBRzJFLHFCQUFxQixDQUFDRCxRQUFELENBQTFCO0FBQ0g7O0FBRUQsSUFBRzdFLElBQUgsRUFBUztBQUNMQSxNQUFJLENBQUNlLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQU07QUFDakNnRSx3QkFBb0IsQ0FBQzVFLEVBQUQsQ0FBcEI7QUFDSCxHQUZEO0FBR0g7O0FBRUQsSUFBSW1FLFNBQVMsR0FBRyxLQUFoQjtBQUNBLElBQUlDLFdBQVcsR0FBRyxLQUFsQjtBQUNBLElBQUlILFlBQVksR0FBRyxLQUFuQjtBQUNBLElBQUlJLFdBQVcsR0FBRyxLQUFsQjtBQUVBdkUsUUFBUSxDQUFDYyxnQkFBVCxDQUEwQixTQUExQixFQUFxQ2lFLGNBQXJDLEVBQXFELEtBQXJEO0FBQ0EvRSxRQUFRLENBQUNjLGdCQUFULENBQTBCLE9BQTFCLEVBQW1Da0UsWUFBbkMsRUFBaUQsS0FBakQ7QUFFTyxTQUFTRCxjQUFULENBQXdCekMsQ0FBeEIsRUFBMkI7QUFDakMsVUFBUUEsQ0FBQyxDQUFDQyxHQUFWO0FBQ0MsU0FBSyxHQUFMO0FBQ0EsU0FBSyxTQUFMO0FBQ0M4QixlQUFTLEdBQUcsSUFBWjtBQUNBdEMsZ0JBQVUsQ0FBQztBQUFBLGVBQU1pRCxZQUFZLENBQUMxQyxDQUFELENBQWxCO0FBQUEsT0FBRCxFQUF3QixHQUF4QixDQUFWO0FBQ0E7O0FBQ0QsU0FBSyxHQUFMO0FBQ0EsU0FBSyxXQUFMO0FBQ0NnQyxpQkFBVyxHQUFHLElBQWQ7QUFDQXZDLGdCQUFVLENBQUM7QUFBQSxlQUFNaUQsWUFBWSxDQUFDMUMsQ0FBRCxDQUFsQjtBQUFBLE9BQUQsRUFBd0IsR0FBeEIsQ0FBVjtBQUNBOztBQUNELFNBQUssWUFBTDtBQUNBLFNBQUssR0FBTDtBQUNDNkIsa0JBQVksR0FBRyxJQUFmO0FBQ0FwQyxnQkFBVSxDQUFDO0FBQUEsZUFBTWlELFlBQVksQ0FBQzFDLENBQUQsQ0FBbEI7QUFBQSxPQUFELEVBQXdCLEdBQXhCLENBQVY7QUFDQTs7QUFDRCxTQUFLLEdBQUw7QUFDQSxTQUFLLFdBQUw7QUFDQ2lDLGlCQUFXLEdBQUcsSUFBZDtBQUNBeEMsZ0JBQVUsQ0FBQztBQUFBLGVBQU1pRCxZQUFZLENBQUMxQyxDQUFELENBQWxCO0FBQUEsT0FBRCxFQUF3QixHQUF4QixDQUFWO0FBQ0E7QUFwQkY7QUFzQkE7QUFFTSxTQUFTMEMsWUFBVCxDQUFzQjFDLENBQXRCLEVBQXlCO0FBQy9CLFVBQVFBLENBQUMsQ0FBQ0MsR0FBVjtBQUNDLFNBQUssR0FBTDtBQUNBLFNBQUssU0FBTDtBQUNDOEIsZUFBUyxHQUFHLEtBQVo7QUFDQTs7QUFDRCxTQUFLLEdBQUw7QUFDQSxTQUFLLFdBQUw7QUFDQ0MsaUJBQVcsR0FBRyxLQUFkO0FBQ0E7O0FBQ0QsU0FBSyxHQUFMO0FBQ0EsU0FBSyxZQUFMO0FBQ0NILGtCQUFZLEdBQUcsS0FBZjtBQUNBOztBQUNELFNBQUssR0FBTDtBQUNBLFNBQUssV0FBTDtBQUNDSSxpQkFBVyxHQUFHLEtBQWQ7QUFDQTtBQWhCRjtBQWtCQSxDOzs7Ozs7Ozs7Ozs7QUNuU0Q7QUFBQTtBQUFBLElBQUlVLEtBQUssR0FBRyxJQUFJN0UsS0FBSixFQUFaO0FBQ0EsSUFBSThFLElBQUksR0FBRyxJQUFJOUUsS0FBSixFQUFYO0FBQ0EsSUFBSStFLEVBQUUsR0FBRyxJQUFJL0UsS0FBSixFQUFUO0FBQ0EsSUFBSWdGLElBQUksR0FBRyxJQUFJaEYsS0FBSixFQUFYO0FBRUE2RSxLQUFLLENBQUN6RSxHQUFOLEdBQVksZ0NBQVo7QUFDQTBFLElBQUksQ0FBQzFFLEdBQUwsR0FBVywrQkFBWDtBQUNBMkUsRUFBRSxDQUFDM0UsR0FBSCxHQUFTLDZCQUFUO0FBQ0E0RSxJQUFJLENBQUM1RSxHQUFMLEdBQVcsK0JBQVg7QUFFQSxJQUFJNkUsS0FBSyxHQUFHLENBQ1IsSUFEUSxFQUNGLElBREUsRUFDSSxJQURKLEVBQ1UsSUFEVixFQUVSLElBRlEsRUFFRixJQUZFLEVBRUksSUFGSixFQUVVLElBRlYsRUFHUixJQUhRLEVBR0YsSUFIRSxFQUdJLElBSEosRUFHVSxJQUhWLEVBSVIsSUFKUSxFQUlGLElBSkUsRUFJSSxJQUpKLEVBSVUsSUFKVixFQUtSLENBQUNILElBQUQsQ0FMUSxFQUtBLElBTEEsRUFLTSxDQUFDRCxLQUFELENBTE4sRUFLZSxJQUxmLEVBTVIsQ0FBQ0csSUFBRCxDQU5RLEVBTUEsSUFOQSxFQU1NLENBQUNELEVBQUQsQ0FOTixFQU1ZLElBTlosRUFPUixDQUFDRixLQUFELENBUFEsRUFPQyxJQVBELEVBT08sQ0FBQ0MsSUFBRCxDQVBQLEVBT2UsSUFQZixFQVFSLENBQUNDLEVBQUQsQ0FSUSxFQVFGLElBUkUsRUFRSSxDQUFDQyxJQUFELENBUkosRUFRWSxJQVJaLEVBU1IsQ0FBQ0YsSUFBRCxDQVRRLEVBU0EsSUFUQSxFQVNNLENBQUNDLEVBQUQsQ0FUTixFQVNZLElBVFosRUFVUixDQUFDQyxJQUFELENBVlEsRUFVQSxJQVZBLEVBVU0sQ0FBQ0gsS0FBRCxDQVZOLEVBVWUsSUFWZixFQVdSLENBQUNDLElBQUQsQ0FYUSxFQVdBLElBWEEsRUFXTSxDQUFDRSxJQUFELENBWE4sRUFXYyxJQVhkLEVBWVIsQ0FBQ0gsS0FBRCxDQVpRLEVBWUMsSUFaRCxFQVlPLENBQUNFLEVBQUQsQ0FaUCxFQVlhLElBWmIsRUFhUixDQUFDRixLQUFELENBYlEsRUFhQyxJQWJELEVBYU8sQ0FBQ0csSUFBRCxDQWJQLEVBYWUsSUFiZixFQWNSLENBQUNELEVBQUQsQ0FkUSxFQWNGLElBZEUsRUFjSSxDQUFDRCxJQUFELENBZEosRUFjWSxJQWRaLEVBZVIsQ0FBQ0QsS0FBRCxDQWZRLEVBZUMsSUFmRCxFQWVPLENBQUNFLEVBQUQsQ0FmUCxFQWVhLElBZmIsRUFnQlIsQ0FBQ0QsSUFBRCxDQWhCUSxFQWdCQSxJQWhCQSxFQWdCTSxDQUFDRSxJQUFELENBaEJOLEVBZ0JjLElBaEJkLEVBaUJSLENBQUNGLElBQUQsQ0FqQlEsRUFpQkEsSUFqQkEsRUFpQk0sQ0FBQ0UsSUFBRCxDQWpCTixFQWlCYyxJQWpCZCxFQWtCUixDQUFDRCxFQUFELENBbEJRLEVBa0JGLElBbEJFLEVBa0JJLENBQUNGLEtBQUQsQ0FsQkosRUFrQmEsSUFsQmIsRUFtQlIsQ0FBQ0UsRUFBRCxDQW5CUSxFQW1CRixJQW5CRSxFQW1CSSxDQUFDQyxJQUFELENBbkJKLEVBbUJZLElBbkJaLEVBb0JSLENBQUNGLElBQUQsQ0FwQlEsRUFvQkEsSUFwQkEsRUFvQk0sSUFwQk4sRUFvQlksQ0FBQ0QsS0FBRCxDQXBCWixFQXFCUixDQUFDRyxJQUFELENBckJRLEVBcUJBLElBckJBLEVBcUJNLENBQUNELEVBQUQsQ0FyQk4sRUFxQlksSUFyQlosRUFzQlIsQ0FBQ0YsS0FBRCxDQXRCUSxFQXNCQyxJQXRCRCxFQXNCTyxDQUFDQyxJQUFELENBdEJQLEVBc0JlLElBdEJmLEVBdUJSLENBQUNELEtBQUQsQ0F2QlEsRUF1QkMsSUF2QkQsRUF1Qk8sQ0FBQ0UsRUFBRCxDQXZCUCxFQXVCYSxJQXZCYixFQXdCUixDQUFDQyxJQUFELENBeEJRLEVBd0JBLElBeEJBLEVBd0JNLElBeEJOLEVBd0JZLENBQUNELEVBQUQsQ0F4QlosRUF5QlIsQ0FBQ0YsS0FBRCxDQXpCUSxFQXlCQyxJQXpCRCxFQXlCTyxDQUFDRSxFQUFELENBekJQLEVBeUJhLElBekJiLEVBMEJSLENBQUNDLElBQUQsQ0ExQlEsRUEwQkEsSUExQkEsRUEwQk0sQ0FBQ0YsSUFBRCxDQTFCTixFQTBCYyxJQTFCZCxFQTJCUixDQUFDRSxJQUFELENBM0JRLEVBMkJBLElBM0JBLEVBMkJNLENBQUNELEVBQUQsQ0EzQk4sRUEyQlksSUEzQlosRUE0QlIsQ0FBQ0YsS0FBRCxDQTVCUSxFQTRCQyxJQTVCRCxFQTRCTyxJQTVCUCxFQTRCYSxDQUFDQyxJQUFELENBNUJiLEVBNkJSLENBQUNDLEVBQUQsQ0E3QlEsRUE2QkYsSUE3QkUsRUE2QkksQ0FBQ0YsS0FBRCxDQTdCSixFQTZCYSxJQTdCYixFQThCUixDQUFDQyxJQUFELENBOUJRLEVBOEJBLElBOUJBLEVBOEJNLENBQUNFLElBQUQsQ0E5Qk4sRUE4QmMsSUE5QmQsRUErQlIsQ0FBQ0YsSUFBRCxDQS9CUSxFQStCQSxJQS9CQSxFQStCTSxDQUFDRCxLQUFELENBL0JOLEVBK0JlLElBL0JmLEVBZ0NSLENBQUNFLEVBQUQsQ0FoQ1EsRUFnQ0YsSUFoQ0UsRUFnQ0ksSUFoQ0osRUFnQ1UsQ0FBQ0MsSUFBRCxDQWhDVixFQWlDUixDQUFDRixJQUFELEVBQU9ELEtBQVAsQ0FqQ1EsRUFpQ08sSUFqQ1AsRUFpQ2EsQ0FBQ0MsSUFBRCxDQWpDYixFQWlDcUIsQ0FBQ0QsS0FBRCxDQWpDckIsRUFrQ1IsQ0FBQ0UsRUFBRCxDQWxDUSxFQWtDRixDQUFDQyxJQUFELENBbENFLEVBa0NNLENBQUNELEVBQUQsQ0FsQ04sRUFrQ1ksQ0FBQ0MsSUFBRCxDQWxDWixFQW1DUixDQUFDSCxLQUFELENBbkNRLEVBbUNDLElBbkNELEVBbUNPLENBQUNDLElBQUQsQ0FuQ1AsRUFtQ2UsSUFuQ2YsRUFvQ1IsQ0FBQ0QsS0FBRCxDQXBDUSxFQW9DQyxDQUFDQyxJQUFELENBcENELEVBb0NTLENBQUNFLElBQUQsQ0FwQ1QsRUFvQ2lCLENBQUNELEVBQUQsQ0FwQ2pCLEVBcUNSLENBQUNELElBQUQsRUFBT0QsS0FBUCxDQXJDUSxFQXFDTyxJQXJDUCxFQXFDYSxDQUFDQSxLQUFELENBckNiLEVBcUNzQixDQUFDRyxJQUFELENBckN0QixFQXNDUixDQUFDRixJQUFELENBdENRLEVBc0NBLENBQUNDLEVBQUQsQ0F0Q0EsRUFzQ00sQ0FBQ0QsSUFBRCxDQXRDTixFQXNDYyxDQUFDQyxFQUFELENBdENkLEVBdUNSLENBQUNDLElBQUQsQ0F2Q1EsRUF1Q0EsSUF2Q0EsRUF1Q00sQ0FBQ0gsS0FBRCxDQXZDTixFQXVDZSxJQXZDZixFQXdDUixDQUFDRyxJQUFELENBeENRLEVBd0NBLENBQUNILEtBQUQsQ0F4Q0EsRUF3Q1MsQ0FBQ0UsRUFBRCxDQXhDVCxFQXdDZSxDQUFDRCxJQUFELENBeENmLEVBeUNSLENBQUNDLEVBQUQsQ0F6Q1EsRUF5Q0YsSUF6Q0UsRUF5Q0ksQ0FBQ0MsSUFBRCxDQXpDSixFQXlDWSxJQXpDWixFQTBDUixDQUFDRixJQUFELENBMUNRLEVBMENBLENBQUNDLEVBQUQsRUFBS0MsSUFBTCxDQTFDQSxFQTBDWSxDQUFDSCxLQUFELENBMUNaLEVBMENxQixDQUFDRSxFQUFELEVBQUtDLElBQUwsQ0ExQ3JCLEVBMkNSLENBQUNBLElBQUQsQ0EzQ1EsRUEyQ0EsSUEzQ0EsRUEyQ00sQ0FBQ0QsRUFBRCxDQTNDTixFQTJDWSxJQTNDWixFQTRDUixDQUFDRixLQUFELENBNUNRLEVBNENDLENBQUNFLEVBQUQsRUFBS0MsSUFBTCxDQTVDRCxFQTRDYSxDQUFDRixJQUFELENBNUNiLEVBNENxQixDQUFDQyxFQUFELEVBQUtDLElBQUwsQ0E1Q3JCLEVBNkNSLENBQUNILEtBQUQsQ0E3Q1EsRUE2Q0MsSUE3Q0QsRUE2Q08sQ0FBQ0MsSUFBRCxDQTdDUCxFQTZDZSxJQTdDZixFQThDUixDQUFDRSxJQUFELENBOUNRLEVBOENBLENBQUNGLElBQUQsRUFBT0QsS0FBUCxDQTlDQSxFQThDZSxDQUFDRSxFQUFELENBOUNmLEVBOENxQixDQUFDRCxJQUFELEVBQU9ELEtBQVAsQ0E5Q3JCLEVBK0NSLENBQUNDLElBQUQsQ0EvQ1EsRUErQ0EsSUEvQ0EsRUErQ00sQ0FBQ0QsS0FBRCxDQS9DTixFQStDZSxJQS9DZixFQWdEUixDQUFDQyxJQUFELEVBQU9ELEtBQVAsQ0FoRFEsRUFnRE8sSUFoRFAsRUFnRGEsSUFoRGIsRUFnRG1CLElBaERuQixFQWlEUixDQUFDQyxJQUFELENBakRRLEVBaURBLElBakRBLEVBaURNLENBQUNELEtBQUQsQ0FqRE4sRUFpRGUsSUFqRGYsRUFrRFIsQ0FBQ0csSUFBRCxDQWxEUSxFQWtEQSxJQWxEQSxFQWtETSxDQUFDRCxFQUFELENBbEROLEVBa0RZLElBbERaLEVBbURSLENBQUNDLElBQUQsQ0FuRFEsRUFtREEsSUFuREEsRUFtRE0sQ0FBQ0gsS0FBRCxDQW5ETixFQW1EZSxJQW5EZixFQW9EUixDQUFDQyxJQUFELENBcERRLEVBb0RBLElBcERBLEVBb0RNLElBcEROLEVBb0RZLENBQUNELEtBQUQsQ0FwRFosRUFxRFIsQ0FBQ0csSUFBRCxDQXJEUSxFQXFEQSxJQXJEQSxFQXFETSxDQUFDRCxFQUFELENBckROLEVBcURZLElBckRaLEVBc0RSLENBQUNGLEtBQUQsQ0F0RFEsRUFzREMsSUF0REQsRUFzRE8sQ0FBQ0MsSUFBRCxDQXREUCxFQXNEZSxJQXREZixFQXVEUixDQUFDRCxLQUFELENBdkRRLEVBdURDLElBdkRELEVBdURPLENBQUNFLEVBQUQsQ0F2RFAsRUF1RGEsSUF2RGIsRUF3RFIsQ0FBQ0MsSUFBRCxDQXhEUSxFQXdEQSxJQXhEQSxFQXdETSxJQXhETixFQXdEWSxDQUFDRCxFQUFELENBeERaLEVBeURSLENBQUNGLEtBQUQsQ0F6RFEsRUF5REMsQ0FBQ0csSUFBRCxDQXpERCxFQXlEUyxDQUFDRCxFQUFELENBekRULEVBeURlLENBQUNELElBQUQsQ0F6RGYsRUEwRFIsQ0FBQ0QsS0FBRCxDQTFEUSxFQTBEQyxDQUFDRSxFQUFELENBMURELEVBMERPLENBQUNELElBQUQsQ0ExRFAsRUEwRGUsQ0FBQ0UsSUFBRCxDQTFEZixFQTJEUixDQUFDRixJQUFELENBM0RRLEVBMkRBLENBQUNDLEVBQUQsQ0EzREEsRUEyRE0sQ0FBQ0MsSUFBRCxDQTNETixFQTJEYyxDQUFDSCxLQUFELENBM0RkLEVBNERSLENBQUNDLElBQUQsQ0E1RFEsRUE0REEsQ0FBQ0UsSUFBRCxDQTVEQSxFQTREUSxDQUFDSCxLQUFELENBNURSLEVBNERpQixDQUFDRSxFQUFELENBNURqQixFQTZEUixDQUFDRixLQUFELENBN0RRLEVBNkRDLENBQUNFLEVBQUQsQ0E3REQsRUE2RE8sQ0FBQ0MsSUFBRCxDQTdEUCxFQTZEZSxDQUFDRixJQUFELENBN0RmLEVBOERSLENBQUNELEtBQUQsQ0E5RFEsRUE4REMsQ0FBQ0MsSUFBRCxDQTlERCxFQThEUyxDQUFDQyxFQUFELENBOURULEVBOERlLENBQUNDLElBQUQsQ0E5RGYsRUErRFIsQ0FBQ0YsSUFBRCxDQS9EUSxFQStEQSxDQUFDRSxJQUFELENBL0RBLEVBK0RRLENBQUNELEVBQUQsQ0EvRFIsRUErRGMsQ0FBQ0YsS0FBRCxDQS9EZCxFQWdFUixDQUFDQyxJQUFELENBaEVRLEVBZ0VBLENBQUNELEtBQUQsQ0FoRUEsRUFnRVMsQ0FBQ0csSUFBRCxDQWhFVCxFQWdFaUIsQ0FBQ0YsSUFBRCxFQUFPRCxLQUFQLENBaEVqQixDQUFaO0FBb0VBLElBQUlLLEtBQUssR0FBRyxDQUNSLElBRFEsRUFDRixJQURFLEVBQ0ksSUFESixFQUNVLElBRFYsRUFFUixJQUZRLEVBRUYsSUFGRSxFQUVJLElBRkosRUFFVSxJQUZWLEVBR1IsSUFIUSxFQUdGLElBSEUsRUFHSSxJQUhKLEVBR1UsSUFIVixFQUlSLElBSlEsRUFJRixJQUpFLEVBSUksSUFKSixFQUlVLElBSlYsRUFLUixDQUFDSCxFQUFELENBTFEsRUFLRixJQUxFLEVBS0ksSUFMSixFQUtVLElBTFYsRUFNUixDQUFDQyxJQUFELENBTlEsRUFNQSxJQU5BLEVBTU0sSUFOTixFQU1ZLElBTlosRUFPUixDQUFDRCxFQUFELENBUFEsRUFPRixJQVBFLEVBT0ksSUFQSixFQU9VLElBUFYsRUFRUixDQUFDQyxJQUFELENBUlEsRUFRQSxJQVJBLEVBUU0sSUFSTixFQVFZLElBUlosRUFTUixDQUFDSCxLQUFELENBVFEsRUFTQyxJQVRELEVBU08sQ0FBQ0EsS0FBRCxDQVRQLEVBU2dCLElBVGhCLEVBVVIsQ0FBQ0csSUFBRCxDQVZRLEVBVUEsSUFWQSxFQVVNLENBQUNBLElBQUQsQ0FWTixFQVVjLElBVmQsRUFXUixDQUFDSCxLQUFELENBWFEsRUFXQyxJQVhELEVBV08sQ0FBQ0EsS0FBRCxDQVhQLEVBV2dCLElBWGhCLEVBWVIsQ0FBQ0MsSUFBRCxDQVpRLEVBWUEsSUFaQSxFQVlNLENBQUNBLElBQUQsQ0FaTixFQVljLElBWmQsRUFhUixDQUFDRCxLQUFELENBYlEsRUFhQyxDQUFDQSxLQUFELENBYkQsRUFhVSxDQUFDQSxLQUFELENBYlYsRUFhbUIsSUFibkIsRUFjUixDQUFDQyxJQUFELENBZFEsRUFjQSxDQUFDQSxJQUFELENBZEEsRUFjUSxDQUFDQSxJQUFELENBZFIsRUFjZ0IsSUFkaEIsRUFlUixDQUFDRCxLQUFELENBZlEsRUFlQyxJQWZELEVBZU8sQ0FBQ0MsSUFBRCxDQWZQLEVBZWUsSUFmZixFQWdCUixDQUFDQSxJQUFELEVBQU9ELEtBQVAsQ0FoQlEsRUFnQk8sSUFoQlAsRUFnQmEsSUFoQmIsRUFnQm1CLElBaEJuQixFQWlCUixDQUFDRSxFQUFELENBakJRLEVBaUJGLElBakJFLEVBaUJJLENBQUNDLElBQUQsQ0FqQkosRUFpQlksSUFqQlosRUFrQlIsQ0FBQ0QsRUFBRCxDQWxCUSxFQWtCRixJQWxCRSxFQWtCSSxDQUFDQyxJQUFELENBbEJKLEVBa0JZLElBbEJaLEVBbUJSLENBQUNELEVBQUQsQ0FuQlEsRUFtQkYsSUFuQkUsRUFtQkksQ0FBQ0MsSUFBRCxDQW5CSixFQW1CWSxJQW5CWixFQW9CUixDQUFDRCxFQUFELENBcEJRLEVBb0JGLENBQUNBLEVBQUQsQ0FwQkUsRUFvQkksQ0FBQ0MsSUFBRCxDQXBCSixFQW9CWSxDQUFDQSxJQUFELENBcEJaLEVBcUJSLENBQUNELEVBQUQsQ0FyQlEsRUFxQkYsQ0FBQ0MsSUFBRCxDQXJCRSxFQXFCTSxDQUFDRCxFQUFELENBckJOLEVBcUJZLElBckJaLEVBc0JSLENBQUNDLElBQUQsQ0F0QlEsRUFzQkEsSUF0QkEsRUFzQk0sQ0FBQ0EsSUFBRCxDQXRCTixFQXNCYyxJQXRCZCxFQXVCUixDQUFDSCxLQUFELENBdkJRLEVBdUJDLElBdkJELEVBdUJPLElBdkJQLEVBdUJhLElBdkJiLEVBd0JSLENBQUNDLElBQUQsQ0F4QlEsRUF3QkEsSUF4QkEsRUF3Qk0sQ0FBQ0EsSUFBRCxDQXhCTixFQXdCYyxJQXhCZCxFQXlCUixDQUFDRSxJQUFELENBekJRLEVBeUJBLElBekJBLEVBeUJNLElBekJOLEVBeUJZLElBekJaLEVBMEJSLENBQUNGLElBQUQsQ0ExQlEsRUEwQkEsSUExQkEsRUEwQk0sQ0FBQ0EsSUFBRCxDQTFCTixFQTBCYyxJQTFCZCxFQTJCUixDQUFDQyxFQUFELENBM0JRLEVBMkJGLElBM0JFLEVBMkJJLElBM0JKLEVBMkJVLElBM0JWLEVBNEJSLENBQUNDLElBQUQsQ0E1QlEsRUE0QkEsSUE1QkEsRUE0Qk0sQ0FBQ0EsSUFBRCxDQTVCTixFQTRCYyxJQTVCZCxFQTZCUixDQUFDRixJQUFELEVBQU9ELEtBQVAsQ0E3QlEsRUE2Qk8sSUE3QlAsRUE2QmEsSUE3QmIsRUE2Qm1CLElBN0JuQixFQThCUixDQUFDRSxFQUFELENBOUJRLEVBOEJGLElBOUJFLEVBOEJJLElBOUJKLEVBOEJVLElBOUJWLEVBK0JSLENBQUNBLEVBQUQsQ0EvQlEsRUErQkYsQ0FBQ0EsRUFBRCxDQS9CRSxFQStCSSxDQUFDQSxFQUFELENBL0JKLEVBK0JVLElBL0JWLEVBZ0NSLENBQUNDLElBQUQsQ0FoQ1EsRUFnQ0EsSUFoQ0EsRUFnQ00sSUFoQ04sRUFnQ1ksSUFoQ1osRUFpQ1IsQ0FBQ0EsSUFBRCxDQWpDUSxFQWlDQSxDQUFDQSxJQUFELENBakNBLEVBaUNRLENBQUNBLElBQUQsQ0FqQ1IsRUFpQ2dCLElBakNoQixFQWtDUixDQUFDSCxLQUFELENBbENRLEVBa0NDLElBbENELEVBa0NPLElBbENQLEVBa0NhLElBbENiLEVBbUNSLENBQUNBLEtBQUQsQ0FuQ1EsRUFtQ0MsQ0FBQ0EsS0FBRCxDQW5DRCxFQW1DVSxDQUFDQSxLQUFELENBbkNWLEVBbUNtQixJQW5DbkIsRUFvQ1IsQ0FBQ0MsSUFBRCxDQXBDUSxFQW9DQSxJQXBDQSxFQW9DTSxDQUFDQSxJQUFELENBcENOLEVBb0NjLElBcENkLEVBcUNSLENBQUNBLElBQUQsQ0FyQ1EsRUFxQ0EsQ0FBQ0EsSUFBRCxDQXJDQSxFQXFDUSxDQUFDQSxJQUFELENBckNSLEVBcUNnQixJQXJDaEIsRUFzQ1IsQ0FBQ0MsRUFBRCxDQXRDUSxFQXNDRixJQXRDRSxFQXNDSSxJQXRDSixFQXNDVSxJQXRDVixFQXVDUixDQUFDRCxJQUFELENBdkNRLEVBdUNBLElBdkNBLEVBdUNNLElBdkNOLEVBdUNZLElBdkNaLEVBd0NSLENBQUNBLElBQUQsQ0F4Q1EsRUF3Q0EsSUF4Q0EsRUF3Q00sSUF4Q04sRUF3Q1ksSUF4Q1osRUF5Q1IsQ0FBQ0QsS0FBRCxDQXpDUSxFQXlDQyxJQXpDRCxFQXlDTyxJQXpDUCxFQXlDYSxJQXpDYixFQTBDUixDQUFDRyxJQUFELENBMUNRLEVBMENBLElBMUNBLEVBMENNLElBMUNOLEVBMENZLElBMUNaLEVBMkNSLENBQUNILEtBQUQsQ0EzQ1EsRUEyQ0MsSUEzQ0QsRUEyQ08sSUEzQ1AsRUEyQ2EsSUEzQ2IsRUE0Q1IsQ0FBQ0MsSUFBRCxDQTVDUSxFQTRDQSxJQTVDQSxFQTRDTSxDQUFDRCxLQUFELENBNUNOLEVBNENlLElBNUNmLEVBNkNSLENBQUNDLElBQUQsRUFBT0QsS0FBUCxDQTdDUSxFQTZDTyxJQTdDUCxFQTZDYSxJQTdDYixFQTZDbUIsSUE3Q25CLEVBOENSLENBQUNBLEtBQUQsQ0E5Q1EsRUE4Q0MsSUE5Q0QsRUE4Q08sQ0FBQ0EsS0FBRCxDQTlDUCxFQThDZ0IsSUE5Q2hCLEVBK0NSLENBQUNBLEtBQUQsQ0EvQ1EsRUErQ0MsSUEvQ0QsRUErQ08sQ0FBQ0csSUFBRCxDQS9DUCxFQStDZSxDQUFDQSxJQUFELENBL0NmLEVBZ0RSLENBQUNBLElBQUQsQ0FoRFEsRUFnREEsSUFoREEsRUFnRE0sQ0FBQ0EsSUFBRCxDQWhETixFQWdEYyxJQWhEZCxFQWlEUixDQUFDQSxJQUFELENBakRRLEVBaURBLElBakRBLEVBaURNLENBQUNELEVBQUQsQ0FqRE4sRUFpRFksQ0FBQ0EsRUFBRCxDQWpEWixFQWtEUixDQUFDQSxFQUFELENBbERRLEVBa0RGLElBbERFLEVBa0RJLENBQUNBLEVBQUQsQ0FsREosRUFrRFUsSUFsRFYsRUFtRFIsQ0FBQ0EsRUFBRCxDQW5EUSxFQW1ERixJQW5ERSxFQW1ESSxDQUFDRCxJQUFELENBbkRKLEVBbURZLENBQUNBLElBQUQsQ0FuRFosRUFvRFIsQ0FBQ0EsSUFBRCxDQXBEUSxFQW9EQSxJQXBEQSxFQW9ETSxDQUFDQSxJQUFELENBcEROLEVBb0RjLElBcERkLEVBcURSLENBQUNBLElBQUQsQ0FyRFEsRUFxREEsSUFyREEsRUFxRE0sSUFyRE4sRUFxRFksSUFyRFosRUFzRFIsQ0FBQ0QsS0FBRCxDQXREUSxFQXNEQyxDQUFDQSxLQUFELENBdERELEVBc0RVLENBQUNBLEtBQUQsQ0F0RFYsRUFzRG1CLElBdERuQixFQXVEUixDQUFDQyxJQUFELENBdkRRLEVBdURBLElBdkRBLEVBdURNLENBQUNBLElBQUQsQ0F2RE4sRUF1RGMsSUF2RGQsRUF3RFIsQ0FBQ0MsRUFBRCxDQXhEUSxFQXdERixDQUFDQSxFQUFELENBeERFLEVBd0RJLENBQUNBLEVBQUQsQ0F4REosRUF3RFUsSUF4RFYsRUF5RFIsQ0FBQ0MsSUFBRCxDQXpEUSxFQXlEQSxJQXpEQSxFQXlETSxDQUFDQSxJQUFELENBekROLEVBeURjLElBekRkLEVBMERSLENBQUNELEVBQUQsQ0ExRFEsRUEwREYsQ0FBQ0EsRUFBRCxDQTFERSxFQTBESSxDQUFDQSxFQUFELENBMURKLEVBMERVLElBMURWLEVBMkRSLENBQUNDLElBQUQsQ0EzRFEsRUEyREEsQ0FBQ0EsSUFBRCxDQTNEQSxFQTJEUSxDQUFDQSxJQUFELENBM0RSLEVBMkRnQixJQTNEaEIsRUE0RFIsQ0FBQ0QsRUFBRCxDQTVEUSxFQTRERixJQTVERSxFQTRESSxDQUFDQyxJQUFELENBNURKLEVBNERZLElBNURaLEVBNkRSLENBQUNELEVBQUQsRUFBS0MsSUFBTCxDQTdEUSxFQTZESSxJQTdESixFQTZEVSxJQTdEVixFQTZEZ0IsSUE3RGhCLEVBOERSLENBQUNGLElBQUQsQ0E5RFEsRUE4REEsSUE5REEsRUE4RE0sSUE5RE4sRUE4RFksSUE5RFosQ0FBWjtBQWlFTyxTQUFTOUQsT0FBVCxDQUFpQm1FLE9BQWpCLEVBQTBCO0FBQzdCLFVBQVFBLE9BQVI7QUFDRixTQUFLLENBQUw7QUFDVSxhQUFPRixLQUFQOztBQUNKLFNBQUssQ0FBTDtBQUNJLGFBQU9DLEtBQVA7QUFKUjtBQU1ILEM7Ozs7Ozs7Ozs7OztBQ3RKRDtBQUFBO0FBQUE7QUFBQSxJQUFJRSxTQUFTLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsQ0FBaEI7QUFFTyxTQUFTbkQsZ0JBQVQsQ0FBMEJDLENBQTFCLEVBQTZCO0FBQ2hDLE1BQUlBLENBQUMsQ0FBQ0MsR0FBRixLQUFVLFdBQWQsRUFBMkI7QUFDdkIsUUFBSWtELFdBQVcsR0FBRyxLQUFsQjs7QUFDQSxTQUFLLElBQUk1RCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMkQsU0FBUyxDQUFDeEQsTUFBOUIsRUFBc0NILENBQUMsRUFBdkMsRUFBMkM7QUFFdkMsVUFBSTZELElBQUksR0FBRzFGLFFBQVEsQ0FBQ2lCLHNCQUFULENBQWdDdUUsU0FBUyxDQUFDM0QsQ0FBRCxDQUF6QyxFQUE4QyxDQUE5QyxDQUFYO0FBQ0EsVUFBSThELElBQUksR0FBRzNGLFFBQVEsQ0FBQ2lCLHNCQUFULENBQWdDdUUsU0FBUyxDQUFDM0QsQ0FBQyxHQUFHLENBQUwsQ0FBekMsRUFBa0QsQ0FBbEQsQ0FBWDtBQUVBLFVBQUkrRCxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0JKLElBQXhCLEVBQThCLElBQTlCLEVBQW9DSyxnQkFBcEMsQ0FBcUQsV0FBckQsQ0FBZDtBQUNBLFVBQUlDLE1BQU0sR0FBR0osT0FBTyxDQUFDSyxLQUFSLENBQWMsR0FBZCxFQUFtQixDQUFuQixDQUFiO0FBQUEsVUFDSUQsTUFBTSxHQUFHQSxNQUFNLENBQUNDLEtBQVAsQ0FBYSxHQUFiLEVBQWtCLENBQWxCLENBRGI7QUFBQSxVQUVJRCxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLEdBQWIsQ0FGYjtBQUdBLFVBQUlDLEtBQUssR0FBR0MsUUFBUSxDQUFDSCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVJLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBRCxDQUFwQjtBQUNBLFVBQUlDLEtBQUssR0FBR0YsUUFBUSxDQUFDSCxNQUFNLENBQUMsQ0FBRCxDQUFQLENBQXBCO0FBQ0EsVUFBSW5FLENBQUMsS0FBSyxDQUFWLEVBQWE2RCxJQUFJLENBQUNyRSxLQUFMLENBQVdpRixTQUFYLHVCQUFvQyxFQUFwQyxVQUE2QyxDQUFDLEdBQTlDLFNBQWIsS0FDSztBQUNELFlBQUlDLE1BQU0sU0FBVjtBQUNBQSxjQUFNLEdBQUlkLFdBQUQsdUJBQTZCUyxLQUFLLEdBQUcsRUFBckMsaUJBQThDRyxLQUFLLEdBQUcsRUFBdEQsK0JBQTZFSCxLQUFLLEdBQUcsRUFBckYsaUJBQThGRyxLQUFLLEdBQUcsRUFBdEcsUUFBVDtBQUNBWCxZQUFJLENBQUNyRSxLQUFMLENBQVdpRixTQUFYLEdBQXVCQyxNQUF2QjtBQUNIOztBQUNELFVBQUliLElBQUksQ0FBQ2hELFNBQUwsQ0FBZUMsUUFBZixDQUF3QixRQUF4QixLQUFxQyxDQUFDOEMsV0FBMUMsRUFBdUQ7QUFDbkRBLG1CQUFXLEdBQUcsSUFBZDtBQUNBQyxZQUFJLENBQUNoRCxTQUFMLENBQWU4RCxNQUFmLENBQXNCLFFBQXRCO0FBQ0FiLFlBQUksQ0FBQ2pELFNBQUwsQ0FBZStELEdBQWYsQ0FBbUIsUUFBbkI7QUFDSDtBQUVKOztBQUNEakIsYUFBUyxDQUFDakMsSUFBVixDQUFlaUMsU0FBUyxDQUFDa0IsS0FBVixFQUFmO0FBQ0g7O0FBR0QsTUFBSXBFLENBQUMsQ0FBQ0MsR0FBRixLQUFVLFlBQWQsRUFBNEI7QUFDeEIsUUFBSWtELFlBQVcsR0FBRyxLQUFsQjs7QUFDQSxTQUFLLElBQUk1RCxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHMkQsU0FBUyxDQUFDeEQsTUFBOUIsRUFBc0NILEVBQUMsRUFBdkMsRUFBMkM7QUFFdkMsVUFBSTZELEtBQUksR0FBRzFGLFFBQVEsQ0FBQ2lCLHNCQUFULENBQWdDdUUsU0FBUyxDQUFDM0QsRUFBRCxDQUF6QyxFQUE4QyxDQUE5QyxDQUFYO0FBQ0EsVUFBSThELEtBQUksR0FBRzNGLFFBQVEsQ0FBQ2lCLHNCQUFULENBQWdDdUUsU0FBUyxDQUFDM0QsRUFBQyxHQUFHLENBQUwsQ0FBekMsRUFBa0QsQ0FBbEQsQ0FBWDs7QUFFQSxVQUFJK0QsUUFBTyxHQUFHQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCSixLQUF4QixFQUE4QixJQUE5QixFQUFvQ0ssZ0JBQXBDLENBQXFELFdBQXJELENBQWQ7O0FBQ0EsVUFBSUMsTUFBTSxHQUFHSixRQUFPLENBQUNLLEtBQVIsQ0FBYyxHQUFkLEVBQW1CLENBQW5CLENBQWI7QUFBQSxVQUNJRCxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLEdBQWIsRUFBa0IsQ0FBbEIsQ0FEYjtBQUFBLFVBRUlELE1BQU0sR0FBR0EsTUFBTSxDQUFDQyxLQUFQLENBQWEsR0FBYixDQUZiOztBQUdBLFVBQUlDLE1BQUssR0FBR0MsUUFBUSxDQUFDSCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVJLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBRCxDQUFwQjs7QUFDQSxVQUFJQyxNQUFLLEdBQUdGLFFBQVEsQ0FBQ0gsTUFBTSxDQUFDLENBQUQsQ0FBUCxDQUFwQjs7QUFDQSxVQUFJTixLQUFJLENBQUNoRCxTQUFMLENBQWVDLFFBQWYsQ0FBd0IsUUFBeEIsS0FBcUMsQ0FBQzhDLFlBQTFDLEVBQXVEO0FBQ25EQSxvQkFBVyxHQUFHLElBQWQ7O0FBQ0FDLGFBQUksQ0FBQ2hELFNBQUwsQ0FBZThELE1BQWYsQ0FBc0IsUUFBdEI7O0FBQ0FiLGFBQUksQ0FBQ2pELFNBQUwsQ0FBZStELEdBQWYsQ0FBbUIsUUFBbkI7QUFDSDs7QUFFRCxVQUFJNUUsRUFBQyxLQUFLLENBQVYsRUFBYTZELEtBQUksQ0FBQ3JFLEtBQUwsQ0FBV2lGLFNBQVgsdUJBQW9DLEVBQXBDLFVBQTZDLEdBQTdDLFNBQWIsS0FDSztBQUNELFlBQUlDLE9BQU0sU0FBVjs7QUFDQUEsZUFBTSxHQUFHZCxZQUFXLHVCQUFnQlMsTUFBSyxHQUFHLEVBQXhCLGlCQUFpQ0csTUFBSyxHQUFHLEVBQXpDLCtCQUFnRUgsTUFBSyxHQUFHLEVBQXhFLGlCQUFpRkcsTUFBSyxHQUFHLEVBQXpGLFFBQXBCO0FBQ0FYLGFBQUksQ0FBQ3JFLEtBQUwsQ0FBV2lGLFNBQVgsR0FBdUJDLE9BQXZCO0FBQ0g7QUFDSjs7QUFDRGYsYUFBUyxDQUFDbUIsT0FBVixDQUFrQm5CLFNBQVMsQ0FBQ29CLEdBQVYsRUFBbEI7QUFDSDtBQUNKO0FBRU0sU0FBU3hFLFVBQVQsQ0FBb0J5RSxJQUFwQixFQUEwQkMsUUFBMUIsRUFBb0M7QUFDdkMsTUFBSUMsUUFBUSxHQUFHLENBQWY7QUFDQSxTQUFPLFlBQVk7QUFDZixRQUFJQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0QsR0FBTCxFQUFWOztBQUNBLFFBQUlELFFBQVEsR0FBR0QsUUFBWCxHQUFzQkUsR0FBMUIsRUFBK0I7QUFDM0JELGNBQVEsR0FBR0MsR0FBWDtBQUNBLGFBQU9ILElBQUksQ0FBQ0ssS0FBTCxDQUFXLElBQVgsRUFBaUJDLFNBQWpCLENBQVA7QUFDSDtBQUNKLEdBTkQ7QUFPSCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgc29uZ3NEb3duSGFuZGxlciwgc2Nyb2xsTWVudSB9IGZyb20gJy4vc29uZ3NfbWVudS5qcyc7XG5pbXBvcnQgeyBnZXRTb25nIH0gZnJvbSAnLi9zb25ncy5qcyc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xubGV0IGlkO1xuXG5sZXQgcmlnaHRfYXJyb3cgPSBuZXcgSW1hZ2UoKTtcbmxldCBsZWZ0X2Fycm93ID0gbmV3IEltYWdlKCk7XG5sZXQgdXBfYXJyb3cgPSBuZXcgSW1hZ2UoKTtcbmxldCBkb3duX2Fycm93ID0gbmV3IEltYWdlKCk7XG5cbnJpZ2h0X2Fycm93LnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfcmlnaHQucG5nJztcbmxlZnRfYXJyb3cuc3JjID0gJy4vc3ByaXRlcy9hcnJvd19sZWZ0LnBuZyc7XG51cF9hcnJvdy5zcmMgPSAnLi9zcHJpdGVzL2Fycm93X3VwLnBuZyc7XG5kb3duX2Fycm93LnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfZG93bi5wbmcnO1xuXG5sZXQgcmlnaHRfYXJyb3dfYWN0aXZlID0gbmV3IEltYWdlKCk7XG5sZXQgbGVmdF9hcnJvd19hY3RpdmUgPSBuZXcgSW1hZ2UoKTtcbmxldCB1cF9hcnJvd19hY3RpdmUgPSBuZXcgSW1hZ2UoKTtcbmxldCBkb3duX2Fycm93X2FjdGl2ZSA9IG5ldyBJbWFnZSgpO1xuXG5yaWdodF9hcnJvd19hY3RpdmUuc3JjID0gJy4vc3ByaXRlcy9hcnJvd19yaWdodF9hY3RpdmUucG5nJztcbmxlZnRfYXJyb3dfYWN0aXZlLnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfbGVmdF9hY3RpdmUucG5nJztcbnVwX2Fycm93X2FjdGl2ZS5zcmMgPSAnLi9zcHJpdGVzL2Fycm93X3VwX2FjdGl2ZS5wbmcnO1xuZG93bl9hcnJvd19hY3RpdmUuc3JjID0gJy4vc3ByaXRlcy9hcnJvd19kb3duX2FjdGl2ZS5wbmcnO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudUNvbnRhaW5lcicpWzBdO1xuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYW52YXNDb250YWluZXInKVswXTtcbiAgICBsZXQgc29uZyA9IGdldFNvbmcoMSk7XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcuL2JhY2tncm91bmRzL3BwcF9iZy5wbmcnKWA7XG5cbiAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcuL2JhY2tncm91bmRzL3BwcF9iZy5wbmcnKWA7XG5cbiAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKFwiLi9zb25ncy9wcHAubXAzXCIpO1xuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICBsZXQgYnBtID0gMzc1O1xuICAgIGRyYXdOb3RlKFtdKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGJlYXQgPSBzb25nW2ldO1xuICAgICAgICBpZiAoYmVhdCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkcmF3Tm90ZShiZWF0KSwgaSAqIGJwbSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvbmdCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudUNvbnRhaW5lcicpWzBdO1xuICAgIGxldCBzb25ncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NvbmdzQ29udGFpbmVyJylbMF07XG5cdG1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBzb25ncy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBsZXQgbWVudUF1ZGlvID0gbmV3IEF1ZGlvKCcuL3NvbmdzL2JlbnNvdW5kLXBvcGRhbmNlLm1wMycpO1xuICAgIG1lbnVBdWRpby5wbGF5KCk7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHlsZXNoZWV0JykuaHJlZiA9ICcuL2Nzcy9zb25ncy5jc3MnO1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgc2Nyb2xsTWVudShzb25nc0Rvd25IYW5kbGVyLCA0MDApLCBmYWxzZSk7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBtZW51QXVkaW8ucGF1c2UoKTtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHlsZXNoZWV0JykuaHJlZiA9ICcuL2Nzcy9zdHlsZXMuY3NzJztcbiAgICAgICAgICAgIGxldCBhY3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2MtMycpO1xuXHRcdFx0bGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzb25nc0NvbnRhaW5lcicpWzBdO1xuXHRcdFx0bGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhbnZhc0NvbnRhaW5lcicpWzBdO1xuICAgICAgICAgICAgbGV0IGF1ZGlvO1xuICAgICAgICAgICAgbGV0IGJwbTtcbiAgICAgICAgICAgIGxldCBzb25nO1xuXHRcdFx0bWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGF1ZGlvID0gbmV3IEF1ZGlvKCcuL3NvbmdzL3BwcC5tcDMnKTtcbiAgICAgICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuL2JhY2tncm91bmRzL3BwcF9iZy5wbmcnKVwiO1xuICAgICAgICAgICAgICAgIGJwbSA9IDM3NTtcbiAgICAgICAgICAgICAgICBzb25nID0gZ2V0U29uZygxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXVkaW8gPSBuZXcgQXVkaW8oJy4vc29uZ3Mvd3d3Lm9nZycpO1xuICAgICAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnLi9iYWNrZ3JvdW5kcy93d3dfYmcucG5nJylgO1xuICAgICAgICAgICAgICAgIGJwbSA9IDQwMDtcbiAgICAgICAgICAgICAgICBzb25nID0gZ2V0U29uZygyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuXHRcdFx0YXVkaW8ucGxheSgpO1xuXHRcdFx0ZHJhd05vdGUoW10pO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzb25nLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCBiZWF0ID0gc29uZ1tpXTtcblx0XHRcdFx0aWYgKGJlYXQpIHtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IGRyYXdOb3RlKGJlYXQpLCBpICogYnBtKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59KTtcblxubGV0IGR4ID0gMTtcbmxldCBjdHg7XG5sZXQgbm90ZXMgPSBbXTtcbmxldCBjb21ibyA9IDA7XG5sZXQgc3BlZWQgPSAxOyAvLyBsb3dlciBpcyBmYXN0ZXJcbmxldCB5ID0gNjAwOyAvLyB2ZXJ0aWNhbCBvZmZzZXRcbmxldCBydW47XG5cbmxldCBkcmF3Tm90ZSA9IChiZWF0KSA9PiB7XG4gICAgaWYoYmVhdCkge1xuICAgICAgICBsZXQgbm90ZVg7XG4gICAgICAgICAgICBiZWF0LmZvckVhY2gobm90ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUuc3JjLmluY2x1ZGVzKCdsZWZ0JykpIG5vdGVYID0gMTAwO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnNyYy5pbmNsdWRlcygnZG93bicpKSBub3RlWCA9IDIwMDtcbiAgICAgICAgICAgICAgICBpZiAobm90ZS5zcmMuaW5jbHVkZXMoJ3VwJykpIG5vdGVYID0gMzAwO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnNyYy5pbmNsdWRlcygncmlnaHQnKSkgbm90ZVggPSA0MDA7XG4gICAgICAgICAgICAgICAgbm90ZXMucHVzaCh7IGltZzogbm90ZSwgXG4gICAgICAgICAgICAgICAgICAgIHg6IG5vdGVYLCBcbiAgICAgICAgICAgICAgICAgICAgeSwgXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ZWQ6IDBcbiAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNsZWFySW50ZXJ2YWwocnVuKTtcbiAgICBydW4gPSBzZXRJbnRlcnZhbCgoKSA9PiBkcmF3KG5vdGVzKSwgc3BlZWQpO1xufVxuXG5mdW5jdGlvbiBkcmF3KG5vdGVzKSB7XG4gICAgY3R4LmZvbnQgPSBcImJvbGQgMzBweCBIZWx2ZXRpY2FcIjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzAwMCc7XG5cbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDYwMCwgNjAwKTsgLy8gY2xlYXIgdGhlIGNhbnZhc1xuICAgIGlmIChyaWdodFByZXNzZWQpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShyaWdodF9hcnJvd19hY3RpdmUsIDQwMCwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShyaWdodF9hcnJvdywgNDAwLCAwKTtcbiAgICB9XG4gICAgaWYgKHVwUHJlc3NlZCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHVwX2Fycm93X2FjdGl2ZSwgMzAwLCAwKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodXBfYXJyb3csIDMwMCwgMCk7XG4gICAgfVxuICAgIGlmIChkb3duUHJlc3NlZCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGRvd25fYXJyb3dfYWN0aXZlLCAyMDAsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZG93bl9hcnJvdywgMjAwLCAwKTtcbiAgICB9XG4gICAgaWYgKGxlZnRQcmVzc2VkKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UobGVmdF9hcnJvd19hY3RpdmUsIDEwMCwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShsZWZ0X2Fycm93LCAxMDAsIDApO1xuICAgIH1cblxuICAgIGlmKG5vdGVzLmxlbmd0aCkge1xuICAgICAgICBub3Rlcy5mb3JFYWNoKG5vdGUgPT4ge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShub3RlLmltZywgbm90ZS54LCBub3RlLnkpO1xuXG4gICAgICAgICAgICBpZihub3RlLnggPT09IDEwMCAmJiAhbm90ZS5zY29yZSAmJiBsZWZ0UHJlc3NlZCkge1xuICAgICAgICAgICAgICAgIGlmKG5vdGUueSA8PSAzMCAmJiBub3RlLnkgPj0gMjUpIG5vdGUuc2NvcmUgPSAnQmFkJztcbiAgICAgICAgICAgICAgICBpZihub3RlLnkgPD0gMjUgJiYgbm90ZS55ID49IDIwKSBub3RlLnNjb3JlID0gJ09LJztcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDIwICYmIG5vdGUueSA+PSAxMCkgbm90ZS5zY29yZSA9ICdHb29kJztcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDEwKSBub3RlLnNjb3JlID0gJ1BlcmZlY3QhJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vdGUueCA9PT0gMjAwICYmICFub3RlLnNjb3JlICYmIGRvd25QcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAzMCAmJiBub3RlLnkgPj0gMjUpIG5vdGUuc2NvcmUgPSAnQmFkJztcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDI1ICYmIG5vdGUueSA+PSAyMCkgbm90ZS5zY29yZSA9ICdPSyc7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAyMCAmJiBub3RlLnkgPj0gMTApIG5vdGUuc2NvcmUgPSAnR29vZCc7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAxMCkgbm90ZS5zY29yZSA9ICdQZXJmZWN0ISc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub3RlLnggPT09IDMwMCAmJiAhbm90ZS5zY29yZSAmJiB1cFByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDMwICYmIG5vdGUueSA+PSAyNSkgbm90ZS5zY29yZSA9ICdCYWQnO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMjUgJiYgbm90ZS55ID49IDIwKSBub3RlLnNjb3JlID0gJ09LJztcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDIwICYmIG5vdGUueSA+PSAxMCkgbm90ZS5zY29yZSA9ICdHb29kJztcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDEwKSBub3RlLnNjb3JlID0gJ1BlcmZlY3QhJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vdGUueCA9PT0gNDAwICYmICFub3RlLnNjb3JlICYmIHJpZ2h0UHJlc3NlZCkge1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMzAgJiYgbm90ZS55ID49IDI1KSBub3RlLnNjb3JlID0gJ0JhZCc7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAyNSAmJiBub3RlLnkgPj0gMjApIG5vdGUuc2NvcmUgPSAnT0snO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMjAgJiYgbm90ZS55ID49IDEwKSBub3RlLnNjb3JlID0gJ0dvb2QnO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMTApIG5vdGUuc2NvcmUgPSAnUGVyZmVjdCEnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm90ZS55IDwgMCAmJiAhbm90ZS5zY29yZSkge1xuICAgICAgICAgICAgICAgIG5vdGUuc2NvcmUgPSAnTWlzcyc7XG4gICAgICAgICAgICAgICAgY29tYm8gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm90ZS5zY29yZSAmJiAhbm90ZS5kaXNwbGF5ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobm90ZS5zY29yZSA9PSAnR29vZCcgfHwgbm90ZS5zY29yZSA9PSAnUGVyZmVjdCEnKSBjb21ibysrO1xuICAgICAgICAgICAgICAgIGVsc2UgY29tYm8gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEaXNwbGF5IHNjb3JlIGZvciA3MCBmcmFtZXNcbiAgICAgICAgICAgIGlmIChub3RlLnNjb3JlICYmIG5vdGUuZGlzcGxheWVkIDw9IDcwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc3dpdGNoIChub3RlLnNjb3JlKSB7XG5cdFx0XHRcdFx0Y2FzZSAnTWlzcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZS5zcmMgPSAnLi9zcHJpdGVzL21pc3MucG5nJztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ0JhZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZS5zcmMgPSAnLi9zcHJpdGVzL2JhZC5wbmcnO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnT0snOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmUuc3JjID0gJy4vc3ByaXRlcy9vay5wbmcnO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnR29vZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZS5zcmMgPSAnLi9zcHJpdGVzL2dyZWF0LnBuZyc7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdQZXJmZWN0ISc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZS5zcmMgPSAnLi9zcHJpdGVzL3BlcmZlY3QucG5nJztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShzY29yZSwgMjUwLCAxNTApO1xuICAgICAgICAgICAgICAgIG5vdGUuZGlzcGxheWVkKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vdGUueSAtPSBkeDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjb21ibyA+PSAyKSB7XG4gICAgICAgIGxldCBjb21ib1RleHQgPSBgJHtjb21ib30gY29tYm9gO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgICAgICBjdHguZmlsbFRleHQoY29tYm9UZXh0LCAyNjAsIDIyNSk7XG4gICAgICAgIGN0eC5zdHJva2VUZXh0KGNvbWJvVGV4dCwgMjYwLCAyMjUpO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgICBpZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcClcbn1cblxuaWYoYm9keSkge1xuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKVxuICAgIH0pXG59XG5cbmxldCB1cFByZXNzZWQgPSBmYWxzZTtcbmxldCBkb3duUHJlc3NlZCA9IGZhbHNlO1xubGV0IHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xubGV0IGxlZnRQcmVzc2VkID0gZmFsc2U7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duSGFuZGxlciwgZmFsc2UpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXlVcEhhbmRsZXIsIGZhbHNlKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGUpIHtcblx0c3dpdGNoIChlLmtleSkge1xuXHRcdGNhc2UgJ3cnOlxuXHRcdGNhc2UgJ0Fycm93VXAnOlxuXHRcdFx0dXBQcmVzc2VkID0gdHJ1ZTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ga2V5VXBIYW5kbGVyKGUpLCAxMDApO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAncyc6XG5cdFx0Y2FzZSAnQXJyb3dEb3duJzpcblx0XHRcdGRvd25QcmVzc2VkID0gdHJ1ZTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ga2V5VXBIYW5kbGVyKGUpLCAxMDApO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnQXJyb3dSaWdodCc6XG5cdFx0Y2FzZSAnZCc6XG5cdFx0XHRyaWdodFByZXNzZWQgPSB0cnVlO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiBrZXlVcEhhbmRsZXIoZSksIDEwMCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdhJzpcblx0XHRjYXNlICdBcnJvd0xlZnQnOlxuXHRcdFx0bGVmdFByZXNzZWQgPSB0cnVlO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiBrZXlVcEhhbmRsZXIoZSksIDEwMCk7XG5cdFx0XHRicmVhaztcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24ga2V5VXBIYW5kbGVyKGUpIHtcblx0c3dpdGNoIChlLmtleSkge1xuXHRcdGNhc2UgJ3cnOlxuXHRcdGNhc2UgJ0Fycm93VXAnOlxuXHRcdFx0dXBQcmVzc2VkID0gZmFsc2U7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdzJzpcblx0XHRjYXNlICdBcnJvd0Rvd24nOlxuXHRcdFx0ZG93blByZXNzZWQgPSBmYWxzZTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2QnOlxuXHRcdGNhc2UgJ0Fycm93UmlnaHQnOlxuXHRcdFx0cmlnaHRQcmVzc2VkID0gZmFsc2U7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdhJzpcblx0XHRjYXNlICdBcnJvd0xlZnQnOlxuXHRcdFx0bGVmdFByZXNzZWQgPSBmYWxzZTtcblx0XHRcdGJyZWFrO1xuXHR9XG59IiwibGV0IHJpZ2h0ID0gbmV3IEltYWdlKCk7XG5sZXQgbGVmdCA9IG5ldyBJbWFnZSgpO1xubGV0IHVwID0gbmV3IEltYWdlKCk7XG5sZXQgZG93biA9IG5ldyBJbWFnZSgpO1xuXG5yaWdodC5zcmMgPSAnLi9zcHJpdGVzL2Fycm93X3JpZ2h0X25vdGUucG5nJztcbmxlZnQuc3JjID0gJy4vc3ByaXRlcy9hcnJvd19sZWZ0X25vdGUucG5nJztcbnVwLnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfdXBfbm90ZS5wbmcnO1xuZG93bi5zcmMgPSAnLi9zcHJpdGVzL2Fycm93X2Rvd25fbm90ZS5wbmcnO1xuXG5sZXQgc29uZzEgPSBbXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIG51bGwsIG51bGwsIG51bGwsIG51bGwsXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW3VwXSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIG51bGwsIFtyaWdodF0sXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgW3VwXSxcbiAgICBbcmlnaHRdLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgW3VwXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBudWxsLCBbbGVmdF0sXG4gICAgW3VwXSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgbnVsbCwgW2Rvd25dLFxuICAgIFtsZWZ0LCByaWdodF0sIG51bGwsIFtsZWZ0XSwgW3JpZ2h0XSxcbiAgICBbdXBdLCBbZG93bl0sIFt1cF0sIFtkb3duXSxcbiAgICBbcmlnaHRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgW2xlZnRdLCBbZG93bl0sIFt1cF0sXG4gICAgW2xlZnQsIHJpZ2h0XSwgbnVsbCwgW3JpZ2h0XSwgW2Rvd25dLFxuICAgIFtsZWZ0XSwgW3VwXSwgW2xlZnRdLCBbdXBdLFxuICAgIFtkb3duXSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbZG93bl0sIFtyaWdodF0sIFt1cF0sIFtsZWZ0XSxcbiAgICBbdXBdLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW2xlZnRdLCBbdXAsIGRvd25dLCBbcmlnaHRdLCBbdXAsIGRvd25dLFxuICAgIFtkb3duXSwgbnVsbCwgW3VwXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBbdXAsIGRvd25dLCBbbGVmdF0sIFt1cCwgZG93bl0sXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtkb3duXSwgW2xlZnQsIHJpZ2h0XSwgW3VwXSwgW2xlZnQsIHJpZ2h0XSxcbiAgICBbbGVmdF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW2xlZnQsIHJpZ2h0XSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIG51bGwsIFtyaWdodF0sXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgW3VwXSxcbiAgICBbcmlnaHRdLCBbZG93bl0sIFt1cF0sIFtsZWZ0XSxcbiAgICBbcmlnaHRdLCBbdXBdLCBbbGVmdF0sIFtkb3duXSxcbiAgICBbbGVmdF0sIFt1cF0sIFtkb3duXSwgW3JpZ2h0XSxcbiAgICBbbGVmdF0sIFtkb3duXSwgW3JpZ2h0XSwgW3VwXSxcbiAgICBbcmlnaHRdLCBbdXBdLCBbZG93bl0sIFtsZWZ0XSxcbiAgICBbcmlnaHRdLCBbbGVmdF0sIFt1cF0sIFtkb3duXSxcbiAgICBbbGVmdF0sIFtkb3duXSwgW3VwXSwgW3JpZ2h0XSxcbiAgICBbbGVmdF0sIFtyaWdodF0sIFtkb3duXSwgW2xlZnQsIHJpZ2h0XVxuXTtcblxuXG5sZXQgc29uZzIgPSBbXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIG51bGwsIG51bGwsIG51bGwsIG51bGwsXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgW3JpZ2h0XSwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdF0sIFtsZWZ0XSwgW2xlZnRdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFt1cF0sIFt1cF0sIFtkb3duXSwgW2Rvd25dLFxuICAgIFt1cF0sIFtkb3duXSwgW3VwXSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtsZWZ0LCByaWdodF0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbdXBdLCBbdXBdLCBbdXBdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbZG93bl0sIFtkb3duXSwgW2Rvd25dLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3JpZ2h0XSwgW3JpZ2h0XSwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbbGVmdF0sIFtsZWZ0XSwgW2xlZnRdLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2Rvd25dLCBbZG93bl0sXG4gICAgW2Rvd25dLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBbdXBdLFxuICAgIFt1cF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2xlZnRdLCBbbGVmdF0sXG4gICAgW2xlZnRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtyaWdodF0sIFtyaWdodF0sIFtyaWdodF0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW3VwXSwgW3VwXSwgW3VwXSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbdXBdLCBbdXBdLCBbdXBdLCBudWxsLFxuICAgIFtkb3duXSwgW2Rvd25dLCBbZG93bl0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFt1cCwgZG93bl0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBudWxsLCBudWxsXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U29uZyhzb25nTnVtKSB7XG4gICAgc3dpdGNoIChzb25nTnVtKSB7XG5cdFx0Y2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHNvbmcxO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gc29uZzI7XG5cdH1cbn0iLCJsZXQgc29uZ3NMaXN0ID0gWydjLTEnLCAnYy0yJywgJ2MtMycsICdjLTQnLCAnYy01J107XG5cbmV4cG9ydCBmdW5jdGlvbiBzb25nc0Rvd25IYW5kbGVyKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgbGV0IGZvdW5kQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29uZ3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGxldCBjdXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzb25nc0xpc3RbaV0pWzBdO1xuICAgICAgICAgICAgbGV0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNvbmdzTGlzdFtpICsgMV0pWzBdO1xuXG4gICAgICAgICAgICBsZXQgY3VyclBvcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGN1cnIsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoXCJ0cmFuc2Zvcm1cIik7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gY3VyclBvcy5zcGxpdCgnKCcpWzFdLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zcGxpdCgnKScpWzBdLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgbGV0IGN1cnJYID0gcGFyc2VJbnQodmFsdWVzWzRdLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIGxldCBjdXJyWSA9IHBhcnNlSW50KHZhbHVlc1s1XSk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkgY3Vyci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7NjB9cHgsICR7LTE2MH1weClgO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1BvcztcbiAgICAgICAgICAgICAgICBuZXdQb3MgPSAoZm91bmRBY3RpdmUpID8gYHRyYW5zbGF0ZSgke2N1cnJYIC0gMzB9cHgsICR7Y3VyclkgKyA4MH1weClgIDogYHRyYW5zbGF0ZSgke2N1cnJYICsgMzB9cHgsICR7Y3VyclkgKyA4MH1weClgXG4gICAgICAgICAgICAgICAgY3Vyci5zdHlsZS50cmFuc2Zvcm0gPSBuZXdQb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3Vyci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICYmICFmb3VuZEFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGZvdW5kQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjdXJyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIG5leHQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBzb25nc0xpc3QucHVzaChzb25nc0xpc3Quc2hpZnQoKSk7XG4gICAgfVxuXG5cbiAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgIGxldCBmb3VuZEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvbmdzTGlzdC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBsZXQgY3VyciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc29uZ3NMaXN0W2ldKVswXTtcbiAgICAgICAgICAgIGxldCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzb25nc0xpc3RbaSAtIDFdKVswXTtcblxuICAgICAgICAgICAgbGV0IGN1cnJQb3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjdXJyLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKFwidHJhbnNmb3JtXCIpO1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IGN1cnJQb3Muc3BsaXQoJygnKVsxXSxcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuc3BsaXQoJyknKVswXSxcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGxldCBjdXJyWCA9IHBhcnNlSW50KHZhbHVlc1s0XS5zbGljZSgxKSk7XG4gICAgICAgICAgICBsZXQgY3VyclkgPSBwYXJzZUludCh2YWx1ZXNbNV0pO1xuICAgICAgICAgICAgaWYgKGN1cnIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSAmJiAhZm91bmRBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBmb3VuZEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY3Vyci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBuZXh0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaSA9PT0gNCkgY3Vyci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7NjB9cHgsICR7MTYwfXB4KWA7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3UG9zO1xuICAgICAgICAgICAgICAgIG5ld1BvcyA9IGZvdW5kQWN0aXZlID8gYHRyYW5zbGF0ZSgke2N1cnJYICsgMzB9cHgsICR7Y3VyclkgLSA4MH1weClgIDogYHRyYW5zbGF0ZSgke2N1cnJYIC0gMzB9cHgsICR7Y3VyclkgLSA4MH1weClgO1xuICAgICAgICAgICAgICAgIGN1cnIuc3R5bGUudHJhbnNmb3JtID0gbmV3UG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNvbmdzTGlzdC51bnNoaWZ0KHNvbmdzTGlzdC5wb3AoKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsTWVudShmdW5jLCBpbnRlcnZhbCkge1xuICAgIHZhciBsYXN0Q2FsbCA9IDA7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGlmIChsYXN0Q2FsbCArIGludGVydmFsIDwgbm93KSB7XG4gICAgICAgICAgICBsYXN0Q2FsbCA9IG5vdztcbiAgICAgICAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9O1xufSJdLCJzb3VyY2VSb290IjoiIn0=