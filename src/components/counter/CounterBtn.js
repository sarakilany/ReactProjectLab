import { Button } from "react-bootstrap";

const CounterBtn = ({ text, variant, count, setCount }) => {

    const changeCount = () => {
        text === '+'
            ?
            setCount(count + 1)
            :
            setCount((count - 1) * (count > 0));
    }
    return <>
        <Button variant={variant} onClick={changeCount} >{text}</Button>{' '}
    </>

}

export default CounterBtn;