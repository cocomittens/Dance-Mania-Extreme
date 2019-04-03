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
var song1 = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, [left], null, [right], null, [down], null, [up], null, [right], null, [left], null, [up], null, [down], null, [left], null, [up], null, [down], null, [right], null, [left], null, [down], null, [right], null, [up], null, [right], null, [down], null, [up], null, [left], null, [right], null, [up], null, [left], null, [down], null, [left], null, [down], null, [up], null, [right], null, [up], null, [down], null, [left], null, null, [right], [down], null, [up], null, [right], null, [left], null, [right], null, [up], null, [down], null, null, [up], [right], null, [up], null, [down], null, [left], null, [down], null, [up], null, [right], null, null, [left], [up], null, [right], null, [left], null, [down], null, [left], null, [right], null, [up], null, null, [down], [left, right], null, [left], [right], [up], [down], [up], [down], [right], null, [left], null, [right], [left], [down], [up], [left, right], null, [right], [down], [left], [up], [left], [up], [down], null, [right], null, [down], [right], [up], [left], [up], null, [down], null, [left], [up, down], [right], [up, down], [down], null, [up], null, [right], [up, down], [left], [up, down], [right], null, [left], null, [down], [left, right], [up], [left, right], [left], null, [right], null, [left, right], null, null, null, [left], null, [right], null, [down], null, [up], null, [down], null, [right], null, [left], null, null, [right], [down], null, [up], null, [right], null, [left], null, [right], null, [up], null, [down], null, null, [up], [right], [down], [up], [left], [right], [up], [left], [down], [left], [up], [down], [right], [left], [down], [right], [up], [right], [up], [down], [left], [right], [left], [up], [down], [left], [down], [up], [right], [left], [right], [down], [left, right]];
var song2 = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, [up], null, null, null, [down], null, null, null, [up], null, null, null, [down], null, null, null, [right], null, [right], null, [down], null, [down], null, [right], null, [right], null, [left], null, [left], null, [right], [right], [right], null, [left], [left], [left], null, [right], null, [left], null, [left, right], null, null, null, [up], null, [down], null, [up], null, [down], null, [up], null, [down], null, [up], [up], [down], [down], [up], [down], [up], null, [down], null, [down], null, [right], null, null, null, [left], null, [left], null, [down], null, null, null, [left], null, [left], null, [up], null, null, null, [down], null, [down], null, [left, right], null, null, null, [up], null, null, null, [up], [up], [up], null, [down], null, null, null, [down], [down], [down], null, [right], null, null, null, [right], [right], [right], null, [left], null, [left], null, [left], [left], [left], null, [up], null, null, null, [left], null, null, null, [left], null, null, null, [right], null, null, null, [down], null, null, null, [right], null, null, null, [left], null, [right], null, [left, right], null, null, null, [right], null, [right], null, [right], null, [down], [down], [down], null, [down], null, [down], null, [up], [up], [up], null, [up], null, [up], null, [left], [left], [left], null, [left], null, [left], null, null, null, [right], [right], [right], null, [left], null, [left], null, [up], [up], [up], null, [down], null, [down], null, [up], [up], [up], null, [down], [down], [down], null, [up], null, [down], null, [up, down], null, null, null, [left], null, null, null];
document.getElementById('songBtn').addEventListener('click', function (event) {
  var menu = document.getElementsByClassName('menuContainer')[0];
  var songs = document.getElementsByClassName('songsContainer')[0];
  menu.style.display = 'none';
  songs.style.display = 'block';
  var menuAudio = new Audio('./songs/bensound-popdance.mp3');
  menuAudio.play();
  document.getElementById('stylesheet').href = './css/songs.css';
  document.addEventListener('keydown', _songs_js__WEBPACK_IMPORTED_MODULE_0__["songsDownHandler"], false);
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
        song = song1;
      } else {
        audio = new Audio('./songs/www.ogg');
        body.style.backgroundImage = "url('./backgrounds/www_bg.png')";
        bpm = 425;
        song = song2;
      }

      canvas.style.display = 'block';
      audio.play();
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
  ctx.font = "bold 30px Helvetica";
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
    ctx.fillStyle = '#000';
    ctx.strokeText(comboText, 260, 225);
  }
}

