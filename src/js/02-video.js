import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const PLAYER_CURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const timeUpdate = function (time) {
  localStorage.setItem(PLAYER_CURRENT_TIME, time.seconds);
};

player.on('timeupdate', throttle(timeUpdate, 1000));

const savedPlayerTime = localStorage.getItem(PLAYER_CURRENT_TIME);
const stopedPlayerTime = savedPlayerTime;

currentTime();

function currentTime() {
  if (stopedPlayerTime) {
    return player.setCurrentTime(stopedPlayerTime);
  }
  console.log(error.message);
}
