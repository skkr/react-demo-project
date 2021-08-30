import React from 'react';
import Rows from "./Rows";

const titles = ['#', 'Coin', 'Price', 'Price change', '24h volume'];

const Coins = ({coins, search}) => {

  const filteredCoins = coins.filter( coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
      <table className="table table-dark table-hover ">
        <thead>
          <tr>

          {titles.map( (title, index) => (
            <th key={index}>{title}</th>
          ))}
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map( (coin, index) => (
            <Rows coin={coin} index={index} key={index} />
          ))}
        </tbody>

      </table>
  )
}

export default Coins
