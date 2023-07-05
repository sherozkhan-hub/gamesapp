import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatfromSelector";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState([]);

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav"
                 "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={"10px"}>
            <GenreList
              setSelectedGenre={setSelectedGenre}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            form={setSelectedPlatform}
          />
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
