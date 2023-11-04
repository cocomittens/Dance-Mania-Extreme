export const songsMenu = () => {
    audio.pause();
    menu.style.display = 'none';
    canvas.style.display = 'none';
    songSelect.style.display = 'block';
    document.getElementById('stylesheet').href = './css/songs.css';
    document.addEventListener('keydown', scrollMenu(songsDownHandler, 400), false);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            let play1, play2, play3, play4, play5;
            menu.style.display = 'none';
            document.getElementById('stylesheet').href = './css/styles.css';
            play1 = document.getElementsByClassName('active')[0].classList.contains('c-1');
            play2 = document.getElementsByClassName('active')[0].classList.contains('c-2');
            play3 = document.getElementsByClassName('active')[0].classList.contains('c-3');
            play4 = document.getElementsByClassName('active')[0].classList.contains('c-4');
            play5 = document.getElementsByClassName('active')[0].classList.contains('c-5');
            if (play1) {
                audio = new Audio('./songs/lightclors.mp3');
                body.style.backgroundImage = "url('./backgrounds/light-bg.png')";
                bpm = 500;
                title = 'Light Colors';
                song = getSong(4);
            }
            if (play2) {
                audio = new Audio('./songs/stepping_w.ogg');
                body.style.backgroundImage = "url('./backgrounds/stepping_w_bg.png')";
                bpm = 500;
                title = 'Stepping Wind';
                song = getSong(3);
            }
            if (play3) {
                audio = new Audio('./songs/ppp.mp3');
                body.style.backgroundImage = "url('./backgrounds/ppp_bg.png')";
                bpm = 375;
                title = ('Pop Pop Poppet');
                song = getSong(1);
            }
            if (play4) {
                audio = new Audio('./songs/www.ogg');
                body.style.backgroundImage = `url('./backgrounds/www_bg.png')`;
                bpm = 700;
                title = ('White Wind World');
                song = getSong(2);
            }
            if (play5) {
                audio = new Audio('./songs/iris.mp3');
                body.style.backgroundImage = `url('./backgrounds/iris-bg.jpg')`;
                bpm = 700;
                title = ('Tears of Iris');
                song = getSong(5);
            }
            canvas.style.display = 'block';

            audio.play();
            drawNote([]);
            for (let i = 0; i < song.length; i++) {
                let beat = song[i];
                if (beat) {
                    setTimeout(() => drawNote(beat), i * bpm);
                }
            }
            setTimeout(showResults, bpm * song.length);

        }
    });
}
