import React from "react";
import {
  Box,
  Heading,
  VStack,
  Progress,
  Text,
  useColorModeValue,
  HStack,
  Icon,
  Flex,
} from "@chakra-ui/react";

import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiPython,
  SiGithub,
} from "react-icons/si";

import { FaTools } from "react-icons/fa"; // ✅ Icon for Skills heading

const skills = [
  { name: "HTML", level: 95, icon: SiHtml5 },
  { name: "CSS", level: 95, icon: SiCss3 },
  { name: "Python", level: 85, icon: SiPython },
  { name: "JavaScript", level: 70, icon: SiJavascript },
  { name: "React", level: 65, icon: SiReact },
  { name: "Node.js", level: 65, icon: SiNodedotjs },
  { name: "Git & GitHub", level: 90, icon: SiGithub },
];

const Skills = () => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const barColor = useColorModeValue("teal.500", "teal.300");

  return (
    <Box
      as="section"
      id="skills"
      py={16}
      px={6}
      bg={bg}
      maxW="14xl"
      mx="auto"
      textAlign="center"
    >
      <Flex justify="center" align="center" mb={10}>
        <Heading fontSize={["3xl", "4xl", "5xl"]} mr={4}>
          My Skills
        </Heading>
        <Icon as={FaTools} w={10} h={10} color={barColor} />
      </Flex>

      <VStack spacing={6} align="stretch" maxW="600px" mx="auto">
        {skills.map(({ name, level, icon }) => (
          <Box key={name}>
            <HStack mb={1} spacing={3} alignItems="center" justifyContent="flex-start">
              <Icon as={icon} w={6} h={6} color={barColor} />
              <Text fontWeight="semibold" fontSize="lg">
                {name}
              </Text>
            </HStack>
            <Progress
              value={level}
              size="lg"
              colorScheme="teal"
              borderRadius="md"
              bg={useColorModeValue("gray.200", "gray.700")}
              sx={{
                "& > div": {
                  backgroundColor: barColor,
                },
              }}
            />
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Skills;
