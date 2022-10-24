import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import "./Counter.css"

const Counter = ({stck, onAdd}) => {
    const [num, setNum] = useState(1)
    const [stock, setStock] = useState(stck)

    function subtract(){
        if(num>0){
            const n = num-1
            setNum(n)
        }
    }

    function add(){
        if(num<stock){
            const n = num+1
            setNum(n)
        }
    }
    
    return(
        <div className="counterContainer">
            <Button variant="primary" onClick={subtract}>-</Button>
            {num}
            <Button variant="primary" onClick={add}>+</Button>
            <p><Button onClick={()=> onAdd(num)} className="customButton" variant="primary">Agregar al carrito</Button></p>
        </div>
    )

}

export default Counter