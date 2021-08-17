import React from 'react';
import CurrencyFormat from 'react-currency-format';

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
          <h4 className="card-title text-end">
            <CurrencyFormat value={this.props.value} 
              displayType={'text'} thousandSeparator={true} prefix={'$'} 
            />
          </h4>
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

export default Item;