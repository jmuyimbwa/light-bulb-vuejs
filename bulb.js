const appProperties ={
    data(){
        return{
            bulbOn: false,
            
        }

    }
}

const app = Vue.createApp(appProperties);
app.mount('#app');