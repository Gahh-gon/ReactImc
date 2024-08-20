import React from "react"
export default class InputPeso extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <>
            <label>Informe seu Peso:</label>
            <input type="text" value={this.props.Peso} onChange={this.props.handlePeso}/>
            </>
        )
    }
}
