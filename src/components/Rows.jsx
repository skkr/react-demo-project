import React from 'react';

function Rows({coin, index}) {
  return (
    <tr>
      <td>{++index}</td>
      <td className="text-start">
        <img src={coin.image} alt={coin.name} width="20" className="me-2"/>
        {coin.name}
        <span className="ms-2 text-secondary">{coin.symbol.toUpperCase()}</span>
      </td>
      <td>${coin.current_price}</td>
      <td className={coin.price_change_percentage_24h >+ 0 ? 'text-success' : 'text-danger'}>{coin.price_change_percentage_24h}</td>
      <td>{coin.total_volume}</td>
    </tr>
  )
}

export default Rows