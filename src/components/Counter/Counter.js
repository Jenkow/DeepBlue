import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import "./Counter.css"

const Counter = ({stck}) => {
    const [num, setNum] = useState(0)
    const [stock, setStock] = useState(stck)

    function subtract(){
        if(num>0){
            setNum(num-1)
        }
    }

    function add(){
        if(num<stock){
            setNum(num+1)
        }
    }

    function buy(){
        setStock(stock-num)
        setNum(0)
    }

    return(
        <div className="counterContainer">
            <Button variant="primary" onClick={subtract}>-</Button>
            {num}
            <Button variant="primary" onClick={add}>+</Button>
        </div>
    )

}

export default Counter