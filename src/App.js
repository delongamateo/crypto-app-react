import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Card from './components/Card';
import Navbar from './components/Navbar';
import CoinDetail from './components/CoinDetail';

function App() {
  const [cryptoList, setCryptoList] = useState([]);

  const apiKey = '66799bea7dbc2e733f42fa8d985abe1078869c66';

  async function fetchAll() {
    const resp = await fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&convert=USD&per-page=12`
    );
    const data = await resp.json();
    
    setCryptoList(data)

  }
  useEffect(() => {
    fetchAll();
  }, []);

  console.log(cryptoList);



  if (cryptoList === null) {
    return 'Loading..';
  } else {
        return (
          <ChakraProvider theme={theme}>
            <Navbar />
            <Router>
              <Switch>
                <Route exact path="/">
                  <Card cryptoList={cryptoList} />
                </Route>
                <Route path="/details">
                  <CoinDetail apiKey={apiKey} />
                </Route>
              </Switch>
            </Router>
          </ChakraProvider>
        );
    }
}

export default App;
