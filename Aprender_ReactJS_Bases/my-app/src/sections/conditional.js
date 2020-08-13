import React, {Component} from 'react'

class LoginButton extends Component{
    render() {
        return(
            <button>Iniciar Sesion</button>
        )
    }
}


class LogoutButton extends Component{
    render() {
        return(
            <div>
                <p>Bienvenido Usuario</p>
                <button>Cerrar Sesion</button>
            </div>
        )
    }
}


export default class ConditionalSection extends Component{
    constructor(){
        super()
        this.state = { checkLogin: false}
    }
    render(){
        return(
            <div>
                <h4>Conditional Rendering</h4>
                {this.state.checkLogin 
                    ? <LogoutButton /> 
                    : <LoginButton />
                }
            </div>
        )
    }
}