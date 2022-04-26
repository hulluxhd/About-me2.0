import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import galaxyback from "../../assets/galaxybackg.png";
import gatonauta from "../../assets/gatonauta1.png";
import stars from "../../assets/stars.png";
import rocket from "../../assets/rocket.gif";
import houston from "../../assets/houston.png";
import galaxy from "../../assets/g2.jpg";
import "./style.css";

function Home() {
  return (
    <Box bgColor="rgba(10,13,42,255)">
      <section
        style={{
          position: "relative",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Image
          src={rocket}
          position="absolute"
          width="650px"
          left="0"
          bottom={0}
          fit="cover"
          border="1px solid rgba(10,13,42,255)"
          opacity="0.1"
          className="rocket"
        />
        <Flex
          direction="column"
          justify="center"
          align="center"
          flexWrap="wrap"
          gap={20}
          maxW={1200}
          m="0 auto"
          h="calc(100vh - 100px)"
        >
          <Box
            display="flex"
            bgGradient="linear(to-br, rgba(161, 166, 214, 0.63), rgba(23, 13, 139, 0.97), rgba(10,13,42,255))"
            p="15px"
            boxSizing="border-box"
            borderRadius={12}
            boxShadow="md"
            width="60%"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <Text
              bgGradient="linear(to-l,  #FF0080, #7928CA)"
              bgClip="text"
              m="0 auto"
              fontSize="2.5rem"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-once="true"
            >
              Olá, Gatonauta
            </Text>
          </Box>

          <VStack spacing={-20} mt={70}>
            <Box position="relative" w="100%" h="100%">
              <div id="sat-orbit">
                <div id="sat"></div>
              </div>
            </Box>
            <Image src={gatonauta} w={200} />
            <Image src={stars} w={200} />
          </VStack>

          <Text
            m="0 auto"
            fontSize="1.5rem"
            textAlign="center"
            color="white"
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-once="true"
            width="65%"
            mb="50px"
          >
            De acordo com meus dados, suas credenciais são de Gatonauta veterano
            e você tem acesso às minhas informações!
          </Text>
        </Flex>
      </section>

      <section>
        <Flex
          minH="50vh"
          justify="center"
          wrap="no-wrap"
          backgroundSize="cover"
          opacity={1}
        >
          <Box
            p="25px 50px"
            w="100%"
            borderRadius="10px 10px 0px "
            bgColor="#FFF"
            display="flex"
            flexFlow="column wrap"
            alignItems='center'
            justify="center"
            
          >
            <Heading as="h2" textAlign="center" mb={15}>
              About
            </Heading>
            <Stack color="black"  fontWeight="bold">
              <Text>Gatonauta: Denny Ribeiro</Text>
              <Text>Formação: Economia</Text>
              <Text>
                Info: apresentou-se para o serviço de tecnologia em 2021
              </Text>
              <Text>Status: ativo</Text>
              <Text>Opinião do Almirantado: tem potencimiau</Text>
            </Stack>
          </Box>
          <Box alignSelf="center" w="100%" opacity={1}>
            <Image w={600} src={houston} />
          </Box>
        </Flex>
      </section>
    </Box>
  );
}

export default Home;
