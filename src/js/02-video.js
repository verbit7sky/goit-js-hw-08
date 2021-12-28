import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(pausedTime, 1000));

function pausedTime() {
  player.getCurrentTime().then(function (sec) {
    localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(sec));
  });
}

const getTimeFromLocalStorage = JSON.parse(localStorage.getItem(CURRENT_TIME_KEY));

player.setCurrentTime(getTimeFromLocalStorage);
