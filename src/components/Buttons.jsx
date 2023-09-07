import refreshImg from '../assets/image/refresh 1.png'
import { useState } from "react";


function Buttons({}) {

    const [counter, setCounter] = useState(0)

    function plus(){
        setCounter(counter + 3)
    }
    function refresh(){
        setCounter(0)
    }
    function minus(){
        if(counter - 2 >= 0){
            return setCounter(counter - 2)
        }else{
            alert('Число должно быть больше 1')
        }
    }

    return (
        <div>
            <div className="container">
                <div className="main-buttons">
                    <div className="btn-plus">
                        <button className="btn-plus__values" onClick={plus}>
                            +
                        </button>
                    </div>
                    <button className="btn-refresh" onClick={refresh}>
                        <img src={refreshImg} alt="" />
                    </button>
                    <div className="btn-minus" onClick={minus}>
                        <button className="btn-minus__values">
                             -
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Buttons;