import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Coins from './components/Coins';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    console.log(res.data);
    setCoins(res.data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App bg-dark">

      <h1 className="text-light bg-dark bg-gradient py-1 my-0 ">Crypto-Market</h1>

      <div className="container">
        <div className="row">
          <div className="col">
            <input type="text" placeholder="Search a coin"
              className="form-control bg-dark text-light border-secondary my-3 text-center"
              onChange={ e => (setSearch(e.target.value))}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Coins coins={coins} search={search}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
