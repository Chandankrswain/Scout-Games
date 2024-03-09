import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";

const ColorSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleToggle = () => {
    toggleColorMode();
  };

  return (
    <HStack width="150px">
      <Switch
        colorScheme="teal"
        isChecked={colorMode === "dark"}
        onChange={handleToggle}
      />
      <Text fontSize="15px" marginRight="5px" fontWeight="600">
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorSwitch;
