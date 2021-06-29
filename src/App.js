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
  const [cardId, setCardId] = useState("")


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

  if (cryptoList === null) {
    return 'Loading..';
  } else {
        return (
          <BrowserRouter>
            <ChakraProvider theme={theme}>
              <Navbar />
              <Switch>

                <Route
                  exact
                  path="/">
                    <Flex flexWrap="wrap">
                      <Heading size="md" m={5}>
                        Top trending:
                      </Heading>
                          <Card id={crypto.id} cryptoList={cryptoList} setCardId={setCardId}/>
                    </Flex>
                </Route>
                <Route
                  path="/details">
                    <CoinDetail /*cryptoList={cryptoList}*/ apiKey={apiKey} />
                </Route>
                
              </Switch>
            </ChakraProvider>
          </BrowserRouter>
        );
    }
}

export default App;
