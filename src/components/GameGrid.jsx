/* eslint-disable react/prop-types */
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

// eslint-disable-next-line react/prop-types
const GameGrid = ({
  // eslint-disable-next-line react/prop-types
  selectedGenre,
  selectedPlatform,
  selectedSort,
  searchText,
}) => {
  const { data, error, isLoading } = useGames(
    selectedGenre,
    selectedPlatform,
    selectedSort,
    searchText
  );
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={"10px"}
        spacing={6}
      >
        {isLoading && skeletons.map((item) => <GameCardSkeleton key={item} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
