import logo from "../images/logo.jpg";
import ColorSwitch from "./ColorSwitch";
import { useState, useEffect } from "react";
import searchLight from "../images/searchWhite.png";
import searchBlack from "../images/searchBlack.png";

import {
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [imageSrc, setImageSrc] = useState(
    colorMode === "dark" ? searchLight : searchBlack
  );

  useEffect(() => {
    setImageSrc(colorMode === "dark" ? searchLight : searchBlack);
  }, [colorMode]);

  const handleToggle = () => {
    toggleColorMode();
  };

  return (
    <HStack>
      <Image src={logo} boxSize="50px" margin="10px" borderRadius="20%" />
      <InputGroup width="88%">
        <InputLeftElement
          pointerEvents="none"
          alignContent="center"
          padding="0px"
        >
          <Image
            onChange={handleToggle}
            src={imageSrc}
            boxSize="19px"
            marginLeft="10px"
            marginTop="7px"
          />
        </InputLeftElement>
        <Input type="text" placeholder="Search" size="lg" borderRadius="80px" />
      </InputGroup>
      <ColorSwitch />
    </HStack>
  );
};

export default Navbar;
