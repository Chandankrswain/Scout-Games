import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box w="100%" borderRadius="10px" overflow="hidden" h="auto">
      {children}
    </Box>
  );
};

export default GameCardContainer;
