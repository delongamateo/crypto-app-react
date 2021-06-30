import {
  Box,
  Heading,
  Image,
  Flex,
  Stat,
  StatLabel,
  StatNumber
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <Box>
      <Heading size="md" m={5}>
        Top trending:
      </Heading>
      <Flex flexWrap="wrap">
        {props.cryptoList.map((crypto, i) => (
          <Flex
            w="30%"
            bg="blue.800"
            maxW="m"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            m={5}
            ml={6}
            align="center"
            key={i}
            _hover={{
              background: 'blue.600'
            }}
            boxShadow="dark-lg"
          >
            <Image src={crypto.logo_url} boxSize="100px" m={3} />
            <Stat>
              <StatLabel>{crypto.name}</StatLabel>
              <StatNumber mr={2}>
                {Math.round(crypto.price * Math.pow(10, 5)) / Math.pow(10, 5)}{' '}
                USD
              </StatNumber>
            </Stat>
            <Box p={1} borderRadius="md" borderWidth="1px" mr={2}>
              <Link to="/details" onClick={()=>{props.setCoin(crypto.name)}}>See Details</Link>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}

export default Card;
