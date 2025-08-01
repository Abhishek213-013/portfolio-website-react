import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  useColorModeValue,
  Wrap,
  WrapItem,
  Button,
  Icon,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaJsSquare,
  FaPython,
  FaEye,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import ProfileImage from "../assets/profile.jpg";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionWrap = motion(Wrap);
const MotionButton = motion(Button);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MotionFlex
      id="about"
      minH="100vh"
      direction={["column", "row"]}
      align="center"
      justify="space-between"
      px={[4, 10, 20]}
      py={10}
      bgGradient={useColorModeValue(
        "linear(to-r, teal.50, white)",
        "linear(to-r, gray.700, gray.900)"
      )}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Left Intro */}
      <MotionBox flex="1" mb={[10, 0]} variants={childVariants}>
        <Heading fontSize={["3xl", "4xl", "5xl"]} mb={4}>
          Hi, I'm Abhishek
        </Heading>

        <Text
          fontSize={["lg", "xl"]}
          color={useColorModeValue("gray.700", "gray.300")}
          mb={3}
        >
          I’m a{" "}
          <span style={{ color: "#319795", fontWeight: "bold" }}>
            <Typewriter
              words={["Frontend Developer", "Tech Enthusiast", "Problem Solver"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </Text>

        <Text
          fontSize="md"
          color={useColorModeValue("gray.600", "gray.400")}
          mb={6}
        >
          Focused on building responsive and user-friendly web applications with
          clean code and modern UI.
        </Text>

        <Text fontWeight="semibold" mb={2} color="gray.500">
          TECH STACK
        </Text>

        <MotionWrap spacing={3} mb={6} variants={childVariants}>
          <WrapItem>
            <TechTag icon={FaReact} label="React" />
          </WrapItem>
          <WrapItem>
            <TechTag icon={FaNodeJs} label="Node.js" />
          </WrapItem>
          <WrapItem>
            <TechTag icon={FaHtml5} label="HTML & CSS" />
          </WrapItem>
          <WrapItem>
            <TechTag icon={FaJsSquare} label="JavaScript" />
          </WrapItem>
          <WrapItem>
            <TechTag icon={FaPython} label="Python" />
          </WrapItem>
          <WrapItem>
            <TechTag icon={SiMongodb} label="MongoDB" />
          </WrapItem>
        </MotionWrap>

        <Flex gap={4} flexWrap="wrap">
          <MotionButton
            colorScheme="purple"
            rightIcon={<ArrowForwardIcon />}
            size="md"
            onClick={() => scrollToSection("contact")}
            variants={childVariants}
          >
            Get In Touch
          </MotionButton>
          <MotionButton
            variant="outline"
            rightIcon={<FaEye />}
            size="md"
            onClick={() => scrollToSection("projects")}
            variants={childVariants}
          >
            View My Work
          </MotionButton>
        </Flex>
      </MotionBox>

      {/* Right Image */}
      <MotionBox flex="1" display="flex" justifyContent="center" variants={childVariants}>
        <Image
          src={ProfileImage}
          alt="Abhishek"
          borderRadius="full"
          objectFit="cover"
          boxSize={["250px", "300px", "350px"]}
          boxShadow="2xl"
        />
      </MotionBox>
    </MotionFlex>
  );
};

const TechTag = ({ icon, label }) => (
  <Flex
    align="center"
    bg={useColorModeValue("gray.100", "gray.700")}
    px={3}
    py={1}
    borderRadius="full"
    fontSize="sm"
    fontWeight="medium"
    boxShadow="sm"
  >
    <Icon as={icon} mr={2} />
    {label}
  </Flex>
);

export default HeroSection;
