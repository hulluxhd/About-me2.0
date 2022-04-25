import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import galaxyback from "../../assets/galaxybackg.png"
import gatonauta from "../../assets/gatonauta1.png"
import stars from "../../assets/stars.png"
import "./style.css"

function Home() {


    return (
        <Box
            position="absolute"
            backgroundSize="cover"
            backgroundImage={`url(${galaxyback})`}
            minHeight="calc(100vh - 100px)"
            width="100%"
        >
            <Flex
                direction="column"
                justify="center"
                align="center"
                flexWrap="wrap"

                gap={20}
            >
                <Box
                    display="flex"
                    bgGradient="linear(to-br, rgba(58, 157, 212, 0.78), rgba(0, 48, 75, 0.78))"
                    p="30px"
                    boxSizing="border-box"
                    borderRadius={12}
                    width="65%"
                    margin="100px auto 0"
                >
                    <Text
                        m="0 auto"
                        fontSize="2.5rem"
                        color="white">
                        Olá, Gatonauta xxx
                    </Text>

                </Box>

                <VStack spacing={-20} mt={70}>
                    <Box
                        position="relative"
                        w="100%"
                        h="100%">

                        <div id="sat-orbit">

                            <div id="sat">
                            </div>

                        </div>

                    </Box>
                    <Image
                        src={gatonauta}
                        w={200}

                    />
                    <Image
                        src={stars}
                        w={200}

                    />
                </VStack>

                <Text
                    m="0 auto"
                    fontSize="2.5rem"
                    textAlign="center"
                    color="white"
                    data-aos="fade-left"
                    data-aos-delay="1000"
                    data-aos-once="true"
                    width="65%">
                    De acordo com meus dados, suas credenciais são de Gatonauta veterano e você tem acesso às minhas informações!
                </Text>

            </Flex>

        </Box>

    )

}

export default Home;