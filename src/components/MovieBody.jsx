import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Spinner,
  Text,
} from "@chakra-ui/react";

const MovieBody = ({ movieData, isLoading, errMsg }) => {
  return (
    <>
      {isLoading ? (
        <Box display="flex" alignItems="center" justifyContent="center">
          <Spinner size="xl" />
        </Box>
      ) : (
        <Box w="87.5%" mx="auto" mb="50px">
          {errMsg ? (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>{errMsg}</AlertTitle>
            </Alert>
          ) : (
            <>
              <Text color="black" fontSize="24px">
                Movie
              </Text>
              <Box
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
                gap="20px"
              >
                {movieData.map((movie) => (
                  <Box
                    w={{
                      base: "150px",
                      lg: "200px",
                      md: "200px",
                      xl: "200px",
                    }}
                    h={{
                      base: "150px",
                      lg: "200px",
                      md: "200px",
                      xl: "200px",
                    }}
                    bg="black"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="12px"
                  >
                    <Text color="white" fontSize="16px" textAlign="center">
                      {movie?.Title}
                    </Text>
                  </Box>
                ))}
              </Box>
            </>
          )}
        </Box>
      )}
    </>
  );
};

export default MovieBody;
