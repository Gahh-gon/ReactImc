import React from "react"

export default class ResulImc extends React.Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
            <span>Resultado:{this.props.Resul.toFixed(2)}</span>
        )
    }
}

