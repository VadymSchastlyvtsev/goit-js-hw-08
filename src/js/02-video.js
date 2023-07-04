import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

    player.on('timeupdate', throttle((data) => {
        const currentTime = Number.parseInt(data.seconds);
        localStorage.setItem('videoplayer-current-time', currentTime);
      }, 1000));

      const currentTime = Number.parseInt(localStorage.getItem('videoplayer-current-time'));
      if (!isNaN(currentTime)) {
        player.setCurrentTime(currentTime);
      };
