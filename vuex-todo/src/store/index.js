import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  //multiple states
  state: {
    counter: 0,
    counter3: 17,
    history: [0],
  },
  //changing state -mutation
  mutations: {
    //state is state at the top, payload is any value that we want to give the mutation
    addToCounter(state, payload) {
      state.counter = state.counter + payload;
      state.history.push(state.counter); // add onto the array
    },
    subtractFromCounter(state, payload) {
      state.counter = state.counter - payload;
      state.history.push(state.counter); // add onto the array
    },
  },
  //actions handle async code, can  also call a mutation
  actions: {
    async addRandomNumber(context) {
      let data = await axios.get(
        "https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new"
      );
      //calling a mutation with async data
      //we are adding the addToCounter mutation because
      // the random value is added to the value in the counter
      context.commit("addToCounter", data.data);
      console.log(data);
    },
  },
  getters: {
    //helps to manipulate the data received
  },
  modules: {},
});
