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
import { useNavigate } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate("/games/:SLUG");
      }}
    >
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
