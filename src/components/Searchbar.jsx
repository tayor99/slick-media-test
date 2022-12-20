import { Box, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Searchbar = ({ setErrMsg, setMovieData, setIsLoading }) => {
  const [searchText, setSearchText] = useState("");
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL_API}?s=${searchText}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
      );
      if (data?.Response === "True") {
        setIsLoading(false);
        setErrMsg("");
        setMovieData(data?.Search);
      } else {
        setIsLoading(false);
        setErrMsg(data?.Error);
      }
    } catch (e) {
      setIsLoading(false);
      setErrMsg(e.message);
    }
  };
  useEffect(() => {
    if (searchText) {
      const timeOutId = setTimeout(() => {
        fetchData();
      }, 1000);
      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [searchText]);
  return (
    <Box w="87.5%" mt="63px" mb="48px" mx="auto">
      <Text color="black" fontSize="24px">
        Search
      </Text>
      <Input
        size="md"
        border="1px"
        borderColor="black"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        value={searchText}
      />
    </Box>
  );
};

export default Searchbar;
