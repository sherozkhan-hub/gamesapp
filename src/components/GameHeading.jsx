/* eslint-disable react/prop-types */
import { Heading } from "@chakra-ui/react";

const GameHeading = ({ selectedGenre, selectedPlatform }) => {
  const heading = `${selectedGenre?.name || ""} ${
    selectedPlatform?.name || ""
  } Games `;

  return (
    <Heading as={"h1"} marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
