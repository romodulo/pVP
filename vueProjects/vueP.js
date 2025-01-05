// const createApp = Vue
// const ref = Vue
const {createApp, ref} = Vue

createApp( {
    setup() {
        const msg = ref(0)
        const increment = function superIncrement () {
            return msg.value += 1
        }
        return {
            msg, increment
        }
    }
}
).mount('#app')