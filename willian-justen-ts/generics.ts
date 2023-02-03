// S => State
// T => Type
// K => Key
// V => Value
// E => Element

function useState<S extends number | string = string>(){
    let state: S;
    function getState(){
        return state
    }
    function setState(newState: S){
        state = newState
    }

    return { getState, setState}
}

const newState = useState<number>()

newState.setState(1)
newState.setState('um')
console.log(newState.getState())