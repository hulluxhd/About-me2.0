import { Box,  Avatar, Wrap, WrapItem, Image } from "@chakra-ui/react";
import { useContext } from "react";
import gatomau2 from "../../assets/gatomau2.png";
import { NomeContext } from "../../context/NomeContext";
import "./style.css";


function Header() {
  const {name} = useContext(NomeContext)
  return (
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
        <Wrap color="#FFF" align="center" justify="space-evenly" spacingX="4rem" >

          <WrapItem cursor="pointer" fontWeight="bold" transition="ease-in-out 200" _hover={{ borderBottom: "2px solid #FF0080" }}>About</WrapItem>
          <WrapItem cursor="pointer" fontWeight="bold" _hover={{ borderBottom: "2px solid #FF0080" }}>Tecnologias</WrapItem>
          <WrapItem cursor="pointer" fontWeight="bold" _hover={{ borderBottom: "2px solid #FF0080" }}>Contato</WrapItem>

        </Wrap>
        <Avatar bgGradient="linear(to-b,  #7928CA,  #FF0080)" size="md" cursor="pointer" name={name} iconLabel={name} mr="20px" ml="20px" />
      </Box>
    </Box>
  );
}

export default Header;
