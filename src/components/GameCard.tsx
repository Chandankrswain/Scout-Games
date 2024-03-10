import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  Image,
  Heading,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import Rating from "./Rating";
import getCroppedImageUrl from "../services/image-rl";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card w="300px" borderRadius="10px" overflow="hidden">
      <Image src={getCroppedImageUrl(game?.background_image)} />
      <CardBody>
        <HStack alignItems="top">
          <Heading fontSize="2xl">{game.name}</Heading>
          <Spacer />
          <Rating rating={game.rating} />
        </HStack>
        <PlatformIcons
          platforms={game?.parent_platforms?.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
