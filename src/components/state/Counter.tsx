import { useReducer } from "react";
const initialState = {count: 0}

type counterState ={
    count : number;
}

type counterAction={
    type : 'inc' | 'dec',
    payload: number

}



function reducer(state:counterState, action:counterAction) {
    switch (action.type) {
        case 'inc':
            return {count : state.count + action.payload}
        case 'dec':
            return {count : state.count - action.payload}

        default:
            return state;
            }
    
}

export const Counter =()=>{
    const [state , dispatch] =useReducer(reducer,initialState)
    return(
        <>
        Count: {state.count}
        <button onClick={()=> dispatch({type: 'inc', payload: 10})}>Inc 10</button>
        <button onClick={()=> dispatch({type: 'dec', payload: 10})}>Dec 10</button>
        </>
    )

}