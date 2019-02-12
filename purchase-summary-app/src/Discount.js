import React, { Component } from 'react';

import './Discount.css';

class Discount extends Component {

  render() {
    return (
      <div className="main">
        <p className="promo">
          Promo code
        </p>
        <form
          onSubmit={this.props.submit}
        >
          <input
            type="text"
            className="input"
            value={this.props.value} onChange={this.props.discount}
          />
          <input
            className="apply"
            type="submit"
            value="Apply"
          />
        </form>
      </div>
    );
  }
}

export default Discount;
