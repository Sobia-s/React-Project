import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={{ base: 8, md: 16 }}>
      <VStack spacing={{ base: 4, md: 6 }} alignItems="center">
        <Avatar
          src="https://i.pravatar.cc/150?img=7"
          size={{ base: "xl", md: "2xl" }}
          name="Your Name"
        />
        <Heading as="h4" size={{ base: "sm", md: "md" }} noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={{ base: 4, md: 6 }}>
        <Heading as="h1" size={{ base: "xl", md: "2xl", lg: "3xl" }} noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as="h1" size={{ base: "xl", md: "2xl", lg: "3xl" }} noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
