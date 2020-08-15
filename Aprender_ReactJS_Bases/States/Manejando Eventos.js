import React, { Component } from 'react';


class App extends Component {
  constructor (){
    super()
    this.state = {mouseX: 0, mouseY: 0}
    //Utilizando bind para que el contexto se enlace al metodo
    //this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  handleMouseMove  = (e) => {
    const {clientX, clientY} = e
    this.setState({mouseX: clientX, mouseY: clientY})
  }

  handleClick (e){
    console.log(e)
    console.log(e.nativeEvent)
      alert('Hola por aqui')
  }
  render () {
    return (
    <div className="App">
      <h4>Eventos
      </h4>
      <button onClick={this.handleClick}>Hola!</button>
      <div
        onMouseMove={this.handleMouseMove}
        style={{ border: '1px solid #000', margintTop:10, padding:10 }}>
        <p>{this.state.mouseX},{this.state.mouseY}</p>  
      </div>
    </div>
  );

  }
}

export default App;
