import { createApp } from 'vue'
import App from './App.vue'
// import myChart from '../packages/ll/lib/components/index'
import myChart from 'll'
const app = createApp(App);
app.use(myChart)
app.mount('#app')