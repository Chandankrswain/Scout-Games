import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGame();
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
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
