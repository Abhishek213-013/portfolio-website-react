import { Box, Heading, Text, Image, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const HeroSection = () => {
  return (
    <Flex
      id="about"
      minH="100vh"
      direction={["column", "row"]}
      align="center"
      justify="space-between"
      px={[4, 10, 20]}
      py={10}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      {/* 🧑‍💻 Left: Intro */}
      <Box flex="1" mb={[10, 0]}>
        <Heading fontSize={["3xl", "4xl", "5xl"]} mb={4}>
          Hi, I'm Abhishek
        </Heading>
        <Text fontSize={["md", "lg"]} color={useColorModeValue("gray.700", "gray.300")}>
          I’m a passionate developer focused on building responsive and user-friendly web applications.
        </Text>
      </Box>

      {/* 🖼️ Right: Big Image */}
      <Box flex="1" display="flex" justifyContent="center">
        <Image
          src="/profile.jpg" // 👈 Replace with your image path
          alt="Abhishek"
          borderRadius="md"
          objectFit="cover"
          boxSize={["500px", "600px", "700px"]}
          boxShadow="2xl"
        />
      </Box>
    </Flex>
  );
};

export default HeroSection;
