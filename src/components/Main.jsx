import Number from "../components/Number";
import Buttons from '../components/Buttons';


import { useState } from "react";


function Main() {
    const [counter, setCounter] = useState(0)


    return (
    
        <div>
            <Number counter = {counter}/>
            <Buttons counter={counter} setCounter={setCounter}/>
        </div>
    );
  }
  
  export default Main;