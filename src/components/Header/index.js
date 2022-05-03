import {
  Box,
  Avatar,
  Wrap,
  WrapItem,
  Image,
  useMediaQuery,
  Menu,
  MenuButton,
  IconButton,
  MenuItem,
  MenuList,
  MenuDivider,
} from "@chakra-ui/react";
import { useContext } from "react";
import gatomau2 from "../../assets/images/gatomau2.png";
import { NomeContext } from "../../context/NomeContext";
import "./style.css";
import { FiMenu } from "react-icons/fi";

function Header() {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  const { name } = useContext(NomeContext);
  return (
    <>
      {isLargerThan600 ? (
        <Box
          bgColor="rgba(10,13,42,255)"
          p="15px 10px"
          display="flex"
          alignContent="center"
        >
          <Box
            w="100%"
            m="0 auto"
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Image cursor="pointer" src={gatomau2} width="70px" />
            <Wrap
              color="#FFF"
              align="center"
              justify="space-evenly"
              spacingX="4rem"
            >
              <WrapItem
                as="a"
                href="#about"
                cursor="pointer"
                fontWeight="bold"
                transition="ease-in-out 200"
                _hover={{ borderBottom: "2px solid #FF0080" }}
              >
                About
              </WrapItem>
              <WrapItem
                as="a"
                href="#tecnologias"
                cursor="pointer"
                fontWeight="bold"
                _hover={{ borderBottom: "2px solid #FF0080" }}
              >
                Tecnologias
              </WrapItem>
              <WrapItem
                as="a"
                href="#contato"
                cursor="pointer"
                fontWeight="bold"
                _hover={{ borderBottom: "2px solid #FF0080" }}
              >
                Contato
              </WrapItem>
            </Wrap>
            <Avatar
              bgGradient="linear(to-b,  #7928CA,  #FF0080)"
              size="md"
              cursor="pointer"
              name={name}
              iconLabel={name}
              mr="20px"
              ml="20px"
            />
          </Box>
        </Box>
      ) : (
        <Box
          bgColor="rgba(10,13,42,255)"
          p="20px 20px"
          display="flex"
          alignContent="center"
          justifyContent="space-between"
        >
          <Image cursor="pointer" src={gatomau2} width="50px" />
          <Menu>
            <MenuButton
              as={IconButton}
              color="#FFF"
              aria-label="Options"
              icon={<FiMenu />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>
                <Avatar
                  bgGradient="linear(to-b,  #7928CA,  #FF0080)"
                  size="md"
                  cursor="pointer"
                  name={name}
                  iconLabel={name}
                  m
                />
                <MenuDivider />
              </MenuItem>
              <MenuItem as="a" href="#about">
                About
              </MenuItem>
              <MenuItem as="a" href="#tecnologias">
                Tecnologias
              </MenuItem>
              <MenuItem as="a" href="#contato">
                Contato
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      )}
    </>
  );
}

export default Header;
