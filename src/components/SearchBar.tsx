import { useState, useEffect } from "react";
import searchLight from "../images/searchWhite.png";
import searchBlack from "../images/searchBlack.png";
import {
  InputGroup,
  InputLeftElement,
  Input,
  useColorMode,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

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
    <InputGroup>
      <InputLeftElement children={<BsSearch />}></InputLeftElement>
      <Input
        type="text"
        placeholder="Search games..."
        size="md"
        borderRadius="80px"
      />
    </InputGroup>
  );
};

export default SearchBar;
