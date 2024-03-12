import { HStack, Heading, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-rl";

const GenresList = () => {
  const { data } = useGenres();

  return (
    <>
      <Heading paddingTop="10px" fontSize="25px" as="h4">
        Genres
      </Heading>
      <List>
        {data.map((genre: any) => (
          <ListItem paddingY="10px" key={genre.id}>
            <HStack>
              <Image
                boxSize="30px"
                objectFit="cover"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
