import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  Divider,
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
  AOS.init();

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
          src=""
          position="absolute"
          width="450px"
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
          flexWrap="no-wrap"
          gap={10}
          maxW={1200}
          m="0 auto"
          minH="calc(100vh - 70px)"
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
              fontFamily="'Righteous', cursive"
              data-aos="fade-right"
              data-aos-delay="250"
              data-aos-once="true"
            >
              Olá, Gatonauta
            </Text>
          </Box>

          <VStack>
            <Box position="relative" w="100%" h="100%">
              <Image src={gatonauta} w={200} />
              <Image position="absolute" bottom={-5} src={stars} w={200} />
              <div id="sat-orbit">
                <div id="sat"></div>
              </div>
            </Box>
          </VStack>

          <Text
            fontSize="1.5rem"
            textAlign="center"
            color="white"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-once="true"
            width="65%"
            mt={5}
          >
            De acordo com meus dados, suas credenciais são de Gatonauta veterano
            e você tem acesso às minhas informações!
          </Text>
        </Flex>
      </section>

      <section>
        <Flex minH="100vh" justify="center" wrap="wrap">
          <Box
            p="25px 40px 15px"
            w="100%"
            bgGradient="linear(to-br, rgba(23, 13, 139, 0.97), rgba(10,13,42,255))"
            display="flex"
            flexFlow="column wrap"
            zIndex="2"
            data-aos="fade-right"
            data-aos-once="true"
            flex="0 1 65%"
          >
            <Box>
              <Heading
                as="h2"
                fontFamily="'Righteous', cursive"
                textAlign="center"
                mb={15}
                bgClip="text"
                bgGradient="linear(to-l,  #FF0080, #7928CA)"
              >
                About
              </Heading>
              <Stack color="#FFF" 
              fontSize="1.2rem" fontFamily="'Orelega One', cursive;">
                <Text>Gatonauta: Denny Ribeiro</Text>
                <Text>Formação: Economia</Text>
                <Text>Formação Técnica: Digital House (CTD)</Text>
                <Text>
                  Info: Apresentou-se para o serviço de tecnologia em 2021
                </Text>
                <Text>Opinião do Almirantado: Tem potencimiau</Text>
              </Stack>
            </Box>
            <Divider height="5px" m="15px 0px" />
            <Box>
              <Heading
                as="h3"
                textAlign="center"
                mb="15px"
                bgClip="text"
                bgGradient="linear(to-l,  #FF0080, #7928CA)"
                fontFamily="'Righteous', cursive"
              >
                Descrição
              </Heading>
              <Stack
                fontFamily="'Orelega One', cursive;"
                color="#FFF"
                fontSize="1.2rem"
              >
                <Text>
                  Economista de formação, percebi que a sequência natural é ir
                  para a área de dados, já que em economia muito se estuda sobre
                  cálculo, estatística e econometria (relações causais).
                  Contudo, já estudava programação antes mesmo da graduação e
                  sentia um grande chamado. Decidi então não seguir a sequência
                  natural e partir para desenvolvimento web, que é ao mesmo
                  tempo desafiador e divertido.
                </Text>
                <Text>
                  Como economista, consigo entender sobre a lógica de negócio de
                  uma forma mais holística e completa, pois entendo como os
                  mercados funcionam e como o cenário econômico nacional impacta
                  os negócios. Como desenvolvedor, posso ajudar no levantamento
                  de requisitos com uma visão horizontal, entendendo as
                  necessidades do cliente, bem como suas soluções.
                </Text>
              </Stack>
            </Box>
          </Box>
          <Box
            data-aos="fade-left"
            data-aos-once="true"
            position="relative"
            w="100%"
            h="auto%"
            flex="0 1 35%"
          >
            <Box
              w="100%"
              h="100%"
              minH="inherit"
              bgSize="cover"
              bgImage={galaxy}
              opacity="0.5"
            />
            <Image
              position="absolute"
              top="35%"
              left="-15%"
              w={500}
              zIndex={1}
              transform="rotate(330deg)"
              src={houston}
            />
          </Box>
        </Flex>
      </section>
    </Box>
  );
}

export default Home;
