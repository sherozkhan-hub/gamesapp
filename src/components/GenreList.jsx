import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

const GenreList = ({ setSelectedGenre, selectedGenre }) => {
  const { data, isLoading, error } = useGenre();

  if (error) return null;
  if (isLoading) return <Spinner />;
  //   console.log(genre);
  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(g.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Button
              fontWeight={selectedGenre.id === g.id ? "bold" : "normal"}
              onClick={() => setSelectedGenre(g)}
              fontSize={"lg"}
              variant={"link"}
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default GenreList;
