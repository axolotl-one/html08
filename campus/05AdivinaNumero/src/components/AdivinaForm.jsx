import {useState} from "react"
const AdivinaForm = ({inputAdivina}) => {
    const [inputAdivinaForm, setInputAdivina] = useState(inputAdivina);
    

    const eventForm = (e) =>{
        e.preventDefault();
        console.log(inputAdivinaForm)
    }


    return (
        <div>
            <form onSubmit={eventForm}>
                <input type="number"
                inputMode="numeric" 
                onChange={(e)=>{setInputAdivina(parseInt(e.target.value))}}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default AdivinaForm