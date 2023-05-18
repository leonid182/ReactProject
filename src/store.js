import {createStore} from 'redux';

function counter (state={count:0}, action){
    switch(action.type){
        case "Plus":
            return{
                ...state,
                count:state.count+1
            }
        case "Minus":
            return{
                ...state,
                 count:state.count-1
             }

    default:
        return state
    }
   
}

const store =createStore(counter);
export default store;