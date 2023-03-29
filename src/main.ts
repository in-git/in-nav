import { createApp } from 'vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import globalComponents from '@/components';
import router from './router';
import store from './store';
import directive from './directive';
import './config/event.config';

import 'in-less';
import './mock';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import '@/assets/style/global.scss';
import '@/api/interceptor';

const app = createApp(App);

app.use(ArcoVueIcon);
app.use(router);
app.use(store);
app.use(globalComponents);
app.use(directive);

app.mount('#app');
