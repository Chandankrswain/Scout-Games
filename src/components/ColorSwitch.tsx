import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";

const ColorSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleToggle = () => {
    toggleColorMode();
  };

  return (
    <HStack>
      <Switch
        colorScheme="teal"
        isChecked={colorMode === "dark"}
        onChange={handleToggle}
      />
      <Text marginRight="5px">Dark Mode </Text>
    </HStack>
  );
};

export default ColorSwitch;
