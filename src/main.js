import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)
app.use(vue3GoogleLogin, {
    clientId: '396402034298-jvh4e6mtghviof214dbqq7lrn4burb51.apps.googleusercontent.com'
})
app.mount('#app')
