export default function ButtonCaImc({HandleButton,Peso,Altura}){
    return(
        <button onClick={()=>HandleButton(Peso,Altura)}>Calcular</button>
    )
}