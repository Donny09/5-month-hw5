import { useSelector, useDispatch } from "react-redux"
import { incrCounter } from "../store/counterReducer"
import { useState } from "react"

const Counter = () => {
    const [val, setVal] = useState(1)
    const {counter} = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const onIncr = () => {
        dispatch(incrCounter(val))
    }
    return (
        <div>Counter: {counter}
            <input type="number" onChange={e => setVal(Number(e.target.value))} />
            <button>-</button>
            <button onClick={onIncr}>+</button>
        </div>
    )
}
export default Counter