<template>
<div class="app">
    <img src="./assets/logo.png">
    <button @click="fuck">fuck</button>
</div>
</template>

<script>
import Hello from './components/hello.vue'

export default {
    name: 'app',
    components: {
        Hello
    },
    methods:{
        fuck(){
            this.$socket.emit("message", "fuck");    
        }
    },
    socket: {
			events: {

				response(msg) {
					console.log("Something changed: " + msg);
				}

			}
		}
    
        
       
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
