let songsList = ['c-1', 'c-2', 'c-3', 'c-4', 'c-5'];

export function songsDownHandler(e) {
    if (e.key === "ArrowLeft") {
        let foundActive = false;
        for (let i = 0; i < songsList.length; i++) {

            let curr = document.getElementsByClassName(songsList[i])[0];
            let next = document.getElementsByClassName(songsList[i + 1])[0];

            let currPos = window.getComputedStyle(curr, null).getPropertyValue("transform");
            var values = currPos.split('(')[1],
                values = values.split(')')[0],
                values = values.split(',');
            let currX = parseInt(values[4].slice(1));
            let currY = parseInt(values[5]);
            if (i === 0) curr.style.transform = `translate(${60}px, ${-160}px)`;
            else {
                let newPos;
                newPos = (foundActive) ? `translate(${currX - 30}px, ${currY + 80}px)` : `translate(${currX + 30}px, ${currY + 80}px)`
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
        let foundActive = false;
        for (let i = 0; i < songsList.length; i++) {

            let curr = document.getElementsByClassName(songsList[i])[0];
            let next = document.getElementsByClassName(songsList[i - 1])[0];

            let currPos = window.getComputedStyle(curr, null).getPropertyValue("transform");
            var values = currPos.split('(')[1],
                values = values.split(')')[0],
                values = values.split(',');
            let currX = parseInt(values[4].slice(1));
            let currY = parseInt(values[5]);
            if (curr.classList.contains('active') && !foundActive) {
                foundActive = true;
                curr.classList.remove('active');
                next.classList.add('active');
            }

            if (i === 4) curr.style.transform = `translate(${60}px, ${160}px)`;
            else {
                let newPos;
                newPos = foundActive ? `translate(${currX + 30}px, ${currY - 80}px)` : `translate(${currX - 30}px, ${currY - 80}px)`;
                curr.style.transform = newPos;
            }
        }
        songsList.unshift(songsList.pop());
    }

}