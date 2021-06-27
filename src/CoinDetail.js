import {
  Image,
  Heading,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import {useState, useEffect} from 'react'

function CoinDetail(props) {
  const { id, logo_url, price } = props.cryptoList[0];
  const [coin, setCoin] = useState([]);

  async function fetchAll() {
    const resp = await fetch(
      `https://api.nomics.com/v1/currencies/sparkline?key=${props.apiKey}&ids=${id}&start=2020-04-14T00%3A00%3A00Z&end=2021-05-14T00%3A00%3A00Z`
    );
    const data = await resp.json();
    console.log(data);
    setCoin(data);
  }

  useEffect(() => {
    fetchAll();
  }, []);

  //console.log(coin[0].prices);
  //console.log(coin[0].timestamps);

  //const prices = coin[0].prices;
  //const timestamps = coin[0].timestamp;

  // prices = ["123.234", "123.125", ...]
  // timestamp = ["2020-04-20T00:00:00Z", "2020-04-27T00:00:00Z", ...]

  const data2 = [
    { timestamp: '2020-04-20T00:00:00Z', price: 123.234 },
    { timestamp: '2020-05-27T00:00:00Z', price: 100.125 },
    { timestamp: '2020-06-27T00:00:00Z', price: 150.125 },
  ];

  return (
    <Flex direction="column" align="center">
      <Heading size="md" m={5}>
        {id}
      </Heading>
      <Image src={logo_url} boxSize="200px" m={3} />
      <Stat>
        <StatLabel>Price</StatLabel>
        <StatNumber>{price} USD</StatNumber>
      </Stat>
      <LineChart
        width={600}
        height={300}
        data={data2}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </Flex>
  );
}

export default CoinDetail;