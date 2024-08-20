import React from "react"
export default class ButtonCaImc extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <button onClick={()=> this.props.handleButton(this.props.Peso,this.props.Altura)}>Calcular</button>
        )
    }
}
