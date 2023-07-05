import useData from "./useData";

const useGames = (selectedGenre, selectedPlatform, selectedSort) =>
  useData(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        ordering: selectedSort,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, selectedSort]
  );

export default useGames;
