import { songsList, infoList } from "../assets/constants";

function moveItems(direction) {
  const moveUp = direction === 'up';
  const limit = moveUp ? songsList.length - 1 : 0;
  let foundActive = false;

  const shiftList = (list) => moveUp ? list.push(list.shift()) : list.unshift(list.pop());

  for (let i = 0; i < songsList.length; i++) {
    let curr = document.getElementsByClassName(songsList[i])[0];
    let next = document.getElementsByClassName(songsList[moveUp ? i + 1 : i - 1])[0];
    let currInfo = document.getElementsByClassName(infoList[i])[0];
    let nextInfo = document.getElementsByClassName(infoList[moveUp ? i + 1 : i - 1])[0];
    
    let transform = new WebKitCSSMatrix(window.getComputedStyle(curr).transform);
    let currX = transform.m41;
    let currY = transform.m42;

    if (curr.classList.contains('active') && !foundActive) {
      foundActive = true;
      curr.classList.remove('active');
      next.classList.add('active');
      currInfo.classList.remove('i-active');
      nextInfo.classList.add('i-active');
    }

    let newPos = foundActive
      ? `translate(${currX + (moveUp ? -30 : 30)}px, ${currY + (moveUp ? 80 : -80)}px)`
      : `translate(${currX}px, ${currY}px)`;

    curr.style.transform = newPos;
    
    if (i === limit) {
      curr.style.transform = `translate(${60}px, ${moveUp ? -160 : 160}px)`;
    }
  }

  shiftList(songsList);
  shiftList(infoList);
}

export function songsDownHandler(e) {
  if (e.key === "ArrowUp") {
    moveItems('up');
  } else if (e.key === "ArrowDown") {
    moveItems('down');
  }
}

export function scrollMenu(func, interval) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (lastCall + interval < now) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}