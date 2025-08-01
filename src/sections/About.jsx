import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Avatar,
  Stack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import AboutImage from "../assets/about.png";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);
const MotionStack = motion(Stack);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);
const MotionAvatar = motion(Avatar);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  return (
    <MotionBox
      as="section"
      id="about"
      py={20}
      px={6}
      bg={useColorModeValue("gray.50", "gray.900")}
      textAlign={{ base: "center", md: "left" }}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <MotionStack
        direction={{ base: "column", md: "row" }}
        maxW="container.md"
        mx="auto"
        align="center"
        spacing={8}
        variants={containerVariants}
      >
        <MotionAvatar
          size="3xl"
          name="About"
          src={AboutImage}
          mb={{ base: 6, md: 0 }}
          variants={childVariants}
        />
        <MotionVStack align="start" spacing={4} maxW="container.sm" variants={childVariants}>
          <MotionFlex align="center" mb={2} variants={childVariants}>
            <MotionHeading size="2xl" mr={3} variants={childVariants}>
              About Me
            </MotionHeading>
            <FaUser size={28} />
          </MotionFlex>
          <MotionText
            fontSize="lg"
            color={useColorModeValue("gray.700", "gray.300")}
            variants={childVariants}
          >
            I am a fourth-year Software Engineering student at Metropolitan University.
            I enjoy solving complex problems through code, mentoring juniors, and building useful web applications.
          </MotionText>
          <MotionText
            fontSize="lg"
            color={useColorModeValue("gray.700", "gray.300")}
            variants={childVariants}
          >
            My focus is on backend systems, data structures, and real-world software engineering practices.
            Skilled in JavaScript, React, Node.js, and more. When I’m not coding,
            I enjoy reading, traveling, and exploring new technologies.
          </MotionText>
        </MotionVStack>
      </MotionStack>
    </MotionBox>
  );
};

export default About;
