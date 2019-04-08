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
/* Main menu buttons */

var menu = document.getElementsByClassName('menuContainer')[0];
var canvas = document.getElementsByClassName('canvasContainer')[0];
var songSelect = document.getElementsByClassName('songsContainer')[0];
var menuAudio = new Audio('./songs/bensound-popdance.mp3');
var audio = new Audio("./songs/www.ogg");
var song;
var bpm;
var active;
document.getElementById('startBtn').addEventListener('click', function (event) {
  menu.style.display = 'none';
  body.style.backgroundImage = "url('./backgrounds/www_bg.png')";
  canvas.style.display = 'block';
  audio.play();
  song = Object(_songs_js__WEBPACK_IMPORTED_MODULE_1__["getSong"])(2);
  bpm = 700;
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
  menu.style.display = 'none';
  songSelect.style.display = 'block';
  menuAudio.play();
  document.getElementById('stylesheet').href = './css/songs.css';
  document.addEventListener('keydown', Object(_songs_menu_js__WEBPACK_IMPORTED_MODULE_0__["scrollMenu"])(_songs_menu_js__WEBPACK_IMPORTED_MODULE_0__["songsDownHandler"], 400), false);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      menuAudio.pause();
      menu.style.display = 'none';
      document.getElementById('stylesheet').href = './css/styles.css';
      active = document.getElementsByClassName('active')[0].classList.contains('c-3');

      if (active) {
        audio = new Audio('./songs/ppp.mp3');
        body.style.backgroundImage = "url('./backgrounds/ppp_bg.png')";
        bpm = 375;
        song = Object(_songs_js__WEBPACK_IMPORTED_MODULE_1__["getSong"])(1);
      } else {
        audio = new Audio('./songs/www.ogg');
        body.style.backgroundImage = "url('./backgrounds/www_bg.png')";
        bpm = 450;
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
/* Rendering */

var dx = 10;
var ctx;
var notes = [];
var combo = 0;
var comboText;
var speed = 30; // lower is faster

var noteX;
var y = 600; // vertical offset

var run;
var progress = 150;
var progressGradient;

var calculateScore = function calculateScore(pixels) {
  if (pixels <= 30 && pixels >= 25) return 'Bad';
  if (pixels <= 25 && pixels >= 20) return 'OK';
  if (pixels <= 20 && pixels >= 10) return 'Good';
  if (pixels <= 10) return 'Perfect!';
};

var drawNote = function drawNote(beat) {
  if (beat) {
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

var draw = function draw(notes) {
  ctx.font = "bold 30px Helvetica";
  progressGradient = ctx.createLinearGradient(550, 100 + progress, 580, 400);
  progressGradient.addColorStop(0, "blue");
  progressGradient.addColorStop(1, "red");
  ctx.fillStyle = progressGradient;
  ctx.strokeStyle = '#000';
  ctx.clearRect(0, 0, 600, 600); // clear the canvas

  ctx.beginPath();
  ctx.rect(550, 100, 30, 300);
  ctx.stroke();
  ctx.fillRect(550, 400 - progress, 30, progress);

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
        note.score = calculateScore(note.y);
      }

      if (note.x === 200 && !note.score && downPressed) {
        note.score = calculateScore(note.y);
      }

      if (note.x === 300 && !note.score && upPressed) {
        note.score = calculateScore(note.y);
      }

      if (note.x === 400 && !note.score && rightPressed) {
        note.score = calculateScore(note.y);
      }

      if (note.y < 0 && !note.score) {
        note.score = 'Miss';
        combo = 0;
      }

      if (note.score && !note.displayed) {
        if (note.score == 'Good' || note.score == 'Perfect!') {
          progress += 5;
          combo++;
        } else {
          progress -= 5;
          combo = 0;
        }
      } // Display score for 20 frames


      if (note.score && note.displayed <= 20) {
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
    comboText = "".concat(combo, " combo");
    ctx.fillStyle = '#fff';
    ctx.fillText(comboText, 260, 225);
    ctx.strokeText(comboText, 260, 225);
  }
};
/* Controls */


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
/* Animation */

function gameLoop() {
  id = requestAnimationFrame(gameLoop);
}

if (body) {
  body.addEventListener('click', function () {
    cancelAnimationFrame(id);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zb25ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc29uZ3NfbWVudS5qcyJdLCJuYW1lcyI6WyJib2R5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImlkIiwicmlnaHRfYXJyb3ciLCJJbWFnZSIsImxlZnRfYXJyb3ciLCJ1cF9hcnJvdyIsImRvd25fYXJyb3ciLCJzcmMiLCJyaWdodF9hcnJvd19hY3RpdmUiLCJsZWZ0X2Fycm93X2FjdGl2ZSIsInVwX2Fycm93X2FjdGl2ZSIsImRvd25fYXJyb3dfYWN0aXZlIiwibWVudSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjYW52YXMiLCJzb25nU2VsZWN0IiwibWVudUF1ZGlvIiwiQXVkaW8iLCJhdWRpbyIsInNvbmciLCJicG0iLCJhY3RpdmUiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInN0eWxlIiwiZGlzcGxheSIsImJhY2tncm91bmRJbWFnZSIsInBsYXkiLCJnZXRTb25nIiwiZHJhd05vdGUiLCJpIiwiYmVhdCIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJocmVmIiwic2Nyb2xsTWVudSIsInNvbmdzRG93bkhhbmRsZXIiLCJlIiwia2V5IiwicGF1c2UiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImR4IiwiY3R4Iiwibm90ZXMiLCJjb21ibyIsImNvbWJvVGV4dCIsInNwZWVkIiwibm90ZVgiLCJ5IiwicnVuIiwicHJvZ3Jlc3MiLCJwcm9ncmVzc0dyYWRpZW50IiwiY2FsY3VsYXRlU2NvcmUiLCJwaXhlbHMiLCJmb3JFYWNoIiwibm90ZSIsImluY2x1ZGVzIiwicHVzaCIsImltZyIsIngiLCJzY29yZSIsImRpc3BsYXllZCIsImdldENvbnRleHQiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJkcmF3IiwiZm9udCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJjbGVhclJlY3QiLCJiZWdpblBhdGgiLCJyZWN0Iiwic3Ryb2tlIiwiZmlsbFJlY3QiLCJyaWdodFByZXNzZWQiLCJkcmF3SW1hZ2UiLCJ1cFByZXNzZWQiLCJkb3duUHJlc3NlZCIsImxlZnRQcmVzc2VkIiwiZmlsbFRleHQiLCJzdHJva2VUZXh0Iiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJnYW1lTG9vcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmlnaHQiLCJsZWZ0IiwidXAiLCJkb3duIiwic29uZzEiLCJzb25nMiIsInNvbmdOdW0iLCJzb25nc0xpc3QiLCJmb3VuZEFjdGl2ZSIsImN1cnIiLCJuZXh0IiwiY3VyclBvcyIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwidmFsdWVzIiwic3BsaXQiLCJjdXJyWCIsInBhcnNlSW50Iiwic2xpY2UiLCJjdXJyWSIsInRyYW5zZm9ybSIsIm5ld1BvcyIsInJlbW92ZSIsImFkZCIsInNoaWZ0IiwidW5zaGlmdCIsInBvcCIsImZ1bmMiLCJpbnRlcnZhbCIsImxhc3RDYWxsIiwibm93IiwiRGF0ZSIsImFwcGx5IiwiYXJndW1lbnRzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7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QVYsQ0FBa0JuQixTQUFTLENBQUNvQixHQUFWLEVBQWxCO0FBQ0g7QUFDSjtBQUVNLFNBQVNqRixVQUFULENBQW9Ca0YsSUFBcEIsRUFBMEJDLFFBQTFCLEVBQW9DO0FBQ3ZDLE1BQUlDLFFBQVEsR0FBRyxDQUFmO0FBQ0EsU0FBTyxZQUFZO0FBQ2YsUUFBSUMsR0FBRyxHQUFHQyxJQUFJLENBQUNELEdBQUwsRUFBVjs7QUFDQSxRQUFJRCxRQUFRLEdBQUdELFFBQVgsR0FBc0JFLEdBQTFCLEVBQStCO0FBQzNCRCxjQUFRLEdBQUdDLEdBQVg7QUFDQSxhQUFPSCxJQUFJLENBQUNLLEtBQUwsQ0FBVyxJQUFYLEVBQWlCQyxTQUFqQixDQUFQO0FBQ0g7QUFDSixHQU5EO0FBT0gsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IHNvbmdzRG93bkhhbmRsZXIsIHNjcm9sbE1lbnUgfSBmcm9tICcuL3NvbmdzX21lbnUuanMnO1xuaW1wb3J0IHsgZ2V0U29uZyB9IGZyb20gJy4vc29uZ3MuanMnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbmxldCBpZDtcblxubGV0IHJpZ2h0X2Fycm93ID0gbmV3IEltYWdlKCk7XG5sZXQgbGVmdF9hcnJvdyA9IG5ldyBJbWFnZSgpO1xubGV0IHVwX2Fycm93ID0gbmV3IEltYWdlKCk7XG5sZXQgZG93bl9hcnJvdyA9IG5ldyBJbWFnZSgpO1xuXG5yaWdodF9hcnJvdy5zcmMgPSAnLi9zcHJpdGVzL2Fycm93X3JpZ2h0LnBuZyc7XG5sZWZ0X2Fycm93LnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfbGVmdC5wbmcnO1xudXBfYXJyb3cuc3JjID0gJy4vc3ByaXRlcy9hcnJvd191cC5wbmcnO1xuZG93bl9hcnJvdy5zcmMgPSAnLi9zcHJpdGVzL2Fycm93X2Rvd24ucG5nJztcblxubGV0IHJpZ2h0X2Fycm93X2FjdGl2ZSA9IG5ldyBJbWFnZSgpO1xubGV0IGxlZnRfYXJyb3dfYWN0aXZlID0gbmV3IEltYWdlKCk7XG5sZXQgdXBfYXJyb3dfYWN0aXZlID0gbmV3IEltYWdlKCk7XG5sZXQgZG93bl9hcnJvd19hY3RpdmUgPSBuZXcgSW1hZ2UoKTtcblxucmlnaHRfYXJyb3dfYWN0aXZlLnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfcmlnaHRfYWN0aXZlLnBuZyc7XG5sZWZ0X2Fycm93X2FjdGl2ZS5zcmMgPSAnLi9zcHJpdGVzL2Fycm93X2xlZnRfYWN0aXZlLnBuZyc7XG51cF9hcnJvd19hY3RpdmUuc3JjID0gJy4vc3ByaXRlcy9hcnJvd191cF9hY3RpdmUucG5nJztcbmRvd25fYXJyb3dfYWN0aXZlLnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfZG93bl9hY3RpdmUucG5nJztcblxuLyogTWFpbiBtZW51IGJ1dHRvbnMgKi9cblxubGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51Q29udGFpbmVyJylbMF07XG5sZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FudmFzQ29udGFpbmVyJylbMF07XG5sZXQgc29uZ1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NvbmdzQ29udGFpbmVyJylbMF07XG5sZXQgbWVudUF1ZGlvID0gbmV3IEF1ZGlvKCcuL3NvbmdzL2JlbnNvdW5kLXBvcGRhbmNlLm1wMycpO1xubGV0IGF1ZGlvID0gbmV3IEF1ZGlvKFwiLi9zb25ncy93d3cub2dnXCIpO1xubGV0IHNvbmc7XG5sZXQgYnBtO1xubGV0IGFjdGl2ZTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0QnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcuL2JhY2tncm91bmRzL3d3d19iZy5wbmcnKWA7XG4gICAgY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICBzb25nID0gZ2V0U29uZygyKTtcbiAgICBicG0gPSA3MDA7XG4gICAgZHJhd05vdGUoW10pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29uZy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgYmVhdCA9IHNvbmdbaV07XG4gICAgICAgIGlmIChiZWF0KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRyYXdOb3RlKGJlYXQpLCBpICogYnBtKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29uZ0J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0bWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHNvbmdTZWxlY3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbWVudUF1ZGlvLnBsYXkoKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0eWxlc2hlZXQnKS5ocmVmID0gJy4vY3NzL3NvbmdzLmNzcyc7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzY3JvbGxNZW51KHNvbmdzRG93bkhhbmRsZXIsIDQwMCksIGZhbHNlKTtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIG1lbnVBdWRpby5wYXVzZSgpO1xuXHRcdFx0bWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0eWxlc2hlZXQnKS5ocmVmID0gJy4vY3NzL3N0eWxlcy5jc3MnO1xuICAgICAgICAgICAgYWN0aXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJylbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjLTMnKTtcbiAgICAgICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBhdWRpbyA9IG5ldyBBdWRpbygnLi9zb25ncy9wcHAubXAzJyk7XG4gICAgICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi9iYWNrZ3JvdW5kcy9wcHBfYmcucG5nJylcIjtcbiAgICAgICAgICAgICAgICBicG0gPSAzNzU7XG4gICAgICAgICAgICAgICAgc29uZyA9IGdldFNvbmcoMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGF1ZGlvID0gbmV3IEF1ZGlvKCcuL3NvbmdzL3d3dy5vZ2cnKTtcbiAgICAgICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJy4vYmFja2dyb3VuZHMvd3d3X2JnLnBuZycpYDtcbiAgICAgICAgICAgICAgICBicG0gPSA0NTA7XG4gICAgICAgICAgICAgICAgc29uZyA9IGdldFNvbmcoMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cblx0XHRcdGF1ZGlvLnBsYXkoKTtcblx0XHRcdGRyYXdOb3RlKFtdKTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc29uZy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgYmVhdCA9IHNvbmdbaV07XG5cdFx0XHRcdGlmIChiZWF0KSB7XG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiBkcmF3Tm90ZShiZWF0KSwgaSAqIGJwbSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufSk7XG5cbi8qIFJlbmRlcmluZyAqL1xuXG5sZXQgZHggPSAxMDtcbmxldCBjdHg7XG5sZXQgbm90ZXMgPSBbXTtcbmxldCBjb21ibyA9IDA7XG5sZXQgY29tYm9UZXh0O1xubGV0IHNwZWVkID0gMzA7IC8vIGxvd2VyIGlzIGZhc3RlclxubGV0IG5vdGVYO1xubGV0IHkgPSA2MDA7IC8vIHZlcnRpY2FsIG9mZnNldFxubGV0IHJ1bjtcbmxldCBwcm9ncmVzcyA9IDE1MDtcbmxldCBwcm9ncmVzc0dyYWRpZW50O1xuXG5jb25zdCBjYWxjdWxhdGVTY29yZSA9IChwaXhlbHMpID0+IHtcbiAgICBpZiAocGl4ZWxzIDw9IDMwICYmIHBpeGVscyA+PSAyNSkgcmV0dXJuICdCYWQnO1xuICAgIGlmIChwaXhlbHMgPD0gMjUgJiYgcGl4ZWxzID49IDIwKSByZXR1cm4gJ09LJztcbiAgICBpZiAocGl4ZWxzIDw9IDIwICYmIHBpeGVscyA+PSAxMCkgcmV0dXJuICdHb29kJztcbiAgICBpZiAocGl4ZWxzIDw9IDEwKSByZXR1cm4gJ1BlcmZlY3QhJztcbn1cblxuY29uc3QgZHJhd05vdGUgPSAoYmVhdCkgPT4ge1xuICAgIGlmKGJlYXQpIHtcbiAgICAgICAgYmVhdC5mb3JFYWNoKG5vdGUgPT4ge1xuICAgICAgICAgICAgaWYgKG5vdGUuc3JjLmluY2x1ZGVzKCdsZWZ0JykpIG5vdGVYID0gMTAwO1xuICAgICAgICAgICAgaWYgKG5vdGUuc3JjLmluY2x1ZGVzKCdkb3duJykpIG5vdGVYID0gMjAwO1xuICAgICAgICAgICAgaWYgKG5vdGUuc3JjLmluY2x1ZGVzKCd1cCcpKSBub3RlWCA9IDMwMDtcbiAgICAgICAgICAgIGlmIChub3RlLnNyYy5pbmNsdWRlcygncmlnaHQnKSkgbm90ZVggPSA0MDA7XG4gICAgICAgICAgICBub3Rlcy5wdXNoKHsgaW1nOiBub3RlLCBcbiAgICAgICAgICAgICAgICB4OiBub3RlWCwgXG4gICAgICAgICAgICAgICAgeSwgXG4gICAgICAgICAgICAgICAgc2NvcmU6IG51bGwsXG4gICAgICAgICAgICAgICAgZGlzcGxheWVkOiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJyk7XG4gICAgY2xlYXJJbnRlcnZhbChydW4pO1xuICAgIHJ1biA9IHNldEludGVydmFsKCgpID0+IGRyYXcobm90ZXMpLCBzcGVlZCk7XG59XG5cbmNvbnN0IGRyYXcgPSAobm90ZXMpID0+IHtcbiAgICBjdHguZm9udCA9IFwiYm9sZCAzMHB4IEhlbHZldGljYVwiO1xuICAgIHByb2dyZXNzR3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoNTUwLCAxMDAgKyBwcm9ncmVzcywgNTgwLCA0MDApO1xuICAgIHByb2dyZXNzR3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIFwiYmx1ZVwiKTtcbiAgICBwcm9ncmVzc0dyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBcInJlZFwiKTtcbiAgICBjdHguZmlsbFN0eWxlID0gcHJvZ3Jlc3NHcmFkaWVudDtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzAwMCc7XG5cbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDYwMCwgNjAwKTsgLy8gY2xlYXIgdGhlIGNhbnZhc1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5yZWN0KDU1MCwgMTAwLCAzMCwgMzAwKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmZpbGxSZWN0KDU1MCwgNDAwIC0gcHJvZ3Jlc3MsIDMwLCBwcm9ncmVzcyk7XG5cbiAgICBpZiAocmlnaHRQcmVzc2VkKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UocmlnaHRfYXJyb3dfYWN0aXZlLCA0MDAsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UocmlnaHRfYXJyb3csIDQwMCwgMCk7XG4gICAgfVxuICAgIGlmICh1cFByZXNzZWQpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh1cF9hcnJvd19hY3RpdmUsIDMwMCwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh1cF9hcnJvdywgMzAwLCAwKTtcbiAgICB9XG4gICAgaWYgKGRvd25QcmVzc2VkKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZG93bl9hcnJvd19hY3RpdmUsIDIwMCwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShkb3duX2Fycm93LCAyMDAsIDApO1xuICAgIH1cbiAgICBpZiAobGVmdFByZXNzZWQpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShsZWZ0X2Fycm93X2FjdGl2ZSwgMTAwLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGxlZnRfYXJyb3csIDEwMCwgMCk7XG4gICAgfVxuXG4gICAgaWYobm90ZXMubGVuZ3RoKSB7XG4gICAgICAgIG5vdGVzLmZvckVhY2gobm90ZSA9PiB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKG5vdGUuaW1nLCBub3RlLngsIG5vdGUueSk7XG5cbiAgICAgICAgICAgIGlmKG5vdGUueCA9PT0gMTAwICYmICFub3RlLnNjb3JlICYmIGxlZnRQcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgbm90ZS5zY29yZSA9IGNhbGN1bGF0ZVNjb3JlKG5vdGUueSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm90ZS54ID09PSAyMDAgJiYgIW5vdGUuc2NvcmUgJiYgZG93blByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICBub3RlLnNjb3JlID0gY2FsY3VsYXRlU2NvcmUobm90ZS55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub3RlLnggPT09IDMwMCAmJiAhbm90ZS5zY29yZSAmJiB1cFByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICBub3RlLnNjb3JlID0gY2FsY3VsYXRlU2NvcmUobm90ZS55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub3RlLnggPT09IDQwMCAmJiAhbm90ZS5zY29yZSAmJiByaWdodFByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICBub3RlLnNjb3JlID0gY2FsY3VsYXRlU2NvcmUobm90ZS55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub3RlLnkgPCAwICYmICFub3RlLnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgbm90ZS5zY29yZSA9ICdNaXNzJztcbiAgICAgICAgICAgICAgICBjb21ibyA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub3RlLnNjb3JlICYmICFub3RlLmRpc3BsYXllZCkge1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnNjb3JlID09ICdHb29kJyB8fCBub3RlLnNjb3JlID09ICdQZXJmZWN0IScpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gNTtcbiAgICAgICAgICAgICAgICAgICAgY29tYm8rKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzIC09IDU7XG4gICAgICAgICAgICAgICAgICAgIGNvbWJvID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERpc3BsYXkgc2NvcmUgZm9yIDIwIGZyYW1lc1xuICAgICAgICAgICAgaWYgKG5vdGUuc2NvcmUgJiYgbm90ZS5kaXNwbGF5ZWQgPD0gMjApIHtcbiAgICAgICAgICAgICAgICBsZXQgc2NvcmUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5vdGUuc2NvcmUpIHtcblx0XHRcdFx0XHRjYXNlICdNaXNzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlLnNyYyA9ICcuL3Nwcml0ZXMvbWlzcy5wbmcnO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnQmFkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlLnNyYyA9ICcuL3Nwcml0ZXMvYmFkLnBuZyc7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdPSyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZS5zcmMgPSAnLi9zcHJpdGVzL29rLnBuZyc7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdHb29kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlLnNyYyA9ICcuL3Nwcml0ZXMvZ3JlYXQucG5nJztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ1BlcmZlY3QhJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlLnNyYyA9ICcuL3Nwcml0ZXMvcGVyZmVjdC5wbmcnO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHNjb3JlLCAyNTAsIDE1MCk7XG4gICAgICAgICAgICAgICAgbm90ZS5kaXNwbGF5ZWQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vdGUueSAtPSBkeDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbWJvID49IDIpIHtcbiAgICAgICAgY29tYm9UZXh0ID0gYCR7Y29tYm99IGNvbWJvYDtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICAgICAgY3R4LmZpbGxUZXh0KGNvbWJvVGV4dCwgMjYwLCAyMjUpO1xuICAgICAgICBjdHguc3Ryb2tlVGV4dChjb21ib1RleHQsIDI2MCwgMjI1KTtcbiAgICB9XG59XG5cbi8qIENvbnRyb2xzICovXG5cbmxldCB1cFByZXNzZWQgPSBmYWxzZTtcbmxldCBkb3duUHJlc3NlZCA9IGZhbHNlO1xubGV0IHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xubGV0IGxlZnRQcmVzc2VkID0gZmFsc2U7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duSGFuZGxlciwgZmFsc2UpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXlVcEhhbmRsZXIsIGZhbHNlKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGUpIHtcblx0c3dpdGNoIChlLmtleSkge1xuXHRcdGNhc2UgJ3cnOlxuXHRcdGNhc2UgJ0Fycm93VXAnOlxuXHRcdFx0dXBQcmVzc2VkID0gdHJ1ZTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ga2V5VXBIYW5kbGVyKGUpLCAxMDApO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAncyc6XG5cdFx0Y2FzZSAnQXJyb3dEb3duJzpcblx0XHRcdGRvd25QcmVzc2VkID0gdHJ1ZTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ga2V5VXBIYW5kbGVyKGUpLCAxMDApO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnQXJyb3dSaWdodCc6XG5cdFx0Y2FzZSAnZCc6XG5cdFx0XHRyaWdodFByZXNzZWQgPSB0cnVlO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiBrZXlVcEhhbmRsZXIoZSksIDEwMCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdhJzpcblx0XHRjYXNlICdBcnJvd0xlZnQnOlxuXHRcdFx0bGVmdFByZXNzZWQgPSB0cnVlO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiBrZXlVcEhhbmRsZXIoZSksIDEwMCk7XG5cdFx0XHRicmVhaztcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24ga2V5VXBIYW5kbGVyKGUpIHtcblx0c3dpdGNoIChlLmtleSkge1xuXHRcdGNhc2UgJ3cnOlxuXHRcdGNhc2UgJ0Fycm93VXAnOlxuXHRcdFx0dXBQcmVzc2VkID0gZmFsc2U7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdzJzpcblx0XHRjYXNlICdBcnJvd0Rvd24nOlxuXHRcdFx0ZG93blByZXNzZWQgPSBmYWxzZTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2QnOlxuXHRcdGNhc2UgJ0Fycm93UmlnaHQnOlxuXHRcdFx0cmlnaHRQcmVzc2VkID0gZmFsc2U7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdhJzpcblx0XHRjYXNlICdBcnJvd0xlZnQnOlxuXHRcdFx0bGVmdFByZXNzZWQgPSBmYWxzZTtcblx0XHRcdGJyZWFrO1xuXHR9XG59XG5cbi8qIEFuaW1hdGlvbiAqL1xuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgICBpZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcClcbn1cblxuaWYgKGJvZHkpIHtcbiAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShpZClcbiAgICB9KVxufSIsImxldCByaWdodCA9IG5ldyBJbWFnZSgpO1xubGV0IGxlZnQgPSBuZXcgSW1hZ2UoKTtcbmxldCB1cCA9IG5ldyBJbWFnZSgpO1xubGV0IGRvd24gPSBuZXcgSW1hZ2UoKTtcblxucmlnaHQuc3JjID0gJy4vc3ByaXRlcy9hcnJvd19yaWdodF9ub3RlLnBuZyc7XG5sZWZ0LnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfbGVmdF9ub3RlLnBuZyc7XG51cC5zcmMgPSAnLi9zcHJpdGVzL2Fycm93X3VwX25vdGUucG5nJztcbmRvd24uc3JjID0gJy4vc3ByaXRlcy9hcnJvd19kb3duX25vdGUucG5nJztcblxubGV0IHNvbmcxID0gW1xuICAgIG51bGwsIG51bGwsIG51bGwsIG51bGwsXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIG51bGwsIG51bGwsIG51bGwsIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgW3VwXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3VwXSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW3VwXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBudWxsLCBbcmlnaHRdLFxuICAgIFtkb3duXSwgbnVsbCwgW3VwXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW3VwXSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIG51bGwsIFt1cF0sXG4gICAgW3JpZ2h0XSwgbnVsbCwgW3VwXSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgbnVsbCwgW2xlZnRdLFxuICAgIFt1cF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIG51bGwsIFtkb3duXSxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBbbGVmdF0sIFtyaWdodF0sXG4gICAgW3VwXSwgW2Rvd25dLCBbdXBdLCBbZG93bl0sXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtyaWdodF0sIFtsZWZ0XSwgW2Rvd25dLCBbdXBdLFxuICAgIFtsZWZ0LCByaWdodF0sIG51bGwsIFtyaWdodF0sIFtkb3duXSxcbiAgICBbbGVmdF0sIFt1cF0sIFtsZWZ0XSwgW3VwXSxcbiAgICBbZG93bl0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW2Rvd25dLCBbcmlnaHRdLCBbdXBdLCBbbGVmdF0sXG4gICAgW3VwXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtsZWZ0XSwgW3VwLCBkb3duXSwgW3JpZ2h0XSwgW3VwLCBkb3duXSxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgW3VwLCBkb3duXSwgW2xlZnRdLCBbdXAsIGRvd25dLFxuICAgIFtyaWdodF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbZG93bl0sIFtsZWZ0LCByaWdodF0sIFt1cF0sIFtsZWZ0LCByaWdodF0sXG4gICAgW2xlZnRdLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtsZWZ0LCByaWdodF0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgW3VwXSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBudWxsLCBbcmlnaHRdLFxuICAgIFtkb3duXSwgbnVsbCwgW3VwXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW3VwXSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIG51bGwsIFt1cF0sXG4gICAgW3JpZ2h0XSwgW2Rvd25dLCBbdXBdLCBbbGVmdF0sXG4gICAgW3JpZ2h0XSwgW3VwXSwgW2xlZnRdLCBbZG93bl0sXG4gICAgW2xlZnRdLCBbdXBdLCBbZG93bl0sIFtyaWdodF0sXG4gICAgW2xlZnRdLCBbZG93bl0sIFtyaWdodF0sIFt1cF0sXG4gICAgW3JpZ2h0XSwgW3VwXSwgW2Rvd25dLCBbbGVmdF0sXG4gICAgW3JpZ2h0XSwgW2xlZnRdLCBbdXBdLCBbZG93bl0sXG4gICAgW2xlZnRdLCBbZG93bl0sIFt1cF0sIFtyaWdodF0sXG4gICAgW2xlZnRdLCBbcmlnaHRdLCBbZG93bl0sIFtsZWZ0LCByaWdodF1cbl07XG5cblxubGV0IHNvbmcyID0gW1xuICAgIG51bGwsIG51bGwsIG51bGwsIG51bGwsXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIG51bGwsIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtyaWdodF0sIFtyaWdodF0sIFtyaWdodF0sIG51bGwsXG4gICAgW2xlZnRdLCBbbGVmdF0sIFtsZWZ0XSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW2xlZnQsIHJpZ2h0XSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbdXBdLCBbdXBdLCBbZG93bl0sIFtkb3duXSxcbiAgICBbdXBdLCBbZG93bl0sIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3VwXSwgW3VwXSwgW3VwXSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW2Rvd25dLCBbZG93bl0sIFtkb3duXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtyaWdodF0sIFtyaWdodF0sIFtyaWdodF0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW2xlZnRdLCBbbGVmdF0sIFtsZWZ0XSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW2xlZnQsIHJpZ2h0XSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtkb3duXSwgW2Rvd25dLFxuICAgIFtkb3duXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgW3VwXSwgW3VwXSxcbiAgICBbdXBdLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtsZWZ0XSwgW2xlZnRdLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbcmlnaHRdLCBbcmlnaHRdLCBbcmlnaHRdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFt1cF0sIFt1cF0sIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW3VwXSwgW3VwXSwgW3VwXSwgbnVsbCxcbiAgICBbZG93bl0sIFtkb3duXSwgW2Rvd25dLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbdXAsIGRvd25dLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgbnVsbCwgbnVsbFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvbmcoc29uZ051bSkge1xuICAgIHN3aXRjaCAoc29uZ051bSkge1xuXHRcdGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBzb25nMTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIHNvbmcyO1xuXHR9XG59IiwibGV0IHNvbmdzTGlzdCA9IFsnYy0xJywgJ2MtMicsICdjLTMnLCAnYy00JywgJ2MtNSddO1xuXG5leHBvcnQgZnVuY3Rpb24gc29uZ3NEb3duSGFuZGxlcihlKSB7XG4gICAgaWYgKGUua2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgIGxldCBmb3VuZEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvbmdzTGlzdC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBsZXQgY3VyciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc29uZ3NMaXN0W2ldKVswXTtcbiAgICAgICAgICAgIGxldCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzb25nc0xpc3RbaSArIDFdKVswXTtcblxuICAgICAgICAgICAgbGV0IGN1cnJQb3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjdXJyLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKFwidHJhbnNmb3JtXCIpO1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IGN1cnJQb3Muc3BsaXQoJygnKVsxXSxcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuc3BsaXQoJyknKVswXSxcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGxldCBjdXJyWCA9IHBhcnNlSW50KHZhbHVlc1s0XS5zbGljZSgxKSk7XG4gICAgICAgICAgICBsZXQgY3VyclkgPSBwYXJzZUludCh2YWx1ZXNbNV0pO1xuICAgICAgICAgICAgaWYgKGkgPT09IDApIGN1cnIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgkezYwfXB4LCAkey0xNjB9cHgpYDtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBuZXdQb3M7XG4gICAgICAgICAgICAgICAgbmV3UG9zID0gKGZvdW5kQWN0aXZlKSA/IGB0cmFuc2xhdGUoJHtjdXJyWCAtIDMwfXB4LCAke2N1cnJZICsgODB9cHgpYCA6IGB0cmFuc2xhdGUoJHtjdXJyWCArIDMwfXB4LCAke2N1cnJZICsgODB9cHgpYFxuICAgICAgICAgICAgICAgIGN1cnIuc3R5bGUudHJhbnNmb3JtID0gbmV3UG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN1cnIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSAmJiAhZm91bmRBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBmb3VuZEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY3Vyci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBuZXh0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgc29uZ3NMaXN0LnB1c2goc29uZ3NMaXN0LnNoaWZ0KCkpO1xuICAgIH1cblxuXG4gICAgaWYgKGUua2V5ID09PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICBsZXQgZm91bmRBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb25nc0xpc3QubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgbGV0IGN1cnIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNvbmdzTGlzdFtpXSlbMF07XG4gICAgICAgICAgICBsZXQgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc29uZ3NMaXN0W2kgLSAxXSlbMF07XG5cbiAgICAgICAgICAgIGxldCBjdXJyUG9zID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY3VyciwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShcInRyYW5zZm9ybVwiKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBjdXJyUG9zLnNwbGl0KCcoJylbMV0sXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLnNwbGl0KCcpJylbMF0sXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBsZXQgY3VyclggPSBwYXJzZUludCh2YWx1ZXNbNF0uc2xpY2UoMSkpO1xuICAgICAgICAgICAgbGV0IGN1cnJZID0gcGFyc2VJbnQodmFsdWVzWzVdKTtcbiAgICAgICAgICAgIGlmIChjdXJyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgJiYgIWZvdW5kQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZm91bmRBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGN1cnIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgbmV4dC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGkgPT09IDQpIGN1cnIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgkezYwfXB4LCAkezE2MH1weClgO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1BvcztcbiAgICAgICAgICAgICAgICBuZXdQb3MgPSBmb3VuZEFjdGl2ZSA/IGB0cmFuc2xhdGUoJHtjdXJyWCArIDMwfXB4LCAke2N1cnJZIC0gODB9cHgpYCA6IGB0cmFuc2xhdGUoJHtjdXJyWCAtIDMwfXB4LCAke2N1cnJZIC0gODB9cHgpYDtcbiAgICAgICAgICAgICAgICBjdXJyLnN0eWxlLnRyYW5zZm9ybSA9IG5ld1BvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzb25nc0xpc3QudW5zaGlmdChzb25nc0xpc3QucG9wKCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbE1lbnUoZnVuYywgaW50ZXJ2YWwpIHtcbiAgICB2YXIgbGFzdENhbGwgPSAwO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBpZiAobGFzdENhbGwgKyBpbnRlcnZhbCA8IG5vdykge1xuICAgICAgICAgICAgbGFzdENhbGwgPSBub3c7XG4gICAgICAgICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfTtcbn0iXSwic291cmNlUm9vdCI6IiJ9