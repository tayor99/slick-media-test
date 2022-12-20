import { Box, Text } from "@chakra-ui/react";
import cinemaImg from "../assets/cinema.png";

const Header = () => {
  return (
    <Box>
      <Box
        w="100%"
        h={{
          base: "67px",
          md: "140px",
          lg: "140px",
          xl: "140px",
        }}
        bg="#292929;"
        display="flex"
        alignItems="center"
        justifyContent={{
          base: "center",
          md: "center",
          lg: "flex-start",
          xl: "flex-start",
        }}
      >
        <Box
          border="1px"
          borderColor="white"
          px={{ base: "12px", lg: "19px", md: "19px", xl: "19px" }}
          py={{ base: "8px", lg: "14px", md: "14px", xl: "14px" }}
          ml={{ base: "0px", md: "0px", lg: "77px", xl: "77px" }}
        >
          <Text
            fontSize={{ base: "16px", lg: "25px", md: "25px", xl: "25px" }}
            color="white"
          >
            MyTestApp
          </Text>
        </Box>
      </Box>

      <Box
        bgImage={cinemaImg}
        bgSize="cover"
        bgRepeat="no-repeat"
        w="100%"
        height={{
          base: "257px",
          md: "550px",
          lg: "550px",
          xl: "550px",
        }}
        display="flex"
        alignItems="center"
        justifyContent={{
          base: "center",
          md: "center",
          lg: "flex-start",
          xl: "flex-start",
        }}
      >
        <Text
          fontSize={{ base: "28px", lg: "72px", md: "72px", xl: "72px" }}
          color="white"
          width={{ base: "70%", lg: "40%", md: "50%", xl: "30%" }}
          fontWeight={700}
          ml={{ base: "0px", md: "0px", lg: "77px", xl: "77px" }}
          textAlign={{
            base: "center",
            md: "center",
            lg: "start",
            xl: "start",
          }}
        >
          Watch something incredible
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
