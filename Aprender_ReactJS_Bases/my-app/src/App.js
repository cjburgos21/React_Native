import React, { Component } from 'react';
import cars from './data/cars.json'
//import ConditionalSection from './sections/conditional'

class CarItem extends Component {
  render(){
    const {car, id} = this.props

    return (
      <li>
        <p>Key: {id}</p>
        <p><strong>Nombre: </strong>{car.name}</p>
        <p><strong>Marca: </strong>{car.company}</p>
      </li>
    )
  }
}

class App extends Component {
  render () {

    return (
    <div className="App">
      <h4>Trabajando con listas</h4>
      <ul>
        {
          cars.map(car => {
            return <CarItem id={car.id} key={car.id} car={car}/>
          })
        }
      </ul>

    </div>
  );

  }
}

export default App;
