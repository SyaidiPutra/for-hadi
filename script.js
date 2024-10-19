const audio = document.getElementById('audio');
const playButton = document.getElementById('playPaus');
const stopButton = document.getElementById('stop');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');
const prgBar = document.getElementById('barProgress');

var isPlay = 0;

audio.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(audio.duration);
    progressBar.max = audio.duration;
});

audio.addEventListener('timeupdate', () => {
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    prgBar.style.width = (audio.currentTime / audio.duration) * 100 + '%'
    if((audio.currentTime / audio.duration) > 95){
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    }
    // progressBar.value = audio.currentTime;
});

playButton.addEventListener('click', () => {
    if(isPlay == 0){
        audio.play();
        isPlay = 1
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
    }else{
        audio.pause();
        isPlay = 0
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    }
});


stopButton.addEventListener('click', () => {
    audio.pause();
    playButton.innerHTML = '<i class="fas fa-play"></i>';
    audio.currentTime = 0;
    currentTimeDisplay.textContent = '0:00';
    prgBar.style.width = 0;
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}
