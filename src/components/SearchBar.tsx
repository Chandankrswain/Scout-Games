import { useState, useEffect } from "react";
import searchLight from "../images/searchWhite.png";
import searchBlack from "../images/searchBlack.png";
import {
  InputGroup,
  InputLeftElement,
  Image,
  Input,
  useColorMode,
} from "@chakra-ui/react";

const SearchBar = () => {
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
  );
};

export default SearchBar;
