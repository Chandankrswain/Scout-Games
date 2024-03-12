import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { data } = useGenres();

  return (
    <>
      <Heading marginLeft="45px" paddingTop="10px" fontSize="25px" as="h4">
        Genres
      </Heading>
      <ul>
        {data.map((genre: any) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenresList;
