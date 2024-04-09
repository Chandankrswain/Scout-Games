import logo from "../images/logo.jpg";
import SearchBar from "../components/SearchBar";
import ColorSwitch from "./ColorSwitch";
import { HStack, Image } from "@chakra-ui/react";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack>
      <Image src={logo} boxSize="45px" margin="10px" borderRadius="20%" />
      <SearchBar onSearch={onSearch} />
      <ColorSwitch />
    </HStack>
  );
};

export default Navbar;
