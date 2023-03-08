//Meu Arquivo de CSS


//Meus import hook
import { useState }  from "react"

const ManagerData = () => {
    let valueData = 10;
    const [newValue, setNewValue] = useState(12);

  return (
    <div>
        <div>
            <h2>valor: {valueData}</h2>
            <button onClick={() => (valueData = 15)}>Mudar valor do Dado</button>
        </div>
         <div>
            <h2>valor: {newValue}</h2>
            <button onClick={() => setNewValue(20)}>Nova alteração de valor do Dado</button>
         </div>
    </div>
  )
}

export default ManagerData