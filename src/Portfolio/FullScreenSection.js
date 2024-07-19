import React from "react";
import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      minHeight="100vh"
      width="100%"
      px={{ base: 4, md: 8, lg: 12 }}
      {...boxProps}
    >
      <VStack maxWidth="1280px" width="100%" spacing={8} {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;


