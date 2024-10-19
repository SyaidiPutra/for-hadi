const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');
const progressBar = document.getElementById('progress-bar');

audio.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(audio.duration);
    progressBar.max = audio.duration;
});

audio.addEventListener('timeupdate', () => {
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    progressBar.value = audio.currentTime;
});

playButton.addEventListener('click', () => {
    audio.play();
});

pauseButton.addEventListener('click', () => {
    audio.pause();
});

stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    currentTimeDisplay.textContent = '0:00';
    progressBar.value = 0;
});

progressBar.addEventListener('input', () => {
    audio.currentTime = progressBar.value;
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}
