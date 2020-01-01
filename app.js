import './src/sass/styles.scss';
import Vue from 'vue'
import Main from './components/Main.vue'




new Vue({
    render: (createEl)=>createEl(Main)
}).$mount('#app')

console.log('Hi from my javascript')
