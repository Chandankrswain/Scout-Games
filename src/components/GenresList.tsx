import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { genres } = useGenres();

  return (
    <>
      <Heading marginLeft="45px" paddingTop="10px" fontSize="25px" as="h4">
        Genres
      </Heading>
      <ul>
        {genres.map((genre: any) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenresList;
