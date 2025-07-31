import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Link,
  Text,
  VStack,
  useColorModeValue,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { FaLaptopCode } from "react-icons/fa"; // 👈 Import icon

const projects = [
  {
    id: 1,
    title: "BBMS",
    image: "/BBMS.png",
    github: "https://github.com/Abhishek213-013/BBMS/tree/main/BBMS",
  },
  {
    id: 2,
    title: "SMART SHOP",
    image: "/SmartShop.jpg",
    github: "https://github.com/Abhishek213-013/SmartShop_Dev_Flutter",
  },
  {
    id: 3,
    title: "Portfolio-Basic",
    image: "/portfolio-basic.jpg",
    github: "https://github.com/Abhishek213-013/portfolio-website-basic",
  },
];

const Projects = () => {
  const bg = useColorModeValue("gray.50", "gray.900");

  return (
    <Box
      as="section"
      id="projects"
      py={20}
      px={20}
      bg={bg}
      maxW="20xl"
      mx="auto"
    >
      <Flex justify="center" align="center" mb={10}>
        <Heading fontSize={["3xl", "4xl", "5xl"]} mr={4}>
          My Projects
        </Heading>
        <FaLaptopCode size={40} />
      </Flex>

      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {projects.map(({ id, title, image, github }) => (
          <Link
            key={id}
            href={github}
            isExternal
            _hover={{ textDecoration: "none" }}
          >
            <VStack
              spacing={3}
              borderWidth="1px"
              borderRadius="md"
              overflow="hidden"
              cursor="pointer"
              boxShadow="md"
              _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
              transition="all 0.3s ease"
              bg={useColorModeValue("white", "gray.700")}
            >
              <Image
                src={image}
                alt={title}
                objectFit="cover"
                maxH="200px"
                w="100%"
              />
              <Box p={4} w="100%">
                <Text
                  fontWeight="bold"
                  fontSize="lg"
                  textAlign="center"
                  color={useColorModeValue("gray.800", "white")}
                >
                  {title}
                </Text>
              </Box>
            </VStack>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
