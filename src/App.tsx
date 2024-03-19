import Navbar from "./components/Navbar";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
// import AsideGrid from "./components/AsideGrid";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import GenresList from "./components/GenresList";
import PlatformsDropdown from "./components/PlatformsDropdown";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: " 250px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem marginLeft="45px" paddingTop="10px">
            <GenresList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <PlatformsDropdown />
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
