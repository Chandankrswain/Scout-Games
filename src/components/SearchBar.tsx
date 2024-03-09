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
    <InputGroup margin="20px" width="88%">
      <InputLeftElement
        pointerEvents="none"
        alignContent="center"
        padding="0px"
      >
        <Image
          onChange={handleToggle}
          src={imageSrc}
          boxSize="15px"
          marginLeft="10px"
        />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search 982,242 games"
        size="md"
        borderRadius="80px"
      />
    </InputGroup>
  );
};

export default SearchBar;
