import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  Divider,
  useMediaQuery,
  Icon,
  Grid,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

import { BsPaperclip } from "react-icons/bs";
import { SiLinkedin, SiGithub } from "react-icons/si";
import curriculo from "../../assets/Denny.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import galaxyback from "../../assets/galaxybackg.png";
import galaxy2 from "../../assets/galaxy2.jpg";
import g3 from "../../assets/g3.jpg";
import gatonauta from "../../assets/gatonauta1.png";
import stars from "../../assets/stars.png";
import rocket from "../../assets/rocket.gif";
import houston from "../../assets/houston.png";
import galaxy from "../../assets/g2.jpg";
import astrocat from "../../assets/astrocat.png";
import seeya from "../../assets/seeya.jpg";
import dados from "../../assets/data/tecnologias";
import "./style.css";
import "swiper/css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { act } from "react-dom/test-utils";
import ButtonSocial from "../../components/Button";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  AOS.init();

  const [active, setActive] = useState(dados[0]);
  const [loading, setLoading] = useState(false);

  const [imagens] = [active.imagens];

  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");

  function setIcons() {
    if (isLargerThan900) {
      return 5;
    } else if (isLargerThan600) {
      return 3;
    } else return 2;
  }

  console.log(active);
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

      <section style={{}}>
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
            flex={isLargerThan900 ? "0 1 65%" : "0 1 100%"}
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
              <Stack
                color="#FFF"
                fontSize="1.2rem"
                fontFamily="'Orelega One', cursive;"
              >
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
            h="auto"
            flex={isLargerThan900 ? "0 1 35%" : "0 1 100%"}
          >
            <Box
              w="100%"
              h="100%"
              minH="500px"
              bgSize="cover"
              bgImage={galaxy}
              opacity="0.5"
            />
            {isLargerThan900 ? (
              <Image
                position="absolute"
                top="35%"
                left="-15%"
                w={500}
                zIndex={1}
                transform="rotate(330deg)"
                src={houston}
              />
            ) : (
              <Image
                position="absolute"
                top="32%"
                left="32%"
                w={200}
                zIndex={1}
                src={astrocat}
              />
            )}
          </Box>
        </Flex>
      </section>

      <section style={{ minHeight: "50vh" }}>
        <Box p="50px 0">
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
            m="0 auto"
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
              Tecnologias
            </Text>
          </Box>
        </Box>
        <Swiper
          modules={[Navigation]}
          slidesPerView={setIcons()}
          loop={true}
          navigation={true}
          style={{ marginBottom: "20px" }}
        >
          {dados.map((tecnologia) => (
            <SwiperSlide
              onClick={() => setActive(tecnologia)}
              key={tecnologia.id}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                border={
                  active.id == tecnologia.id ? "2px solid #FF0080" : "none"
                }
                p="10px 20px"
                borderRadius="12px"
              >
                <Icon as={tecnologia.tec} />
                <span>{tecnologia.title}</span>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          style={{ backgroundColor: "transparent" }}
        >
          {imagens.map((imagem, i) => (
            <SwiperSlide key={i}>
              <Image src={imagem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section style={{ marginTop: "110px" }}>
        <Flex
          direction="column"
          justify="center"
          align="center"
          textAlign="center"
          width="90%"
          fontFamily="'Righteous', cursive"
          m="0 auto"
          h={200}
          borderRadius="xl"
        >
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            m="0 auto"
            fontSize="2.5rem"
          >
            Bora tomar uma cerveja e falar sobre gatos no <span> espaço</span>?
          </Text>
        </Flex>
        <Box
          p="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <Stack
            direction={isLargerThan600 ? "row" : "column"}
            m={isLargerThan500 ? "0 0 100px" : "50px 0"}
            spacing="3rem"
            data-aos="fade-right"
            data-aos-once={true}
          >
            <ButtonSocial
              icon={<SiLinkedin style={{ fontSize: "1.5rem" }} />}
              description="LinkedIn"
            />
            <ButtonSocial
              icon={<SiGithub style={{ fontSize: "1.5rem" }} />}
              description="Github"
            />
            <Button
              as="a"
              href={curriculo}
              download="DennyRibeiro.pdf"
              _hover={{
                bg: "transparent",
                border: "1px solid #FF0080",
                color: "#FFF",
              }}
              transition="ease-in-out 1ms"
              p={7}
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              leftIcon={<BsPaperclip style={{ fontSize: "1.5rem" }} />}
              isLoading={loading}
              loadingText="Carregando..."
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 2000);
              }}
              data-aos="flip-right"
              data-aos-delay="250"
              data-aos-once={true}
            >
              Currículo
            </Button>
          </Stack>
        </Box>
      </section>
      <Box bgGradient="linear(to-b,  #7928CA,  #FF0080)">
        <Heading
          fontFamily="'Righteous', cursive"
          bgImage={g3}
          bgSize="contain"
          letterSpacing="3px"
          bgClip="text"
          align="center"
          p="100px 0"
          size="3xl"
          as="h2"
        >
          See you, space Kittenboy...
        </Heading>
      </Box>
    </Box>
  );
}

export default Home;
