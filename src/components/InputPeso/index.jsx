export default function InputPeso({Peso,handlePeso}){
    return(
        <>
        <label>Informe seu Peso:</label>
        <input type="text" value={Peso} onChange={handlePeso}/>
        </>
      
    )
}