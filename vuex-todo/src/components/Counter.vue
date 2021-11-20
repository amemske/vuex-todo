<template>
    <div>
        <h1> Vuex Counter</h1>
        <!-- option2 mapState gets multiple items as an array-->
        <h2 class="counter">{{counter}}</h2>

        <!-- option 1 $store.state.counter  is global but gets single item-->
        <button @click="subtractFromCounter(value)">-</button>
        <input type="number" v-model="value"/>
        <button @click="addToCounter(value)" >+</button>
        <div><button class="btn" @click="addRandomNumber">Add Random Number</button></div>

    </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from "vuex"
    export default {
        //local state with data
        data() {
            return{
                value:7
            }
        },
        computed: {
            ...mapState(["counter","counter3"])
        },
        //mutations are handled by methods
        methods: {
            ...mapMutations(["addToCounter", "subtractFromCounter"]),
            ...mapActions(["addRandomNumber"])
        }

    }
</script>

<style scoped>
.counter{
  font-size: 5rem  
}
.button{
    border-radius: 100%;
    border:none;
    width: 2rem;
    font-weight:700;
    cursor:pointer;
}

input{
   padding:0.5rem;
   margin:0 0.5rem;
   text-align: center
}
.btn{
    border-radius:0.5rem;
    width:auto;
    background-color: #009688;
    color:white;
    border:none;
    padding:0.5rem 1rem;
    margin-top:1.5rem;
    font-size:1rem;
    cursor:pointer;
}

</style>