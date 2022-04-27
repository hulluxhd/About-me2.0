import { Box, Flex } from "@chakra-ui/react";
import "./style.css"

function Header() {

    return (
        <Box
            backgroundColor="rgb(22, 66, 52)"

        >


            <Box
                display="flex"
                p="15px 10px"
                justifyContent="space-between"
                maxW={1200}
                margin="0 auto"

            >
                <div className="imagem-substituir"></div>
                <Flex
                    gap={20}
                    justify="center"
                    alignItems="center"
                    color="#FFF"

                >
                    <div>About me</div>
                    <div>Projetos</div>
                    <div>Contato</div>
                </Flex>
            </Box>
        </Box>
    )

}

export default Header;