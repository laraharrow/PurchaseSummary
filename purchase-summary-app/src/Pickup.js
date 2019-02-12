import React, { Component } from 'react';

import './Pickup.css';

class Pickup extends Component {
  render() {
    return (
      <table className="savings">
        <tbody>
          <tr>
            <td className="lined">
              Picking up your order in the
            </td>
          </tr>
          <tr>
            <td className="lined">
              store helps cut costs, and we
            </td>
          </tr>
          <tr>
            <td className="lined">
              pass the savings on to you.
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Pickup;
