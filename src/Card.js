import {
  Box,
  Text,
  VStack,
  Code,
  Grid,
  theme,
  Image,
  Heading,
  Flex,
  Stat,
  StatLabel,
  StatNumber
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';



function Card(props) {
  return (
    <Flex
      w="30%"
      bg="blue.800"
      maxW="m"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      m={5}
      align="center"
    >
      <Image src={props.crypto.logo_url} boxSize="100px" m={3} />
      <Stat>
        <StatLabel>{props.crypto.name}</StatLabel>
        <StatNumber mr={2}>
          {Math.round(props.crypto.price * Math.pow(10, 5)) / Math.pow(10, 5)}{' '}
          USD
        </StatNumber>
      </Stat>
      <Box p={1} borderRadius="md" borderWidth="1px" mr={2}>
        <Link to="/details">See Details</Link>
      </Box>
    </Flex>
  );
}

export default Card;
