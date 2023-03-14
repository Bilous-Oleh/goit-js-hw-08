import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timeUpdate = function (time) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(time.seconds)
  );
};

player.on('timeupdate', throttle(timeUpdate, 1000));

const savedPlayerTime = localStorage.getItem('videoplayer-current-time');
const stopedPlayerTime = JSON.parse(savedPlayerTime);

currentTime();

function currentTime() {
  if (stopedPlayerTime) {
    return player.setCurrentTime(stopedPlayerTime);
  }
  console.log(error.message);
}
