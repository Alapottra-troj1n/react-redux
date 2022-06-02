import { createStore } from "redux";


const reducerFn = (state = {counter : 10}, action) => {
    //LIMITATION
    //Synchronous Function
    //We should not mutate the orginal state

    if(action.type === 'INC'){
        
        return {counter: state.counter+1}
    }
    if(action.type === 'DEC'){

        // if(state.counter === 0){
        //     return {counter : 0}
        // }

        return {counter: state.counter-1}

    }
    if(action.type === 'ADD'){
        return {counter : state.counter + action.addby}
    }



    return state;


}
const store = createStore(reducerFn);

export default store;

