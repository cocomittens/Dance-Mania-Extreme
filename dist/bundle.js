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
      }

      note.y -= dx;
    });
  }

  if (combo >= 2) {
    var comboText = "".concat(combo, " combo");
    ctx.fillStyle = '#fff';
    ctx.fillText(comboText, 235, 200);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zb25ncy5qcyJdLCJuYW1lcyI6WyJyaWdodCIsIkltYWdlIiwibGVmdCIsInVwIiwiZG93biIsInNyYyIsImJvZHkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaWQiLCJzb25nMSIsInNvbmcyIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJtZW51IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNvbmdzIiwic3R5bGUiLCJkaXNwbGF5IiwibWVudUF1ZGlvIiwiQXVkaW8iLCJwbGF5IiwiaHJlZiIsInNvbmdzRG93bkhhbmRsZXIiLCJlIiwia2V5IiwicGF1c2UiLCJhY3RpdmUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNhbnZhcyIsImF1ZGlvIiwiYnBtIiwic29uZyIsImJhY2tncm91bmRJbWFnZSIsImRyYXdOb3RlIiwiaSIsImJlYXQiLCJzZXRUaW1lb3V0IiwibGVuZ3RoIiwiZHgiLCJjdHgiLCJub3RlcyIsImNvbWJvIiwic3BlZWQiLCJ5IiwicnVuIiwibm90ZVgiLCJmb3JFYWNoIiwibm90ZSIsImluY2x1ZGVzIiwicHVzaCIsImltZyIsIngiLCJzY29yZSIsImRpc3BsYXllZCIsImdldENvbnRleHQiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJkcmF3IiwiZm9udCIsImNsZWFyUmVjdCIsInJpZ2h0UHJlc3NlZCIsImRyYXdJbWFnZSIsInJpZ2h0X2Fycm93X2FjdGl2ZSIsInJpZ2h0X2Fycm93IiwidXBQcmVzc2VkIiwidXBfYXJyb3dfYWN0aXZlIiwidXBfYXJyb3ciLCJkb3duUHJlc3NlZCIsImRvd25fYXJyb3dfYWN0aXZlIiwiZG93bl9hcnJvdyIsImxlZnRQcmVzc2VkIiwibGVmdF9hcnJvd19hY3RpdmUiLCJsZWZ0X2Fycm93IiwiY29sb3IiLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsImNvbWJvVGV4dCIsImdhbWVMb29wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsInNvbmdzTGlzdCIsImZvdW5kQWN0aXZlIiwiY3VyciIsIm5leHQiLCJjdXJyUG9zIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJ2YWx1ZXMiLCJzcGxpdCIsImN1cnJYIiwicGFyc2VJbnQiLCJzbGljZSIsImN1cnJZIiwidHJhbnNmb3JtIiwibmV3UG9zIiwicmVtb3ZlIiwiYWRkIiwic2hpZnQiLCJ1bnNoaWZ0IiwicG9wIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUVBLElBQUlBLEtBQUssR0FBRyxJQUFJQyxLQUFKLEVB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QWIsRUFBa0IsQ0FBbEIsQ0FEYjtBQUFBLFVBRUlELE1BQU0sR0FBR0EsTUFBTSxDQUFDQyxLQUFQLENBQWEsR0FBYixDQUZiOztBQUdBLFVBQUlDLE1BQUssR0FBR0MsUUFBUSxDQUFDSCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVJLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBRCxDQUFwQjs7QUFDQSxVQUFJQyxNQUFLLEdBQUdGLFFBQVEsQ0FBQ0gsTUFBTSxDQUFDLENBQUQsQ0FBUCxDQUFwQjs7QUFDQSxVQUFJTixLQUFJLENBQUMxRCxTQUFMLENBQWVDLFFBQWYsQ0FBd0IsUUFBeEIsS0FBcUMsQ0FBQ3dELFlBQTFDLEVBQXVEO0FBQ25EQSxvQkFBVyxHQUFHLElBQWQ7O0FBQ0FDLGFBQUksQ0FBQzFELFNBQUwsQ0FBZXdFLE1BQWYsQ0FBc0IsUUFBdEI7O0FBQ0FiLGFBQUksQ0FBQzNELFNBQUwsQ0FBZXlFLEdBQWYsQ0FBbUIsUUFBbkI7QUFDSDs7QUFFRCxVQUFJakUsRUFBQyxLQUFLLENBQVYsRUFBYWtELEtBQUksQ0FBQ3JFLEtBQUwsQ0FBV2lGLFNBQVgsdUJBQW9DLEVBQXBDLFVBQTZDLEdBQTdDLFNBQWIsS0FDSztBQUNELFlBQUlDLE9BQU0sU0FBVjs7QUFDQUEsZUFBTSxHQUFHZCxZQUFXLHVCQUFnQlMsTUFBSyxHQUFHLEVBQXhCLGlCQUFpQ0csTUFBSyxHQUFHLEVBQXpDLCtCQUFnRUgsTUFBSyxHQUFHLEVBQXhFLGlCQUFpRkcsTUFBSyxHQUFHLEVBQXpGLFFBQXBCO0FBQ0FYLGFBQUksQ0FBQ3JFLEtBQUwsQ0FBV2lGLFNBQVgsR0FBdUJDLE9BQXZCO0FBQ0g7QUFDSjs7QUFDRGYsYUFBUyxDQUFDbUIsT0FBVixDQUFrQm5CLFNBQVMsQ0FBQ29CLEdBQVYsRUFBbEI7QUFDSDtBQUVKLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBzb25nc0Rvd25IYW5kbGVyIH0gZnJvbSAnLi9zb25ncy5qcyc7XG5cbmxldCByaWdodCA9IG5ldyBJbWFnZSgpO1xubGV0IGxlZnQgPSBuZXcgSW1hZ2UoKTtcbmxldCB1cCA9IG5ldyBJbWFnZSgpO1xubGV0IGRvd24gPSBuZXcgSW1hZ2UoKTtcblxucmlnaHQuc3JjID0gJy4vc3ByaXRlcy9hcnJvd19yaWdodF9ub3RlLnBuZyc7XG5sZWZ0LnNyYyA9ICcuL3Nwcml0ZXMvYXJyb3dfbGVmdF9ub3RlLnBuZyc7XG51cC5zcmMgPSAnLi9zcHJpdGVzL2Fycm93X3VwX25vdGUucG5nJztcbmRvd24uc3JjID0gJy4vc3ByaXRlcy9hcnJvd19kb3duX25vdGUucG5nJztcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xubGV0IGlkO1xuXG5cbmxldCBzb25nMSA9IFtcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIG51bGwsIG51bGwsIG51bGwsIG51bGwsXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgbnVsbCwgW3JpZ2h0XSxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBudWxsLCBbdXBdLFxuICAgIFtyaWdodF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIG51bGwsIFtsZWZ0XSxcbiAgICBbdXBdLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBudWxsLCBbZG93bl0sXG4gICAgW2xlZnQsIHJpZ2h0XSwgbnVsbCwgW2xlZnRdLCBbcmlnaHRdLFxuICAgIFt1cF0sIFtkb3duXSwgW3VwXSwgW2Rvd25dLFxuICAgIFtyaWdodF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbcmlnaHRdLCBbbGVmdF0sIFtkb3duXSwgW3VwXSxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBbcmlnaHRdLCBbZG93bl0sXG4gICAgW2xlZnRdLCBbdXBdLCBbbGVmdF0sIFt1cF0sXG4gICAgW2Rvd25dLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtkb3duXSwgW3JpZ2h0XSwgW3VwXSwgW2xlZnRdLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbbGVmdF0sIFt1cCwgZG93bl0sIFtyaWdodF0sIFt1cCwgZG93bl0sXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBudWxsLFxuICAgIFtyaWdodF0sIFt1cCwgZG93bl0sIFtsZWZ0XSwgW3VwLCBkb3duXSxcbiAgICBbcmlnaHRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW2Rvd25dLCBbbGVmdCwgcmlnaHRdLCBbdXBdLCBbbGVmdCwgcmlnaHRdLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgbnVsbCwgW3JpZ2h0XSxcbiAgICBbZG93bl0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBudWxsLCBbdXBdLFxuICAgIFtyaWdodF0sIFtkb3duXSwgW3VwXSwgW2xlZnRdLFxuICAgIFtyaWdodF0sIFt1cF0sIFtsZWZ0XSwgW2Rvd25dLFxuICAgIFtsZWZ0XSwgW3VwXSwgW2Rvd25dLCBbcmlnaHRdLFxuICAgIFtsZWZ0XSwgW2Rvd25dLCBbcmlnaHRdLCBbdXBdLFxuICAgIFtyaWdodF0sIFt1cF0sIFtkb3duXSwgW2xlZnRdLFxuICAgIFtyaWdodF0sIFtsZWZ0XSwgW3VwXSwgW2Rvd25dLFxuICAgIFtsZWZ0XSwgW2Rvd25dLCBbdXBdLCBbcmlnaHRdLFxuICAgIFtsZWZ0XSwgW3JpZ2h0XSwgW2Rvd25dLCBbbGVmdCwgcmlnaHRdXG5dO1xuXG5sZXQgc29uZzIgPSBbXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBudWxsLCBudWxsLCBudWxsLCBudWxsLFxuICAgIG51bGwsIG51bGwsIG51bGwsIG51bGwsXG4gICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBbcmlnaHRdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgW3JpZ2h0XSwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdF0sIFtsZWZ0XSwgW2xlZnRdLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFt1cF0sIFt1cF0sIFtkb3duXSwgW2Rvd25dLFxuICAgIFt1cF0sIFtkb3duXSwgW3VwXSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW2xlZnRdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbdXBdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFtsZWZ0LCByaWdodF0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbdXBdLCBbdXBdLCBbdXBdLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbZG93bl0sIFtkb3duXSwgW2Rvd25dLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW3JpZ2h0XSwgW3JpZ2h0XSwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdF0sIG51bGwsIFtsZWZ0XSwgbnVsbCxcbiAgICBbbGVmdF0sIFtsZWZ0XSwgW2xlZnRdLCBudWxsLFxuICAgIFt1cF0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtkb3duXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICBbcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtsZWZ0XSwgbnVsbCwgW3JpZ2h0XSwgbnVsbCxcbiAgICBbbGVmdCwgcmlnaHRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtyaWdodF0sIG51bGwsIFtyaWdodF0sIG51bGwsXG4gICAgW3JpZ2h0XSwgbnVsbCwgW2Rvd25dLCBbZG93bl0sXG4gICAgW2Rvd25dLCBudWxsLCBbZG93bl0sIG51bGwsXG4gICAgW2Rvd25dLCBudWxsLCBbdXBdLCBbdXBdLFxuICAgIFt1cF0sIG51bGwsIFt1cF0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2xlZnRdLCBbbGVmdF0sXG4gICAgW2xlZnRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBudWxsLCBudWxsLFxuICAgIFtyaWdodF0sIFtyaWdodF0sIFtyaWdodF0sIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBbbGVmdF0sIG51bGwsXG4gICAgW3VwXSwgW3VwXSwgW3VwXSwgbnVsbCxcbiAgICBbZG93bl0sIG51bGwsIFtkb3duXSwgbnVsbCxcbiAgICBbdXBdLCBbdXBdLCBbdXBdLCBudWxsLFxuICAgIFtkb3duXSwgW2Rvd25dLCBbZG93bl0sIG51bGwsXG4gICAgW3VwXSwgbnVsbCwgW2Rvd25dLCBudWxsLFxuICAgIFt1cCwgZG93bl0sIG51bGwsIG51bGwsIG51bGwsXG4gICAgW2xlZnRdLCBudWxsLCBudWxsLCBudWxsXG5dO1xuXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb25nQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuXHRsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnVDb250YWluZXInKVswXTtcbiAgICBsZXQgc29uZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzb25nc0NvbnRhaW5lcicpWzBdO1xuXHRtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgc29uZ3Muc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbGV0IG1lbnVBdWRpbyA9IG5ldyBBdWRpbygnLi9zb25ncy9iZW5zb3VuZC1wb3BkYW5jZS5tcDMnKTtcbiAgICBtZW51QXVkaW8ucGxheSgpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3R5bGVzaGVldCcpLmhyZWYgPSAnLi9jc3Mvc29uZ3MuY3NzJztcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHNvbmdzRG93bkhhbmRsZXIsIGZhbHNlKTtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIG1lbnVBdWRpby5wYXVzZSgpO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0eWxlc2hlZXQnKS5ocmVmID0gJy4vY3NzL3N0eWxlcy5jc3MnO1xuICAgICAgICAgICAgbGV0IGFjdGl2ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjdGl2ZScpWzBdLmNsYXNzTGlzdC5jb250YWlucygnYy0zJyk7XG5cdFx0XHRsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NvbmdzQ29udGFpbmVyJylbMF07XG5cdFx0XHRsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FudmFzQ29udGFpbmVyJylbMF07XG4gICAgICAgICAgICBsZXQgYXVkaW87XG4gICAgICAgICAgICBsZXQgYnBtO1xuICAgICAgICAgICAgbGV0IHNvbmc7XG5cdFx0XHRtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgYXVkaW8gPSBuZXcgQXVkaW8oJy4vc29uZ3MvcHBwLm1wMycpO1xuICAgICAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4vYmFja2dyb3VuZHMvcHBwX2JnLnBuZycpXCI7XG4gICAgICAgICAgICAgICAgYnBtID0gMzc1O1xuICAgICAgICAgICAgICAgIHNvbmcgPSBzb25nMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXVkaW8gPSBuZXcgQXVkaW8oJy4vc29uZ3Mvd3d3Lm9nZycpO1xuICAgICAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnLi9iYWNrZ3JvdW5kcy93d3dfYmcucG5nJylgO1xuICAgICAgICAgICAgICAgIGJwbSA9IDQyNTtcbiAgICAgICAgICAgICAgICBzb25nID0gc29uZzI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cblx0XHRcdGF1ZGlvLnBsYXkoKTtcblx0XHRcdGRyYXdOb3RlKFtdKTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc29uZy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgYmVhdCA9IHNvbmdbaV07XG5cdFx0XHRcdGlmIChiZWF0KSB7XG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiBkcmF3Tm90ZShiZWF0KSwgaSAqIGJwbSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufSk7XG5cblxuXG5sZXQgZHggPSAxO1xubGV0IGN0eDtcbmxldCBub3RlcyA9IFtdO1xubGV0IGNvbWJvID0gMDtcbmxldCBzcGVlZCA9IDE7IC8vIGxvd2VyIGlzIGZhc3RlclxubGV0IHkgPSA2MDA7IC8vIHZlcnRpY2FsIG9mZnNldFxubGV0IHJ1bjtcblxubGV0IGRyYXdOb3RlID0gKGJlYXQpID0+IHtcbiAgICBpZihiZWF0KSB7XG4gICAgICAgIGxldCBub3RlWDtcbiAgICAgICAgICAgIGJlYXQuZm9yRWFjaChub3RlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobm90ZS5zcmMuaW5jbHVkZXMoJ2xlZnQnKSkgbm90ZVggPSAxMDA7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUuc3JjLmluY2x1ZGVzKCdkb3duJykpIG5vdGVYID0gMjAwO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnNyYy5pbmNsdWRlcygndXAnKSkgbm90ZVggPSAzMDA7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUuc3JjLmluY2x1ZGVzKCdyaWdodCcpKSBub3RlWCA9IDQwMDtcbiAgICAgICAgICAgICAgICBub3Rlcy5wdXNoKHsgaW1nOiBub3RlLCBcbiAgICAgICAgICAgICAgICAgICAgeDogbm90ZVgsIFxuICAgICAgICAgICAgICAgICAgICB5LCBcbiAgICAgICAgICAgICAgICAgICAgc2NvcmU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXllZDogMFxuICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJyk7XG4gICAgY2xlYXJJbnRlcnZhbChydW4pO1xuICAgIHJ1biA9IHNldEludGVydmFsKCgpID0+IGRyYXcobm90ZXMpLCBzcGVlZCk7XG59XG5cbmZ1bmN0aW9uIGRyYXcobm90ZXMpIHtcbiAgICBjdHguZm9udCA9IFwiYm9sZCAzMHB4IEhlbHZldGljYVwiO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgNjAwLCA2MDApOyAvLyBjbGVhciB0aGUgY2FudmFzXG4gICAgaWYgKHJpZ2h0UHJlc3NlZCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHJpZ2h0X2Fycm93X2FjdGl2ZSwgNDAwLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHJpZ2h0X2Fycm93LCA0MDAsIDApO1xuICAgIH1cbiAgICBpZiAodXBQcmVzc2VkKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodXBfYXJyb3dfYWN0aXZlLCAzMDAsIDApO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh1cF9hcnJvdywgMzAwLCAwKTtcbiAgICB9XG4gICAgaWYgKGRvd25QcmVzc2VkKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZG93bl9hcnJvd19hY3RpdmUsIDIwMCwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShkb3duX2Fycm93LCAyMDAsIDApO1xuICAgIH1cbiAgICBpZiAobGVmdFByZXNzZWQpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShsZWZ0X2Fycm93X2FjdGl2ZSwgMTAwLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGxlZnRfYXJyb3csIDEwMCwgMCk7XG4gICAgfVxuXG4gICAgaWYobm90ZXMubGVuZ3RoKSB7XG4gICAgICAgIG5vdGVzLmZvckVhY2gobm90ZSA9PiB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKG5vdGUuaW1nLCBub3RlLngsIG5vdGUueSk7XG5cbiAgICAgICAgICAgIGlmKG5vdGUueCA9PT0gMTAwICYmICFub3RlLnNjb3JlICYmIGxlZnRQcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgaWYobm90ZS55IDw9IDMwICYmIG5vdGUueSA+PSAyNSkgbm90ZS5zY29yZSA9ICdCYWQnO1xuICAgICAgICAgICAgICAgIGlmKG5vdGUueSA8PSAyNSAmJiBub3RlLnkgPj0gMjApIG5vdGUuc2NvcmUgPSAnT0snO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMjAgJiYgbm90ZS55ID49IDEwKSBub3RlLnNjb3JlID0gJ0dvb2QnO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMTApIG5vdGUuc2NvcmUgPSAnUGVyZmVjdCEnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm90ZS54ID09PSAyMDAgJiYgIW5vdGUuc2NvcmUgJiYgZG93blByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDMwICYmIG5vdGUueSA+PSAyNSkgbm90ZS5zY29yZSA9ICdCYWQnO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMjUgJiYgbm90ZS55ID49IDIwKSBub3RlLnNjb3JlID0gJ09LJztcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDIwICYmIG5vdGUueSA+PSAxMCkgbm90ZS5zY29yZSA9ICdHb29kJztcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDEwKSBub3RlLnNjb3JlID0gJ1BlcmZlY3QhJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vdGUueCA9PT0gMzAwICYmICFub3RlLnNjb3JlICYmIHVwUHJlc3NlZCkge1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMzAgJiYgbm90ZS55ID49IDI1KSBub3RlLnNjb3JlID0gJ0JhZCc7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAyNSAmJiBub3RlLnkgPj0gMjApIG5vdGUuc2NvcmUgPSAnT0snO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMjAgJiYgbm90ZS55ID49IDEwKSBub3RlLnNjb3JlID0gJ0dvb2QnO1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnkgPD0gMTApIG5vdGUuc2NvcmUgPSAnUGVyZmVjdCEnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm90ZS54ID09PSA0MDAgJiYgIW5vdGUuc2NvcmUgJiYgcmlnaHRQcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAzMCAmJiBub3RlLnkgPj0gMjUpIG5vdGUuc2NvcmUgPSAnQmFkJztcbiAgICAgICAgICAgICAgICBpZiAobm90ZS55IDw9IDI1ICYmIG5vdGUueSA+PSAyMCkgbm90ZS5zY29yZSA9ICdPSyc7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAyMCAmJiBub3RlLnkgPj0gMTApIG5vdGUuc2NvcmUgPSAnR29vZCc7XG4gICAgICAgICAgICAgICAgaWYgKG5vdGUueSA8PSAxMCkgbm90ZS5zY29yZSA9ICdQZXJmZWN0ISc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub3RlLnkgPCAwICYmICFub3RlLnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgbm90ZS5zY29yZSA9ICdNaXNzJztcbiAgICAgICAgICAgICAgICBjb21ibyA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub3RlLnNjb3JlICYmICFub3RlLmRpc3BsYXllZCkge1xuICAgICAgICAgICAgICAgIGlmIChub3RlLnNjb3JlID09ICdHb29kJyB8fCBub3RlLnNjb3JlID09ICdQZXJmZWN0IScpIGNvbWJvKys7XG4gICAgICAgICAgICAgICAgZWxzZSBjb21ibyA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERpc3BsYXkgc2NvcmUgZm9yIDcwIGZyYW1lc1xuICAgICAgICAgICAgaWYgKG5vdGUuc2NvcmUgJiYgbm90ZS5kaXNwbGF5ZWQgPD0gNzApIHtcbiAgICAgICAgICAgICAgICBsZXQgY29sb3I7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChub3RlLnNjb3JlKSB7XG5cdFx0XHRcdFx0Y2FzZSAnTWlzcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9ICcjRkE4ODdCJztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ0JhZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9ICcjQ0NBQkRBJztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ09LJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0gJyNGRkREOTQnO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnR29vZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9ICcjRDBFNkE1Jztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ1BlcmZlY3QhJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0gJyM4NUUzQ0UnO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KG5vdGUuc2NvcmUsIDI1MCwgMTUwKTtcbiAgICAgICAgICAgICAgICBub3RlLmRpc3BsYXllZCsrO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vdGUueSAtPSBkeDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjb21ibyA+PSAyKSB7XG4gICAgICAgIGxldCBjb21ib1RleHQgPSBgJHtjb21ib30gY29tYm9gO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuXG5cbiAgICAgICAgY3R4LmZpbGxUZXh0KGNvbWJvVGV4dCwgMjM1LCAyMDApO1xuXG5cbiAgICB9XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51Q29udGFpbmVyJylbMF07XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhbnZhc0NvbnRhaW5lcicpWzBdO1xuICAgIGxldCBzb25nID0gc29uZzE7XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcuL2JhY2tncm91bmRzL3BwcF9iZy5wbmcnKWA7XG5cbiAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcuL2JhY2tncm91bmRzL3BwcF9iZy5wbmcnKWA7XG5cbiAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKFwiLi9zb25ncy9wcHAubXAzXCIpO1xuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICBsZXQgYnBtID0gMzc1O1xuICAgIGRyYXdOb3RlKFtdKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc29uZy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgYmVhdCA9IHNvbmdbaV07XG4gICAgICAgIGlmIChiZWF0KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRyYXdOb3RlKGJlYXQpLCBpICogYnBtKTtcbiAgICAgICAgfSBcbiAgICB9XG59KTtcblxuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgICBpZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcClcbn1cblxuaWYoYm9keSkge1xuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKVxuICAgIH0pXG59XG5cbmxldCByaWdodF9hcnJvdyA9IG5ldyBJbWFnZSgpO1xubGV0IGxlZnRfYXJyb3cgPSBuZXcgSW1hZ2UoKTtcbmxldCB1cF9hcnJvdyA9IG5ldyBJbWFnZSgpO1xubGV0IGRvd25fYXJyb3cgPSBuZXcgSW1hZ2UoKTtcblxucmlnaHRfYXJyb3cuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfcmlnaHQucG5nXCI7XG5sZWZ0X2Fycm93LnNyYyA9IFwiLi9zcHJpdGVzL2Fycm93X2xlZnQucG5nXCI7XG51cF9hcnJvdy5zcmMgPSBcIi4vc3ByaXRlcy9hcnJvd191cC5wbmdcIjtcbmRvd25fYXJyb3cuc3JjID0gXCIuL3Nwcml0ZXMvYXJyb3dfZG93bi5wbmdcIjtcblxubGV0IHJpZ2h0X2Fycm93X2FjdGl2ZSA9IG5ldyBJbWFnZSgpO1xubGV0IGxlZnRfYXJyb3dfYWN0aXZlID0gbmV3IEltYWdlKCk7XG5sZXQgdXBfYXJyb3dfYWN0aXZlID0gbmV3IEltYWdlKCk7XG5sZXQgZG93bl9hcnJvd19hY3RpdmUgPSBuZXcgSW1hZ2UoKTtcblxucmlnaHRfYXJyb3dfYWN0aXZlLnNyYyA9IFwiLi9zcHJpdGVzL2Fycm93X3JpZ2h0X2FjdGl2ZS5wbmdcIjtcbmxlZnRfYXJyb3dfYWN0aXZlLnNyYyA9IFwiLi9zcHJpdGVzL2Fycm93X2xlZnRfYWN0aXZlLnBuZ1wiO1xudXBfYXJyb3dfYWN0aXZlLnNyYyA9IFwiLi9zcHJpdGVzL2Fycm93X3VwX2FjdGl2ZS5wbmdcIjtcbmRvd25fYXJyb3dfYWN0aXZlLnNyYyA9IFwiLi9zcHJpdGVzL2Fycm93X2Rvd25fYWN0aXZlLnBuZ1wiO1xuXG5sZXQgdXBQcmVzc2VkID0gZmFsc2U7XG5sZXQgZG93blByZXNzZWQgPSBmYWxzZTtcbmxldCByaWdodFByZXNzZWQgPSBmYWxzZTtcbmxldCBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlciwgZmFsc2UpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGtleVVwSGFuZGxlciwgZmFsc2UpO1xuXG5mdW5jdGlvbiBrZXlEb3duSGFuZGxlcihlKSB7XG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgdXBQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ga2V5VXBIYW5kbGVyKGUpLCAxMDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgIGRvd25QcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ga2V5VXBIYW5kbGVyKGUpLCAxMDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICByaWdodFByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBrZXlVcEhhbmRsZXIoZSksIDEwMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgbGVmdFByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBrZXlVcEhhbmRsZXIoZSksIDEwMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGtleVVwSGFuZGxlcihlKSB7XG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgICAgdXBQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgZG93blByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgcmlnaHRQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0iLCJsZXQgc29uZ3NMaXN0ID0gWydjLTEnLCAnYy0yJywgJ2MtMycsICdjLTQnLCAnYy01J107XG5cbmV4cG9ydCBmdW5jdGlvbiBzb25nc0Rvd25IYW5kbGVyKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgbGV0IGZvdW5kQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29uZ3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGxldCBjdXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzb25nc0xpc3RbaV0pWzBdO1xuICAgICAgICAgICAgbGV0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNvbmdzTGlzdFtpICsgMV0pWzBdO1xuXG4gICAgICAgICAgICBsZXQgY3VyclBvcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGN1cnIsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoXCJ0cmFuc2Zvcm1cIik7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gY3VyclBvcy5zcGxpdCgnKCcpWzFdLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zcGxpdCgnKScpWzBdLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgbGV0IGN1cnJYID0gcGFyc2VJbnQodmFsdWVzWzRdLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIGxldCBjdXJyWSA9IHBhcnNlSW50KHZhbHVlc1s1XSk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkgY3Vyci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7NjB9cHgsICR7LTE2MH1weClgO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1BvcztcbiAgICAgICAgICAgICAgICBuZXdQb3MgPSAoZm91bmRBY3RpdmUpID8gYHRyYW5zbGF0ZSgke2N1cnJYIC0gMzB9cHgsICR7Y3VyclkgKyA4MH1weClgIDogYHRyYW5zbGF0ZSgke2N1cnJYICsgMzB9cHgsICR7Y3VyclkgKyA4MH1weClgXG4gICAgICAgICAgICAgICAgY3Vyci5zdHlsZS50cmFuc2Zvcm0gPSBuZXdQb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3Vyci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICYmICFmb3VuZEFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGZvdW5kQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjdXJyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIG5leHQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBzb25nc0xpc3QucHVzaChzb25nc0xpc3Quc2hpZnQoKSk7XG4gICAgfVxuXG5cbiAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgIGxldCBmb3VuZEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvbmdzTGlzdC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBsZXQgY3VyciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc29uZ3NMaXN0W2ldKVswXTtcbiAgICAgICAgICAgIGxldCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzb25nc0xpc3RbaSAtIDFdKVswXTtcblxuICAgICAgICAgICAgbGV0IGN1cnJQb3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjdXJyLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKFwidHJhbnNmb3JtXCIpO1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IGN1cnJQb3Muc3BsaXQoJygnKVsxXSxcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuc3BsaXQoJyknKVswXSxcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGxldCBjdXJyWCA9IHBhcnNlSW50KHZhbHVlc1s0XS5zbGljZSgxKSk7XG4gICAgICAgICAgICBsZXQgY3VyclkgPSBwYXJzZUludCh2YWx1ZXNbNV0pO1xuICAgICAgICAgICAgaWYgKGN1cnIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSAmJiAhZm91bmRBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBmb3VuZEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY3Vyci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBuZXh0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaSA9PT0gNCkgY3Vyci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7NjB9cHgsICR7MTYwfXB4KWA7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3UG9zO1xuICAgICAgICAgICAgICAgIG5ld1BvcyA9IGZvdW5kQWN0aXZlID8gYHRyYW5zbGF0ZSgke2N1cnJYICsgMzB9cHgsICR7Y3VyclkgLSA4MH1weClgIDogYHRyYW5zbGF0ZSgke2N1cnJYIC0gMzB9cHgsICR7Y3VyclkgLSA4MH1weClgO1xuICAgICAgICAgICAgICAgIGN1cnIuc3R5bGUudHJhbnNmb3JtID0gbmV3UG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNvbmdzTGlzdC51bnNoaWZ0KHNvbmdzTGlzdC5wb3AoKSk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==