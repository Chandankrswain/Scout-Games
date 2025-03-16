import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import GenresList from "../components/GenresList";
import GameHeading from "../components/GameHeading";
import PlatformsDropdown from "../components/PlatformsDropdown";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";
import { Genres } from "../hooks/useGenres";
import { Platform } from "../hooks/useGames";
import PaginationRounded from "../components/Pagination";
import apiClient from "../services/apiClient ";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
  page: number;
}

const Home = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    page: 1,
  } as GameQuery);
  const [totalCount, setTotalCount] = useState<number>(1); // ✅ Store total pages

  useEffect(() => {
    const fetchTotalPages = async () => {
      try {
        const response = await apiClient.get("/games"); // ✅ Fetch API
        const result = response.data.count; // ✅ Get total games count
        setTotalCount(result);
      } catch (error) {
        console.error("Error fetching total pages:", error);
      }
    };

    fetchTotalPages();
  }, []);

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>

        <Show above="lg">
          <GridItem marginLeft="20px" paddingTop="10px">
            <GenresList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <GameHeading gameQuery={gameQuery} />
          <PlatformsDropdown
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectedSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>

      {/* ✅ Pass totalPages correctly */}
      <PaginationRounded
        totalCount={totalCount}
        currentPage={gameQuery.page}
        onPageChange={(page) => setGameQuery({ ...gameQuery, page })}
      />
    </div>
  );
};

export default Home;
