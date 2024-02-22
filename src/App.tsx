import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // screen size wider than 1024px
        }}
      >
        <GridItem area="nav" bg="lightgreen">
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="lightblue">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="lightpink">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
