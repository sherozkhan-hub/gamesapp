import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent={"space-between"} padding={"1rem"}>
        <Image src={logo} boxSize={"60px"} />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
