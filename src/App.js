import React from 'react';
import Navbar from './Navbar';

class Item extends React.Component {
  constructor(props){
    super(props);
    this.value = props.value;
  }

  render(){
    return (
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">{this.props.value}</h4>
          <div class="form-group">
            <input class="form-control form-control-lg" type="number" min="0" placeholder="Cantidad"/>
          </div>
        </div>
      </div>
    );
  }
}

class Counter extends React.Component {

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-2">
            <Item value="1000"/>
          </div>
          <div className="col-md-3 mb-2">
            <Item value="500"/>
          </div>
          <div className="col-md-3 mb-2">
            <Item value="200"/>
          </div>
          <div className="col-md-3 mb-2">
            <Item value="100"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-2">
            <Item value="50"/>
          </div>
          <div className="col-md-3 mb-2">
            <Item value="20"/>
          </div>
          <div className="col-md-3 mb-2">
            <Item value="10"/>
          </div>
          <div className="col-md-3 mb-2">
            <Item value="5"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-2">
            <Item value="2"/>
          </div>
          <div className="col-md-3 mb-2">
            <Item value="1"/>
          </div>
          <div className="col-md-3 mb-2">
            <Item value="0.5"/>
          </div>
          <div className="col-md-3 mb-2">
            <Item value="0.2"/>
          </div>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Navbar/>
      <Counter/>
    </div>
  );
}

export default App;
