import {
  Box,
  Text,
  VStack,
  Image,
  Flex,
  Stat,
  StatLabel,
  StatNumber
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';



function Card(props) {
  return (
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
                <Link to="/details" onClick={props.setCardId(props.id)}>See Details</Link>
              </Box>
          </Flex>
      ))}
    </Flex>
  );
}

export default Card;
