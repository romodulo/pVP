// const createApp = Vue
// const ref = Vue
const {createApp, ref} = Vue

createApp( {
    setup() {
        const msg = ref(0)
        const increment = () => {
            msg.value += 1
        }
        return {
            msg, increment
        }
    }
}
).mount('#app')