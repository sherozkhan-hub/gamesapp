import useData from "./useData";

const useGames = (selectedGenre, selectedPlatform, selectedSort, searchText) =>
  useData(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        ordering: selectedSort,
        search: searchText,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, selectedSort, searchText]
  );

export default useGames;
