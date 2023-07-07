import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatfromSelector";
import SortSelector from "./components/SortSelector";

import "./index.css";
import GameHeading from "./components/GameHeading";

const App = () => {
  // const [gameQuery, setGameQuery] = useState({});
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchText, setSearchText] = useState("");

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
          lg: "230px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar onSearch={setSearchText} />
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
          <Box paddingLeft={2}>
            <GameHeading
              selectedGenre={selectedGenre}
              selectedPlatform={selectedPlatform}
            />
            <HStack marginBottom={5} spacing={5}>
              <PlatformSelector
                selectedPlatform={selectedPlatform}
                form={setSelectedPlatform}
              />
              <SortSelector
                selectedSort={selectedSort}
                onSelectSortOrder={setSelectedSort}
              />
            </HStack>
          </Box>
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
            selectedSort={selectedSort}
            searchText={searchText}
          />
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
