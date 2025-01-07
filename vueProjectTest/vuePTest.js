// const createApp = Vue
// const ref = Vue
const {createApp, ref} = Vue

createApp( {
    setup() {
        const msg = ref(0)
        const increment = function superIncrement () {
            return msg.value += 1
        }
        const toggle = () => null //i'm not sure how to implement this toggle for now. 
        const newItems = ref([
            {value: "10 oranges", selecta: "blue-test-icecream" },
            {value: "17 bans", selecta: "red-test-icecream" },
            {value: "4 Grapes", selecta: "chocolate-test-icecream" }
        ])
        // test very long stringValues
        // const newItems = ref([
        //     {value: "10 oranges", selecta: "blue-icecreamblue-icecreamblue-icecreamblue-icecreamblue-icecream blue-icecreamblue-icecreamblue-icecreamblue-icecreamblue-icecreamblue-icecream" },
        //     {value: "17 bans", selecta: "red-icecreamred-icecreamred-icecreamred-icecreamred-icecreamred-icecreamred-icecreamred-icecream red-icecreamred-icecreamred-icecreamred-icecreamred-icecream" },
        //     {value: "4 Grapes", selecta: "chocolate-icecream" }
        // ])
        return {
            msg, increment, newItems, toggle
        }
    }
}
).mount('#app')