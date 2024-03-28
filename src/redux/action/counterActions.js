import { INCREASE,DECREASE,RESET } from "./actionTypes";

export function increase (value=1){
    return {
        type:INCREASE,
        value:value
    }
}

export function decrease(value=1){
    return { 
        type:DECREASE,
        value:value 
    }
}

export function reset(){
    return { 
        type:RESET
    }
}
