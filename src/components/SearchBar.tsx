import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
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
