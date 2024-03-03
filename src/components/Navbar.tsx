import logo from "../images/logo.jpg";
import SearchBar from "../components/SearchBar";
import ColorSwitch from "./ColorSwitch";

import { HStack, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="50px" margin="10px" borderRadius="20%" />
      <SearchBar />
      <ColorSwitch />
    </HStack>
  );
};

export default Navbar;
