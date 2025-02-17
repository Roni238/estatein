import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import i18n from './locales';
import router from './router';
import BaseIcon from './components/UI/BaseIcon.vue';

const pinia = createPinia()

const app = createApp(App)

app.component(BaseIcon.name as string, BaseIcon)

app.use(pinia).use(router).use(i18n).mount('#app')


