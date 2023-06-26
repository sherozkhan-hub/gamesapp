import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav"
                 "aside main"`,
        }}
      >
        <GridItem area={"nav"} bg={"gold"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bg={"blue"}>
            Aside
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={"pink"}>
          Main
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
