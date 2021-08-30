import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Coins from './components/Coins';

function App() {

  const [coins, setCoins] = useState([]);

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
      <h1 className="text-light">Coin Market</h1>
      <Coins coins={coins}/>
    </div>
  );
}

export default App;
