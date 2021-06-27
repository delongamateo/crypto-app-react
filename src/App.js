import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  ChakraProvider,
  Heading,
  theme,
  Flex
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Card from './Card';
import Navbar from './Navbar';
import CoinDetail from './CoinDetail';

function App() {
  const [cryptoList, setCryptoList] = useState([]);

  const apiKey = '66799bea7dbc2e733f42fa8d985abe1078869c66';

  async function fetchAll() {
    const resp = await fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&convert=USD&per-page=9`
    );
    const data = await resp.json();
    
    setCryptoList(data)

  }
  useEffect(() => {
    fetchAll();
  }, []);

  console.log(cryptoList);

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Switch>

          <Route
            exact
            path="/"
            component={() =>
              <Flex flexWrap="wrap">
                <Heading size="md" m={5}>
                  Top trending:
                </Heading>
                <Flex flexWrap="wrap">
                  {cryptoList.map((crypto, i) => (
                    <Card key={i} crypto={crypto} />
                  ))}
                </Flex>
              </Flex>
            } 
          />
          <Route
            path="/details"
            component={() =>
              <CoinDetail cryptoList={cryptoList} apiKey={apiKey} />
            }
          />
          
        </Switch>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
