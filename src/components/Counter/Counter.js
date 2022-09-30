import React, {useState} from 'react';

const Counter = () => {
    const [num, setNum] = useState(0)
    const [stock, setStock] = useState(10)

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
        <div>
            {num}
            <button onClick={subtract}>-</button>
            <button onClick={add}>+</button>
            <button onClick={buy}>COMPRAR</button>
        </div>
    )

}

export default Counter