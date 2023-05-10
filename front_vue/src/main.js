import { createApp } from 'vue'
import {router} from './router'

// Vuetify
import 'vuetify/styles'
import 'vuetify'

//ckeditor
import CKEditor from '@ckeditor/ckeditor5-vue'

import App from './App.vue'
/*import {Phaser, PlayGame, config} from './assets/game'*/
/*import io from 'socket.io-client';

const socket = io('http://localhost:3000',{
    cors: { origin: '*' },
    transports : ['websocket']
});*/

const app = createApp(App);

//app.config.globalProperties.$socket = socket;
/*const gameScene = new PlayGame();
gameScene.userName = '';
const GameData = Phaser.Game(config);

app.config.globalProperties.$game = GameData;
GameData.pause();
GameData.onHidden();*/

app.use(router);
app.use(CKEditor);

app.directive('auto-scroll', {
    updated: el => {
        el.scrollTop = el.scrollHeight;
    }
});

app.mount('#app');
