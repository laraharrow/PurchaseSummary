import React, { Component } from 'react';

import './Details.css';

class Details extends Component {
  render() {
    return (
      <table className="details">
        <tbody>
          <tr>
            <td>
              <img src="./chair.jpg" alt="chair"/>
            </td>
            <td className="text">
              Essential by OFM
              <br/>
              ESS-3085 Racing
              <br/>
              Style Leather
              <br/>
              Gamming Chair, Red
              <br/>
            </td>
          </tr>
          <tr>
            <td>
              <br/>
            </td>
            <td>
              $102.96
            </td>
            <td>
              Qty: 1
              <br/>
              <br/>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Details;
