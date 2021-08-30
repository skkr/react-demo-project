import React from 'react';
import Rows from "./Rows";

const Coins = ({coins}) => {

  const titles = ['#', 'Coin', 'Price', 'Price change', '24h volume'];

  return (
      <table className="table table-dark table-hover ">
        <thead>
          <tr>

          {titles.map( title => (
            <th>{title}</th>
          ))}
          </tr>
        </thead>
        <tbody>
          {coins.map( (coin, index) => (
            <Rows coin={coin} index={index} key={index} />
          ))}
        </tbody>

      </table>
  )
}

export default Coins
