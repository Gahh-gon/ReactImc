import './style.css';
import React from 'react';
export default class Table extends React.Component {
    render(){
        return(
            <section>
                 <table border={1}>
                <thead>
                    <tr>
                        <th>Classificação</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                <tbody>
                     <tr>
                        <td>Abaixo do Peso</td>
                        <td>Abaixo de 18,5</td>
                        </tr>
                        <tr>
                        <td>Peso Normal</td>
                        <td>Entre 18,5 e 24,9</td>
                        </tr>
                        <tr>
                        <td>SobrePeso</td>
                        <td>Entre 25 e 29,9</td>
                        </tr>
                        <tr>
                        <td>Obesidade Grau |</td>
                        <td>Entre 30 e 34,9</td>
                        </tr>
                        <tr>
                        <td>Obesidade Grau ||</td>
                        <td>Entre 35 e 39,9</td>
                        </tr>
                        <tr>
                        <td>Obesidade Grau ||| ou Mórbida</td>
                        <td>Maior que 40</td>
                        </tr>
                </tbody>
            </table>
            </section>
           
        )
    }
  
}