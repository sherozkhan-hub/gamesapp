import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = ({ onSearch }) => {
  return (
    <div>
      <HStack padding={"1rem"}>
        <Image src={logo} boxSize={"60px"} />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
