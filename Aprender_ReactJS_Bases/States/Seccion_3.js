import React, { Component } from 'react';
import './App.css';



class Contador extends Component {
  constructor (props) {
    super(props)
    console.log(this.props.contadorInicial)
    this.state = { contador: this.props.contadorInicial }
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 })
  }, 1000)
}

  render(){
    return <ContadorNumero numero={this.state.contador}/>
  }
}

Contador.defaultProps = {
  contadorInicial: 0
}
class ContadorNumero extends Component{
  render () {
    console.log('contadorNumero render()')
    return <span>{this.props.numero}</span>
  }
}
class App extends Component {
  render () {
    return (
    <div className="App">
      <p>Primer componente con state</p>
      <Contador />
    </div>
  );

  }
}

export default App;
