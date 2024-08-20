import { useState } from "react"
import Table from "../Table"
import InputPeso from "../InputPeso"
import InputAltura from "../InputAltura"
import ButtonCaImc from "../ButtonCalmc"
import ResulImc from "../ResulImc"


export default function CalcularImc(){
const [Peso,SetPeso] = useState(0)
const [Altura,SetAltura] = useState(0)
const [Resul,SetResul] = useState(0)
const handlePeso = (e)=>{
    SetPeso(e.target.value)
}
const handleAltura = (e)=>{
    SetAltura(e.target.value)
    
}

const HandleButton =(p,a)=>{
const resul = p/(a *a )
SetResul(resul)
}
    return(
        <main>
            <article>
            <InputPeso Peso={Peso} handlePeso={handlePeso} />
            <br />
            <InputAltura Altura={Altura} handleAltura={handleAltura}/>
            <br />
            <ButtonCaImc HandleButton={HandleButton} Peso={Peso}  Altura={Altura} />
            <br />
            <ResulImc Resul={Resul}/>
            </article>
           
            <Table/>
        </main>
    )
}