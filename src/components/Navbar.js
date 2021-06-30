import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Spacer,
  Button,
  Box,
  Heading,
  ChevronDownIcon,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react"

function Navbar () {
    return (
      <Flex borderBottomWidth="1px">
        <Box>
          <Heading size="md" m={5}>
            CryptoWatch App
          </Heading>
        </Box>
        <Spacer />
        <Menu>
          <MenuButton
            m={5}
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            _hover={{ bg: 'gray.400' }}
            _expanded={{ bg: 'blue.400' }}
            _focus={{ boxShadow: 'outline' }}
          >
            File
          </MenuButton>
          <MenuList>
            <MenuItem>New File</MenuItem>
            <MenuItem>New Window</MenuItem>
            <MenuDivider />
            <MenuItem>Open...</MenuItem>
            <MenuItem>Save File</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    );
}

export default Navbar;