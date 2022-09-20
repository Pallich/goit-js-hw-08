import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player('vimeo-player');
const savedTime = localStorage.getItem('videoplayer-current-time') || 0;

player.setCurrentTime(savedTime);
player.on('timeupdate', throttle(setTime, 1000));

function setTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  //   console.log(savedTime);
}