document.getElementById('startBtn').addEventListener('click', function (event) {
  var menu = document.getElementsByClassName('menuContainer')[0];
  var canvas = document.getElementsByClassName('canvasContainer')[0];
  var song = song1;
  body.style.backgroundImage = "url('./backgrounds/ppp_bg.png')";
  menu.style.display = 'none';
  body.style.backgroundImage = "url('./backgrounds/ppp_bg.png')";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zb25ncy5qcyJdLCJuYW1lcyI6WyJyaWdodCIsIkltYWdlIiwibGVmdCIsInVwIiwiZG93biIsInNyYyIsImJvZHkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaWQiLCJzb25nMSIsInNvbmcyIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJtZW51IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNvbmdzIiwic3R5bGUiLCJkaXNwbGF5IiwibWVudUF1ZGlvIiwiQXVkaW8iLCJwbGF5IiwiaHJlZiIsInNvbmdzRG93bkhhbmRsZXIiLCJlIiwia2V5IiwicGF1c2UiLCJhY3RpdmUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNhbnZhcyIsImF1ZGlvIiwiYnBtIiwic29uZyIsImJhY2tncm91bmRJbWFnZSIsImRyYXdOb3RlIiwiaSIsImJlYXQiLCJzZXRUaW1lb3V0IiwibGVuZ3RoIiwiZHgiLCJjdHgiLCJub3RlcyIsImNvbWJvIiwic3BlZWQiLCJ5IiwicnVuIiwibm90ZVgiLCJmb3JFYWNoIiwibm90ZSIsImluY2x1ZGVzIiwicHVzaCIsImltZyIsIngiLCJzY29yZSIsImRpc3BsYXllZCIsImdldENvbnRleHQiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJkcmF3IiwiZm9udCIsImNsZWFyUmVjdCIsInJpZ2h0UHJlc3NlZCIsImRyYXdJbWFnZSIsInJpZ2h0X2Fycm93X2FjdGl2ZSIsInJpZ2h0X2Fycm93IiwidXBQcmVzc2VkIiwidXBfYXJyb3dfYWN0aXZlIiwidXBfYXJyb3ciLCJkb3duUHJlc3NlZCIsImRvd25fYXJyb3dfYWN0aXZlIiwiZG93bl9hcnJvdyIsImxlZnRQcmVzc2VkIiwibGVmdF9hcnJvd19hY3RpdmUiLCJsZWZ0X2Fycm93IiwiY29tYm9UZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJzdHJva2VUZXh0IiwiZ2FtZUxvb3AiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImtleURvd25IYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwic29uZ3NMaXN0IiwiZm91bmRBY3RpdmUiLCJjdXJyIiwibmV4dCIsImN1cnJQb3MiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInZhbHVlcyIsInNwbGl0IiwiY3VyclgiLCJwYXJzZUludCIsInNsaWNlIiwiY3VyclkiLCJ0cmFuc2Zvcm0iLCJuZXdQb3MiLCJyZW1vdmUiLCJhZGQiLCJzaGlmdCIsInVuc2hpZnQiLCJwb3AiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBRUEsSUFBSUEsS0FBSyxHQUFHLElBQUlDLEtBQUosRUFBWjtBQUNBLElBQUlDLElBQUksR0FBRyxJQUFJRCxLQUFKLEVBQVg7QUFDQSxJQUFJRSxFQUFFLEdBQUcsSUFBSUYsS0FBSixFQUFUO0FBQ0EsSUFBSUcsSUFBSSxHQUFHLElBQUlILEtBQUosRUFBWDtBQUVBRCxLQUFLLENBQUNLLEdBQU4sR0FBWSxnQ0FBWjtBQUNBSCxJQUFJLENBQUNHLEdBQUwsR0FBVywrQkFBWDtBQUNBRixFQUFFLENBQUNFLEdBQUgsR0FBUyw2QkFBVDtBQUNBRCxJQUFJLENBQUNDLEdBQUwsR0FBVywrQkFBWDtBQUNBLElBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxDQUFiO0FBQ0EsSUFBSUMsRUFBSjtBQUdBLElBQUlDLEtBQUssR0FBRyxDQUNSLElBRFEsRUFDRixJQURFLEVBQ0ksSUFESixFQUNVLElBRFYsRUFFUixJQUZRLEVBRUYsSUFGRSxFQUVJLElBRkosRUFFVSxJQUZWLEVBR1IsSUFIUSxFQUdGLElBSEUsRUFHSSxJQUhKLEVBR1UsSUFIVixFQUlSLElBSlEsRUFJRixJQUpFLEVBSUksSUFKSixFQUlVLElBSlYsRUFLUixDQUFDUixJQUFELENBTFEsRUFLQSxJQUxBLEVBS00sQ0FBQ0YsS0FBRCxDQUxOLEVBS2UsSUFMZixFQU1SLENBQUNJLElBQUQsQ0FOUSxFQU1BLElBTkEsRUFNTSxDQUFDRCxFQUFELENBTk4sRUFNWSxJQU5aLEVBT1IsQ0FBQ0gsS0FBRCxDQVBRLEVBT0MsSUFQRCxFQU9PLENBQUNFLElBQUQsQ0FQUCxFQU9lLElBUGYsRUFRUixDQUFDQyxFQUFELENBUlEsRUFRRixJQVJFLEVBUUksQ0FBQ0MsSUFBRCxDQVJKLEVBUVksSUFSWixFQVNSLENBQUNGLElBQUQsQ0FUUSxFQVNBLElBVEEsRUFTTSxDQUFDQyxFQUFELENBVE4sRUFTWSxJQVRaLEVBVVIsQ0FBQ0MsSUFBRCxDQVZRLEVBVUEsSUFWQSxFQVVNLENBQUNKLEtBQUQsQ0FWTixFQVVlLElBVmYsRUFXUixDQUFDRSxJQUFELENBWFEsRUFXQSxJQVhBLEVBV00sQ0FBQ0UsSUFBRCxDQVhOLEVBV2MsSUFYZCxFQVlSLENBQUNKLEtBQUQsQ0FaUSxFQVlDLElBWkQsRUFZTyxDQUFDRyxFQUFELENBWlAsRUFZYSxJQVpiLEVBYVIsQ0FBQ0gsS0FBRCxDQWJRLEVBYUMsSUFiRCxFQWFPLENBQUNJLElBQUQsQ0FiUCxFQWFlLElBYmYsRUFjUixDQUFDRCxFQUFELENBZFEsRUFjRixJQWRFLEVBY0ksQ0FBQ0QsSUFBRCxDQWRKLEVBY1ksSUFkWixFQWVSLENBQUNGLEtBQUQsQ0FmUSxFQWVDLElBZkQsRUFlTyxDQUFDRyxFQUFELENBZlAsRUFlYSxJQWZiLEVBZ0JSLENBQUNELElBQUQsQ0FoQlEsRUFnQkEsSUFoQkEsRUFnQk0sQ0FBQ0UsSUFBRCxDQWhCTixFQWdCYyxJQWhCZCxFQWlCUixDQUFDRixJQUFELENBakJRLEVBaUJBLElBakJBLEVBaUJNLENBQUNFLElBQUQsQ0FqQk4sRUFpQmMsSUFqQmQsRUFrQlIsQ0FBQ0QsRUFBRCxDQWxCUSxFQWtCRixJQWxCRSxFQWtCSSxDQUFDSCxLQUFELENBbEJKLEVBa0JhLElBbEJiLEVBbUJSLENBQUNHLEVBQUQsQ0FuQlEsRUFtQkYsSUFuQkUsRUFtQkksQ0FBQ0MsSUFBRCxDQW5CSixFQW1CWSxJQW5CWixFQW9CUixDQUFDRixJQUFELENBcEJRLEVBb0JBLElBcEJBLEVBb0JNLElBcEJOLEVBb0JZLENBQUNGLEtBQUQsQ0FwQlosRUFxQlIsQ0FBQ0ksSUFBRCxDQXJCUSxFQXFCQSxJQXJCQSxFQXFCTSxDQUFDRCxFQUFELENBckJOLEVBcUJZLElBckJaLEVBc0JSLENBQUNILEtBQUQsQ0F0QlEsRUFzQkMsSUF0QkQsRUFzQk8sQ0FBQ0UsSUFBRCxDQXRCUCxFQXNCZSxJQXRCZixFQXVCUixDQUFDRixLQUFELENBdkJRLEVBdUJDLElBdkJELEVBdUJPLENBQUNHLEVBQUQsQ0F2QlAsRUF1QmEsSUF2QmIsRUF3QlIsQ0FBQ0MsSUFBRCxDQXhCUSxFQXdCQSxJQXhCQSxFQXdCTSxJQXhCTixFQXdCWSxDQUFDRCxFQUFELENBeEJaLEVBeUJSLENBQUNILEtBQUQsQ0F6QlEsRUF5QkMsSUF6QkQsRUF5Qk8sQ0FBQ0csRUFBRCxDQXpCUCxFQXlCYSxJQXpCYixFQTBCUixDQUFDQyxJQUFELENBMUJRLEVBMEJBLElBMUJBLEVBMEJNLENBQUNGLElBQUQsQ0ExQk4sRUEwQmMsSUExQmQsRUEyQlIsQ0FBQ0UsSUFBRCxDQTNCUSxFQTJCQSxJQTNCQSxFQTJCTSxDQUFDRCxFQUFELENBM0JOLEVBMkJZLElBM0JaLEVBNEJSLENBQUNILEtBQUQsQ0E1QlEsRUE0QkMsSUE1QkQsRUE0Qk8sSUE1QlAsRUE0QmEsQ0FBQ0UsSUFBRCxDQTVCYixFQTZCUixDQUFDQyxFQUFELENBN0JRLEVBNkJGLElBN0JFLEVBNkJJLENBQUNILEtBQUQsQ0E3QkosRUE2QmEsSUE3QmIsRUE4QlIsQ0FBQ0UsSUFBRCxDQTlCUSxFQThCQSxJQTlCQSxFQThCTSxDQUFDRSxJQUFELENBOUJOLEVBOEJjLElBOUJkLEVBK0JSLENBQUNGLElBQUQsQ0EvQlEsRUErQkEsSUEvQkEsRUErQk0sQ0FBQ0YsS0FBRCxDQS9CTixFQStCZSxJQS9CZixFQWdDUixDQUFDRyxFQUFELENBaENRLEVBZ0NGLElBaENFLEVBZ0NJLElBaENKLEVBZ0NVLENBQUNDLElBQUQsQ0FoQ1YsRUFpQ1IsQ0FBQ0YsSUFBRCxFQUFPRixLQUFQLENBakNRLEVBaUNPLElBakNQLEVBaUNhLENBQUNFLElBQUQsQ0FqQ2IsRUFpQ3FCLENBQUNGLEtBQUQsQ0FqQ3JCLEVBa0NSLENBQUNHLEVBQUQsQ0FsQ1EsRUFrQ0YsQ0FBQ0MsSUFBRCxDQWxDRSxFQWtDTSxDQUFDRCxFQUFELENBbENOLEVBa0NZLENBQUNDLElBQUQsQ0FsQ1osRUFtQ1IsQ0FBQ0osS0FBRCxDQW5DUSxFQW1DQyxJQW5DRCxFQW1DTyxDQUFDRSxJQUFELENBbkNQLEVBbUNlLElBbkNmLEVBb0NSLENBQUNGLEtBQUQsQ0FwQ1EsRUFvQ0MsQ0FBQ0UsSUFBRCxDQXBDRCxFQW9DUyxDQUFDRSxJQUFELENBcENULEVBb0NpQixDQUFDRCxFQUFELENBcENqQixFQXFDUixDQUFDRCxJQUFELEVBQU9GLEtBQVAsQ0FyQ1EsRUFxQ08sSUFyQ1AsRUFxQ2EsQ0FBQ0EsS0FBRCxDQXJDYixFQXFDc0IsQ0FBQ0ksSUFBRCxDQXJDdEIsRUFzQ1IsQ0FBQ0YsSUFBRCxDQXRDUSxFQXNDQSxDQUFDQyxFQUFELENBdENBLEVBc0NNLENBQUNELElBQUQsQ0F0Q04sRUFzQ2MsQ0FBQ0MsRUFBRCxDQXRDZCxFQXVDUixDQUFDQyxJQUFELENBdkNRLEVBdUNBLElBdkNBLEVBdUNNLENBQUNKLEtBQUQsQ0F2Q04sRUF1Q2UsSUF2Q2YsRUF3Q1IsQ0FBQ0ksSUFBRCxDQXhDUSxFQXdDQSxDQUFDSixLQUFELENBeENBLEVBd0NTLENBQUNHLEVBQUQsQ0F4Q1QsRUF3Q2UsQ0FBQ0QsSUFBRCxDQXhDZixFQXlDUixDQUFDQyxFQUFELENBekNRLEVBeUNGLElBekNFLEVBeUNJLENBQUNDLElBQUQsQ0F6Q0osRUF5Q1ksSUF6Q1osRUEwQ1IsQ0FBQ0YsSUFBRCxDQTFDUSxFQTBDQSxDQUFDQyxFQUFELEVBQUtDLElBQUwsQ0ExQ0EsRUEwQ1ksQ0FBQ0osS0FBRCxDQTFDWixFQTBDcUIsQ0FBQ0csRUFBRCxFQUFLQyxJQUFMLENBMUNyQixFQTJDUixDQUFDQSxJQUFELENBM0NRLEVBMkNBLElBM0NBLEVBMkNNLENBQUNELEVBQUQsQ0EzQ04sRUEyQ1ksSUEzQ1osRUE0Q1IsQ0FBQ0gsS0FBRCxDQTVDUSxFQTRDQyxDQUFDRyxFQUFELEVBQUtDLElBQUwsQ0E1Q0QsRUE0Q2EsQ0FBQ0YsSUFBRCxDQTVDYixFQTRDcUIsQ0FBQ0MsRUFBRCxFQUFLQyxJQUFMLENBNUNyQixFQTZDUixDQUFDSixLQUFELENBN0NRLEVBNkNDLElBN0NELEVBNkNPLENBQUNFLElBQUQsQ0E3Q1AsRUE2Q2UsSUE3Q2YsRUE4Q1IsQ0FBQ0UsSUFBRCxDQTlDUSxFQThDQSxDQUFDRixJQUFELEVBQU9GLEtBQVAsQ0E5Q0EsRUE4Q2UsQ0FBQ0csRUFBRCxDQTlDZixFQThDcUIsQ0FBQ0QsSUFBRCxFQUFPRixLQUFQLENBOUNyQixFQStDUixDQUFDRSxJQUFELENBL0NRLEVBK0NBLElBL0NBLEVBK0NNLENBQUNGLEtBQUQsQ0EvQ04sRUErQ2UsSUEvQ2YsRUFnRFIsQ0FBQ0UsSUFBRCxFQUFPRixLQUFQLENBaERRLEVBZ0RPLElBaERQLEVBZ0RhLElBaERiLEVBZ0RtQixJQWhEbkIsRUFpRFIsQ0FBQ0UsSUFBRCxDQWpEUSxFQWlEQSxJQWpEQSxFQWlETSxDQUFDRixLQUFELENBakROLEVBaURlLElBakRmLEVBa0RSLENBQUNJLElBQUQsQ0FsRFEsRUFrREEsSUFsREEsRUFrRE0sQ0FBQ0QsRUFBRCxDQWxETixFQWtEWSxJQWxEWixFQW1EUixDQUFDQyxJQUFELENBbkRRLEVBbURBLElBbkRBLEVBbURNLENBQUNKLEtBQUQsQ0FuRE4sRUFtRGUsSUFuRGYsRUFvRFIsQ0FBQ0UsSUFBRCxDQXBEUSxFQW9EQSxJQXBEQSxFQW9ETSxJQXBETixFQW9EWSxDQUFDRixLQUFELENBcERaLEVBcURSLENBQUNJLElBQUQsQ0FyRFEsRUFxREEsSUFyREEsRUFxRE0sQ0FBQ0QsRUFBRCxDQXJETixFQXFEWSxJQXJEWixFQXNEUixDQUFDSCxLQUFELENBdERRLEVBc0RDLElBdERELEVBc0RPLENBQUNFLElBQUQsQ0F0RFAsRUFzRGUsSUF0RGYsRUF1RFIsQ0FBQ0YsS0FBRCxDQXZEUSxFQXVEQyxJQXZERCxFQXVETyxDQUFDRyxFQUFELENBdkRQLEVBdURhLElBdkRiLEVBd0RSLENBQUNDLElBQUQsQ0F4RFEsRUF3REEsSUF4REEsRUF3RE0sSUF4RE4sRUF3RFksQ0FBQ0QsRUFBRCxDQXhEWixFQXlEUixDQUFDSCxLQUFELENBekRRLEVBeURDLENBQUNJLElBQUQsQ0F6REQsRUF5RFMsQ0FBQ0QsRUFBRCxDQXpEVCxFQXlEZSxDQUFDRCxJQUFELENBekRmLEVBMERSLENBQUNGLEtBQUQsQ0ExRFEsRUEwREMsQ0FBQ0csRUFBRCxDQTFERCxFQTBETyxDQUFDRCxJQUFELENBMURQLEVBMERlLENBQUNFLElBQUQsQ0ExRGYsRUEyRFIsQ0FBQ0YsSUFBRCxDQTNEUSxFQTJEQSxDQUFDQyxFQUFELENBM0RBLEVBMkRNLENBQUNDLElBQUQsQ0EzRE4sRUEyRGMsQ0FBQ0osS0FBRCxDQTNEZCxFQTREUixDQUFDRSxJQUFELENBNURRLEVBNERBLENBQUNFLElBQUQsQ0E1REEsRUE0RFEsQ0FBQ0osS0FBRCxDQTVEUixFQTREaUIsQ0FBQ0csRUFBRCxDQTVEakIsRUE2RFIsQ0FBQ0gsS0FBRCxDQTdEUSxFQTZEQyxDQUFDRyxFQUFELENBN0RELEVBNkRPLENBQUNDLElBQUQsQ0E3RFAsRUE2RGUsQ0FBQ0YsSUFBRCxDQTdEZixFQThEUixDQUFDRixLQUFELENBOURRLEVBOERDLENBQUNFLElBQUQsQ0E5REQsRUE4RFMsQ0FBQ0MsRUFBRCxDQTlEVCxFQThEZSxDQUFDQyxJQUFELENBOURmLEVBK0RSLENBQUNGLElBQUQsQ0EvRFEsRUErREEsQ0FBQ0UsSUFBRCxDQS9EQSxFQStEUSxDQUFDRCxFQUFELENBL0RSLEVBK0RjLENBQUNILEtBQUQsQ0EvRGQsRUFnRVIsQ0FBQ0UsSUFBRCxDQWhFUSxFQWdFQSxDQUFDRixLQUFELENBaEVBLEVBZ0VTLENBQUNJLElBQUQsQ0FoRVQsRUFnRWlCLENBQUNGLElBQUQsRUFBT0YsS0FBUCxDQWhFakIsQ0FBWjtBQW1FQSxJQUFJVyxLQUFLLEdBQUcsQ0FDUixJQURRLEVBQ0YsSUFERSxFQUNJLElBREosRUFDVSxJQURWLEVBRVIsSUFGUSxFQUVGLElBRkUsRUFFSSxJQUZKLEVBRVUsSUFGVixFQUdSLElBSFEsRUFHRixJQUhFLEVBR0ksSUFISixFQUdVLElBSFYsRUFJUixJQUpRLEVBSUYsSUFKRSxFQUlJLElBSkosRUFJVSxJQUpWLEVBS1IsQ0FBQ1IsRUFBRCxDQUxRLEVBS0YsSUFMRSxFQUtJLElBTEosRUFLVSxJQUxWLEVBTVIsQ0FBQ0MsSUFBRCxDQU5RLEVBTUEsSUFOQSxFQU1NLElBTk4sRUFNWSxJQU5aLEVBT1IsQ0FBQ0QsRUFBRCxDQVBRLEVBT0YsSUFQRSxFQU9JLElBUEosRUFPVSxJQVBWLEVBUVIsQ0FBQ0MsSUFBRCxDQVJRLEVBUUEsSUFSQSxFQVFNLElBUk4sRUFRWSxJQVJaLEVBU1IsQ0FBQ0osS0FBRCxDQVRRLEVBU0MsSUFURCxFQVNPLENBQUNBLEtBQUQsQ0FUUCxFQVNnQixJQVRoQixFQVVSLENBQUNJLElBQUQsQ0FWUSxFQVVBLElBVkEsRUFVTSxDQUFDQSxJQUFELENBVk4sRUFVYyxJQVZkLEVBV1IsQ0FBQ0osS0FBRCxDQVhRLEVBV0MsSUFYRCxFQVdPLENBQUNBLEtBQUQsQ0FYUCxFQVdnQixJQVhoQixFQVlSLENBQUNFLElBQUQsQ0FaUSxFQVlBLElBWkEsRUFZTSxDQUFDQSxJQUFELENBWk4sRUFZYyxJQVpkLEVBYVIsQ0FBQ0YsS0FBRCxDQWJRLEVBYUMsQ0FBQ0EsS0FBRCxDQWJELEVBYVUsQ0FBQ0EsS0FBRCxDQWJWLEVBYW1CLElBYm5CLEVBY1IsQ0FBQ0UsSUFBRCxDQWRRLEVBY0EsQ0FBQ0EsSUFBRCxDQWRBLEVBY1EsQ0FBQ0EsSUFBRCxDQWRSLEVBY2dCLElBZGhCLEVBZVIsQ0FBQ0YsS0FBRCxDQWZRLEVBZUMsSUFmRCxFQWVPLENBQUNFLElBQUQsQ0FmUCxFQWVlLElBZmYsRUFnQlIsQ0FBQ0EsSUFBRCxFQUFPRixLQUFQLENBaEJRLEVBZ0JPLElBaEJQLEVBZ0JhLElBaEJiLEVBZ0JtQixJQWhCbkIsRUFpQlIsQ0FBQ0csRUFBRCxDQWpCUSxFQWlCRixJQWpCRSxFQWlCSSxDQUFDQyxJQUFELENBakJKLEVBaUJZLElBakJaLEVBa0JSLENBQUNELEVBQUQsQ0FsQlEsRUFrQkYsSUFsQkUsRUFrQkksQ0FBQ0MsSUFBRCxDQWxCSixFQWtCWSxJQWxCWixFQW1CUixDQUFDRCxFQUFELENBbkJRLEVBbUJGLElBbkJFLEVBbUJJLENBQUNDLElBQUQsQ0FuQkosRUFtQlksSUFuQlosRUFvQlIsQ0FBQ0QsRUFBRCxDQXBCUSxFQW9CRixDQUFDQSxFQUFELENBcEJFLEVBb0JJLENBQUNDLElBQUQsQ0FwQkosRUFvQlksQ0FBQ0EsSUFBRCxDQXBCWixFQXFCUixDQUFDRCxFQUFELENBckJRLEVBcUJGLENBQUNDLElBQUQsQ0FyQkUsRUFxQk0sQ0FBQ0QsRUFBRCxDQXJCTixFQXFCWSxJQXJCWixFQXNCUixDQUFDQyxJQUFELENBdEJRLEVBc0JBLElBdEJBLEVBc0JNLENBQUNBLElBQUQsQ0F0Qk4sRUFzQmMsSUF0QmQsRUF1QlIsQ0FBQ0osS0FBRCxDQXZCUSxFQXVCQyxJQXZCRCxFQXVCTyxJQXZCUCxFQXVCYSxJQXZCYixFQXdCUixDQUFDRSxJQUFELENBeEJRLEVBd0JBLElBeEJBLEVBd0JNLENBQUNBLElBQUQsQ0F4Qk4sRUF3QmMsSUF4QmQsRUF5QlIsQ0FBQ0UsSUFBRCxDQXpCUSxFQXlCQSxJQXpCQSxFQXlCTSxJQXpCTixFQXlCWSxJQXpCWixFQTBCUixDQUFDRixJQUFELENBMUJRLEVBMEJBLElBMUJBLEVBMEJNLENBQUNBLElBQUQsQ0ExQk4sRUEwQmMsSUExQmQsRUEyQlIsQ0FBQ0MsRUFBRCxDQTNCUSxFQTJCRixJQTNCRSxFQTJCSSxJQTNCSixFQTJCVSxJQTNCVixFQTRCUixDQUFDQyxJQUFELENBNUJRLEVBNEJBLElBNUJBLEVBNEJNLENBQUNBLElBQUQsQ0E1Qk4sRUE0QmMsSUE1QmQsRUE2QlIsQ0FBQ0YsSUFBRCxFQUFPRixLQUFQLENBN0JRLEVBNkJPLElBN0JQLEVBNkJhLElBN0JiLEVBNkJtQixJQTdCbkIsRUE4QlIsQ0FBQ0csRUFBRCxDQTlCUSxFQThCRixJQTlCRSxFQThCSSxJQTlCSixFQThCVSxJQTlCVixFQStCUixDQUFDQSxFQUFELENBL0JRLEVBK0JGLENBQUNBLEVBQUQsQ0EvQkUsRUErQkksQ0FBQ0EsRUFBRCxDQS9CSixFQStCVSxJQS9CVixFQWdDUixDQUFDQyxJQUFELENBaENRLEVBZ0NBLElBaENBLEVBZ0NNLElBaENOLEVBZ0NZLElBaENaLEVBaUNSLENBQUNBLElBQUQsQ0FqQ1EsRUFpQ0EsQ0FBQ0EsSUFBRCxDQWpDQSxFQWlDUSxDQUFDQSxJQUFELENBakNSLEVBaUNnQixJQWpDaEIsRUFrQ1IsQ0FBQ0osS0FBRCxDQWxDUSxFQWtDQyxJQWxDRCxFQWtDTyxJQWxDUCxFQWtDYSxJQWxDYixFQW1DUixDQUFDQSxLQUFELENBbkNRLEVBbUNDLENBQUNBLEtBQUQsQ0FuQ0QsRUFtQ1UsQ0FBQ0EsS0FBRCxDQW5DVixFQW1DbUIsSUFuQ25CLEVBb0NSLENBQUNFLElBQUQsQ0FwQ1EsRUFvQ0EsSUFwQ0EsRUFvQ00sQ0FBQ0EsSUFBRCxDQXBDTixFQW9DYyxJQXBDZCxFQXFDUixDQUFDQSxJQUFELENBckNRLEVBcUNBLENBQUNBLElBQUQsQ0FyQ0EsRUFxQ1EsQ0FBQ0EsSUFBRCxDQXJDUixFQXFDZ0IsSUFyQ2hCLEVBc0NSLENBQUNDLEVBQUQsQ0F0Q1EsRUFzQ0YsSUF0Q0UsRUFzQ0ksSUF0Q0osRUFzQ1UsSUF0Q1YsRUF1Q1IsQ0FBQ0QsSUFBRCxDQXZDUSxFQXVDQSxJQXZDQSxFQXVDTSxJQXZDTixFQXVDWSxJQXZDWixFQXdDUixDQUFDQSxJQUFELENBeENRLEVBd0NBLElBeENBLEVBd0NNLElBeENOLEVBd0NZLElBeENaLEVBeUNSLENBQUNGLEtBQUQsQ0F6Q1EsRUF5Q0MsSUF6Q0QsRUF5Q08sSUF6Q1AsRUF5Q2EsSUF6Q2IsRUEwQ1IsQ0FBQ0ksSUFBRCxDQTFDUSxFQTBDQSxJQTFDQSxFQTBDTSxJQTFDTixFQTBDWSxJQTFDWixFQTJDUixDQUFDSixLQUFELENBM0NRLEVBMkNDLElBM0NELEVBMkNPLElBM0NQLEVBMkNhLElBM0NiLEVBNENSLENBQUNFLElBQUQsQ0E1Q1EsRUE0Q0EsSUE1Q0EsRUE0Q00sQ0FBQ0YsS0FBRCxDQTVDTixFQTRDZSxJQTVDZixFQTZDUixDQUFDRSxJQUFELEVBQU9GLEtBQVAsQ0E3Q1EsRUE2Q08sSUE3Q1AsRUE2Q2EsSUE3Q2IsRUE2Q21CLElBN0NuQixFQThDUixDQUFDQSxLQUFELENBOUNRLEVBOENDLElBOUNELEVBOENPLENBQUNBLEtBQUQsQ0E5Q1AsRUE4Q2dCLElBOUNoQixFQStDUixDQUFDQSxLQUFELENBL0NRLEVBK0NDLElBL0NELEVBK0NPLENBQUNJLElBQUQsQ0EvQ1AsRUErQ2UsQ0FBQ0EsSUFBRCxDQS9DZixFQWdEUixDQUFDQSxJQUFELENBaERRLEVBZ0RBLElBaERBLEVBZ0RNLENBQUNBLElBQUQsQ0FoRE4sRUFnRGMsSUFoRGQsRUFpRFIsQ0FBQ0EsSUFBRCxDQWpEUSxFQWlEQSxJQWpEQSxFQWlETSxDQUFDRCxFQUFELENBakROLEVBaURZLENBQUNBLEVBQUQsQ0FqRFosRUFrRFIsQ0FBQ0EsRUFBRCxDQWxEUSxFQWtERixJQWxERSxFQWtESSxDQUFDQSxFQUFELENBbERKLEVBa0RVLElBbERWLEVBbURSLENBQUNBLEVBQUQsQ0FuRFEsRUFtREYsSUFuREUsRUFtREksQ0FBQ0QsSUFBRCxDQW5ESixFQW1EWSxDQUFDQSxJQUFELENBbkRaLEVBb0RSLENBQUNBLElBQUQsQ0FwRFEsRUFvREEsSUFwREEsRUFvRE0sQ0FBQ0EsSUFBRCxDQXBETixFQW9EYyxJQXBEZCxFQXFEUixDQUFDQSxJQUFELENBckRRLEVBcURBLElBckRBLEVBcURNLElBckROLEVBcURZLElBckRaLEVBc0RSLENBQUNGLEtBQUQsQ0F0RFEsRUFzREMsQ0FBQ0EsS0FBRCxDQXRERCxFQXNEVSxDQUFDQSxLQUFELENBdERWLEVBc0RtQixJQXREbkIsRUF1RFIsQ0FBQ0UsSUFBRCxDQXZEUSxFQXVEQSxJQXZEQSxFQXVETSxDQUFDQSxJQUFELENBdkROLEVBdURjLElBdkRkLEVBd0RSLENBQUNDLEVBQUQsQ0F4RFEsRUF3REYsQ0FBQ0EsRUFBRCxDQXhERSxFQXdESSxDQUFDQSxFQUFELENBeERKLEVBd0RVLElBeERWLEVBeURSLENBQUNDLElBQUQsQ0F6RFEsRUF5REEsSUF6REEsRUF5RE0sQ0FBQ0EsSUFBRCxDQXpETixFQXlEYyxJQXpEZCxFQTBEUixDQUFDRCxFQUFELENBMURRLEVBMERGLENBQUNBLEVBQUQsQ0ExREUsRUEwREksQ0FBQ0EsRUFBRCxDQTFESixFQTBEVSxJQTFEVixFQTJEUixDQUFDQyxJQUFELENBM0RRLEVBMkRBLENBQUNBLElBQUQsQ0EzREEsRUEyRFEsQ0FBQ0EsSUFBRCxDQTNEUixFQTJEZ0IsSUEzRGhCLEVBNERSLENBQUNELEVBQUQsQ0E1RFEsRUE0REYsSUE1REUsRUE0REksQ0FBQ0MsSUFBRCxDQTVESixFQTREWSxJQTVEWixFQTZEUixDQUFDRCxFQUFELEVBQUtDLElBQUwsQ0E3RFEsRUE2REksSUE3REosRUE2RFUsSUE3RFYsRUE2RGdCLElBN0RoQixFQThEUixDQUFDRixJQUFELENBOURRLEVBOERBLElBOURBLEVBOERNLElBOUROLEVBOERZLElBOURaLENBQVo7QUFrRUFLLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixTQUF4QixFQUFtQ0MsZ0JBQW5DLENBQW9ELE9BQXBELEVBQTZELFVBQVNDLEtBQVQsRUFBZ0I7QUFDNUUsTUFBSUMsSUFBSSxHQUFHUixRQUFRLENBQUNTLHNCQUFULENBQWdDLGVBQWhDLEVBQWlELENBQWpELENBQVg7QUFDRyxNQUFJQyxLQUFLLEdBQUdWLFFBQVEsQ0FBQ1Msc0JBQVQsQ0FBZ0MsZ0JBQWhDLEVBQWtELENBQWxELENBQVo7QUFDSEQsTUFBSSxDQUFDRyxLQUFMLENBQVdDLE9BQVgsR0FBcUIsTUFBckI7QUFDR0YsT0FBSyxDQUFDQyxLQUFOLENBQVlDLE9BQVosR0FBc0IsT0FBdEI7QUFDQSxNQUFJQyxTQUFTLEdBQUcsSUFBSUMsS0FBSixDQUFVLCtCQUFWLENBQWhCO0FBQ0FELFdBQVMsQ0FBQ0UsSUFBVjtBQUNIZixVQUFRLENBQUNLLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NXLElBQXRDLEdBQTZDLGlCQUE3QztBQUNBaEIsVUFBUSxDQUFDTSxnQkFBVCxDQUEwQixTQUExQixFQUFxQ1csMERBQXJDLEVBQXVELEtBQXZEO0FBQ0FqQixVQUFRLENBQUNNLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFVBQVNZLENBQVQsRUFBWTtBQUNoRCxRQUFJQSxDQUFDLENBQUNDLEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQ2JOLGVBQVMsQ0FBQ08sS0FBVjtBQUNUcEIsY0FBUSxDQUFDSyxjQUFULENBQXdCLFlBQXhCLEVBQXNDVyxJQUF0QyxHQUE2QyxrQkFBN0M7QUFDUyxVQUFJSyxNQUFNLEdBQUdyQixRQUFRLENBQUNTLHNCQUFULENBQWdDLFFBQWhDLEVBQTBDLENBQTFDLEVBQTZDYSxTQUE3QyxDQUF1REMsUUFBdkQsQ0FBZ0UsS0FBaEUsQ0FBYjtBQUNULFVBQUlmLEtBQUksR0FBR1IsUUFBUSxDQUFDUyxzQkFBVCxDQUFnQyxnQkFBaEMsRUFBa0QsQ0FBbEQsQ0FBWDtBQUNBLFVBQUllLE1BQU0sR0FBR3hCLFFBQVEsQ0FBQ1Msc0JBQVQsQ0FBZ0MsaUJBQWhDLEVBQW1ELENBQW5ELENBQWI7QUFDUyxVQUFJZ0IsS0FBSjtBQUNBLFVBQUlDLEdBQUo7QUFDQSxVQUFJQyxJQUFKO0FBQ1RuQixXQUFJLENBQUNHLEtBQUwsQ0FBV0MsT0FBWCxHQUFxQixNQUFyQjs7QUFDUyxVQUFJUyxNQUFKLEVBQVk7QUFDUkksYUFBSyxHQUFHLElBQUlYLEtBQUosQ0FBVSxpQkFBVixDQUFSO0FBQ0FmLFlBQUksQ0FBQ1ksS0FBTCxDQUFXaUIsZUFBWCxHQUE2QixpQ0FBN0I7QUFDQUYsV0FBRyxHQUFHLEdBQU47QUFDQUMsWUFBSSxHQUFHeEIsS0FBUDtBQUNILE9BTEQsTUFLTztBQUNIc0IsYUFBSyxHQUFHLElBQUlYLEtBQUosQ0FBVSxpQkFBVixDQUFSO0FBQ0FmLFlBQUksQ0FBQ1ksS0FBTCxDQUFXaUIsZUFBWDtBQUNBRixXQUFHLEdBQUcsR0FBTjtBQUNBQyxZQUFJLEdBQUd2QixLQUFQO0FBQ0g7O0FBQ0RvQixZQUFNLENBQUNiLEtBQVAsQ0FBYUMsT0FBYixHQUF1QixPQUF2QjtBQUVUYSxXQUFLLENBQUNWLElBQU47QUFDQWMsY0FBUSxDQUFDLEVBQUQsQ0FBUjs7QUF4QnNCLGlDQXlCYkMsQ0F6QmE7QUEwQnJCLFlBQUlDLElBQUksR0FBR0osSUFBSSxDQUFDRyxDQUFELENBQWY7O0FBQ0EsWUFBSUMsSUFBSixFQUFVO0FBQ1RDLG9CQUFVLENBQUM7QUFBQSxtQkFBTUgsUUFBUSxDQUFDRSxJQUFELENBQWQ7QUFBQSxXQUFELEVBQXVCRCxDQUFDLEdBQUdKLEdBQTNCLENBQVY7QUFDQTtBQTdCb0I7O0FBeUJ0QixXQUFLLElBQUlJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILElBQUksQ0FBQ00sTUFBekIsRUFBaUNILENBQUMsRUFBbEMsRUFBc0M7QUFBQSxjQUE3QkEsQ0FBNkI7QUFLckM7QUFDRDtBQUNELEdBakNEO0FBa0NBLENBM0NEO0FBK0NBLElBQUlJLEVBQUUsR0FBRyxDQUFUO0FBQ0EsSUFBSUMsR0FBSjtBQUNBLElBQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBWixDLENBQWU7O0FBQ2YsSUFBSUMsQ0FBQyxHQUFHLEdBQVIsQyxDQUFhOztBQUNiLElBQUlDLEdBQUo7O0FBRUEsSUFBSVgsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0UsSUFBRCxFQUFVO0FBQ3JCLE1BQUdBLElBQUgsRUFBUztBQUNMLFFBQUlVLEtBQUo7QUFDSVYsUUFBSSxDQUFDVyxPQUFMLENBQWEsVUFBQUMsSUFBSSxFQUFJO0FBQ2pCLFVBQUlBLElBQUksQ0FBQzdDLEdBQUwsQ0FBUzhDLFFBQVQsQ0FBa0IsTUFBbEIsQ0FBSixFQUErQkgsS0FBSyxHQUFHLEdBQVI7QUFDL0IsVUFBSUUsSUFBSSxDQUFDN0MsR0FBTCxDQUFTOEMsUUFBVCxDQUFrQixNQUFsQixDQUFKLEVBQStCSCxLQUFLLEdBQUcsR0FBUjtBQUMvQixVQUFJRSxJQUFJLENBQUM3QyxHQUFMLENBQVM4QyxRQUFULENBQWtCLElBQWxCLENBQUosRUFBNkJILEtBQUssR0FBRyxHQUFSO0FBQzdCLFVBQUlFLElBQUksQ0FBQzdDLEdBQUwsQ0FBUzhDLFFBQVQsQ0FBa0IsT0FBbEIsQ0FBSixFQUFnQ0gsS0FBSyxHQUFHLEdBQVI7QUFDaENMLFdBQUssQ0FBQ1MsSUFBTixDQUFXO0FBQUVDLFdBQUcsRUFBRUgsSUFBUDtBQUNQSSxTQUFDLEVBQUVOLEtBREk7QUFFUEYsU0FBQyxFQUFEQSxDQUZPO0FBR1BTLGFBQUssRUFBRSxJQUhBO0FBSVBDLGlCQUFTLEVBQUU7QUFKSixPQUFYO0FBTUgsS0FYRDtBQVlQOztBQUVEZCxLQUFHLEdBQUduQyxRQUFRLENBQUNLLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0M2QyxVQUFsQyxDQUE2QyxJQUE3QyxDQUFOO0FBQ0FDLGVBQWEsQ0FBQ1gsR0FBRCxDQUFiO0FBQ0FBLEtBQUcsR0FBR1ksV0FBVyxDQUFDO0FBQUEsV0FBTUMsSUFBSSxDQUFDakIsS0FBRCxDQUFWO0FBQUEsR0FBRCxFQUFvQkUsS0FBcEIsQ0FBakI7QUFDSCxDQXBCRDs7QUFzQkEsU0FBU2UsSUFBVCxDQUFjakIsS0FBZCxFQUFxQjtBQUNqQkQsS0FBRyxDQUFDbUIsSUFBSixHQUFXLHFCQUFYO0FBQ0FuQixLQUFHLENBQUNvQixTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixHQUFwQixFQUF5QixHQUF6QixFQUZpQixDQUVjOztBQUMvQixNQUFJQyxZQUFKLEVBQWtCO0FBQ2RyQixPQUFHLENBQUNzQixTQUFKLENBQWNDLGtCQUFkLEVBQWtDLEdBQWxDLEVBQXVDLENBQXZDO0FBQ0gsR0FGRCxNQUVPO0FBQ0h2QixPQUFHLENBQUNzQixTQUFKLENBQWNFLFdBQWQsRUFBMkIsR0FBM0IsRUFBZ0MsQ0FBaEM7QUFDSDs7QUFDRCxNQUFJQyxTQUFKLEVBQWU7QUFDWHpCLE9BQUcsQ0FBQ3NCLFNBQUosQ0FBY0ksZUFBZCxFQUErQixHQUEvQixFQUFvQyxDQUFwQztBQUVILEdBSEQsTUFHTztBQUNIMUIsT0FBRyxDQUFDc0IsU0FBSixDQUFjSyxRQUFkLEVBQXdCLEdBQXhCLEVBQTZCLENBQTdCO0FBQ0g7O0FBQ0QsTUFBSUMsV0FBSixFQUFpQjtBQUNiNUIsT0FBRyxDQUFDc0IsU0FBSixDQUFjTyxpQkFBZCxFQUFpQyxHQUFqQyxFQUFzQyxDQUF0QztBQUNILEdBRkQsTUFFTztBQUNIN0IsT0FBRyxDQUFDc0IsU0FBSixDQUFjUSxVQUFkLEVBQTBCLEdBQTFCLEVBQStCLENBQS9CO0FBQ0g7O0FBQ0QsTUFBSUMsV0FBSixFQUFpQjtBQUNiL0IsT0FBRyxDQUFDc0IsU0FBSixDQUFjVSxpQkFBZCxFQUFpQyxHQUFqQyxFQUFzQyxDQUF0QztBQUNILEdBRkQsTUFFTztBQUNIaEMsT0FBRyxDQUFDc0IsU0FBSixDQUFjVyxVQUFkLEVBQTBCLEdBQTFCLEVBQStCLENBQS9CO0FBQ0g7O0FBRUQsTUFBR2hDLEtBQUssQ0FBQ0gsTUFBVCxFQUFpQjtBQUNiRyxTQUFLLENBQUNNLE9BQU4sQ0FBYyxVQUFBQyxJQUFJLEVBQUk7QUFDbEJSLFNBQUcsQ0FBQ3NCLFNBQUosQ0FBY2QsSUFBSSxDQUFDRyxHQUFuQixFQUF3QkgsSUFBSSxDQUFDSSxDQUE3QixFQUFnQ0osSUFBSSxDQUFDSixDQUFyQzs7QUFFQSxVQUFHSSxJQUFJLENBQUNJLENBQUwsS0FBVyxHQUFYLElBQWtCLENBQUNKLElBQUksQ0FBQ0ssS0FBeEIsSUFBaUNrQixXQUFwQyxFQUFpRDtBQUM3QyxZQUFHdkIsSUFBSSxDQUFDSixDQUFMLElBQVUsRUFBVixJQUFnQkksSUFBSSxDQUFDSixDQUFMLElBQVUsRUFBN0IsRUFBaUNJLElBQUksQ0FBQ0ssS0FBTCxHQUFhLEtBQWI7QUFDakMsWUFBR0wsSUFBSSxDQUFDSixDQUFMLElBQVUsRUFBVixJQUFnQkksSUFBSSxDQUFDSixDQUFMLElBQVUsRUFBN0IsRUFBaUNJLElBQUksQ0FBQ0ssS0FBTCxHQUFhLElBQWI7QUFDakMsWUFBSUwsSUFBSSxDQUFDSixDQUFMLElBQVUsRUFBVixJQUFnQkksSUFBSSxDQUFDSixDQUFMLElBQVUsRUFBOUIsRUFBa0NJLElBQUksQ0FBQ0ssS0FBTCxHQUFhLE1BQWI7QUFDbEMsWUFBSUwsSUFBSSxDQUFDSixDQUFMLElBQVUsRUFBZCxFQUFrQkksSUFBSSxDQUFDSyxLQUFMLEdBQWEsVUFBYjtBQUNyQjs7QUFFRCxVQUFJTCxJQUFJLENBQUNJLENBQUwsS0FBVyxHQUFYLElBQWtCLENBQUNKLElBQUksQ0FBQ0ssS0FBeEIsSUFBaUNlLFdBQXJDLEVBQWtEO0FBQzlDLFlBQUlwQixJQUFJLENBQUNKLENBQUwsSUFBVSxFQUFWLElBQWdCSSxJQUFJLENBQUNKLENBQUwsSUFBVSxFQUE5QixFQUFrQ0ksSUFBSSxDQUFDSyxLQUFMLEdBQWEsS0FBYjtBQUNsQyxZQUFJTCxJQUFJLENBQUNKLENBQUwsSUFBVSxFQUFWLElBQWdCSSxJQUFJLENBQUNKLENBQUwsSUFBVSxFQUE5QixFQUFrQ0ksSUFBSSxDQUFDSyxLQUFMLEdBQWEsSUFBYjtBQUNsQyxZQUFJTCxJQUFJLENBQUNKLENBQUwsSUFBVSxFQUFWLElBQWdCSSxJQUFJLENBQUNKLENBQUwsSUFBVSxFQUE5QixFQUFrQ0ksSUFBSSxDQUFDSyxLQUFMLEdBQWEsTUFBYjtBQUNsQyxZQUFJTCxJQUFJLENBQUNKLENBQUwsSUFBVSxFQUFkLEVBQWtCSSxJQUFJLENBQUNLLEtBQUwsR0FBYSxVQUFiO0FBQ3JCOztBQUVELFVBQUlMLElBQUksQ0FBQ0ksQ0FBTCxLQUFXLEdBQVgsSUFBa0IsQ0FBQ0osSUFBSSxDQUFDSyxLQUF4QixJQUFpQ1ksU0FBckMsRUFBZ0Q7QUFDNUMsWUFBSWpCLElBQUksQ0FBQ0osQ0FBTCxJQUFVLEVBQVYsSUFBZ0JJLElBQUksQ0FBQ0osQ0FBTCxJQUFVLEVBQTlCLEVBQWtDSSxJQUFJLENBQUNLLEtBQUwsR0FBYSxLQUFiO0FBQ2xDLFlBQUlMLElBQUksQ0FBQ0osQ0FBTCxJQUFVLEVBQVYsSUFBZ0JJLElBQUksQ0FBQ0osQ0FBTCxJQUFVLEVBQTlCLEVBQWtDSSxJQUFJLENBQUNLLEtBQUwsR0FBYSxJQUFiO0FBQ2xDLFlBQUlMLElBQUksQ0FBQ0osQ0FBTCxJQUFVLEVBQVYsSUFBZ0JJLElBQUksQ0FBQ0osQ0FBTCxJQUFVLEVBQTlCLEVBQWtDSSxJQUFJLENBQUNLLEtBQUwsR0FBYSxNQUFiO0FBQ2xDLFlBQUlMLElBQUksQ0FBQ0osQ0FBTCxJQUFVLEVBQWQsRUFBa0JJLElBQUksQ0FBQ0ssS0FBTCxHQUFhLFVBQWI7QUFDckI7O0FBRUQsVUFBSUwsSUFBSSxDQUFDSSxDQUFMLEtBQVcsR0FBWCxJQUFrQixDQUFDSixJQUFJLENBQUNLLEtBQXhCLElBQWlDUSxZQUFyQyxFQUFtRDtBQUMvQyxZQUFJYixJQUFJLENBQUNKLENBQUwsSUFBVSxFQUFWLElBQWdCSSxJQUFJLENBQUNKLENBQUwsSUFBVSxFQUE5QixFQUFrQ0ksSUFBSSxDQUFDSyxLQUFMLEdBQWEsS0FBYjtBQUNsQyxZQUFJTCxJQUFJLENBQUNKLENBQUwsSUFBVSxFQUFWLElBQWdCSSxJQUFJLENBQUNKLENBQUwsSUFBVSxFQUE5QixFQUFrQ0ksSUFBSSxDQUFDSyxLQUFMLEdBQWEsSUFBYjtBQUNsQyxZQUFJTCxJQUFJLENBQUNKLENBQUwsSUFBVSxFQUFWLElBQWdCSSxJQUFJLENBQUNKLENBQUwsSUFBVSxFQUE5QixFQUFrQ0ksSUFBSSxDQUFDSyxLQUFMLEdBQWEsTUFBYjtBQUNsQyxZQUFJTCxJQUFJLENBQUNKLENBQUwsSUFBVSxFQUFkLEVBQWtCSSxJQUFJLENBQUNLLEtBQUwsR0FBYSxVQUFiO0FBQ3JCOztBQUVELFVBQUlMLElBQUksQ0FBQ0osQ0FBTCxHQUFTLENBQVQsSUFBYyxDQUFDSSxJQUFJLENBQUNLLEtBQXhCLEVBQStCO0FBQzNCTCxZQUFJLENBQUNLLEtBQUwsR0FBYSxNQUFiO0FBQ0FYLGFBQUssR0FBRyxDQUFSO0FBQ0g7O0FBRUQsVUFBSU0sSUFBSSxDQUFDSyxLQUFMLElBQWMsQ0FBQ0wsSUFBSSxDQUFDTSxTQUF4QixFQUFtQztBQUMvQixZQUFJTixJQUFJLENBQUNLLEtBQUwsSUFBYyxNQUFkLElBQXdCTCxJQUFJLENBQUNLLEtBQUwsSUFBYyxVQUExQyxFQUFzRFgsS0FBSyxHQUEzRCxLQUNLQSxLQUFLLEdBQUcsQ0FBUjtBQUNSLE9BdkNpQixDQXlDbEI7OztBQUNBLFVBQUlNLElBQUksQ0FBQ0ssS0FBTCxJQUFjTCxJQUFJLENBQUNNLFNBQUwsSUFBa0IsRUFBcEMsRUFBd0M7QUFDcEMsWUFBSUQsS0FBSyxHQUFHLElBQUl0RCxLQUFKLEVBQVo7O0FBRUEsZ0JBQVFpRCxJQUFJLENBQUNLLEtBQWI7QUFDWCxlQUFLLE1BQUw7QUFDbUJBLGlCQUFLLENBQUNsRCxHQUFOLEdBQVksb0JBQVo7QUFDbEI7O0FBQ0QsZUFBSyxLQUFMO0FBQ21Ca0QsaUJBQUssQ0FBQ2xELEdBQU4sR0FBWSxtQkFBWjtBQUNsQjs7QUFDRCxlQUFLLElBQUw7QUFDbUJrRCxpQkFBSyxDQUFDbEQsR0FBTixHQUFZLGtCQUFaO0FBQ2xCOztBQUNELGVBQUssTUFBTDtBQUNtQmtELGlCQUFLLENBQUNsRCxHQUFOLEdBQVkscUJBQVo7QUFDbEI7O0FBQ0QsZUFBSyxVQUFMO0FBQ21Ca0QsaUJBQUssQ0FBQ2xELEdBQU4sR0FBWSx1QkFBWjtBQUNsQjtBQWZVOztBQWlCQXFDLFdBQUcsQ0FBQ3NCLFNBQUosQ0FBY1QsS0FBZCxFQUFxQixHQUFyQixFQUEwQixHQUExQjtBQUNBTCxZQUFJLENBQUNNLFNBQUw7QUFFSDs7QUFFRE4sVUFBSSxDQUFDSixDQUFMLElBQVVMLEVBQVY7QUFDSCxLQXBFRDtBQXFFSDs7QUFDRCxNQUFJRyxLQUFLLElBQUksQ0FBYixFQUFnQjtBQUNaLFFBQUlnQyxTQUFTLGFBQU1oQyxLQUFOLFdBQWI7QUFDQUYsT0FBRyxDQUFDbUMsU0FBSixHQUFnQixNQUFoQjtBQUNBbkMsT0FBRyxDQUFDb0MsUUFBSixDQUFhRixTQUFiLEVBQXdCLEdBQXhCLEVBQTZCLEdBQTdCO0FBQ0FsQyxPQUFHLENBQUNtQyxTQUFKLEdBQWdCLE1BQWhCO0FBQ0FuQyxPQUFHLENBQUNxQyxVQUFKLENBQWVILFNBQWYsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0I7QUFFSDtBQUNKOztBQUVEckUsUUFBUSxDQUFDSyxjQUFULENBQXdCLFVBQXhCLEVBQW9DQyxnQkFBcEMsQ0FBcUQsT0FBckQsRUFBOEQsVUFBVUMsS0FBVixFQUFpQjtBQUMzRSxNQUFJQyxJQUFJLEdBQUdSLFFBQVEsQ0FBQ1Msc0JBQVQsQ0FBZ0MsZUFBaEMsRUFBaUQsQ0FBakQsQ0FBWDtBQUNBLE1BQUllLE1BQU0sR0FBR3hCLFFBQVEsQ0FBQ1Msc0JBQVQsQ0FBZ0MsaUJBQWhDLEVBQW1ELENBQW5ELENBQWI7QUFDQSxNQUFJa0IsSUFBSSxHQUFHeEIsS0FBWDtBQUNBSixNQUFJLENBQUNZLEtBQUwsQ0FBV2lCLGVBQVg7QUFFQXBCLE1BQUksQ0FBQ0csS0FBTCxDQUFXQyxPQUFYLEdBQXFCLE1BQXJCO0FBQ0FiLE1BQUksQ0FBQ1ksS0FBTCxDQUFXaUIsZUFBWDtBQUVBSixRQUFNLENBQUNiLEtBQVAsQ0FBYUMsT0FBYixHQUF1QixPQUF2QjtBQUNBLE1BQUlhLEtBQUssR0FBRyxJQUFJWCxLQUFKLENBQVUsaUJBQVYsQ0FBWjtBQUNBVyxPQUFLLENBQUNWLElBQU47QUFDQSxNQUFJVyxHQUFHLEdBQUcsR0FBVjtBQUNBRyxVQUFRLENBQUMsRUFBRCxDQUFSOztBQWIyRSwrQkFjbkVDLENBZG1FO0FBZXZFLFFBQUlDLElBQUksR0FBR0osSUFBSSxDQUFDRyxDQUFELENBQWY7O0FBQ0EsUUFBSUMsSUFBSixFQUFVO0FBQ05DLGdCQUFVLENBQUM7QUFBQSxlQUFNSCxRQUFRLENBQUNFLElBQUQsQ0FBZDtBQUFBLE9BQUQsRUFBdUJELENBQUMsR0FBR0osR0FBM0IsQ0FBVjtBQUNIO0FBbEJzRTs7QUFjM0UsT0FBSSxJQUFJSSxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdILElBQUksQ0FBQ00sTUFBeEIsRUFBZ0NILENBQUMsRUFBakMsRUFBcUM7QUFBQSxXQUE3QkEsQ0FBNkI7QUFLcEM7QUFDSixDQXBCRDs7QUF1QkEsU0FBUzJDLFFBQVQsR0FBb0I7QUFDaEJ2RSxJQUFFLEdBQUd3RSxxQkFBcUIsQ0FBQ0QsUUFBRCxDQUExQjtBQUNIOztBQUVELElBQUcxRSxJQUFILEVBQVM7QUFDTEEsTUFBSSxDQUFDTyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFNO0FBQ2pDcUUsd0JBQW9CLENBQUN6RSxFQUFELENBQXBCO0FBQ0gsR0FGRDtBQUdIOztBQUVELElBQUl5RCxXQUFXLEdBQUcsSUFBSWpFLEtBQUosRUFBbEI7QUFDQSxJQUFJMEUsVUFBVSxHQUFHLElBQUkxRSxLQUFKLEVBQWpCO0FBQ0EsSUFBSW9FLFFBQVEsR0FBRyxJQUFJcEUsS0FBSixFQUFmO0FBQ0EsSUFBSXVFLFVBQVUsR0FBRyxJQUFJdkUsS0FBSixFQUFqQjtBQUVBaUUsV0FBVyxDQUFDN0QsR0FBWixHQUFrQiwyQkFBbEI7QUFDQXNFLFVBQVUsQ0FBQ3RFLEdBQVgsR0FBaUIsMEJBQWpCO0FBQ0FnRSxRQUFRLENBQUNoRSxHQUFULEdBQWUsd0JBQWY7QUFDQW1FLFVBQVUsQ0FBQ25FLEdBQVgsR0FBaUIsMEJBQWpCO0FBRUEsSUFBSTRELGtCQUFrQixHQUFHLElBQUloRSxLQUFKLEVBQXpCO0FBQ0EsSUFBSXlFLGlCQUFpQixHQUFHLElBQUl6RSxLQUFKLEVBQXhCO0FBQ0EsSUFBSW1FLGVBQWUsR0FBRyxJQUFJbkUsS0FBSixFQUF0QjtBQUNBLElBQUlzRSxpQkFBaUIsR0FBRyxJQUFJdEUsS0FBSixFQUF4QjtBQUVBZ0Usa0JBQWtCLENBQUM1RCxHQUFuQixHQUF5QixrQ0FBekI7QUFDQXFFLGlCQUFpQixDQUFDckUsR0FBbEIsR0FBd0IsaUNBQXhCO0FBQ0ErRCxlQUFlLENBQUMvRCxHQUFoQixHQUFzQiwrQkFBdEI7QUFDQWtFLGlCQUFpQixDQUFDbEUsR0FBbEIsR0FBd0IsaUNBQXhCO0FBRUEsSUFBSThELFNBQVMsR0FBRyxLQUFoQjtBQUNBLElBQUlHLFdBQVcsR0FBRyxLQUFsQjtBQUNBLElBQUlQLFlBQVksR0FBRyxLQUFuQjtBQUNBLElBQUlVLFdBQVcsR0FBRyxLQUFsQjtBQUVBbEUsUUFBUSxDQUFDTSxnQkFBVCxDQUEwQixTQUExQixFQUFxQ3NFLGNBQXJDLEVBQXFELEtBQXJEO0FBQ0E1RSxRQUFRLENBQUNNLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DdUUsWUFBbkMsRUFBaUQsS0FBakQ7O0FBRUEsU0FBU0QsY0FBVCxDQUF3QjFELENBQXhCLEVBQTJCO0FBQ3ZCLFVBQVFBLENBQUMsQ0FBQ0MsR0FBVjtBQUNJLFNBQUssU0FBTDtBQUNJeUMsZUFBUyxHQUFHLElBQVo7QUFDQTVCLGdCQUFVLENBQUM7QUFBQSxlQUFNNkMsWUFBWSxDQUFDM0QsQ0FBRCxDQUFsQjtBQUFBLE9BQUQsRUFBd0IsR0FBeEIsQ0FBVjtBQUNBOztBQUNKLFNBQUssV0FBTDtBQUNJNkMsaUJBQVcsR0FBRyxJQUFkO0FBQ0EvQixnQkFBVSxDQUFDO0FBQUEsZUFBTTZDLFlBQVksQ0FBQzNELENBQUQsQ0FBbEI7QUFBQSxPQUFELEVBQXdCLEdBQXhCLENBQVY7QUFDQTs7QUFDSixTQUFLLFlBQUw7QUFDSXNDLGtCQUFZLEdBQUcsSUFBZjtBQUNBeEIsZ0JBQVUsQ0FBQztBQUFBLGVBQU02QyxZQUFZLENBQUMzRCxDQUFELENBQWxCO0FBQUEsT0FBRCxFQUF3QixHQUF4QixDQUFWO0FBQ0E7O0FBQ0osU0FBSyxXQUFMO0FBQ0lnRCxpQkFBVyxHQUFHLElBQWQ7QUFDQWxDLGdCQUFVLENBQUM7QUFBQSxlQUFNNkMsWUFBWSxDQUFDM0QsQ0FBRCxDQUFsQjtBQUFBLE9BQUQsRUFBd0IsR0FBeEIsQ0FBVjtBQUNBO0FBaEJSO0FBa0JIOztBQUVELFNBQVMyRCxZQUFULENBQXNCM0QsQ0FBdEIsRUFBeUI7QUFDckIsVUFBUUEsQ0FBQyxDQUFDQyxHQUFWO0FBQ0ksU0FBSyxTQUFMO0FBQ0l5QyxlQUFTLEdBQUcsS0FBWjtBQUNBOztBQUNKLFNBQUssV0FBTDtBQUNJRyxpQkFBVyxHQUFHLEtBQWQ7QUFDQTs7QUFDSixTQUFLLFlBQUw7QUFDSVAsa0JBQVksR0FBRyxLQUFmO0FBQ0E7O0FBQ0osU0FBSyxXQUFMO0FBQ0lVLGlCQUFXLEdBQUcsS0FBZDtBQUNBO0FBWlI7QUFjSCxDOzs7Ozs7Ozs7Ozs7QUM1YUQ7QUFBQTtBQUFBLElBQUlZLFNBQVMsR0FBRyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixDQUFoQjtBQUVPLFNBQVM3RCxnQkFBVCxDQUEwQkMsQ0FBMUIsRUFBNkI7QUFDaEMsTUFBSUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsV0FBZCxFQUEyQjtBQUN2QixRQUFJNEQsV0FBVyxHQUFHLEtBQWxCOztBQUNBLFNBQUssSUFBSWpELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdnRCxTQUFTLENBQUM3QyxNQUE5QixFQUFzQ0gsQ0FBQyxFQUF2QyxFQUEyQztBQUV2QyxVQUFJa0QsSUFBSSxHQUFHaEYsUUFBUSxDQUFDUyxzQkFBVCxDQUFnQ3FFLFNBQVMsQ0FBQ2hELENBQUQsQ0FBekMsRUFBOEMsQ0FBOUMsQ0FBWDtBQUNBLFVBQUltRCxJQUFJLEdBQUdqRixRQUFRLENBQUNTLHNCQUFULENBQWdDcUUsU0FBUyxDQUFDaEQsQ0FBQyxHQUFHLENBQUwsQ0FBekMsRUFBa0QsQ0FBbEQsQ0FBWDtBQUVBLFVBQUlvRCxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0JKLElBQXhCLEVBQThCLElBQTlCLEVBQW9DSyxnQkFBcEMsQ0FBcUQsV0FBckQsQ0FBZDtBQUNBLFVBQUlDLE1BQU0sR0FBR0osT0FBTyxDQUFDSyxLQUFSLENBQWMsR0FBZCxFQUFtQixDQUFuQixDQUFiO0FBQUEsVUFDSUQsTUFBTSxHQUFHQSxNQUFNLENBQUNDLEtBQVAsQ0FBYSxHQUFiLEVBQWtCLENBQWxCLENBRGI7QUFBQSxVQUVJRCxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLEdBQWIsQ0FGYjtBQUdBLFVBQUlDLEtBQUssR0FBR0MsUUFBUSxDQUFDSCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVJLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBRCxDQUFwQjtBQUNBLFVBQUlDLEtBQUssR0FBR0YsUUFBUSxDQUFDSCxNQUFNLENBQUMsQ0FBRCxDQUFQLENBQXBCO0FBQ0EsVUFBSXhELENBQUMsS0FBSyxDQUFWLEVBQWFrRCxJQUFJLENBQUNyRSxLQUFMLENBQVdpRixTQUFYLHVCQUFvQyxFQUFwQyxVQUE2QyxDQUFDLEdBQTlDLFNBQWIsS0FDSztBQUNELFlBQUlDLE1BQU0sU0FBVjtBQUNBQSxjQUFNLEdBQUlkLFdBQUQsdUJBQTZCUyxLQUFLLEdBQUcsRUFBckMsaUJBQThDRyxLQUFLLEdBQUcsRUFBdEQsK0JBQTZFSCxLQUFLLEdBQUcsRUFBckYsaUJBQThGRyxLQUFLLEdBQUcsRUFBdEcsUUFBVDtBQUNBWCxZQUFJLENBQUNyRSxLQUFMLENBQVdpRixTQUFYLEdBQXVCQyxNQUF2QjtBQUNIOztBQUNELFVBQUliLElBQUksQ0FBQzFELFNBQUwsQ0FBZUMsUUFBZixDQUF3QixRQUF4QixLQUFxQyxDQUFDd0QsV0FBMUMsRUFBdUQ7QUFDbkRBLG1CQUFXLEdBQUcsSUFBZDtBQUNBQyxZQUFJLENBQUMxRCxTQUFMLENBQWV3RSxNQUFmLENBQXNCLFFBQXRCO0FBQ0FiLFlBQUksQ0FBQzNELFNBQUwsQ0FBZXlFLEdBQWYsQ0FBbUIsUUFBbkI7QUFDSDtBQUVKOztBQUNEakIsYUFBUyxDQUFDakMsSUFBVixDQUFlaUMsU0FBUyxDQUFDa0IsS0FBVixFQUFmO0FBQ0g7O0FBR0QsTUFBSTlFLENBQUMsQ0FBQ0MsR0FBRixLQUFVLFlBQWQsRUFBNEI7QUFDeEIsUUFBSTRELFlBQVcsR0FBRyxLQUFsQjs7QUFDQSxTQUFLLElBQUlqRCxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHZ0QsU0FBUyxDQUFDN0MsTUFBOUIsRUFBc0NILEVBQUMsRUFBdkMsRUFBMkM7QUFFdkMsVUFBSWtELEtBQUksR0FBR2hGLFFBQVEsQ0FBQ1Msc0JBQVQsQ0FBZ0NxRSxTQUFTLENBQUNoRCxFQUFELENBQXpDLEVBQThDLENBQTlDLENBQVg7QUFDQSxVQUFJbUQsS0FBSSxHQUFHakYsUUFBUSxDQUFDUyxzQkFBVCxDQUFnQ3FFLFNBQVMsQ0FBQ2hELEVBQUMsR0FBRyxDQUFMLENBQXpDLEVBQWtELENBQWxELENBQVg7O0FBRUEsVUFBSW9ELFFBQU8sR0FBR0MsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QkosS0FBeEIsRUFBOEIsSUFBOUIsRUFBb0NLLGdCQUFwQyxDQUFxRCxXQUFyRCxDQUFkOztBQUNBLFVBQUlDLE1BQU0sR0FBR0osUUFBTyxDQUFDSyxLQUFSLENBQWMsR0FBZCxFQUFtQixDQUFuQixDQUFiO0FBQUEsVUFDSUQsTUFBTSxHQUFHQSxNQUFNLENBQUNDLEtBQVAsQ0FBYSxHQUFiLEVBQWtCLENBQWxCLENBRGI7QUFBQSxVQUVJRCxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLEdBQWIsQ0FGYjs7QUFHQSxVQUFJQyxNQUFLLEdBQUdDLFFBQVEsQ0FBQ0gsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVSSxLQUFWLENBQWdCLENBQWhCLENBQUQsQ0FBcEI7O0FBQ0EsVUFBSUMsTUFBSyxHQUFHRixRQUFRLENBQUNILE1BQU0sQ0FBQyxDQUFELENBQVAsQ0FBcEI7O0FBQ0EsVUFBSU4sS0FBSSxDQUFDMUQsU0FBTCxDQUFlQyxRQUFmLENBQXdCLFFBQXhCLEtBQXFDLENBQUN3RCxZQUExQyxFQUF1RDtBQUNuREEsb0JBQVcsR0FBRyxJQUFkOztBQUNBQyxhQUFJLENBQUMxRCxTQUFMLENBQWV3RSxNQUFmLENBQXNCLFFBQXRCOztBQUNBYixhQUFJLENBQUMzRCxTQUFMLENBQWV5RSxHQUFmLENBQW1CLFFBQW5CO0FBQ0g7O0FBRUQsVUFBSWpFLEVBQUMsS0FBSyxDQUFWLEVBQWFrRCxLQUFJLENBQUNyRSxLQUFMLENBQVdpRixTQUFYLHVCQUFvQyxFQUFwQyxVQUE2QyxHQUE3QyxTQUFiLEtBQ0s7QUFDRCxZQUFJQyxPQUFNLFNBQVY7O0FBQ0FBLGVBQU0sR0FBR2QsWUFBVyx1QkFBZ0JTLE1BQUssR0FBRyxFQUF4QixpQkFBaUNHLE1BQUssR0FBRyxFQUF6QywrQkFBZ0VILE1BQUssR0FBRyxFQUF4RSxpQkFBaUZHLE1BQUssR0FBRyxFQUF6RixRQUFwQjtBQUNBWCxhQUFJLENBQUNyRSxLQUFMLENBQVdpRixTQUFYLEdBQXVCQyxPQUF2QjtBQUNIO0FBQ0o7O0FBQ0RmLGFBQVMsQ0FBQ21CLE9BQVYsQ0FBa0JuQixTQUFTLENBQUNvQixHQUFWLEVBQWxCO0FBQ0g7QUFFSixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgc29uZ3NEb3duSGFuZGxlciB9IGZyb20gJy4vc29uZ3MuanMnO1xuXG5sZXQgcmlnaHQgPSBuZXcgSW1hZ2UoKTtcbmxldCBsZWZ0ID0gbmV3IEltYWdlKCk7XG5sZXQgdXAgPSBuZXcgSW1hZ2UoKTtcbmxldCBkb3duID0gbmV3IEltYWdlKCk7XG5cbnJpZ2h0LnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfcmlnaHRfbm90ZS5wbmcnO1xubGVmdC5zcmMgPSAnLi9zcHJpdGVzL2Fycm93X2xlZnRfbm90ZS5wbmcnO1xudXAuc3JjID0gJy4vc3ByaXRlcy9hcnJvd191cF9ub3RlLnBuZyc7XG5kb3duLnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfZG93bl9ub3RlLnBuZyc7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbmxldCBpZDtcblxuXG5sZXQgc29uZzEgPSBbXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIG51bGwsIG51bGwsIG51bGwsIG51bGwsXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW3VwXSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIG51bGwsIFtyaWdodF0sXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgW3VwXSxcbiAgICBbcmlnaHRdLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgW3VwXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBudWxsLCBbbGVmdF0sXG4gICAgW3VwXSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgbnVsbCwgW2Rvd25dLFxuICAgIFtsZWZ0LCByaWdodF0sIG51bGwsIFtsZWZ0XSwgW3JpZ2h0XSxcbiAgICBbdXBdLCBbZG93bl0sIFt1cF0sIFtkb3duXSxcbiAgICBbcmlnaHRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgW2xlZnRdLCBbZG93bl0sIFt1cF0sXG4gICAgW2xlZnQsIHJpZ2h0XSwgbnVsbCwgW3JpZ2h0XSwgW2Rvd25dLFxuICAgIFtsZWZ0XSwgW3VwXSwgW2xlZnRdLCBbdXBdLFxuICAgIFtkb3duXSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbZG93bl0sIFtyaWdodF0sIFt1cF0sIFtsZWZ0XSxcbiAgICBbdXBdLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW2xlZnRdLCBbdXAsIGRvd25dLCBbcmlnaHRdLCBbdXAsIGRvd25dLFxuICAgIFtkb3duXSwgbnVsbCwgW3VwXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBbdXAsIGRvd25dLCBbbGVmdF0sIFt1cCwgZG93bl0sXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtkb3duXSwgW2xlZnQsIHJpZ2h0XSwgW3VwXSwgW2xlZnQsIHJpZ2h0XSxcbiAgICBbbGVmdF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW2xlZnQsIHJpZ2h0XSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIG51bGwsIFtyaWdodF0sXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgW3VwXSxcbiAgICBbcmlnaHRdLCBbZG93bl0sIFt1cF0sIFtsZWZ0XSxcbiAgICBbcmlnaHRdLCBbdXBdLCBbbGVmdF0sIFtkb3duXSxcbiAgICBbbGVmdF0sIFt1cF0sIFtkb3duXSwgW3JpZ2h0XSxcbiAgICBbbGVmdF0sIFtkb3duXSwgW3JpZ2h0XSwgW3VwXSxcbiAgICBbcmlnaHRdLCBbdXBdLCBbZG93bl0sIFtsZWZ0XSxcbiAgICBbcmlnaHRdLCBbbGVmdF0sIFt1cF0sIFtkb3duXSxcbiAgICBbbGVmdF0sIFtkb3duXSwgW3VwXSwgW3JpZ2h0XSxcbiAgICBbbGVmdF0sIFtyaWdodF0sIFtkb3duXSwgW2xlZnQsIHJpZ2h0XVxuXTtcblxubGV0IHNvbmcyID0gW1xuICAgIG51bGwsIG51bGwsIG51bGwsIG51bGwsXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIG51bGwsIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtyaWdodF0sIFtyaWdodF0sIFtyaWdodF0sIG51bGwsXG4gICAgW2xlZnRdLCBbbGVmdF0sIFtsZWZ0XSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW2xlZnQsIHJpZ2h0XSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbdXBdLCBbdXBdLCBbZG93bl0sIFtkb3duXSxcbiAgICBbdXBdLCBbZG93bl0sIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3VwXSwgW3VwXSwgW3VwXSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW2Rvd25dLCBbZG93bl0sIFtkb3duXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtyaWdodF0sIFtyaWdodF0sIFtyaWdodF0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW2xlZnRdLCBbbGVmdF0sIFtsZWZ0XSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW2xlZnQsIHJpZ2h0XSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtkb3duXSwgW2Rvd25dLFxuICAgIFtkb3duXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgW3VwXSwgW3VwXSxcbiAgICBbdXBdLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtsZWZ0XSwgW2xlZnRdLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbcmlnaHRdLCBbcmlnaHRdLCBbcmlnaHRdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFt1cF0sIFt1cF0sIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW3VwXSwgW3VwXSwgW3VwXSwgbnVsbCxcbiAgICBbZG93bl0sIFtkb3duXSwgW2Rvd25dLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbdXAsIGRvd25dLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgbnVsbCwgbnVsbFxuXTtcblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29uZ0J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0bGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51Q29udGFpbmVyJylbMF07XG4gICAgbGV0IHNvbmdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc29uZ3NDb250YWluZXInKVswXTtcblx0bWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHNvbmdzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGxldCBtZW51QXVkaW8gPSBuZXcgQXVkaW8oJy4vc29uZ3MvYmVuc291bmQtcG9wZGFuY2UubXAzJyk7XG4gICAgbWVudUF1ZGlvLnBsYXkoKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0eWxlc2hlZXQnKS5ocmVmID0gJy4vY3NzL3NvbmdzLmNzcyc7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzb25nc0Rvd25IYW5kbGVyLCBmYWxzZSk7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBtZW51QXVkaW8ucGF1c2UoKTtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHlsZXNoZWV0JykuaHJlZiA9ICcuL2Nzcy9zdHlsZXMuY3NzJztcbiAgICAgICAgICAgIGxldCBhY3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2MtMycpO1xuXHRcdFx0bGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzb25nc0NvbnRhaW5lcicpWzBdO1xuXHRcdFx0bGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhbnZhc0NvbnRhaW5lcicpWzBdO1xuICAgICAgICAgICAgbGV0IGF1ZGlvO1xuICAgICAgICAgICAgbGV0IGJwbTtcbiAgICAgICAgICAgIGxldCBzb25nO1xuXHRcdFx0bWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGF1ZGlvID0gbmV3IEF1ZGlvKCcuL3NvbmdzL3BwcC5tcDMnKTtcbiAgICAgICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuL2JhY2tncm91bmRzL3BwcF9iZy5wbmcnKVwiO1xuICAgICAgICAgICAgICAgIGJwbSA9IDM3NTtcbiAgICAgICAgICAgICAgICBzb25nID0gc29uZzE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGF1ZGlvID0gbmV3IEF1ZGlvKCcuL3NvbmdzL3d3dy5vZ2cnKTtcbiAgICAgICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJy4vYmFja2dyb3VuZHMvd3d3X2JnLnBuZycpYDtcbiAgICAgICAgICAgICAgICBicG0gPSA0MjU7XG4gICAgICAgICAgICAgICAgc29uZyA9IHNvbmcyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG5cdFx0XHRhdWRpby5wbGF5KCk7XG5cdFx0XHRkcmF3Tm90ZShbXSk7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNvbmcubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IGJlYXQgPSBzb25nW2ldO1xuXHRcdFx0XHRpZiAoYmVhdCkge1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4gZHJhd05vdGUoYmVhdCksIGkgKiBicG0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG5cblxubGV0IGR4ID0gMTtcbmxldCBjdHg7XG5sZXQgbm90ZXMgPSBbXTtcbmxldCBjb21ibyA9IDA7XG5sZXQgc3BlZWQgPSAxOyAvLyBsb3dlciBpcyBmYXN0ZXJcbmxldCB5ID0gNjAwOyAvLyB2ZXJ0aWNhbCBvZmZzZXRcbmxldCBydW47XG5cbmxldCBkcmF3Tm90ZSA9IChiZWF0KSA9PiB7XG4gICAgaWYoYmVhdCkge1xuICAgICAgICBsZXQgbm90ZVg7XG4gICAgICAgICAgICBiZWF0LmZvckVhY2gobm90ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUuc3JjLmluY2x1ZGVzKCdsZWZ0JykpIG5vdGVYID0gMTAwO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnNyYy5pbmNsdWRlcygnZG93bicpKSBub3RlWCA9IDIwMDtcbiAgICAgICAgICAgICAgICBpZiAobm90ZS5zcmMuaW5jbHVkZXMoJ3VwJykpIG5vdGVYID0gMzAwO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnNyYy5pbmNsdWRlcygncmlnaHQnKSkgbm90ZVggPSA0MDA7XG4gICAgICAgICAgICAgICAgbm90ZXMucHVzaCh7IGltZzogbm90ZSwgXG4gICAgICAgICAgICAgICAgICAgIHg6IG5vdGVYLCBcbiAgICAgICAgICAgICAgICAgICAgeSwgXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ZWQ6IDBcbiAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNsZWFySW50ZXJ2YWwocnVuKTtcbiAgICBydW4gPSBzZXRJbnRlcnZhbCgoKSA9PiBkcmF3KG5vdGVzKSwgc3BlZWQpO1xufVxuXG5mdW5jdGlvbiBkcmF3KG5vdGVzKSB7XG4gICAgY3R4LmZvbnQgPSBcImJvbGQgMzBweCBIZWx2ZXRpY2FcIjtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDYwMCwgNjAwKTsgLy8gY2xlYXIgdGhlIGNhbnZhc1xuICAgIGlmIChyaWdodFByZXNzZWQpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShyaWdodF9hcnJvd19hY3RpdmUsIDQwMCwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShyaWdodF9hcnJvdywgNDAwLCAwKTtcbiAgICB9XG4gICAgaWYgKHVwUHJlc3NlZCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHVwX2Fycm93X2FjdGl2ZSwgMzAwLCAwKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodXBfYXJyb3csIDMwMCwgMCk7XG4gICAgfVxuICAgIGlmIChkb3duUHJlc3NlZCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGRvd25fYXJyb3dfYWN0aXZlLCAyMDAsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZG93bl9hcnJvdywgMjAwLCAwKTtcbiAgICB9XG4gICAgaWYgKGxlZnRQcmVzc2VkKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UobGVmdF9hcnJvd19hY3RpdmUsIDEwMCwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShsZWZ0X2Fycm93LCAxMDAsIDApO1xuICAgIH1cblxuICAgIGlmKG5vdGVzLmxlbmd0aCkge1xuICAgICAgICBub3Rlcy5mb3JFYWNoKG5vdGUgPT4ge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShub3RlLmltZywgbm90ZS54LCBub3RlLnkpO1xuXG4gICAgICAgICAgICBpZihub3RlLnggPT09IDEwMCAmJiAhbm90ZS5zY29yZSAmJiBsZWZ0UHJlc3NlZCkge1xuICAgICAgICAgICAgICAgIGlmKG5vdGUueSA8PSAzMCAmJiBub3RlLnkgPj0gMjUpIG5vdGUuc2NvcmUgPSAnQmFkJztcbiAgICAgICAgICAgICAgICBpZihub3RlLnkgPD0gMjUgJiYgbm90ZS55ID49IDIwKSBub3RlLnNjb3JlID0gJ09LJztcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDIwICYmIG5vdGUueSA+PSAxMCkgbm90ZS5zY29yZSA9ICdHb29kJztcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDEwKSBub3RlLnNjb3JlID0gJ1BlcmZlY3QhJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vdGUueCA9PT0gMjAwICYmICFub3RlLnNjb3JlICYmIGRvd25QcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAzMCAmJiBub3RlLnkgPj0gMjUpIG5vdGUuc2NvcmUgPSAnQmFkJztcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDI1ICYmIG5vdGUueSA+PSAyMCkgbm90ZS5zY29yZSA9ICdPSyc7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAyMCAmJiBub3RlLnkgPj0gMTApIG5vdGUuc2NvcmUgPSAnR29vZCc7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAxMCkgbm90ZS5zY29yZSA9ICdQZXJmZWN0ISc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub3RlLnggPT09IDMwMCAmJiAhbm90ZS5zY29yZSAmJiB1cFByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDMwICYmIG5vdGUueSA+PSAyNSkgbm90ZS5zY29yZSA9ICdCYWQnO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMjUgJiYgbm90ZS55ID49IDIwKSBub3RlLnNjb3JlID0gJ09LJztcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDIwICYmIG5vdGUueSA+PSAxMCkgbm90ZS5zY29yZSA9ICdHb29kJztcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDEwKSBub3RlLnNjb3JlID0gJ1BlcmZlY3QhJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vdGUueCA9PT0gNDAwICYmICFub3RlLnNjb3JlICYmIHJpZ2h0UHJlc3NlZCkge1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMzAgJiYgbm90ZS55ID49IDI1KSBub3RlLnNjb3JlID0gJ0JhZCc7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAyNSAmJiBub3RlLnkgPj0gMjApIG5vdGUuc2NvcmUgPSAnT0snO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMjAgJiYgbm90ZS55ID49IDEwKSBub3RlLnNjb3JlID0gJ0dvb2QnO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMTApIG5vdGUuc2NvcmUgPSAnUGVyZmVjdCEnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm90ZS55IDwgMCAmJiAhbm90ZS5zY29yZSkge1xuICAgICAgICAgICAgICAgIG5vdGUuc2NvcmUgPSAnTWlzcyc7XG4gICAgICAgICAgICAgICAgY29tYm8gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm90ZS5zY29yZSAmJiAhbm90ZS5kaXNwbGF5ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobm90ZS5zY29yZSA9PSAnR29vZCcgfHwgbm90ZS5zY29yZSA9PSAnUGVyZmVjdCEnKSBjb21ibysrO1xuICAgICAgICAgICAgICAgIGVsc2UgY29tYm8gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEaXNwbGF5IHNjb3JlIGZvciA3MCBmcmFtZXNcbiAgICAgICAgICAgIGlmIChub3RlLnNjb3JlICYmIG5vdGUuZGlzcGxheWVkIDw9IDcwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc3dpdGNoIChub3RlLnNjb3JlKSB7XG5cdFx0XHRcdFx0Y2FzZSAnTWlzcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZS5zcmMgPSAnLi9zcHJpdGVzL21pc3MucG5nJztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ0JhZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZS5zcmMgPSAnLi9zcHJpdGVzL2JhZC5wbmcnO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnT0snOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmUuc3JjID0gJy4vc3ByaXRlcy9vay5wbmcnO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnR29vZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZS5zcmMgPSAnLi9zcHJpdGVzL2dyZWF0LnBuZyc7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdQZXJmZWN0ISc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZS5zcmMgPSAnLi9zcHJpdGVzL3BlcmZlY3QucG5nJztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShzY29yZSwgMjUwLCAxNTApO1xuICAgICAgICAgICAgICAgIG5vdGUuZGlzcGxheWVkKys7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm90ZS55IC09IGR4O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNvbWJvID49IDIpIHtcbiAgICAgICAgbGV0IGNvbWJvVGV4dCA9IGAke2NvbWJvfSBjb21ib2A7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgICAgIGN0eC5maWxsVGV4dChjb21ib1RleHQsIDI2MCwgMjI1KTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwJztcbiAgICAgICAgY3R4LnN0cm9rZVRleHQoY29tYm9UZXh0LCAyNjAsIDIyNSk7XG5cbiAgICB9XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51Q29udGFpbmVyJylbMF07XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhbnZhc0NvbnRhaW5lcicpWzBdO1xuICAgIGxldCBzb25nID0gc29uZzE7XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcuL2JhY2tncm91bmRzL3BwcF9iZy5wbmcnKWA7XG5cbiAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcuL2JhY2tncm91bmRzL3BwcF9iZy5wbmcnKWA7XG5cbiAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKFwiLi9zb25ncy9wcHAubXAzXCIpO1xuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICBsZXQgYnBtID0gMzc1O1xuICAgIGRyYXdOb3RlKFtdKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc29uZy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgYmVhdCA9IHNvbmdbaV07XG4gICAgICAgIGlmIChiZWF0KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRyYXdOb3RlKGJlYXQpLCBpICogYnBtKTtcbiAgICAgICAgfSBcbiAgICB9XG59KTtcblxuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgICBpZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcClcbn1cblxuaWYoYm9keSkge1xuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKVxuICAgIH0pXG59XG5cbmxldCByaWdodF9hcnJvdyA9IG5ldyBJbWFnZSgpO1xubGV0IGxlZnRfYXJyb3cgPSBuZXcgSW1hZ2UoKTtcbmxldCB1cF9hcnJvdyA9IG5ldyBJbWFnZSgpO1xubGV0IGRvd25fYXJyb3cgPSBuZXcgSW1hZ2UoKTtcblxucmlnaHRfYXJyb3cuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfcmlnaHQucG5nXCI7XG5sZWZ0X2Fycm93LnNyYyA9IFwiLi9zcHJpdGVzL2Fycm93X2xlZnQucG5nXCI7XG51cF9hcnJvdy5zcmMgPSBcIi4vc3ByaXRlcy9hcnJvd191cC5wbmdcIjtcbmRvd25fYXJyb3cuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfZG93bi5wbmdcIjtcblxubGV0IHJpZ2h0X2Fycm93X2FjdGl2ZSA9IG5ldyBJbWFnZSgpO1xubGV0IGxlZnRfYXJyb3dfYWN0aXZlID0gbmV3IEltYWdlKCk7XG5sZXQgdXBfYXJyb3dfYWN0aXZlID0gbmV3IEltYWdlKCk7XG5sZXQgZG93bl9hcnJvd19hY3RpdmUgPSBuZXcgSW1hZ2UoKTtcblxucmlnaHRfYXJyb3dfYWN0aXZlLnNyYyA9IFwiLi9zcHJpdGVzL2Fycm93X3JpZ2h0X2FjdGl2ZS5wbmdcIjtcbmxlZnRfYXJyb3dfYWN0aXZlLnNyYyA9IFwiLi9zcHJpdGVzL2Fycm93X2xlZnRfYWN0aXZlLnBuZ1wiO1xudXBfYXJyb3dfYWN0aXZlLnNyYyA9IFwiLi9zcHJpdGVzL2Fycm93X3VwX2FjdGl2ZS5wbmdcIjtcbmRvd25fYXJyb3dfYWN0aXZlLnNyYyA9IFwiLi9zcHJpdGVzL2Fycm93X2Rvd25fYWN0aXZlLnBuZ1wiO1xuXG5sZXQgdXBQcmVzc2VkID0gZmFsc2U7XG5sZXQgZG93blByZXNzZWQgPSBmYWxzZTtcbmxldCByaWdodFByZXNzZWQgPSBmYWxzZTtcbmxldCBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlciwgZmFsc2UpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGtleVVwSGFuZGxlciwgZmFsc2UpO1xuXG5mdW5jdGlvbiBrZXlEb3duSGFuZGxlcihlKSB7XG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgdXBQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ga2V5VXBIYW5kbGVyKGUpLCAxMDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgIGRvd25QcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ga2V5VXBIYW5kbGVyKGUpLCAxMDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICByaWdodFByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBrZXlVcEhhbmRsZXIoZSksIDEwMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgbGVmdFByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBrZXlVcEhhbmRsZXIoZSksIDEwMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGtleVVwSGFuZGxlcihlKSB7XG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgdXBQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgZG93blByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgcmlnaHRQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0iLCJsZXQgc29uZ3NMaXN0ID0gWydjLTEnLCAnYy0yJywgJ2MtMycsICdjLTQnLCAnYy01J107XG5cbmV4cG9ydCBmdW5jdGlvbiBzb25nc0Rvd25IYW5kbGVyKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgbGV0IGZvdW5kQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29uZ3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGxldCBjdXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzb25nc0xpc3RbaV0pWzBdO1xuICAgICAgICAgICAgbGV0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNvbmdzTGlzdFtpICsgMV0pWzBdO1xuXG4gICAgICAgICAgICBsZXQgY3VyclBvcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGN1cnIsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoXCJ0cmFuc2Zvcm1cIik7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gY3VyclBvcy5zcGxpdCgnKCcpWzFdLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zcGxpdCgnKScpWzBdLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgbGV0IGN1cnJYID0gcGFyc2VJbnQodmFsdWVzWzRdLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIGxldCBjdXJyWSA9IHBhcnNlSW50KHZhbHVlc1s1XSk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkgY3Vyci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7NjB9cHgsICR7LTE2MH1weClgO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1BvcztcbiAgICAgICAgICAgICAgICBuZXdQb3MgPSAoZm91bmRBY3RpdmUpID8gYHRyYW5zbGF0ZSgke2N1cnJYIC0gMzB9cHgsICR7Y3VyclkgKyA4MH1weClgIDogYHRyYW5zbGF0ZSgke2N1cnJYICsgMzB9cHgsICR7Y3VyclkgKyA4MH1weClgXG4gICAgICAgICAgICAgICAgY3Vyci5zdHlsZS50cmFuc2Zvcm0gPSBuZXdQb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3Vyci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICYmICFmb3VuZEFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGZvdW5kQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjdXJyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIG5leHQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBzb25nc0xpc3QucHVzaChzb25nc0xpc3Quc2hpZnQoKSk7XG4gICAgfVxuXG5cbiAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgIGxldCBmb3VuZEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvbmdzTGlzdC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBsZXQgY3VyciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc29uZ3NMaXN0W2ldKVswXTtcbiAgICAgICAgICAgIGxldCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzb25nc0xpc3RbaSAtIDFdKVswXTtcblxuICAgICAgICAgICAgbGV0IGN1cnJQb3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjdXJyLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKFwidHJhbnNmb3JtXCIpO1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IGN1cnJQb3Muc3BsaXQoJygnKVsxXSxcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuc3BsaXQoJyknKVswXSxcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGxldCBjdXJyWCA9IHBhcnNlSW50KHZhbHVlc1s0XS5zbGljZSgxKSk7XG4gICAgICAgICAgICBsZXQgY3VyclkgPSBwYXJzZUludCh2YWx1ZXNbNV0pO1xuICAgICAgICAgICAgaWYgKGN1cnIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSAmJiAhZm91bmRBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBmb3VuZEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY3Vyci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBuZXh0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaSA9PT0gNCkgY3Vyci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7NjB9cHgsICR7MTYwfXB4KWA7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3UG9zO1xuICAgICAgICAgICAgICAgIG5ld1BvcyA9IGZvdW5kQWN0aXZlID8gYHRyYW5zbGF0ZSgke2N1cnJYICsgMzB9cHgsICR7Y3VyclkgLSA4MH1weClgIDogYHRyYW5zbGF0ZSgke2N1cnJYIC0gMzB9cHgsICR7Y3VyclkgLSA4MH1weClgO1xuICAgICAgICAgICAgICAgIGN1cnIuc3R5bGUudHJhbnNmb3JtID0gbmV3UG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNvbmdzTGlzdC51bnNoaWZ0KHNvbmdzTGlzdC5wb3AoKSk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==