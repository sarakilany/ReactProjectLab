import { useState } from 'react';
import CounterBtn from './CounterBtn';
export const Count = () => {
    const [count, setCount] = useState(0)

    return <>
        <p> Counter is = {count}</p>
        <CounterBtn text='+' setCount={setCount} variant="success" count={count}></CounterBtn>
        <CounterBtn text='-' variant="danger" setCount={setCount} count={count} ></CounterBtn>
    </>
}

