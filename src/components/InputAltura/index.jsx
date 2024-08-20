export default function InputAltura({Altura,handleAltura}){
    return(
        <> 
        <label>Informe sua altura:</label>
        <input type="text" value={Altura} onChange={handleAltura} />
        </>
       
    )
}