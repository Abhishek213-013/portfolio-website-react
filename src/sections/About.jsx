import { Box, Heading, Text, VStack, Avatar, Stack, Flex } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa"; // 👈 Import icon

const About = () => {
  return (
    <Box
      as="section"
      id="about"
      py={20}
      px={6}
      bg="gray.50"
      _dark={{ bg: "gray.900" }}
      textAlign={{ base: "center", md: "left" }}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        maxW="container.md"
        mx="auto"
        align="center"
        spacing={8}
      >
        <Avatar
          size="3xl"
          name="Abhishek Chowdhury"
          src="/about.png"
          mb={{ base: 6, md: 0 }}
        />
        <VStack align="start" spacing={4} maxW="container.sm">
          <Flex align="center" mb={2}>
            <Heading size="2xl" mr={3}>
              About Me
            </Heading>
            <FaUser size={28} />
          </Flex>
          <Text fontSize="lg" color="gray.700" _dark={{ color: "gray.300" }}>
            I am a fourth-year Software Engineering student at Metropolitan University.
            I enjoy solving complex problems through code, mentoring juniors, and building useful web applications.
          </Text>
          <Text fontSize="lg" color="gray.700" _dark={{ color: "gray.300" }}>
            My focus is on backend systems, data structures, and real-world software engineering practices.
            Skilled in JavaScript, React, Node.js, and more. When I’m not coding,
            I enjoy reading, traveling, and exploring new technologies.
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default About;
