import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={{ base: 4, md: 12 }}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={{ base: 12, md: 16 }}
        >
          <Text fontSize={{ base: "sm", md: "md" }}>Pete • © 2022</Text>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;


