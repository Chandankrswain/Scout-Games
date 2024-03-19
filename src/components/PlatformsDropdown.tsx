import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatform";

const PlatformsDropdown = () => {
  const { data } = usePlatforms();
  return (
    <Menu>
      <MenuButton marginLeft={5} as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platforms) => (
          <MenuItem key={platforms.id}>{platforms.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformsDropdown;
