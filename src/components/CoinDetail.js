import {
  Image,
  Heading,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { useState, useEffect } from 'react';

function CoinDetail(props) {
/*   const [coinData, setCoinData] = useState([]); */
  const [coinInfo, setCoinInfo] = useState([]);

  //testing data for chart
/*   async function fetchPricesAndTimes() {
    const resp = await fetch(
      `https://api.nomics.com/v1/currencies/sparkline?key=${props.apiKey}&ids=${props.coin}&start=2021-04-14T00%3A00%3A00Z&end=2021-05-14T00%3A00%3A00Z`
    );
    const data = await resp.json();
    setCoinData(data);
  }

  console.log(coinData); */

  async function fetchCoinDetail() {
    const resp = await fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=${props.apiKey}&ids=${props.coin}`
    );
    const data = await resp.json();
    console.log(data);
    setCoinInfo(data[0]);
  }

  useEffect(() => {
    /* fetchPricesAndTimes(); */
    fetchCoinDetail();
  }, [props.coin]);

  // dummy data for chart
  const data2 = [
    { timestamp: '2020-04-20', price: 123.234 },
    { timestamp: '2020-05-27', price: 100.125 },
    { timestamp: '2020-06-27', price: 160.125 },
    { timestamp: '2020-07-27', price: 190.125 },
  ];


  if (coinInfo === null) {
    return 'Loading..';
  } else {
    return (
      <Flex direction="column" align="center">
        <Heading size="md" m={5}>
          {coinInfo?.id}
        </Heading>
        <Image src={coinInfo?.logo_url} boxSize="200px" m={3} />
        <Stat mb={10}>
          <StatLabel>Price</StatLabel>
          <StatNumber>{coinInfo?.price} USD</StatNumber>
        </Stat>
        <LineChart
          width={600}
          height={300}
          data={data2}
          margin={{ top: 15, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </Flex>
    );
  }
}

export default CoinDetail;
