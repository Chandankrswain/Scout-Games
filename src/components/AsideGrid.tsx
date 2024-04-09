import { Heading, VStack } from "@chakra-ui/react";

const AsideGrid = () => {
  return (
    <VStack align="stretch">
      <Heading fontSize="25px" as="h4">
        Home
      </Heading>
      <Heading paddingTop="10px" fontSize="25px" as="h4">
        Reviews
      </Heading>
    </VStack>
  );
};

export default AsideGrid;
