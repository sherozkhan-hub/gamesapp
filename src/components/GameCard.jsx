/* eslint-disable react/prop-types */
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";

const GameCard = ({ game }) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"} marginY={2}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
