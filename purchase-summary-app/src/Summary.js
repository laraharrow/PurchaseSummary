import React, { Component } from 'react';

import Discount from './Discount';
import Details from './Details';
import Pickup from './Pickup';
import './Summary.css';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickupSavings: false,
      details: false,
      discount: false,
      newPrice: 102.96,
      value: ''
    }
  }

  handleClick = (value) => {
    if (value === 'pickupSavings') {
      this.setState({
        pickupSavings: !this.state[value]
      })
    } else if (value === 'details') {
      this.setState({
        details: !this.state[value]
      })
    } else if (value === 'discount') {
      this.setState({
        discount: !this.state[value]
      })
    }
  }

  handleDiscount = (e) => {
    e.preventDefault();
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value === 'DISCOUNT') {
      let theDiscount = this.state.newPrice * 0.1;
      let withDiscount = this.state.newPrice - theDiscount;
      this.setState({
        newPrice: withDiscount.toFixed(2),
        discount: !this.state.discount
      })
    } else {
      this.setState({
        discount: !this.state.discount
      })
      alert('code is not valid')
    }
  }

  render() {
    return (
      <div className="border">
        <table>
          <tbody>
            <tr>
              <td className="title">Subtotal</td>
              <td className="value">${this.state.newPrice}</td>
            </tr>
            <tr>
              <td
                className="title underline hover" onClick={() => {this.handleClick('pickupSavings')}}
              >
                Pickup savings
              </td>
              {this.state.pickupSavings && <Pickup/>}
              <td className="value pickup">-$3.85</td>
            </tr>
            <tr>
              <td className="title">
                Est. taxes & fees
                <br/>
                (Based on 94085)
              </td>
              <td className="value">$8.92</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td className="title total">Est. total</td>
              <td className="value total">$108.03</td>
            </tr>
            <tr>
              <td className="title underline hover"
                onClick={() => {this.handleClick('details')}}>
                See item details
              </td>
              {this.state.details && <Details/>}
            </tr>
          </tbody>
        </table>
        <table className="lastTable">
          <tbody>
            <tr>
              <td
                className="title underline hover"
                onClick={() => {this.handleClick('discount')}}
              >
                Apply promo code
              </td>
              {this.state.discount && <Discount     discount={this.handleDiscount}
                submit={this.handleSubmit} value={this.state.value}/>}
            </tr>
          </tbody>
        </table>
        <Details/>
      </div>
    );
  }
}

export default Summary;
