import React from "react"
export default class InputAltura extends React.Component {
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <>
            <label>Informe sua altura:</label>
            <input type="text" value={this.props.Altura} onChange={this.props.handleAltura} />
            </>
        )
    }
}
