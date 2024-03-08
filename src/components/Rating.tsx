import { Badge } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Rating = ({ rating }: Props) => {
  return (
    <Badge
      margin="1px"
      height="20px"
      borderRadius="5px"
      fontSize="12px"
      colorScheme="green"
    >
      {rating}
    </Badge>
  );
};

export default Rating;
