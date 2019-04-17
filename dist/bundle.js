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
  var percentage;
  total += results.Perfect;
  total += results.Great;
  total += results.OK;
  total += results.Bad;
  total += results.Miss;
  weightedScore += results.Perfect;
  weightedScore += results.Great * .8;
  weightedScore += results.OK * .6;
  weightedScore += results.Bad * .4;
  percentage = weightedScore / total * 100;
  console.log(percentage);
  if (percentage < 60) return 'D';
  if (percentage >= 60 && percentage < 68) return 'C';
  if (percentage >= 68 && percentage < 86) return 'B';
  if (percentage >= 86 && percentage < 93) return 'A';
  if (percentage >= 93 && percentage < 96) return 'S';
  if (percentage >= 96) return 'SS';
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
  progressGradient.addColorStop(0, "#40CBEA");
  progressGradient.addColorStop(1, "#FE86C1");
  ctx.fillStyle = progressGradient;
  ctx.strokeStyle = '#FFF';
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
    ctx.strokeStyle = '#000';
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
      }, 150);
      break;

    case 's':
    case 'ArrowDown':
      downPressed = true;
      setTimeout(function () {
        return keyUpHandler(e);
      }, 150);
      break;

    case 'ArrowRight':
    case 'd':
      rightPressed = true;
      setTimeout(function () {
        return keyUpHandler(e);
      }, 150);
      break;

    case 'a':
    case 'ArrowLeft':
      leftPressed = true;
      setTimeout(function () {
        return keyUpHandler(e);
      }, 150);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zb25ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc29uZ3NfbWVudS5qcyJdLCJuYW1lcyI6WyJib2R5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImlkIiwicmlnaHRfYXJyb3ciLCJJbWFnZSIsImxlZnRfYXJyb3ciLCJ1cF9hcnJvdyIsImRvd25fYXJyb3ciLCJzcmMiLCJyaWdodF9hcnJvd19hY3RpdmUiLCJsZWZ0X2Fycm93X2FjdGl2ZSIsInVwX2Fycm93X2FjdGl2ZSIsImRvd25fYXJyb3dfYWN0aXZlIiwibWVudSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjYW52YXMiLCJzb25nU2VsZWN0IiwiYXVkaW8iLCJBdWRpbyIsInNvbmciLCJicG0iLCJyZXN1bHRzIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwbGF5IiwiZ2V0U29uZyIsImRyYXdOb3RlIiwiaSIsImJlYXQiLCJzZXRUaW1lb3V0IiwibGVuZ3RoIiwic2hvd1Jlc3VsdHMiLCJjYWxjdWxhdGVHcmFkZSIsInRvdGFsIiwid2VpZ2h0ZWRTY29yZSIsInBlcmNlbnRhZ2UiLCJQZXJmZWN0IiwiR3JlYXQiLCJPSyIsIkJhZCIsIk1pc3MiLCJjb25zb2xlIiwibG9nIiwiZ3JhZGUiLCJocmVmIiwiaW5uZXJIVE1MIiwic2Nyb2xsTWVudSIsInNvbmdzRG93bkhhbmRsZXIiLCJlIiwia2V5IiwicGxheTEiLCJwbGF5MiIsInBsYXkzIiwicGxheTQiLCJwbGF5NSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZHgiLCJjdHgiLCJub3RlcyIsImNvbWJvIiwiY29tYm9UZXh0Iiwic3BlZWQiLCJub3RlWCIsInkiLCJydW4iLCJwcm9ncmVzcyIsInByb2dyZXNzR3JhZGllbnQiLCJjYWxjdWxhdGVTY29yZSIsInBpeGVscyIsImZvckVhY2giLCJub3RlIiwiaW5jbHVkZXMiLCJwdXNoIiwiaW1nIiwieCIsInNjb3JlIiwiZGlzcGxheWVkIiwiZ2V0Q29udGV4dCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImRyYXciLCJmb250IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsImNsZWFyUmVjdCIsImJlZ2luUGF0aCIsInJlY3QiLCJzdHJva2UiLCJmaWxsUmVjdCIsInJpZ2h0UHJlc3NlZCIsImRyYXdJbWFnZSIsInVwUHJlc3NlZCIsImRvd25QcmVzc2VkIiwibGVmdFByZXNzZWQiLCJmaWxsVGV4dCIsInN0cm9rZVRleHQiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImdhbWVMb29wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyaWdodCIsImxlZnQiLCJ1cCIsImRvd24iLCJzb25nMSIsInNvbmcyIiwic29uZzMiLCJzb25nTnVtIiwic29uZ3NMaXN0IiwiZm91bmRBY3RpdmUiLCJjdXJyIiwibmV4dCIsImN1cnJQb3MiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInZhbHVlcyIsInNwbGl0IiwiY3VyclgiLCJwYXJzZUludCIsInNsaWNlIiwiY3VyclkiLCJ0cmFuc2Zvcm0iLCJuZXdQb3MiLCJyZW1vdmUiLCJhZGQiLCJzaGlmdCIsInVuc2hpZnQiLCJwb3AiLCJmdW5jIiwiaW50ZXJ2YWwiLCJsYXN0Q2FsbCIsIm5vdyIsIkRhdGUiLCJhcHBseSIsImFyZ3VtZW50cyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztB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bUIsUUFBbkI7QUFDSDs7QUFFRCxVQUFJdEcsRUFBQyxLQUFLLENBQVYsRUFBYXVGLEtBQUksQ0FBQzdGLEtBQUwsQ0FBV3lHLFNBQVgsdUJBQW9DLEVBQXBDLFVBQTZDLEdBQTdDLFNBQWIsS0FDSztBQUNELFlBQUlDLE9BQU0sU0FBVjs7QUFDQUEsZUFBTSxHQUFHZCxZQUFXLHVCQUFnQlMsTUFBSyxHQUFHLEVBQXhCLGlCQUFpQ0csTUFBSyxHQUFHLEVBQXpDLCtCQUFnRUgsTUFBSyxHQUFHLEVBQXhFLGlCQUFpRkcsTUFBSyxHQUFHLEVBQXpGLFFBQXBCO0FBQ0FYLGFBQUksQ0FBQzdGLEtBQUwsQ0FBV3lHLFNBQVgsR0FBdUJDLE9BQXZCO0FBQ0g7QUFDSjs7QUFDRGYsYUFBUyxDQUFDbUIsT0FBVixDQUFrQm5CLFNBQVMsQ0FBQ29CLEdBQVYsRUFBbEI7QUFDSDtBQUNKO0FBRU0sU0FBU3RGLFVBQVQsQ0FBb0J1RixJQUFwQixFQUEwQkMsUUFBMUIsRUFBb0M7QUFDdkMsTUFBSUMsUUFBUSxHQUFHLENBQWY7QUFDQSxTQUFPLFlBQVk7QUFDZixRQUFJQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0QsR0FBTCxFQUFWOztBQUNBLFFBQUlELFFBQVEsR0FBR0QsUUFBWCxHQUFzQkUsR0FBMUIsRUFBK0I7QUFDM0JELGNBQVEsR0FBR0MsR0FBWDtBQUNBLGFBQU9ILElBQUksQ0FBQ0ssS0FBTCxDQUFXLElBQVgsRUFBaUJDLFNBQWpCLENBQVA7QUFDSDtBQUNKLEdBTkQ7QUFPSCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgc29uZ3NEb3duSGFuZGxlciwgc2Nyb2xsTWVudSB9IGZyb20gJy4vc29uZ3NfbWVudS5qcyc7XG5pbXBvcnQgeyBnZXRTb25nIH0gZnJvbSAnLi9zb25ncy5qcyc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xubGV0IGlkO1xuXG5sZXQgcmlnaHRfYXJyb3cgPSBuZXcgSW1hZ2UoKTtcbmxldCBsZWZ0X2Fycm93ID0gbmV3IEltYWdlKCk7XG5sZXQgdXBfYXJyb3cgPSBuZXcgSW1hZ2UoKTtcbmxldCBkb3duX2Fycm93ID0gbmV3IEltYWdlKCk7XG5cbnJpZ2h0X2Fycm93LnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfcmlnaHQucG5nJztcbmxlZnRfYXJyb3cuc3JjID0gJy4vc3ByaXRlcy9hcnJvd19sZWZ0LnBuZyc7XG51cF9hcnJvdy5zcmMgPSAnLi9zcHJpdGVzL2Fycm93X3VwLnBuZyc7XG5kb3duX2Fycm93LnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfZG93bi5wbmcnO1xuXG5sZXQgcmlnaHRfYXJyb3dfYWN0aXZlID0gbmV3IEltYWdlKCk7XG5sZXQgbGVmdF9hcnJvd19hY3RpdmUgPSBuZXcgSW1hZ2UoKTtcbmxldCB1cF9hcnJvd19hY3RpdmUgPSBuZXcgSW1hZ2UoKTtcbmxldCBkb3duX2Fycm93X2FjdGl2ZSA9IG5ldyBJbWFnZSgpO1xuXG5yaWdodF9hcnJvd19hY3RpdmUuc3JjID0gJy4vc3ByaXRlcy9hcnJvd19yaWdodF9hY3RpdmUucG5nJztcbmxlZnRfYXJyb3dfYWN0aXZlLnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfbGVmdF9hY3RpdmUucG5nJztcbnVwX2Fycm93X2FjdGl2ZS5zcmMgPSAnLi9zcHJpdGVzL2Fycm93X3VwX2FjdGl2ZS5wbmcnO1xuZG93bl9hcnJvd19hY3RpdmUuc3JjID0gJy4vc3ByaXRlcy9hcnJvd19kb3duX2FjdGl2ZS5wbmcnO1xuXG4vKiBNYWluIG1lbnUgYnV0dG9ucyAqL1xuXG5sZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnVDb250YWluZXInKVswXTtcbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYW52YXNDb250YWluZXInKVswXTtcbmxldCBzb25nU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc29uZ3NDb250YWluZXInKVswXTtcbmxldCBhdWRpbyA9IG5ldyBBdWRpbyhcIi4vc29uZ3Mvd3d3Lm9nZ1wiKTtcbmxldCBzb25nO1xubGV0IGJwbTtcbmxldCByZXN1bHRzID0geyAnUGVyZmVjdCc6IDAsXG4nR3JlYXQnOiAwLFxuJ09LJzogMCxcbidCYWQnOiAwLFxuJ01pc3MnOiAwXG59O1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJy4vYmFja2dyb3VuZHMvd3d3X2JnLnBuZycpYDtcbiAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgYXVkaW8ucGxheSgpO1xuICAgIHNvbmcgPSBnZXRTb25nKDIpO1xuICAgIGJwbSA9IDcwMDtcbiAgICBkcmF3Tm90ZShbXSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb25nLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBiZWF0ID0gc29uZ1tpXTtcbiAgICAgICAgaWYgKGJlYXQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZHJhd05vdGUoYmVhdCksIGkgKiBicG0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFRpbWVvdXQoc2hvd1Jlc3VsdHMsIGJwbSAqIHNvbmcubGVuZ3RoKTtcbn0pO1xuXG5jb25zdCBjYWxjdWxhdGVHcmFkZSA9IHJlc3VsdHMgPT4ge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgbGV0IHdlaWdodGVkU2NvcmUgPSAwO1xuICAgIGxldCBwZXJjZW50YWdlO1xuICAgIHRvdGFsICs9IHJlc3VsdHMuUGVyZmVjdDtcbiAgICB0b3RhbCArPSByZXN1bHRzLkdyZWF0O1xuICAgIHRvdGFsICs9IHJlc3VsdHMuT0s7XG4gICAgdG90YWwgKz0gcmVzdWx0cy5CYWQ7XG4gICAgdG90YWwgKz0gcmVzdWx0cy5NaXNzO1xuXG4gICAgd2VpZ2h0ZWRTY29yZSArPSByZXN1bHRzLlBlcmZlY3Q7XG4gICAgd2VpZ2h0ZWRTY29yZSArPSByZXN1bHRzLkdyZWF0ICogLjg7XG4gICAgd2VpZ2h0ZWRTY29yZSArPSByZXN1bHRzLk9LICogLjY7XG4gICAgd2VpZ2h0ZWRTY29yZSArPSByZXN1bHRzLkJhZCAqIC40O1xuICAgIFxuICAgIHBlcmNlbnRhZ2UgPSAod2VpZ2h0ZWRTY29yZS90b3RhbCkgKiAxMDA7XG4gICAgY29uc29sZS5sb2cocGVyY2VudGFnZSk7XG4gICAgaWYgKHBlcmNlbnRhZ2UgPCA2MCkgcmV0dXJuICdEJztcbiAgICBpZiAocGVyY2VudGFnZSA+PSA2MCAmJiBwZXJjZW50YWdlIDwgNjgpIHJldHVybiAnQyc7XG4gICAgaWYgKHBlcmNlbnRhZ2UgPj0gNjggJiYgcGVyY2VudGFnZSA8IDg2KSByZXR1cm4gJ0InO1xuICAgIGlmIChwZXJjZW50YWdlID49IDg2ICYmIHBlcmNlbnRhZ2UgPCA5MykgcmV0dXJuICdBJztcbiAgICBpZiAocGVyY2VudGFnZSA+PSA5MyAmJiBwZXJjZW50YWdlIDwgOTYpIHJldHVybiAnUyc7XG4gICAgaWYgKHBlcmNlbnRhZ2UgPj0gOTYpIHJldHVybiAnU1MnO1xuXG59XG5cbmNvbnN0IHNob3dSZXN1bHRzID0gKCkgPT4ge1xuICAgIGxldCBncmFkZSA9IGNhbGN1bGF0ZUdyYWRlKHJlc3VsdHMpO1xuICAgIGNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHlsZXNoZWV0JykuaHJlZiA9ICcuL2Nzcy9yZXN1bHRzLmNzcyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyYWRlJykuaW5uZXJIVE1MID0gZ3JhZGU7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb25nQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuXHRtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgc29uZ1NlbGVjdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0eWxlc2hlZXQnKS5ocmVmID0gJy4vY3NzL3NvbmdzLmNzcyc7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzY3JvbGxNZW51KHNvbmdzRG93bkhhbmRsZXIsIDQwMCksIGZhbHNlKTtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBsZXQgcGxheTEsIHBsYXkyLCBwbGF5MywgcGxheTQsIHBsYXk1O1xuXHRcdFx0bWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0eWxlc2hlZXQnKS5ocmVmID0gJy4vY3NzL3N0eWxlcy5jc3MnO1xuICAgICAgICAgICAgcGxheTEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2MtMScpO1xuICAgICAgICAgICAgcGxheTIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2MtMicpO1xuICAgICAgICAgICAgcGxheTMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2MtMycpO1xuICAgICAgICAgICAgcGxheTQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2MtNCcpO1xuICAgICAgICAgICAgcGxheTUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2MtNScpO1xuICAgICAgICAgICAgaWYgKHBsYXkyKSB7XG4gICAgICAgICAgICAgICAgYXVkaW8gPSBuZXcgQXVkaW8oJy4vc29uZ3Mvc3RlcHBpbmdfdy5vZ2cnKTtcbiAgICAgICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuL2JhY2tncm91bmRzL3N0ZXBwaW5nX3dfYmcucG5nJylcIjtcblx0XHRcdFx0YnBtID0gNTAwO1xuXHRcdFx0XHRzb25nID0gZ2V0U29uZygzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwbGF5Mykge1xuICAgICAgICAgICAgICAgIGF1ZGlvID0gbmV3IEF1ZGlvKCcuL3NvbmdzL3BwcC5tcDMnKTtcbiAgICAgICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuL2JhY2tncm91bmRzL3BwcF9iZy5wbmcnKVwiO1xuICAgICAgICAgICAgICAgIGJwbSA9IDM3NTtcbiAgICAgICAgICAgICAgICBzb25nID0gZ2V0U29uZygxKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZiAocGxheTQpIHtcbiAgICAgICAgICAgICAgICBhdWRpbyA9IG5ldyBBdWRpbygnLi9zb25ncy93d3cub2dnJyk7XG4gICAgICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcuL2JhY2tncm91bmRzL3d3d19iZy5wbmcnKWA7XG4gICAgICAgICAgICAgICAgYnBtID0gNzAwO1xuICAgICAgICAgICAgICAgIHNvbmcgPSBnZXRTb25nKDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG5cdFx0XHRhdWRpby5wbGF5KCk7XG4gICAgICAgICAgICBkcmF3Tm90ZShbXSk7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNvbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgYmVhdCA9IHNvbmdbaV07XG5cdFx0XHRcdGlmIChiZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZHJhd05vdGUoYmVhdCksIGkgKiBicG0pO1xuXHRcdFx0XHR9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHNob3dSZXN1bHRzLCBicG0gKiBzb25nLmxlbmd0aCk7XG5cblx0XHR9XG5cdH0pO1xufSk7XG5cbi8qIFJlbmRlcmluZyAqL1xuXG5sZXQgZHggPSAxMDtcbmxldCBjdHg7XG5sZXQgbm90ZXMgPSBbXTtcbmxldCBjb21ibyA9IDA7XG5sZXQgY29tYm9UZXh0O1xubGV0IHNwZWVkID0gMzA7IC8vIGxvd2VyIGlzIGZhc3RlclxubGV0IG5vdGVYO1xubGV0IHkgPSA2MDA7IC8vIHZlcnRpY2FsIG9mZnNldFxubGV0IHJ1bjtcbmxldCBwcm9ncmVzcyA9IDE1MDtcbmxldCBwcm9ncmVzc0dyYWRpZW50O1xuXG5jb25zdCBjYWxjdWxhdGVTY29yZSA9IChwaXhlbHMpID0+IHtcbiAgICBpZiAocGl4ZWxzIDw9IDMwICYmIHBpeGVscyA+PSAyNSkge1xuICAgICAgICByZXN1bHRzWydCYWQnXSsrO1xuICAgICAgICByZXR1cm4gJ0JhZCc7XG4gICAgfVxuICAgIGlmIChwaXhlbHMgPD0gMjUgJiYgcGl4ZWxzID49IDIwKSB7XG4gICAgICAgIHJlc3VsdHNbJ09LJ10rKztcbiAgICAgICAgcmV0dXJuICdPSyc7XG4gICAgfVxuICAgIGlmIChwaXhlbHMgPD0gMjAgJiYgcGl4ZWxzID49IDEwKSB7XG4gICAgICAgIHJlc3VsdHNbJ0dyZWF0J10rKztcbiAgICAgICAgcmV0dXJuICdHb29kJztcbiAgICB9XG4gICAgaWYgKHBpeGVscyA8PSAxMCkge1xuICAgICAgICByZXN1bHRzWydQZXJmZWN0J10rKztcbiAgICAgICAgcmV0dXJuICdQZXJmZWN0ISc7XG4gICAgfVxufVxuXG5jb25zdCBkcmF3Tm90ZSA9IChiZWF0KSA9PiB7XG4gICAgaWYoYmVhdCkge1xuICAgICAgICBiZWF0LmZvckVhY2gobm90ZSA9PiB7XG4gICAgICAgICAgICBpZiAobm90ZS5zcmMuaW5jbHVkZXMoJ2xlZnQnKSkgbm90ZVggPSAxMDA7XG4gICAgICAgICAgICBpZiAobm90ZS5zcmMuaW5jbHVkZXMoJ2Rvd24nKSkgbm90ZVggPSAyMDA7XG4gICAgICAgICAgICBpZiAobm90ZS5zcmMuaW5jbHVkZXMoJ3VwJykpIG5vdGVYID0gMzAwO1xuICAgICAgICAgICAgaWYgKG5vdGUuc3JjLmluY2x1ZGVzKCdyaWdodCcpKSBub3RlWCA9IDQwMDtcbiAgICAgICAgICAgIG5vdGVzLnB1c2goeyBpbWc6IG5vdGUsIFxuICAgICAgICAgICAgICAgIHg6IG5vdGVYLCBcbiAgICAgICAgICAgICAgICB5LCBcbiAgICAgICAgICAgICAgICBzY29yZTogbnVsbCxcbiAgICAgICAgICAgICAgICBkaXNwbGF5ZWQ6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjbGVhckludGVydmFsKHJ1bik7XG4gICAgcnVuID0gc2V0SW50ZXJ2YWwoKCkgPT4gZHJhdyhub3RlcyksIHNwZWVkKTtcbn1cblxuY29uc3QgZHJhdyA9IChub3RlcykgPT4ge1xuICAgIGN0eC5mb250ID0gXCJib2xkIDMwcHggSGVsdmV0aWNhXCI7XG4gICAgcHJvZ3Jlc3NHcmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCg1NTAsIDQwMCAtIHByb2dyZXNzLCA1ODAsIDQwMCk7XG4gICAgcHJvZ3Jlc3NHcmFkaWVudC5hZGRDb2xvclN0b3AoMCwgXCIjNDBDQkVBXCIpO1xuICAgIHByb2dyZXNzR3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIFwiI0ZFODZDMVwiKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBwcm9ncmVzc0dyYWRpZW50O1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjRkZGJztcblxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgNjAwLCA2MDApOyAvLyBjbGVhciB0aGUgY2FudmFzXG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnJlY3QoNTUwLCAxMDAsIDMwLCAzMDApO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguZmlsbFJlY3QoNTUwLCA0MDAgLSBwcm9ncmVzcywgMzAsIHByb2dyZXNzKTtcblxuXG4gICAgaWYgKHJpZ2h0UHJlc3NlZCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHJpZ2h0X2Fycm93X2FjdGl2ZSwgNDAwLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHJpZ2h0X2Fycm93LCA0MDAsIDApO1xuICAgIH1cbiAgICBpZiAodXBQcmVzc2VkKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodXBfYXJyb3dfYWN0aXZlLCAzMDAsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodXBfYXJyb3csIDMwMCwgMCk7XG4gICAgfVxuICAgIGlmIChkb3duUHJlc3NlZCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGRvd25fYXJyb3dfYWN0aXZlLCAyMDAsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZG93bl9hcnJvdywgMjAwLCAwKTtcbiAgICB9XG4gICAgaWYgKGxlZnRQcmVzc2VkKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UobGVmdF9hcnJvd19hY3RpdmUsIDEwMCwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShsZWZ0X2Fycm93LCAxMDAsIDApO1xuICAgIH1cblxuICAgIGlmKG5vdGVzLmxlbmd0aCkge1xuICAgICAgICBub3Rlcy5mb3JFYWNoKG5vdGUgPT4ge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShub3RlLmltZywgbm90ZS54LCBub3RlLnkpO1xuXG4gICAgICAgICAgICBpZihub3RlLnggPT09IDEwMCAmJiAhbm90ZS5zY29yZSAmJiBsZWZ0UHJlc3NlZCkge1xuICAgICAgICAgICAgICAgIG5vdGUuc2NvcmUgPSBjYWxjdWxhdGVTY29yZShub3RlLnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vdGUueCA9PT0gMjAwICYmICFub3RlLnNjb3JlICYmIGRvd25QcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgbm90ZS5zY29yZSA9IGNhbGN1bGF0ZVNjb3JlKG5vdGUueSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm90ZS54ID09PSAzMDAgJiYgIW5vdGUuc2NvcmUgJiYgdXBQcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgbm90ZS5zY29yZSA9IGNhbGN1bGF0ZVNjb3JlKG5vdGUueSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm90ZS54ID09PSA0MDAgJiYgIW5vdGUuc2NvcmUgJiYgcmlnaHRQcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgbm90ZS5zY29yZSA9IGNhbGN1bGF0ZVNjb3JlKG5vdGUueSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm90ZS55IDwgMCAmJiAhbm90ZS5zY29yZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdHNbJ01pc3MnXSsrO1xuICAgICAgICAgICAgICAgIG5vdGUuc2NvcmUgPSAnTWlzcyc7XG4gICAgICAgICAgICAgICAgY29tYm8gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm90ZS5zY29yZSAmJiAhbm90ZS5kaXNwbGF5ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobm90ZS5zY29yZSA9PSAnR29vZCcgfHwgbm90ZS5zY29yZSA9PSAnUGVyZmVjdCEnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8IDMwMCkgcHJvZ3Jlc3MgKz0gNTtcbiAgICAgICAgICAgICAgICAgICAgY29tYm8rKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzIC09IDU7XG4gICAgICAgICAgICAgICAgICAgIGNvbWJvID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERpc3BsYXkgc2NvcmUgZm9yIDIwIGZyYW1lc1xuICAgICAgICAgICAgaWYgKG5vdGUuc2NvcmUgJiYgbm90ZS5kaXNwbGF5ZWQgPD0gMjApIHtcbiAgICAgICAgICAgICAgICBsZXQgc2NvcmUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5vdGUuc2NvcmUpIHtcblx0XHRcdFx0XHRjYXNlICdNaXNzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlLnNyYyA9ICcuL3Nwcml0ZXMvbWlzcy5wbmcnO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnQmFkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlLnNyYyA9ICcuL3Nwcml0ZXMvYmFkLnBuZyc7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdPSyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZS5zcmMgPSAnLi9zcHJpdGVzL29rLnBuZyc7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdHb29kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlLnNyYyA9ICcuL3Nwcml0ZXMvZ3JlYXQucG5nJztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ1BlcmZlY3QhJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlLnNyYyA9ICcuL3Nwcml0ZXMvcGVyZmVjdC5wbmcnO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHNjb3JlLCAyNTAsIDE1MCk7XG4gICAgICAgICAgICAgICAgbm90ZS5kaXNwbGF5ZWQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vdGUueSAtPSBkeDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbWJvID49IDIpIHtcbiAgICAgICAgY29tYm9UZXh0ID0gYCR7Y29tYm99IGNvbWJvYDtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAnO1xuXG4gICAgICAgIGN0eC5maWxsVGV4dChjb21ib1RleHQsIDI2MCwgMjI1KTtcbiAgICAgICAgY3R4LnN0cm9rZVRleHQoY29tYm9UZXh0LCAyNjAsIDIyNSk7XG4gICAgfVxufVxuXG4vKiBDb250cm9scyAqL1xuXG5sZXQgdXBQcmVzc2VkID0gZmFsc2U7XG5sZXQgZG93blByZXNzZWQgPSBmYWxzZTtcbmxldCByaWdodFByZXNzZWQgPSBmYWxzZTtcbmxldCBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkhhbmRsZXIsIGZhbHNlKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5VXBIYW5kbGVyLCBmYWxzZSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBrZXlEb3duSGFuZGxlcihlKSB7XG5cdHN3aXRjaCAoZS5rZXkpIHtcblx0XHRjYXNlICd3Jzpcblx0XHRjYXNlICdBcnJvd1VwJzpcblx0XHRcdHVwUHJlc3NlZCA9IHRydWU7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IGtleVVwSGFuZGxlcihlKSwgMTUwKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ3MnOlxuXHRcdGNhc2UgJ0Fycm93RG93bic6XG5cdFx0XHRkb3duUHJlc3NlZCA9IHRydWU7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IGtleVVwSGFuZGxlcihlKSwgMTUwKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ0Fycm93UmlnaHQnOlxuXHRcdGNhc2UgJ2QnOlxuXHRcdFx0cmlnaHRQcmVzc2VkID0gdHJ1ZTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ga2V5VXBIYW5kbGVyKGUpLCAxNTApO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnYSc6XG5cdFx0Y2FzZSAnQXJyb3dMZWZ0Jzpcblx0XHRcdGxlZnRQcmVzc2VkID0gdHJ1ZTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ga2V5VXBIYW5kbGVyKGUpLCAxNTApO1xuXHRcdFx0YnJlYWs7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtleVVwSGFuZGxlcihlKSB7XG5cdHN3aXRjaCAoZS5rZXkpIHtcblx0XHRjYXNlICd3Jzpcblx0XHRjYXNlICdBcnJvd1VwJzpcblx0XHRcdHVwUHJlc3NlZCA9IGZhbHNlO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAncyc6XG5cdFx0Y2FzZSAnQXJyb3dEb3duJzpcblx0XHRcdGRvd25QcmVzc2VkID0gZmFsc2U7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdkJzpcblx0XHRjYXNlICdBcnJvd1JpZ2h0Jzpcblx0XHRcdHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnYSc6XG5cdFx0Y2FzZSAnQXJyb3dMZWZ0Jzpcblx0XHRcdGxlZnRQcmVzc2VkID0gZmFsc2U7XG5cdFx0XHRicmVhaztcblx0fVxufVxuXG4vKiBBbmltYXRpb24gKi9cblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gICAgaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApXG59XG5cbmlmIChib2R5KSB7XG4gICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpXG4gICAgfSlcbn0iLCJsZXQgcmlnaHQgPSBuZXcgSW1hZ2UoKTtcbmxldCBsZWZ0ID0gbmV3IEltYWdlKCk7XG5sZXQgdXAgPSBuZXcgSW1hZ2UoKTtcbmxldCBkb3duID0gbmV3IEltYWdlKCk7XG5cbnJpZ2h0LnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfcmlnaHRfbm90ZS5wbmcnO1xubGVmdC5zcmMgPSAnLi9zcHJpdGVzL2Fycm93X2xlZnRfbm90ZS5wbmcnO1xudXAuc3JjID0gJy4vc3ByaXRlcy9hcnJvd191cF9ub3RlLnBuZyc7XG5kb3duLnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfZG93bl9ub3RlLnBuZyc7XG5cbmxldCBzb25nMSA9IFtcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIG51bGwsIG51bGwsIG51bGwsIG51bGwsXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgbnVsbCwgW3JpZ2h0XSxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBudWxsLCBbdXBdLFxuICAgIFtyaWdodF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIG51bGwsIFtsZWZ0XSxcbiAgICBbdXBdLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBudWxsLCBbZG93bl0sXG4gICAgW2xlZnQsIHJpZ2h0XSwgbnVsbCwgW2xlZnRdLCBbcmlnaHRdLFxuICAgIFt1cF0sIFtkb3duXSwgW3VwXSwgW2Rvd25dLFxuICAgIFtyaWdodF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbcmlnaHRdLCBbbGVmdF0sIFtkb3duXSwgW3VwXSxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBbcmlnaHRdLCBbZG93bl0sXG4gICAgW2xlZnRdLCBbdXBdLCBbbGVmdF0sIFt1cF0sXG4gICAgW2Rvd25dLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtkb3duXSwgW3JpZ2h0XSwgW3VwXSwgW2xlZnRdLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbbGVmdF0sIFt1cCwgZG93bl0sIFtyaWdodF0sIFt1cCwgZG93bl0sXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtyaWdodF0sIFt1cCwgZG93bl0sIFtsZWZ0XSwgW3VwLCBkb3duXSxcbiAgICBbcmlnaHRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW2Rvd25dLCBbbGVmdCwgcmlnaHRdLCBbdXBdLCBbbGVmdCwgcmlnaHRdLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgbnVsbCwgW3JpZ2h0XSxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBudWxsLCBbdXBdLFxuICAgIFtyaWdodF0sIFtkb3duXSwgW3VwXSwgW2xlZnRdLFxuICAgIFtyaWdodF0sIFt1cF0sIFtsZWZ0XSwgW2Rvd25dLFxuICAgIFtsZWZ0XSwgW3VwXSwgW2Rvd25dLCBbcmlnaHRdLFxuICAgIFtsZWZ0XSwgW2Rvd25dLCBbcmlnaHRdLCBbdXBdLFxuICAgIFtyaWdodF0sIFt1cF0sIFtkb3duXSwgW2xlZnRdLFxuICAgIFtyaWdodF0sIFtsZWZ0XSwgW3VwXSwgW2Rvd25dLFxuICAgIFtsZWZ0XSwgW2Rvd25dLCBbdXBdLCBbcmlnaHRdLFxuICAgIFtsZWZ0XSwgW3JpZ2h0XSwgW2Rvd25dLCBbbGVmdCwgcmlnaHRdXG5dO1xuXG5sZXQgc29uZzIgPSBbXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIG51bGwsIG51bGwsIG51bGwsIG51bGwsXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgW3JpZ2h0XSwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdF0sIFtsZWZ0XSwgW2xlZnRdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFt1cF0sIFt1cF0sIFtkb3duXSwgW2Rvd25dLFxuICAgIFt1cF0sIFtkb3duXSwgW3VwXSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtsZWZ0LCByaWdodF0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbdXBdLCBbdXBdLCBbdXBdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbZG93bl0sIFtkb3duXSwgW2Rvd25dLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3JpZ2h0XSwgW3JpZ2h0XSwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbbGVmdF0sIFtsZWZ0XSwgW2xlZnRdLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2Rvd25dLCBbZG93bl0sXG4gICAgW2Rvd25dLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBbdXBdLFxuICAgIFt1cF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2xlZnRdLCBbbGVmdF0sXG4gICAgW2xlZnRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtyaWdodF0sIFtyaWdodF0sIFtyaWdodF0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW3VwXSwgW3VwXSwgW3VwXSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbdXBdLCBbdXBdLCBbdXBdLCBudWxsLFxuICAgIFtkb3duXSwgW2Rvd25dLCBbZG93bl0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFt1cCwgZG93bl0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBudWxsLCBudWxsXG5dO1xuXG5sZXQgc29uZzMgPSBbXG4gICAgW10sIFtdLCBbXSwgW10sXG4gICAgW10sIFtdLCBbXSwgW10sXG4gICAgW3VwXSwgW3VwXSwgW3VwXSwgW10sXG4gICAgW2Rvd25dLCBbdXBdLCBbZG93bl0sIFtdLFxuICAgIFtsZWZ0XSwgW10sIFt1cF0sIFtdLFxuICAgIFtyaWdodF0sIFtkb3duXSwgW3VwXSwgW10sXG4gICAgW3VwXSwgW3VwXSwgW3VwXSwgW10sXG4gICAgW2Rvd25dLCBbZG93bl0sIFtkb3duXSwgW10sXG4gICAgW2xlZnRdLCBbdXBdLCBbbGVmdF0sIFtdLFxuICAgIFt1cF0sIFtkb3duXSwgW3VwXSwgW10sXG4gICAgW3JpZ2h0XSwgW10sIFt1cF0sIFtdLFxuICAgIFtkb3duXSwgW10sIFt1cF0sIFtdLFxuICAgIFtsZWZ0XSwgW3VwXSwgW3VwXSwgW10sXG4gICAgW2Rvd25dLCBbdXBdLCBbdXBdLCBbXSxcbiAgICBbcmlnaHRdLCBbXSwgW2Rvd25dLCBbXSxcbiAgICBbdXBdLCBbXSwgW2xlZnRdLCBbXSxcbiAgICBbdXBdLCBbZG93bl0sIFtkb3duXSwgW10sXG4gICAgW3JpZ2h0XSwgW2xlZnRdLCBbbGVmdF0sIFtdLFxuICAgIFtyaWdodCwgbGVmdF0sIFtdLCBbXSwgW10sXG4gICAgW10sIFt1cF0sIFtkb3duXSwgW10sIFxuICAgIFt1cF0sIFtdLCBbdXBdLCBbXSxcbiAgICBbZG93bl0sIFtkb3duXSwgW2Rvd25dLCBbXSxcbiAgICBbbGVmdF0sIFtdLCBbbGVmdF0sIFtdLFxuICAgIFtyaWdodF0sIFt1cF0sIFtsZWZ0LCByaWdodF0sIFtsZWZ0LCB1cF0sXG4gICAgW10sIFt1cF0sIFtdLCBbdXBdLFxuICAgIFtdLCBbZG93bl0sIFtkb3duXSwgW2Rvd25dLFxuICAgIFtdLCBbbGVmdF0sIFtdLCBbbGVmdF0sXG4gICAgW3JpZ2h0XSwgW3VwXSwgW2Rvd25dLCBbXSxcbiAgICBbdXBdLCBbZG93bl0sIFt1cF0sIFtsZWZ0XSxcbiAgICBbdXBdLCBbZG93bl0sIFt1cF0sIFtdLFxuICAgIFtyaWdodF0sIFtkb3duXSwgW3VwXSwgW2Rvd25dLFxuICAgIFtsZWZ0XSwgW2Rvd25dLCBbdXBdLCBbbGVmdCwgcmlnaHRdLFxuICAgIFtdLCBbdXBdLCBbZG93bl0sIFt1cF0sXG4gICAgW2xlZnRdLCBbdXBdLCBbcmlnaHRdLCBbXSxcbiAgICBbdXBdLCBbZG93bl0sIFt1cF0sIFtsZWZ0LCByaWdodF0sXG4gICAgW3VwLCBkb3duXSwgW10sIFtdLCBbXSxcbiAgICBbdXBdLCBbXSwgW2Rvd25dLCBbXSxcbiAgICBbdXBdLCBbdXBdLCBbZG93bl0sIFtdLFxuICAgIFtsZWZ0XSwgW3JpZ2h0XSwgW3VwLCBkb3duXSwgW10sIFxuICAgIFtyaWdodF0sIFtsZWZ0XSwgW3VwLCBkb3duXSwgW10sXG4gICAgW3JpZ2h0XSwgW10sIFt1cF0sIFtdLFxuICAgIFtsZWZ0XSwgW2Rvd25dLCBbbGVmdF0sIFtdLFxuICAgIFtyaWdodF0sIFt1cF0sIFtkb3duXSwgW3VwXSxcbiAgICBbZG93bl0sIFt1cF0sIFtsZWZ0LCByaWdodF0sIFtdLFxuICAgIFt1cF0sIFtdLCBbZG93bl0sIFtdLFxuICAgIFt1cF0sIFtkb3duXSwgW2xlZnRdLCBbZG93bl0sXG4gICAgW3VwXSwgW3VwXSwgW2xlZnQsIHJpZ2h0XSwgW10sXG4gICAgW2Rvd25dLCBbZG93bl0sIFtsZWZ0LCByaWdodF0sIFtdLFxuICAgIFt1cF0sIFtdLCBbZG93bl0sIFtdLFxuICAgIFtyaWdodF0sIFt1cF0sIFtkb3duXSwgW3VwXSxcbiAgICBbZG93bl0sIFtsZWZ0LCByaWdodF0sIFt1cCwgZG93bl0sIFtdLFxuICAgIFt1cF0sIFt1cF0sIFtkb3duXSwgW10sXG4gICAgW3VwXSwgW10sIFtkb3duXSwgW10sXG4gICAgW3VwXSwgW3JpZ2h0XSwgW3VwXSwgW2Rvd25dLFxuICAgIFt1cF0sIFt1cF0sIFtsZWZ0LCByaWdodF0sIFtdLFxuICAgIFtkb3duXSwgW2Rvd25dLCBbbGVmdCwgcmlnaHRdLCBbXSxcbiAgICBbdXBdLCBbXSwgW2Rvd25dLCBbXSxcbiAgICBbdXBdLCBbbGVmdF0sIFtyaWdodF0sIFt1cF0sIFxuICAgIFt1cF0sIFt1cF0sIFtsZWZ0LCByaWdodF0sIFtdLFxuICAgIFtkb3duXSwgW2Rvd25dLCBbdXBdLCBudWxsLFxuICAgIFtkb3duXSwgW2Rvd25dLCBbZG93bl0sIFt1cF0sXG4gICAgW2Rvd25dLCBbZG93bl0sIFtkb3duXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBbcmlnaHRdLCBbcmlnaHRdLCBbbGVmdF0sXG4gICAgW3JpZ2h0XSwgW3JpZ2h0XSwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbZG93bl0sIFtkb3duXSwgW2Rvd25dLCBbdXBdLFxuICAgIFtkb3duXSwgW2Rvd25dLCBbZG93bl0sIG51bGwsXG4gICAgW2xlZnRdLCBbbGVmdF0sIFtsZWZ0XSwgW3VwXSxcbiAgICBbbGVmdF0sIFtsZWZ0XSwgW2xlZnRdLCBudWxsLFxuICAgIFtsZWZ0LCByaWdodF0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbdXAsIGRvd25dLCBudWxsLCBbbGVmdCwgcmlnaHRdLCBudWxsLFxuICAgIFt1cF0sIFtkb3duXSwgW3VwXSwgW2xlZnRdLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBbdXBdLCBkb3duLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbdXBdLCBbZG93bl0sIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgW3JpZ2h0XSwgW3JpZ2h0XSwgW3JpZ2h0XSxcbiAgICBbbGVmdF0sIFtsZWZ0XSwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbdXBdLCBbdXBdLCBbdXBdLCBbZG93bl0sXG4gICAgW3VwXSwgW2xlZnRdLCBbdXBdLCBudWxsLFxuICAgIFtyaWdodF0sIFtyaWdodF0sIFtyaWdodF0sIFtkb3duXSxcbiAgICBbdXBdLCBbbGVmdF0sIFt1cF0sIG51bGwsXG4gICAgW3VwXSwgW3VwXSwgW3VwXSwgW2Rvd25dLFxuICAgIFt1cF0sIFtsZWZ0XSwgW3VwXSwgW2xlZnRdLFxuICAgIFt1cF0sIFtsZWZ0XSwgW3VwXSwgW3JpZ2h0LCBsZWZ0XVxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U29uZyhzb25nTnVtKSB7XG4gICAgc3dpdGNoIChzb25nTnVtKSB7XG5cdFx0Y2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHNvbmcxO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gc29uZzI7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiBzb25nMztcblx0fVxufSIsImxldCBzb25nc0xpc3QgPSBbJ2MtMScsICdjLTInLCAnYy0zJywgJ2MtNCcsICdjLTUnXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNvbmdzRG93bkhhbmRsZXIoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgbGV0IGZvdW5kQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29uZ3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGxldCBjdXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzb25nc0xpc3RbaV0pWzBdO1xuICAgICAgICAgICAgbGV0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNvbmdzTGlzdFtpICsgMV0pWzBdO1xuXG4gICAgICAgICAgICBsZXQgY3VyclBvcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGN1cnIsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoXCJ0cmFuc2Zvcm1cIik7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gY3VyclBvcy5zcGxpdCgnKCcpWzFdLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zcGxpdCgnKScpWzBdLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgbGV0IGN1cnJYID0gcGFyc2VJbnQodmFsdWVzWzRdLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIGxldCBjdXJyWSA9IHBhcnNlSW50KHZhbHVlc1s1XSk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkgY3Vyci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7NjB9cHgsICR7LTE2MH1weClgO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1BvcztcbiAgICAgICAgICAgICAgICBuZXdQb3MgPSAoZm91bmRBY3RpdmUpID8gYHRyYW5zbGF0ZSgke2N1cnJYIC0gMzB9cHgsICR7Y3VyclkgKyA4MH1weClgIDogYHRyYW5zbGF0ZSgke2N1cnJYICsgMzB9cHgsICR7Y3VyclkgKyA4MH1weClgXG4gICAgICAgICAgICAgICAgY3Vyci5zdHlsZS50cmFuc2Zvcm0gPSBuZXdQb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3Vyci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICYmICFmb3VuZEFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGZvdW5kQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjdXJyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIG5leHQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBzb25nc0xpc3QucHVzaChzb25nc0xpc3Quc2hpZnQoKSk7XG4gICAgfVxuXG5cbiAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgbGV0IGZvdW5kQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29uZ3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGxldCBjdXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzb25nc0xpc3RbaV0pWzBdO1xuICAgICAgICAgICAgbGV0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNvbmdzTGlzdFtpIC0gMV0pWzBdO1xuXG4gICAgICAgICAgICBsZXQgY3VyclBvcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGN1cnIsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoXCJ0cmFuc2Zvcm1cIik7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gY3VyclBvcy5zcGxpdCgnKCcpWzFdLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zcGxpdCgnKScpWzBdLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgbGV0IGN1cnJYID0gcGFyc2VJbnQodmFsdWVzWzRdLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIGxldCBjdXJyWSA9IHBhcnNlSW50KHZhbHVlc1s1XSk7XG4gICAgICAgICAgICBpZiAoY3Vyci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICYmICFmb3VuZEFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGZvdW5kQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjdXJyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIG5leHQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpID09PSA0KSBjdXJyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHs2MH1weCwgJHsxNjB9cHgpYDtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBuZXdQb3M7XG4gICAgICAgICAgICAgICAgbmV3UG9zID0gZm91bmRBY3RpdmUgPyBgdHJhbnNsYXRlKCR7Y3VyclggKyAzMH1weCwgJHtjdXJyWSAtIDgwfXB4KWAgOiBgdHJhbnNsYXRlKCR7Y3VyclggLSAzMH1weCwgJHtjdXJyWSAtIDgwfXB4KWA7XG4gICAgICAgICAgICAgICAgY3Vyci5zdHlsZS50cmFuc2Zvcm0gPSBuZXdQb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc29uZ3NMaXN0LnVuc2hpZnQoc29uZ3NMaXN0LnBvcCgpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxNZW51KGZ1bmMsIGludGVydmFsKSB7XG4gICAgdmFyIGxhc3RDYWxsID0gMDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKGxhc3RDYWxsICsgaW50ZXJ2YWwgPCBub3cpIHtcbiAgICAgICAgICAgIGxhc3RDYWxsID0gbm93O1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==