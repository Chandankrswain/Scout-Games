import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          type="text"
          placeholder="Search games..."
          size="md"
          borderRadius="80px"
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
