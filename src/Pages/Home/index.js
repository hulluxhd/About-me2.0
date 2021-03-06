import { useContext, useEffect, useRef, useState, React } from "react";

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
  Button,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  ModalFooter,
  ModalBody,
  Input,
} from "@chakra-ui/react";

import { BsPaperclip } from "react-icons/bs";
import { SiLinkedin, SiGithub } from "react-icons/si";
import "aos/dist/aos.css";
import curriculo from "../../assets/Denny.pdf";
import g3 from "../../assets/images/g3.jpg";
import gatonauta from "../../assets/images/gatonauta1.png";
import stars from "../../assets/images/stars.png";
import houston from "../../assets/images/houston.png";
import galaxy from "../../assets/images/g2.jpg";
import astrocat from "../../assets/images/astrocat.png";
import dados from "../../assets/data/tecnologias";
import "./style.css";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ButtonSocial from "../../components/Button";
import { Formik } from "formik";
import { NomeContext } from "../../context/NomeContext";

function Home() {
  const { name, setName } = useContext(NomeContext);

  const [active, setActive] = useState(dados[0]);
  const [loading, setLoading] = useState(false);

  const [imagens] = [active.imagens];

  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const modal = (
    <Modal
      closeOnEsc={true}
      closeOnOverlayClick={true}
      size={isLargerThan500 ? "md" : "xs"}
      isCentered
      isOpen={isOpen}
    >
      <ModalOverlay bgGradient="linear(to-l, #7928CA, #FF0080)" />
      <ModalContent>
        <ModalHeader>
          Ol??, Gatonauta! Gostaria de me dizer o seu nome?
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{ nome: "" }}
            onSubmit={(values) => {
              setName(values.nome);
            }}
            validate={(values) => {
              const errors = {};
              if (!values.nome) errors.nome = "Por favor, digite um nome";
              if (values.nome.length >= 31)
                errors.nome = "M??ximo 30 caracteres";
              return errors;
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <Input
                  name="nome"
                  placeholder="Nome"
                  onChange={formik.handleChange}
                  maxLength={30}
                  h="60px"
                  mb="15px"
                />
                <Box>
                  {formik.errors ? (
                    <Text float="left" color="#FF0080" as="span">
                      {formik.errors.nome}
                    </Text>
                  ) : null}
                  <Text as="span" float="right">
                    {30 - formik.values.nome.length} caracteres restantes
                  </Text>
                </Box>
                <Button ref={buttonEnviar} display="none" type="submit" />
              </form>
            )}
          </Formik>
        </ModalBody>
        <ModalCloseButton onClick={onClose} />
        <ModalFooter>
          <Button
            _hover={{
              bg: "transparent",
              border: "1px solid #FF0080",
              color: "#FF0080",
            }}
            type="submit"
            transition="ease-in-out 1ms"
            color="rgba(10,13,42,255)"
            p={5}
            bgGradient="linear(to-l, #FF0080,  #7928CA)"
            onClick={() => {
              submit();
              onClose();
            }}
          >
            Salvar
          </Button>
          <Button
            _hover={{
              bg: "transparent",

              color: "#FF0080",
            }}
            ml="5px"
            transition="ease-in-out 1ms"
            color="rgba(10,13,42,255)"
            p={5}
            border="1px solid #FF0080"
            onClick={onClose}
          >
            An??nimo
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );

  function setIcons() {
    if (isLargerThan900) {
      return 5;
    } else if (isLargerThan600) {
      return 3;
    } else return 2;
  }

  const buttonEnviar = useRef(null);

  function submit() {
    buttonEnviar.current.click();
  }

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <Box bgColor="rgba(10,13,42,255)">
      {modal}
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
          <Text
            bgGradient="linear(to-l,  #FF0080, #7928CA)"
            bgClip="text"
            textAlign="center"
            m="0 auto"
            fontSize="2.5rem"
            fontFamily="'Righteous', cursive"
            data-aos="fade-right"
            data-aos-delay="250"
            data-aos-once="true"
          >
            Bem vindo(a), Gatonauta {name.split(" ")[0]}!
          </Text>

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
            {name
              ? "De acordo com meus dados, suas credenciais s??o de Gatonauta veterano e voc?? tem acesso ??s minhas informa????es!"
              : "Nosso banco de dados n??o conseguiu buscar suas informa????es mas voc?? ter?? acesso garantido!"}
          </Text>
        </Flex>
      </section>

      <section id="about">
        <Flex minH="100vh" justify="center" wrap="wrap">
          <Box
            p="25px 40px"
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
                <Text>Forma????o: Economia</Text>
                <Text>Forma????o T??cnica: Digital House (CTD)</Text>
                <Text>
                  Info: Apresentou-se para o servi??o de tecnologia em 2020
                </Text>
                <Text>Opini??o do Almirantado: Tem potencimiau</Text>
              </Stack>
            </Box>
            <Divider height="5px" m="15px 0px" />
            <Box padding="0 0 30px">
              <Heading
                as="h3"
                textAlign="center"
                mb="15px"
                bgClip="text"
                bgGradient="linear(to-l,  #FF0080, #7928CA)"
                fontFamily="'Righteous', cursive"
              >
                Descri????o
              </Heading>
              <Stack
                direction="column"
                fontFamily="'Orelega One', cursive;"
                color="#FFF"
                fontSize={isLargerThan900 ? "1.5rem" : "1.2rem"}
                textAlign="justify"
              >
                <Text>
                  Sempre fui apaixonado por n??meros, l??gica e resolu????o de
                  problemas complexos, por isso a primeira gradua????o que entrei
                  foi em Engenharia. Por??m, rapidamente descobri que faltava
                  algo e migrei para Economia, que vai para al??m dos n??meros,
                  buscando entender e resolver problemas complexos por meio de
                  estat??stica e econometria.
                </Text>
                <Text>
                  Ao adentrar na ??rea do desenvolvimento encontrei a conex??o dos
                  meus interesses. Entender regras de neg??cios, resolver
                  problemas complexos de forma elegante, lidar com dados,
                  conseguir construir produtos em equipe, ser desafiado e
                  esticado todos os dias.
                </Text>
                <Text>
                  Os recursos s??o escassos e a humanidade precisa atingir{" "}
                  <Text
                    
                    as="a"
                    href="https://pt.wikipedia.org/wiki/Economia_de_escala"
                    color="#FF0080"
                  >
                    economias de escala
                  </Text>
                  , uma situa????o onde se pode produzir mais com a mesma
                  quantidade de insumos. Esse cen??rio s?? pode ser atingido por
                  meio da tecnologia e eu estou aqui para participar da mudan??a.
                </Text>
                <Text>
                  Meu grande sonho ?? fazer parte da mudan??a e da constru????o
                  produtos incr??veis.
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

      <section id="tecnologias" style={{ minHeight: "50vh" }}>
        <Box p="20px 0">
          <Text
            bgGradient="linear(to-l,  #FF0080, #7928CA)"
            bgClip="text"
            fontWeight="bold"
            fontSize="3rem"
            fontFamily="'Righteous', cursive"
            data-aos="fade-right"
            data-aos-delay="250"
            data-aos-once="true"
            textAlign="center"
          >
            Tecnologias
          </Text>
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
                  active.id === tecnologia.id ? "2px solid #FF0080" : "none"
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
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          style={{ backgroundColor: "transparent" }}
        >
          {imagens.map((imagem, i) => (
            <SwiperSlide key={i}>
              <Image src={imagem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section id="contato" style={{ marginTop: "110px" }}>
        <Box>
          <Flex
            direction="column"
            justify="center"
            align="center"
            textAlign="center"
            width="90%"
            fontFamily="'Righteous', cursive"
            m="0 auto"
            borderRadius="xl"
          >
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              m="0 auto"
              fontSize="2.5rem"
            >
              Bora tomar uma cerveja e falar sobre gatos no <span> espa??o</span>
              ?
            </Text>
          </Flex>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            bgColor="linear(to-l, #7928CA, #FF0080)"
          >
            <Stack
              direction={isLargerThan600 ? "row" : "column"}
              p={isLargerThan500 ? "50px 0 100px" : "50px 0"}
              spacing="3rem"
              data-aos="fade-right"
              data-aos-once={true}
            >
              <Link href="https://linkedin.com/in/denny-ribeiro" isExternal>
                <ButtonSocial
                  icon={<SiLinkedin style={{ fontSize: "1.5rem" }} />}
                  description="LinkedIn"
                />
              </Link>
              <Link href="https://github.com/hulluxhd" isExternal>
                <ButtonSocial
                  icon={<SiGithub style={{ fontSize: "1.5rem" }} />}
                  description="Github"
                />
              </Link>
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
                Curr??culo
              </Button>
            </Stack>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgGradient="linear(to-b,  #7928CA,  #FF0080)"
            w="100%"
            h="50vh"
          >
            <Heading
              fontFamily="'Righteous', cursive"
              bgImage={g3}
              bgSize="contain"
              letterSpacing="3px"
              bgClip="text"
              textAlign="center"
              p="100px 25px"
              size="3xl"
              as="h2"
            >
              See you, space Kittenboy...
            </Heading>
          </Box>
        </Box>
      </section>
    </Box>
  );
}

export default Home;
