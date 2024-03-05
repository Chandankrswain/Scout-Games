import useGame from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGame();
  return (
    <>
      {error && <h4>{error}</h4>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
