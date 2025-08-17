import { useState } from "react"

const InputAdivina = ({actualizarInput}) => {
    const [inputCaptura, setInputCaptura] = useState(0)
    return (
        <form onSubmit={(e)=>{e.preventDefault(); actualizarInput(inputCaptura)}}>
            <input
                type="number"
                inputMode="numeric"
                placeholder="Escribe un Número"
                value={inputCaptura}
                min={1}
                max={100}
                onChange={(e)=>{setInputCaptura(parseInt(e.target.value))}}
            />
            <input
                className="delete-button"
                type="submit"
                value="Adivinar"
            />
        </form>
    )
}

export default InputAdivina