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
var audio = new Audio("./songs/www.ogg");
var song;
var bpm;
var results = {
  'Perfect': 0,
  'Great': 0,
  'OK': 0,
  'Bad': 0,
  'Miss': 0
};
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

  setTimeout(showResults, bpm * song.length);
});

var calculateGrade = function calculateGrade(results) {
  var total = 0;
  var weightedScore = 0;
  total += results.Perfect;
  total += results.Great;
  total += results.OK;
  total += results.Bad;
  total += results.Miss;
  weightedScore += results.Perfect;
  weightedScore += results.Great * .8;
  weightedScore += results.OK * .6;
  weightedScore += results.Bad * .4;
  return weightedScore / total;
};

var showResults = function showResults() {
  var grade = calculateGrade(results);
  canvas.style.display = 'none';
  document.getElementById('stylesheet').href = './css/results.css';
  document.getElementById('grade').innerHTML = grade;
};

document.getElementById('songBtn').addEventListener('click', function (event) {
  menu.style.display = 'none';
  songSelect.style.display = 'block';
  document.getElementById('stylesheet').href = './css/songs.css';
  document.addEventListener('keydown', Object(_songs_menu_js__WEBPACK_IMPORTED_MODULE_0__["scrollMenu"])(_songs_menu_js__WEBPACK_IMPORTED_MODULE_0__["songsDownHandler"], 400), false);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      var play1, play2, play3, play4, play5;
      menu.style.display = 'none';
      document.getElementById('stylesheet').href = './css/styles.css';
      play1 = document.getElementsByClassName('active')[0].classList.contains('c-1');
      play2 = document.getElementsByClassName('active')[0].classList.contains('c-2');
      play3 = document.getElementsByClassName('active')[0].classList.contains('c-3');
      play4 = document.getElementsByClassName('active')[0].classList.contains('c-4');
      play5 = document.getElementsByClassName('active')[0].classList.contains('c-5');

      if (play2) {
        audio = new Audio('./songs/stepping_w.ogg');
        body.style.backgroundImage = "url('./backgrounds/stepping_w_bg.png')";
        bpm = 500;
        song = Object(_songs_js__WEBPACK_IMPORTED_MODULE_1__["getSong"])(3);
      }

      if (play3) {
        audio = new Audio('./songs/ppp.mp3');
        body.style.backgroundImage = "url('./backgrounds/ppp_bg.png')";
        bpm = 375;
        song = Object(_songs_js__WEBPACK_IMPORTED_MODULE_1__["getSong"])(1);
      }

      if (play4) {
        audio = new Audio('./songs/www.ogg');
        body.style.backgroundImage = "url('./backgrounds/www_bg.png')";
        bpm = 700;
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

      setTimeout(showResults, bpm * song.length);
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
  if (pixels <= 30 && pixels >= 25) {
    results['Bad']++;
    return 'Bad';
  }

  if (pixels <= 25 && pixels >= 20) {
    results['OK']++;
    return 'OK';
  }

  if (pixels <= 20 && pixels >= 10) {
    results['Great']++;
    return 'Good';
  }

  if (pixels <= 10) {
    results['Perfect']++;
    return 'Perfect!';
  }
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
  progressGradient = ctx.createLinearGradient(550, 400 - progress, 580, 400);
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
        results['Miss']++;
        note.score = 'Miss';
        combo = 0;
      }

      if (note.score && !note.displayed) {
        if (note.score == 'Good' || note.score == 'Perfect!') {
          if (progress < 300) progress += 5;
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
var song3 = [[], [], [], [], [], [], [], [], [up], [up], [up], [], [down], [up], [down], [], [left], [], [up], [], [right], [down], [up], [], [up], [up], [up], [], [down], [down], [down], [], [left], [up], [left], [], [up], [down], [up], [], [right], [], [up], [], [down], [], [up], [], [left], [up], [up], [], [down], [up], [up], [], [right], [], [down], [], [up], [], [left], [], [up], [down], [down], [], [right], [left], [left], [], [right, left], [], [], [], [], [up], [down], [], [up], [], [up], [], [down], [down], [down], [], [left], [], [left], [], [right], [up], [left, right], [left, up], [], [up], [], [up], [], [down], [down], [down], [], [left], [], [left], [right], [up], [down], [], [up], [down], [up], [left], [up], [down], [up], [], [right], [down], [up], [down], [left], [down], [up], [left, right], [], [up], [down], [up], [left], [up], [right], [], [up], [down], [up], [left, right], [up, down], [], [], [], [up], [], [down], [], [up], [up], [down], [], [left], [right], [up, down], [], [right], [left], [up, down], [], [right], [], [up], [], [left], [down], [left], [], [right], [up], [down], [up], [down], [up], [left, right], [], [up], [], [down], [], [up], [down], [left], [down], [up], [up], [left, right], [], [down], [down], [left, right], [], [up], [], [down], [], [right], [up], [down], [up], [down], [left, right], [up, down], [], [up], [up], [down], [], [up], [], [down], [], [up], [right], [up], [down], [up], [up], [left, right], [], [down], [down], [left, right], [], [up], [], [down], [], [up], [left], [right], [up], [up], [up], [left, right], [], [down], [down], [up], null, [down], [down], [down], [up], [down], [down], [down], null, [right], [right], [right], [left], [right], [right], [right], null, [down], [down], [down], [up], [down], [down], [down], null, [left], [left], [left], [up], [left], [left], [left], null, [left, right], null, null, null, null, null, null, null, [up, down], null, [left, right], null, [up], [down], [up], [left], [up], null, [down], null, [right], [up], down, null, [up], null, [left], null, [up], [down], [up], null, [right], [right], [right], [right], [left], [left], [right], null, [up], [up], [up], [down], [up], [left], [up], null, [right], [right], [right], [down], [up], [left], [up], null, [up], [up], [up], [down], [up], [left], [up], [left], [up], [left], [up], [right, left]];
function getSong(songNum) {
  switch (songNum) {
    case 1:
      return song1;

    case 2:
      return song2;

    case 3:
      return song3;
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
  if (e.key === "ArrowUp") {
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

  if (e.key === "ArrowDown") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zb25ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc29uZ3NfbWVudS5qcyJdLCJuYW1lcyI6WyJib2R5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImlkIiwicmlnaHRfYXJyb3ciLCJJbWFnZSIsImxlZnRfYXJyb3ciLCJ1cF9hcnJvdyIsImRvd25fYXJyb3ciLCJzcmMiLCJyaWdodF9hcnJvd19hY3RpdmUiLCJsZWZ0X2Fycm93X2FjdGl2ZSIsInVwX2Fycm93X2FjdGl2ZSIsImRvd25fYXJyb3dfYWN0aXZlIiwibWVudSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjYW52YXMiLCJzb25nU2VsZWN0IiwiYXVkaW8iLCJBdWRpbyIsInNvbmciLCJicG0iLCJyZXN1bHRzIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwbGF5IiwiZ2V0U29uZyIsImRyYXdOb3RlIiwiaSIsImJlYXQiLCJzZXRUaW1lb3V0IiwibGVuZ3RoIiwic2hvd1Jlc3VsdHMiLCJjYWxjdWxhdGVHcmFkZSIsInRvdGFsIiwid2VpZ2h0ZWRTY29yZSIsIlBlcmZlY3QiLCJHcmVhdCIsIk9LIiwiQmFkIiwiTWlzcyIsImdyYWRlIiwiaHJlZiIsImlubmVySFRNTCIsInNjcm9sbE1lbnUiLCJzb25nc0Rvd25IYW5kbGVyIiwiZSIsImtleSIsInBsYXkxIiwicGxheTIiLCJwbGF5MyIsInBsYXk0IiwicGxheTUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImR4IiwiY3R4Iiwibm90ZXMiLCJjb21ibyIsImNvbWJvVGV4dCIsInNwZWVkIiwibm90ZVgiLCJ5IiwicnVuIiwicHJvZ3Jlc3MiLCJwcm9ncmVzc0dyYWRpZW50IiwiY2FsY3VsYXRlU2NvcmUiLCJwaXhlbHMiLCJmb3JFYWNoIiwibm90ZSIsImluY2x1ZGVzIiwicHVzaCIsImltZyIsIngiLCJzY29yZSIsImRpc3BsYXllZCIsImdldENvbnRleHQiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJkcmF3IiwiZm9udCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJjbGVhclJlY3QiLCJiZWdpblBhdGgiLCJyZWN0Iiwic3Ryb2tlIiwiZmlsbFJlY3QiLCJyaWdodFByZXNzZWQiLCJkcmF3SW1hZ2UiLCJ1cFByZXNzZWQiLCJkb3duUHJlc3NlZCIsImxlZnRQcmVzc2VkIiwiZmlsbFRleHQiLCJzdHJva2VUZXh0Iiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJnYW1lTG9vcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmlnaHQiLCJsZWZ0IiwidXAiLCJkb3duIiwic29uZzEiLCJzb25nMiIsInNvbmczIiwic29uZ051bSIsInNvbmdzTGlzdCIsImZvdW5kQWN0aXZlIiwiY3VyciIsIm5leHQiLCJjdXJyUG9zIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJ2YWx1ZXMiLCJzcGxpdCIsImN1cnJYIiwicGFyc2VJbnQiLCJzbGljZSIsImN1cnJZIiwidHJhbnNmb3JtIiwibmV3UG9zIiwicmVtb3ZlIiwiYWRkIiwic2hpZnQiLCJ1bnNoaWZ0IiwicG9wIiwiZnVuYyIsImludGVydmFsIiwibGFzdENhbGwiLCJub3ciLCJEYXRlIiwiYXBwbHkiLCJhcmd1bWVudHMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FB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LEdBQUcsR0FBR0MsSUFBSSxDQUFDRCxHQUFMLEVBQVY7O0FBQ0EsUUFBSUQsUUFBUSxHQUFHRCxRQUFYLEdBQXNCRSxHQUExQixFQUErQjtBQUMzQkQsY0FBUSxHQUFHQyxHQUFYO0FBQ0EsYUFBT0gsSUFBSSxDQUFDSyxLQUFMLENBQVcsSUFBWCxFQUFpQkMsU0FBakIsQ0FBUDtBQUNIO0FBQ0osR0FORDtBQU9ILEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBzb25nc0Rvd25IYW5kbGVyLCBzY3JvbGxNZW51IH0gZnJvbSAnLi9zb25nc19tZW51LmpzJztcbmltcG9ydCB7IGdldFNvbmcgfSBmcm9tICcuL3NvbmdzLmpzJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG5sZXQgaWQ7XG5cbmxldCByaWdodF9hcnJvdyA9IG5ldyBJbWFnZSgpO1xubGV0IGxlZnRfYXJyb3cgPSBuZXcgSW1hZ2UoKTtcbmxldCB1cF9hcnJvdyA9IG5ldyBJbWFnZSgpO1xubGV0IGRvd25fYXJyb3cgPSBuZXcgSW1hZ2UoKTtcblxucmlnaHRfYXJyb3cuc3JjID0gJy4vc3ByaXRlcy9hcnJvd19yaWdodC5wbmcnO1xubGVmdF9hcnJvdy5zcmMgPSAnLi9zcHJpdGVzL2Fycm93X2xlZnQucG5nJztcbnVwX2Fycm93LnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfdXAucG5nJztcbmRvd25fYXJyb3cuc3JjID0gJy4vc3ByaXRlcy9hcnJvd19kb3duLnBuZyc7XG5cbmxldCByaWdodF9hcnJvd19hY3RpdmUgPSBuZXcgSW1hZ2UoKTtcbmxldCBsZWZ0X2Fycm93X2FjdGl2ZSA9IG5ldyBJbWFnZSgpO1xubGV0IHVwX2Fycm93X2FjdGl2ZSA9IG5ldyBJbWFnZSgpO1xubGV0IGRvd25fYXJyb3dfYWN0aXZlID0gbmV3IEltYWdlKCk7XG5cbnJpZ2h0X2Fycm93X2FjdGl2ZS5zcmMgPSAnLi9zcHJpdGVzL2Fycm93X3JpZ2h0X2FjdGl2ZS5wbmcnO1xubGVmdF9hcnJvd19hY3RpdmUuc3JjID0gJy4vc3ByaXRlcy9hcnJvd19sZWZ0X2FjdGl2ZS5wbmcnO1xudXBfYXJyb3dfYWN0aXZlLnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfdXBfYWN0aXZlLnBuZyc7XG5kb3duX2Fycm93X2FjdGl2ZS5zcmMgPSAnLi9zcHJpdGVzL2Fycm93X2Rvd25fYWN0aXZlLnBuZyc7XG5cbi8qIE1haW4gbWVudSBidXR0b25zICovXG5cbmxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudUNvbnRhaW5lcicpWzBdO1xubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhbnZhc0NvbnRhaW5lcicpWzBdO1xubGV0IHNvbmdTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzb25nc0NvbnRhaW5lcicpWzBdO1xubGV0IGF1ZGlvID0gbmV3IEF1ZGlvKFwiLi9zb25ncy93d3cub2dnXCIpO1xubGV0IHNvbmc7XG5sZXQgYnBtO1xubGV0IHJlc3VsdHMgPSB7ICdQZXJmZWN0JzogMCxcbidHcmVhdCc6IDAsXG4nT0snOiAwLFxuJ0JhZCc6IDAsXG4nTWlzcyc6IDBcbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnLi9iYWNrZ3JvdW5kcy93d3dfYmcucG5nJylgO1xuICAgIGNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBhdWRpby5wbGF5KCk7XG4gICAgc29uZyA9IGdldFNvbmcoMik7XG4gICAgYnBtID0gNzAwO1xuICAgIGRyYXdOb3RlKFtdKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGJlYXQgPSBzb25nW2ldO1xuICAgICAgICBpZiAoYmVhdCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkcmF3Tm90ZShiZWF0KSwgaSAqIGJwbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0VGltZW91dChzaG93UmVzdWx0cywgYnBtICogc29uZy5sZW5ndGgpO1xufSk7XG5cbmNvbnN0IGNhbGN1bGF0ZUdyYWRlID0gcmVzdWx0cyA9PiB7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBsZXQgd2VpZ2h0ZWRTY29yZSA9IDA7XG4gICAgdG90YWwgKz0gcmVzdWx0cy5QZXJmZWN0O1xuICAgIHRvdGFsICs9IHJlc3VsdHMuR3JlYXQ7XG4gICAgdG90YWwgKz0gcmVzdWx0cy5PSztcbiAgICB0b3RhbCArPSByZXN1bHRzLkJhZDtcbiAgICB0b3RhbCArPSByZXN1bHRzLk1pc3M7XG5cbiAgICB3ZWlnaHRlZFNjb3JlICs9IHJlc3VsdHMuUGVyZmVjdDtcbiAgICB3ZWlnaHRlZFNjb3JlICs9IHJlc3VsdHMuR3JlYXQgKiAuODtcbiAgICB3ZWlnaHRlZFNjb3JlICs9IHJlc3VsdHMuT0sgKiAuNjtcbiAgICB3ZWlnaHRlZFNjb3JlICs9IHJlc3VsdHMuQmFkICogLjQ7XG4gICAgXG4gICAgcmV0dXJuIHdlaWdodGVkU2NvcmUvdG90YWw7XG59XG5cbmNvbnN0IHNob3dSZXN1bHRzID0gKCkgPT4ge1xuICAgIGxldCBncmFkZSA9IGNhbGN1bGF0ZUdyYWRlKHJlc3VsdHMpO1xuICAgIGNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHlsZXNoZWV0JykuaHJlZiA9ICcuL2Nzcy9yZXN1bHRzLmNzcyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyYWRlJykuaW5uZXJIVE1MID0gZ3JhZGU7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb25nQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuXHRtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgc29uZ1NlbGVjdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0eWxlc2hlZXQnKS5ocmVmID0gJy4vY3NzL3NvbmdzLmNzcyc7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzY3JvbGxNZW51KHNvbmdzRG93bkhhbmRsZXIsIDQwMCksIGZhbHNlKTtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBsZXQgcGxheTEsIHBsYXkyLCBwbGF5MywgcGxheTQsIHBsYXk1O1xuXHRcdFx0bWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0eWxlc2hlZXQnKS5ocmVmID0gJy4vY3NzL3N0eWxlcy5jc3MnO1xuICAgICAgICAgICAgcGxheTEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2MtMScpO1xuICAgICAgICAgICAgcGxheTIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2MtMicpO1xuICAgICAgICAgICAgcGxheTMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2MtMycpO1xuICAgICAgICAgICAgcGxheTQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2MtNCcpO1xuICAgICAgICAgICAgcGxheTUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2MtNScpO1xuICAgICAgICAgICAgaWYgKHBsYXkyKSB7XG4gICAgICAgICAgICAgICAgYXVkaW8gPSBuZXcgQXVkaW8oJy4vc29uZ3Mvc3RlcHBpbmdfdy5vZ2cnKTtcbiAgICAgICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuL2JhY2tncm91bmRzL3N0ZXBwaW5nX3dfYmcucG5nJylcIjtcblx0XHRcdFx0YnBtID0gNTAwO1xuXHRcdFx0XHRzb25nID0gZ2V0U29uZygzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwbGF5Mykge1xuICAgICAgICAgICAgICAgIGF1ZGlvID0gbmV3IEF1ZGlvKCcuL3NvbmdzL3BwcC5tcDMnKTtcbiAgICAgICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuL2JhY2tncm91bmRzL3BwcF9iZy5wbmcnKVwiO1xuICAgICAgICAgICAgICAgIGJwbSA9IDM3NTtcbiAgICAgICAgICAgICAgICBzb25nID0gZ2V0U29uZygxKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZiAocGxheTQpIHtcbiAgICAgICAgICAgICAgICBhdWRpbyA9IG5ldyBBdWRpbygnLi9zb25ncy93d3cub2dnJyk7XG4gICAgICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcuL2JhY2tncm91bmRzL3d3d19iZy5wbmcnKWA7XG4gICAgICAgICAgICAgICAgYnBtID0gNzAwO1xuICAgICAgICAgICAgICAgIHNvbmcgPSBnZXRTb25nKDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG5cdFx0XHRhdWRpby5wbGF5KCk7XG4gICAgICAgICAgICBkcmF3Tm90ZShbXSk7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNvbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgYmVhdCA9IHNvbmdbaV07XG5cdFx0XHRcdGlmIChiZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZHJhd05vdGUoYmVhdCksIGkgKiBicG0pO1xuXHRcdFx0XHR9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHNob3dSZXN1bHRzLCBicG0gKiBzb25nLmxlbmd0aCk7XG5cblx0XHR9XG5cdH0pO1xufSk7XG5cbi8qIFJlbmRlcmluZyAqL1xuXG5sZXQgZHggPSAxMDtcbmxldCBjdHg7XG5sZXQgbm90ZXMgPSBbXTtcbmxldCBjb21ibyA9IDA7XG5sZXQgY29tYm9UZXh0O1xubGV0IHNwZWVkID0gMzA7IC8vIGxvd2VyIGlzIGZhc3RlclxubGV0IG5vdGVYO1xubGV0IHkgPSA2MDA7IC8vIHZlcnRpY2FsIG9mZnNldFxubGV0IHJ1bjtcbmxldCBwcm9ncmVzcyA9IDE1MDtcbmxldCBwcm9ncmVzc0dyYWRpZW50O1xuXG5jb25zdCBjYWxjdWxhdGVTY29yZSA9IChwaXhlbHMpID0+IHtcbiAgICBpZiAocGl4ZWxzIDw9IDMwICYmIHBpeGVscyA+PSAyNSkge1xuICAgICAgICByZXN1bHRzWydCYWQnXSsrO1xuICAgICAgICByZXR1cm4gJ0JhZCc7XG4gICAgfVxuICAgIGlmIChwaXhlbHMgPD0gMjUgJiYgcGl4ZWxzID49IDIwKSB7XG4gICAgICAgIHJlc3VsdHNbJ09LJ10rKztcbiAgICAgICAgcmV0dXJuICdPSyc7XG4gICAgfVxuICAgIGlmIChwaXhlbHMgPD0gMjAgJiYgcGl4ZWxzID49IDEwKSB7XG4gICAgICAgIHJlc3VsdHNbJ0dyZWF0J10rKztcbiAgICAgICAgcmV0dXJuICdHb29kJztcbiAgICB9XG4gICAgaWYgKHBpeGVscyA8PSAxMCkge1xuICAgICAgICByZXN1bHRzWydQZXJmZWN0J10rKztcbiAgICAgICAgcmV0dXJuICdQZXJmZWN0ISc7XG4gICAgfVxufVxuXG5jb25zdCBkcmF3Tm90ZSA9IChiZWF0KSA9PiB7XG4gICAgaWYoYmVhdCkge1xuICAgICAgICBiZWF0LmZvckVhY2gobm90ZSA9PiB7XG4gICAgICAgICAgICBpZiAobm90ZS5zcmMuaW5jbHVkZXMoJ2xlZnQnKSkgbm90ZVggPSAxMDA7XG4gICAgICAgICAgICBpZiAobm90ZS5zcmMuaW5jbHVkZXMoJ2Rvd24nKSkgbm90ZVggPSAyMDA7XG4gICAgICAgICAgICBpZiAobm90ZS5zcmMuaW5jbHVkZXMoJ3VwJykpIG5vdGVYID0gMzAwO1xuICAgICAgICAgICAgaWYgKG5vdGUuc3JjLmluY2x1ZGVzKCdyaWdodCcpKSBub3RlWCA9IDQwMDtcbiAgICAgICAgICAgIG5vdGVzLnB1c2goeyBpbWc6IG5vdGUsIFxuICAgICAgICAgICAgICAgIHg6IG5vdGVYLCBcbiAgICAgICAgICAgICAgICB5LCBcbiAgICAgICAgICAgICAgICBzY29yZTogbnVsbCxcbiAgICAgICAgICAgICAgICBkaXNwbGF5ZWQ6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjbGVhckludGVydmFsKHJ1bik7XG4gICAgcnVuID0gc2V0SW50ZXJ2YWwoKCkgPT4gZHJhdyhub3RlcyksIHNwZWVkKTtcbn1cblxuY29uc3QgZHJhdyA9IChub3RlcykgPT4ge1xuICAgIGN0eC5mb250ID0gXCJib2xkIDMwcHggSGVsdmV0aWNhXCI7XG4gICAgcHJvZ3Jlc3NHcmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCg1NTAsIDQwMCAtIHByb2dyZXNzLCA1ODAsIDQwMCk7XG4gICAgcHJvZ3Jlc3NHcmFkaWVudC5hZGRDb2xvclN0b3AoMCwgXCJibHVlXCIpO1xuICAgIHByb2dyZXNzR3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIFwicmVkXCIpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBwcm9ncmVzc0dyYWRpZW50O1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwJztcblxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgNjAwLCA2MDApOyAvLyBjbGVhciB0aGUgY2FudmFzXG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnJlY3QoNTUwLCAxMDAsIDMwLCAzMDApO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguZmlsbFJlY3QoNTUwLCA0MDAgLSBwcm9ncmVzcywgMzAsIHByb2dyZXNzKTtcblxuICAgIGlmIChyaWdodFByZXNzZWQpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShyaWdodF9hcnJvd19hY3RpdmUsIDQwMCwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShyaWdodF9hcnJvdywgNDAwLCAwKTtcbiAgICB9XG4gICAgaWYgKHVwUHJlc3NlZCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHVwX2Fycm93X2FjdGl2ZSwgMzAwLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHVwX2Fycm93LCAzMDAsIDApO1xuICAgIH1cbiAgICBpZiAoZG93blByZXNzZWQpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShkb3duX2Fycm93X2FjdGl2ZSwgMjAwLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGRvd25fYXJyb3csIDIwMCwgMCk7XG4gICAgfVxuICAgIGlmIChsZWZ0UHJlc3NlZCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGxlZnRfYXJyb3dfYWN0aXZlLCAxMDAsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UobGVmdF9hcnJvdywgMTAwLCAwKTtcbiAgICB9XG5cbiAgICBpZihub3Rlcy5sZW5ndGgpIHtcbiAgICAgICAgbm90ZXMuZm9yRWFjaChub3RlID0+IHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2Uobm90ZS5pbWcsIG5vdGUueCwgbm90ZS55KTtcblxuICAgICAgICAgICAgaWYobm90ZS54ID09PSAxMDAgJiYgIW5vdGUuc2NvcmUgJiYgbGVmdFByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICBub3RlLnNjb3JlID0gY2FsY3VsYXRlU2NvcmUobm90ZS55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub3RlLnggPT09IDIwMCAmJiAhbm90ZS5zY29yZSAmJiBkb3duUHJlc3NlZCkge1xuICAgICAgICAgICAgICAgIG5vdGUuc2NvcmUgPSBjYWxjdWxhdGVTY29yZShub3RlLnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vdGUueCA9PT0gMzAwICYmICFub3RlLnNjb3JlICYmIHVwUHJlc3NlZCkge1xuICAgICAgICAgICAgICAgIG5vdGUuc2NvcmUgPSBjYWxjdWxhdGVTY29yZShub3RlLnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vdGUueCA9PT0gNDAwICYmICFub3RlLnNjb3JlICYmIHJpZ2h0UHJlc3NlZCkge1xuICAgICAgICAgICAgICAgIG5vdGUuc2NvcmUgPSBjYWxjdWxhdGVTY29yZShub3RlLnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vdGUueSA8IDAgJiYgIW5vdGUuc2NvcmUpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzWydNaXNzJ10rKztcbiAgICAgICAgICAgICAgICBub3RlLnNjb3JlID0gJ01pc3MnO1xuICAgICAgICAgICAgICAgIGNvbWJvID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vdGUuc2NvcmUgJiYgIW5vdGUuZGlzcGxheWVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUuc2NvcmUgPT0gJ0dvb2QnIHx8IG5vdGUuc2NvcmUgPT0gJ1BlcmZlY3QhJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPCAzMDApIHByb2dyZXNzICs9IDU7XG4gICAgICAgICAgICAgICAgICAgIGNvbWJvKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyAtPSA1O1xuICAgICAgICAgICAgICAgICAgICBjb21ibyA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEaXNwbGF5IHNjb3JlIGZvciAyMCBmcmFtZXNcbiAgICAgICAgICAgIGlmIChub3RlLnNjb3JlICYmIG5vdGUuZGlzcGxheWVkIDw9IDIwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc3dpdGNoIChub3RlLnNjb3JlKSB7XG5cdFx0XHRcdFx0Y2FzZSAnTWlzcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZS5zcmMgPSAnLi9zcHJpdGVzL21pc3MucG5nJztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ0JhZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZS5zcmMgPSAnLi9zcHJpdGVzL2JhZC5wbmcnO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnT0snOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmUuc3JjID0gJy4vc3ByaXRlcy9vay5wbmcnO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnR29vZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZS5zcmMgPSAnLi9zcHJpdGVzL2dyZWF0LnBuZyc7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdQZXJmZWN0ISc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZS5zcmMgPSAnLi9zcHJpdGVzL3BlcmZlY3QucG5nJztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShzY29yZSwgMjUwLCAxNTApO1xuICAgICAgICAgICAgICAgIG5vdGUuZGlzcGxheWVkKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub3RlLnkgLT0gZHg7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb21ibyA+PSAyKSB7XG4gICAgICAgIGNvbWJvVGV4dCA9IGAke2NvbWJvfSBjb21ib2A7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgICAgIGN0eC5maWxsVGV4dChjb21ib1RleHQsIDI2MCwgMjI1KTtcbiAgICAgICAgY3R4LnN0cm9rZVRleHQoY29tYm9UZXh0LCAyNjAsIDIyNSk7XG4gICAgfVxufVxuXG4vKiBDb250cm9scyAqL1xuXG5sZXQgdXBQcmVzc2VkID0gZmFsc2U7XG5sZXQgZG93blByZXNzZWQgPSBmYWxzZTtcbmxldCByaWdodFByZXNzZWQgPSBmYWxzZTtcbmxldCBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkhhbmRsZXIsIGZhbHNlKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5VXBIYW5kbGVyLCBmYWxzZSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBrZXlEb3duSGFuZGxlcihlKSB7XG5cdHN3aXRjaCAoZS5rZXkpIHtcblx0XHRjYXNlICd3Jzpcblx0XHRjYXNlICdBcnJvd1VwJzpcblx0XHRcdHVwUHJlc3NlZCA9IHRydWU7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IGtleVVwSGFuZGxlcihlKSwgMTAwKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ3MnOlxuXHRcdGNhc2UgJ0Fycm93RG93bic6XG5cdFx0XHRkb3duUHJlc3NlZCA9IHRydWU7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IGtleVVwSGFuZGxlcihlKSwgMTAwKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ0Fycm93UmlnaHQnOlxuXHRcdGNhc2UgJ2QnOlxuXHRcdFx0cmlnaHRQcmVzc2VkID0gdHJ1ZTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ga2V5VXBIYW5kbGVyKGUpLCAxMDApO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnYSc6XG5cdFx0Y2FzZSAnQXJyb3dMZWZ0Jzpcblx0XHRcdGxlZnRQcmVzc2VkID0gdHJ1ZTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ga2V5VXBIYW5kbGVyKGUpLCAxMDApO1xuXHRcdFx0YnJlYWs7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtleVVwSGFuZGxlcihlKSB7XG5cdHN3aXRjaCAoZS5rZXkpIHtcblx0XHRjYXNlICd3Jzpcblx0XHRjYXNlICdBcnJvd1VwJzpcblx0XHRcdHVwUHJlc3NlZCA9IGZhbHNlO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAncyc6XG5cdFx0Y2FzZSAnQXJyb3dEb3duJzpcblx0XHRcdGRvd25QcmVzc2VkID0gZmFsc2U7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdkJzpcblx0XHRjYXNlICdBcnJvd1JpZ2h0Jzpcblx0XHRcdHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnYSc6XG5cdFx0Y2FzZSAnQXJyb3dMZWZ0Jzpcblx0XHRcdGxlZnRQcmVzc2VkID0gZmFsc2U7XG5cdFx0XHRicmVhaztcblx0fVxufVxuXG4vKiBBbmltYXRpb24gKi9cblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gICAgaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApXG59XG5cbmlmIChib2R5KSB7XG4gICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpXG4gICAgfSlcbn0iLCJsZXQgcmlnaHQgPSBuZXcgSW1hZ2UoKTtcbmxldCBsZWZ0ID0gbmV3IEltYWdlKCk7XG5sZXQgdXAgPSBuZXcgSW1hZ2UoKTtcbmxldCBkb3duID0gbmV3IEltYWdlKCk7XG5cbnJpZ2h0LnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfcmlnaHRfbm90ZS5wbmcnO1xubGVmdC5zcmMgPSAnLi9zcHJpdGVzL2Fycm93X2xlZnRfbm90ZS5wbmcnO1xudXAuc3JjID0gJy4vc3ByaXRlcy9hcnJvd191cF9ub3RlLnBuZyc7XG5kb3duLnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfZG93bl9ub3RlLnBuZyc7XG5cbmxldCBzb25nMSA9IFtcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIG51bGwsIG51bGwsIG51bGwsIG51bGwsXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgbnVsbCwgW3JpZ2h0XSxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBudWxsLCBbdXBdLFxuICAgIFtyaWdodF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIG51bGwsIFtsZWZ0XSxcbiAgICBbdXBdLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBudWxsLCBbZG93bl0sXG4gICAgW2xlZnQsIHJpZ2h0XSwgbnVsbCwgW2xlZnRdLCBbcmlnaHRdLFxuICAgIFt1cF0sIFtkb3duXSwgW3VwXSwgW2Rvd25dLFxuICAgIFtyaWdodF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbcmlnaHRdLCBbbGVmdF0sIFtkb3duXSwgW3VwXSxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBbcmlnaHRdLCBbZG93bl0sXG4gICAgW2xlZnRdLCBbdXBdLCBbbGVmdF0sIFt1cF0sXG4gICAgW2Rvd25dLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtkb3duXSwgW3JpZ2h0XSwgW3VwXSwgW2xlZnRdLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbbGVmdF0sIFt1cCwgZG93bl0sIFtyaWdodF0sIFt1cCwgZG93bl0sXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtyaWdodF0sIFt1cCwgZG93bl0sIFtsZWZ0XSwgW3VwLCBkb3duXSxcbiAgICBbcmlnaHRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW2Rvd25dLCBbbGVmdCwgcmlnaHRdLCBbdXBdLCBbbGVmdCwgcmlnaHRdLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgbnVsbCwgW3JpZ2h0XSxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBudWxsLCBbdXBdLFxuICAgIFtyaWdodF0sIFtkb3duXSwgW3VwXSwgW2xlZnRdLFxuICAgIFtyaWdodF0sIFt1cF0sIFtsZWZ0XSwgW2Rvd25dLFxuICAgIFtsZWZ0XSwgW3VwXSwgW2Rvd25dLCBbcmlnaHRdLFxuICAgIFtsZWZ0XSwgW2Rvd25dLCBbcmlnaHRdLCBbdXBdLFxuICAgIFtyaWdodF0sIFt1cF0sIFtkb3duXSwgW2xlZnRdLFxuICAgIFtyaWdodF0sIFtsZWZ0XSwgW3VwXSwgW2Rvd25dLFxuICAgIFtsZWZ0XSwgW2Rvd25dLCBbdXBdLCBbcmlnaHRdLFxuICAgIFtsZWZ0XSwgW3JpZ2h0XSwgW2Rvd25dLCBbbGVmdCwgcmlnaHRdXG5dO1xuXG5sZXQgc29uZzIgPSBbXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIG51bGwsIG51bGwsIG51bGwsIG51bGwsXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgW3JpZ2h0XSwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdF0sIFtsZWZ0XSwgW2xlZnRdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFt1cF0sIFt1cF0sIFtkb3duXSwgW2Rvd25dLFxuICAgIFt1cF0sIFtkb3duXSwgW3VwXSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtsZWZ0LCByaWdodF0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbdXBdLCBbdXBdLCBbdXBdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbZG93bl0sIFtkb3duXSwgW2Rvd25dLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3JpZ2h0XSwgW3JpZ2h0XSwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbbGVmdF0sIFtsZWZ0XSwgW2xlZnRdLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2Rvd25dLCBbZG93bl0sXG4gICAgW2Rvd25dLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBbdXBdLFxuICAgIFt1cF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2xlZnRdLCBbbGVmdF0sXG4gICAgW2xlZnRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtyaWdodF0sIFtyaWdodF0sIFtyaWdodF0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW3VwXSwgW3VwXSwgW3VwXSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbdXBdLCBbdXBdLCBbdXBdLCBudWxsLFxuICAgIFtkb3duXSwgW2Rvd25dLCBbZG93bl0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFt1cCwgZG93bl0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBudWxsLCBudWxsXG5dO1xuXG5sZXQgc29uZzMgPSBbXG4gICAgW10sIFtdLCBbXSwgW10sXG4gICAgW10sIFtdLCBbXSwgW10sXG4gICAgW3VwXSwgW3VwXSwgW3VwXSwgW10sXG4gICAgW2Rvd25dLCBbdXBdLCBbZG93bl0sIFtdLFxuICAgIFtsZWZ0XSwgW10sIFt1cF0sIFtdLFxuICAgIFtyaWdodF0sIFtkb3duXSwgW3VwXSwgW10sXG4gICAgW3VwXSwgW3VwXSwgW3VwXSwgW10sXG4gICAgW2Rvd25dLCBbZG93bl0sIFtkb3duXSwgW10sXG4gICAgW2xlZnRdLCBbdXBdLCBbbGVmdF0sIFtdLFxuICAgIFt1cF0sIFtkb3duXSwgW3VwXSwgW10sXG4gICAgW3JpZ2h0XSwgW10sIFt1cF0sIFtdLFxuICAgIFtkb3duXSwgW10sIFt1cF0sIFtdLFxuICAgIFtsZWZ0XSwgW3VwXSwgW3VwXSwgW10sXG4gICAgW2Rvd25dLCBbdXBdLCBbdXBdLCBbXSxcbiAgICBbcmlnaHRdLCBbXSwgW2Rvd25dLCBbXSxcbiAgICBbdXBdLCBbXSwgW2xlZnRdLCBbXSxcbiAgICBbdXBdLCBbZG93bl0sIFtkb3duXSwgW10sXG4gICAgW3JpZ2h0XSwgW2xlZnRdLCBbbGVmdF0sIFtdLFxuICAgIFtyaWdodCwgbGVmdF0sIFtdLCBbXSwgW10sXG4gICAgW10sIFt1cF0sIFtkb3duXSwgW10sIFxuICAgIFt1cF0sIFtdLCBbdXBdLCBbXSxcbiAgICBbZG93bl0sIFtkb3duXSwgW2Rvd25dLCBbXSxcbiAgICBbbGVmdF0sIFtdLCBbbGVmdF0sIFtdLFxuICAgIFtyaWdodF0sIFt1cF0sIFtsZWZ0LCByaWdodF0sIFtsZWZ0LCB1cF0sXG4gICAgW10sIFt1cF0sIFtdLCBbdXBdLFxuICAgIFtdLCBbZG93bl0sIFtkb3duXSwgW2Rvd25dLFxuICAgIFtdLCBbbGVmdF0sIFtdLCBbbGVmdF0sXG4gICAgW3JpZ2h0XSwgW3VwXSwgW2Rvd25dLCBbXSxcbiAgICBbdXBdLCBbZG93bl0sIFt1cF0sIFtsZWZ0XSxcbiAgICBbdXBdLCBbZG93bl0sIFt1cF0sIFtdLFxuICAgIFtyaWdodF0sIFtkb3duXSwgW3VwXSwgW2Rvd25dLFxuICAgIFtsZWZ0XSwgW2Rvd25dLCBbdXBdLCBbbGVmdCwgcmlnaHRdLFxuICAgIFtdLCBbdXBdLCBbZG93bl0sIFt1cF0sXG4gICAgW2xlZnRdLCBbdXBdLCBbcmlnaHRdLCBbXSxcbiAgICBbdXBdLCBbZG93bl0sIFt1cF0sIFtsZWZ0LCByaWdodF0sXG4gICAgW3VwLCBkb3duXSwgW10sIFtdLCBbXSxcbiAgICBbdXBdLCBbXSwgW2Rvd25dLCBbXSxcbiAgICBbdXBdLCBbdXBdLCBbZG93bl0sIFtdLFxuICAgIFtsZWZ0XSwgW3JpZ2h0XSwgW3VwLCBkb3duXSwgW10sIFxuICAgIFtyaWdodF0sIFtsZWZ0XSwgW3VwLCBkb3duXSwgW10sXG4gICAgW3JpZ2h0XSwgW10sIFt1cF0sIFtdLFxuICAgIFtsZWZ0XSwgW2Rvd25dLCBbbGVmdF0sIFtdLFxuICAgIFtyaWdodF0sIFt1cF0sIFtkb3duXSwgW3VwXSxcbiAgICBbZG93bl0sIFt1cF0sIFtsZWZ0LCByaWdodF0sIFtdLFxuICAgIFt1cF0sIFtdLCBbZG93bl0sIFtdLFxuICAgIFt1cF0sIFtkb3duXSwgW2xlZnRdLCBbZG93bl0sXG4gICAgW3VwXSwgW3VwXSwgW2xlZnQsIHJpZ2h0XSwgW10sXG4gICAgW2Rvd25dLCBbZG93bl0sIFtsZWZ0LCByaWdodF0sIFtdLFxuICAgIFt1cF0sIFtdLCBbZG93bl0sIFtdLFxuICAgIFtyaWdodF0sIFt1cF0sIFtkb3duXSwgW3VwXSxcbiAgICBbZG93bl0sIFtsZWZ0LCByaWdodF0sIFt1cCwgZG93bl0sIFtdLFxuICAgIFt1cF0sIFt1cF0sIFtkb3duXSwgW10sXG4gICAgW3VwXSwgW10sIFtkb3duXSwgW10sXG4gICAgW3VwXSwgW3JpZ2h0XSwgW3VwXSwgW2Rvd25dLFxuICAgIFt1cF0sIFt1cF0sIFtsZWZ0LCByaWdodF0sIFtdLFxuICAgIFtkb3duXSwgW2Rvd25dLCBbbGVmdCwgcmlnaHRdLCBbXSxcbiAgICBbdXBdLCBbXSwgW2Rvd25dLCBbXSxcbiAgICBbdXBdLCBbbGVmdF0sIFtyaWdodF0sIFt1cF0sIFxuICAgIFt1cF0sIFt1cF0sIFtsZWZ0LCByaWdodF0sIFtdLFxuICAgIFtkb3duXSwgW2Rvd25dLCBbdXBdLCBudWxsLFxuICAgIFtkb3duXSwgW2Rvd25dLCBbZG93bl0sIFt1cF0sXG4gICAgW2Rvd25dLCBbZG93bl0sIFtkb3duXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBbcmlnaHRdLCBbcmlnaHRdLCBbbGVmdF0sXG4gICAgW3JpZ2h0XSwgW3JpZ2h0XSwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbZG93bl0sIFtkb3duXSwgW2Rvd25dLCBbdXBdLFxuICAgIFtkb3duXSwgW2Rvd25dLCBbZG93bl0sIG51bGwsXG4gICAgW2xlZnRdLCBbbGVmdF0sIFtsZWZ0XSwgW3VwXSxcbiAgICBbbGVmdF0sIFtsZWZ0XSwgW2xlZnRdLCBudWxsLFxuICAgIFtsZWZ0LCByaWdodF0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbdXAsIGRvd25dLCBudWxsLCBbbGVmdCwgcmlnaHRdLCBudWxsLFxuICAgIFt1cF0sIFtkb3duXSwgW3VwXSwgW2xlZnRdLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBbdXBdLCBkb3duLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbdXBdLCBbZG93bl0sIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgW3JpZ2h0XSwgW3JpZ2h0XSwgW3JpZ2h0XSxcbiAgICBbbGVmdF0sIFtsZWZ0XSwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbdXBdLCBbdXBdLCBbdXBdLCBbZG93bl0sXG4gICAgW3VwXSwgW2xlZnRdLCBbdXBdLCBudWxsLFxuICAgIFtyaWdodF0sIFtyaWdodF0sIFtyaWdodF0sIFtkb3duXSxcbiAgICBbdXBdLCBbbGVmdF0sIFt1cF0sIG51bGwsXG4gICAgW3VwXSwgW3VwXSwgW3VwXSwgW2Rvd25dLFxuICAgIFt1cF0sIFtsZWZ0XSwgW3VwXSwgW2xlZnRdLFxuICAgIFt1cF0sIFtsZWZ0XSwgW3VwXSwgW3JpZ2h0LCBsZWZ0XVxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U29uZyhzb25nTnVtKSB7XG4gICAgc3dpdGNoIChzb25nTnVtKSB7XG5cdFx0Y2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHNvbmcxO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gc29uZzI7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiBzb25nMztcblx0fVxufSIsImxldCBzb25nc0xpc3QgPSBbJ2MtMScsICdjLTInLCAnYy0zJywgJ2MtNCcsICdjLTUnXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNvbmdzRG93bkhhbmRsZXIoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgbGV0IGZvdW5kQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29uZ3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGxldCBjdXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzb25nc0xpc3RbaV0pWzBdO1xuICAgICAgICAgICAgbGV0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNvbmdzTGlzdFtpICsgMV0pWzBdO1xuXG4gICAgICAgICAgICBsZXQgY3VyclBvcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGN1cnIsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoXCJ0cmFuc2Zvcm1cIik7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gY3VyclBvcy5zcGxpdCgnKCcpWzFdLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zcGxpdCgnKScpWzBdLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgbGV0IGN1cnJYID0gcGFyc2VJbnQodmFsdWVzWzRdLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIGxldCBjdXJyWSA9IHBhcnNlSW50KHZhbHVlc1s1XSk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkgY3Vyci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7NjB9cHgsICR7LTE2MH1weClgO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1BvcztcbiAgICAgICAgICAgICAgICBuZXdQb3MgPSAoZm91bmRBY3RpdmUpID8gYHRyYW5zbGF0ZSgke2N1cnJYIC0gMzB9cHgsICR7Y3VyclkgKyA4MH1weClgIDogYHRyYW5zbGF0ZSgke2N1cnJYICsgMzB9cHgsICR7Y3VyclkgKyA4MH1weClgXG4gICAgICAgICAgICAgICAgY3Vyci5zdHlsZS50cmFuc2Zvcm0gPSBuZXdQb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3Vyci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICYmICFmb3VuZEFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGZvdW5kQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjdXJyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIG5leHQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBzb25nc0xpc3QucHVzaChzb25nc0xpc3Quc2hpZnQoKSk7XG4gICAgfVxuXG5cbiAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgbGV0IGZvdW5kQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29uZ3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGxldCBjdXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzb25nc0xpc3RbaV0pWzBdO1xuICAgICAgICAgICAgbGV0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNvbmdzTGlzdFtpIC0gMV0pWzBdO1xuXG4gICAgICAgICAgICBsZXQgY3VyclBvcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGN1cnIsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoXCJ0cmFuc2Zvcm1cIik7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gY3VyclBvcy5zcGxpdCgnKCcpWzFdLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zcGxpdCgnKScpWzBdLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgbGV0IGN1cnJYID0gcGFyc2VJbnQodmFsdWVzWzRdLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIGxldCBjdXJyWSA9IHBhcnNlSW50KHZhbHVlc1s1XSk7XG4gICAgICAgICAgICBpZiAoY3Vyci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICYmICFmb3VuZEFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGZvdW5kQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjdXJyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIG5leHQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpID09PSA0KSBjdXJyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHs2MH1weCwgJHsxNjB9cHgpYDtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBuZXdQb3M7XG4gICAgICAgICAgICAgICAgbmV3UG9zID0gZm91bmRBY3RpdmUgPyBgdHJhbnNsYXRlKCR7Y3VyclggKyAzMH1weCwgJHtjdXJyWSAtIDgwfXB4KWAgOiBgdHJhbnNsYXRlKCR7Y3VyclggLSAzMH1weCwgJHtjdXJyWSAtIDgwfXB4KWA7XG4gICAgICAgICAgICAgICAgY3Vyci5zdHlsZS50cmFuc2Zvcm0gPSBuZXdQb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc29uZ3NMaXN0LnVuc2hpZnQoc29uZ3NMaXN0LnBvcCgpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxNZW51KGZ1bmMsIGludGVydmFsKSB7XG4gICAgdmFyIGxhc3RDYWxsID0gMDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKGxhc3RDYWxsICsgaW50ZXJ2YWwgPCBub3cpIHtcbiAgICAgICAgICAgIGxhc3RDYWxsID0gbm93O1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==