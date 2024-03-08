import { Badge } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Rating = ({ rating }: Props) => {
  return (
    <Badge
      marginTop="6px"
      height="20px"
      borderRadius="5px"
      fontSize="12px"
      colorScheme="green"
    >
      {rating.toFixed(1)}
    </Badge>
  );
};

export default Rating;
