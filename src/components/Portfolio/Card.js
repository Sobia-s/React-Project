import React from "react";
import { VStack, Image, Heading, Text, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      color="black"
      backgroundColor="white"
      cursor="pointer"
      borderRadius="xl"
      width="100%"
      boxShadow="lg"
      overflow="hidden"
      _hover={{ boxShadow: "lg" }}
    >
      <Image borderRadius="xl" src={imageSrc} alt={title} />
      <VStack spacing={4} p={{ base: 4, md: 6 }} alignItems="flex-start">
        <HStack justifyContent="space-between" alignItems="center" width="100%">
          <Heading as="h3" size={{ base: "md", md: "lg" }}>
            {title}
          </Heading>
        </HStack>
        <Text color="#64748b" fontSize={{ base: "sm", md: "md" }}>
          {description}
        </Text>
        <HStack spacing={2} alignItems="center">
          <Text fontSize={{ base: "sm", md: "md" }}>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="lg" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
