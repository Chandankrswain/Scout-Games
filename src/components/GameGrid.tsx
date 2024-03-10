import { Heading, SimpleGrid, Text, Skeleton } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <h4>{error}</h4>}
      <Heading marginLeft={4} marginBottom={3} as="h1" size="4xl">
        New and Trending
      </Heading>
      <Text marginLeft={5}>Based on player counts and release date</Text>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4, xl: 5 }}
        padding="20px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
