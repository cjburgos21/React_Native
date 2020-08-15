import React, { Component } from 'react'
//Formulario usando componentes descontrolados -> no tenemos control sobre el valor de los campos 

export default class Forms extends Component{
    constructor(){
        super()
        this.state = {
            inputName: '', 
            inputFacebook: '@',
            inputTerms: true
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = (e) => {
        console.log('handleChange')
        console.log(e.target.checked)
        this.setState({ inputTerms: e.target.checked})
    }
    render(){
        return(
            <div><h4>Formularios</h4>
                <form onSubmit={this.handleSubmit}>
                    <p>
                    <label htmlFor='name'>Nombre: </label>
                    <input 
                    id='name'
                    name='userName'
                    onChange={e => this.setState({ inputName: e.target.value })}
                    placeholder='Introduce el nombre'
                    ref={inputElement => this.inputName = inputElement}
                    value={this.state.inputName}/>
                    </p>

                    <p>
                        <label>Facebook: </label>
                        <input
                        id='facebook'
                        name='fbAccount'
                        onChange={e => this.setState({ inputFacebook: e.target.value})}
                        placeholder='Introduce tu Facebook'
                        value={this.state.inputFacebook}/>
                    </p>

                    <p>
                        <label>
                            <input 
                            checked={this.state.inputTerms}
                            onChange={this.handleChange} type='checkbox'/>
                            Accepted terms
                        </label>
                    </p>

                    <button >Enviar</button>
                </form>
            </div>
        )
    }

}