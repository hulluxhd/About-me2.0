import { Button } from "@chakra-ui/react";
import "./style.css";

function ButtonSocial({ icon, description }) {
  return (
    <Button
      _hover={{ bg: "transparent", border: "1px solid #FF0080", color: "#FFF" }}
      transition="ease-in-out 1ms"
      p={7}
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      leftIcon={icon}
    >
      {description}
    </Button>
  );
}

export default ButtonSocial;
