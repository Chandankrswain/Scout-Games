import { Heading, VStack } from "@chakra-ui/react";

const AsideGrid = () => {
  return (
    <VStack w="250px" align="stretch">
      <Heading marginLeft="45px" paddingTop="40px" fontSize="25px" as="h4">
        Home
      </Heading>
      <Heading marginLeft="45px" paddingTop="16px" fontSize="25px" as="h4">
        Reviews
      </Heading>
    </VStack>
  );
};

export default AsideGrid;
