import { useSelector } from "react-redux";


function ToDo() {
    let text = useSelector(state => state)

    return(
        <div>
            {text}
        </div>
    )
}

export default ToDo;