import { useState } from "react"
import classes from './Counter.module.scss'

export const Counter = () => {

    const [value, setValue] = useState(0);

    const incrementHandler = () => {
        setValue(prev => prev + 1)
    }

    return (
        <>
        <h1 className={classes.btn}>{value}</h1>
        <button onClick={incrementHandler}>Increment</button>
        </>
    )
}