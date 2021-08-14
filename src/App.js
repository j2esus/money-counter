import React from 'react';
import Navbar from './Navbar';

class Item extends React.Component {
  
  onChange = event => {
    const item = {
      index: this.props.index,
      value: this.props.value, 
      quantity: event.target.value,
    }
    this.props.multiply(item);
  }

  render(){
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title text-end">{this.props.value}</h4>
          <div className="form-group">
            <input className="form-control form-control-lg" type="number" min="0" 
              placeholder="Cantidad"
              onChange={this.onChange}/>
          </div>
        </div>
      </div>
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Array(12).fill(null),
      result: 0,
    }
  }

  renderItem(index, value) {
    return <Item value={value} multiply={this.multiply} index={index}/>
  }

  multiply = (item) => {
    const items = this.state.items.slice();
    items[item.index] = item.value * item.quantity;
    const result = items.reduce((a, b) => a + b, 0);
    this.setState({
      items: items,
      result: result,
    });
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-2">
            {this.renderItem(0, 1000)}
          </div>
          <div className="col-md-3 mb-2">
            {this.renderItem(1, 500)}
          </div>
          <div className="col-md-3 mb-2">
            {this.renderItem(2, 200)}
          </div>
          <div className="col-md-3 mb-2">
            {this.renderItem(3, 100)}
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-2">
            {this.renderItem(4, 50)}
          </div>
          <div className="col-md-3 mb-2">
            {this.renderItem(5, 20)}
          </div>
          <div className="col-md-3 mb-2">
            {this.renderItem(6, 10)}
          </div>
          <div className="col-md-3 mb-2">
            {this.renderItem(7, 5)}
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-2">
            {this.renderItem(8, 2)}
          </div>
          <div className="col-md-3 mb-2">
            {this.renderItem(9, 1)}
          </div>
          <div className="col-md-3 mb-2">
            {this.renderItem(10, 0.5)}
          </div>
          <div className="col-md-3 mb-2">
            {this.renderItem(11, 0.2)}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-2 text-end">
            <h2>{this.state.result}</h2>
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
