import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Image,
  Text,
  useColorModeValue,
  Link,
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import your images here
import BBMSImage from "../assets/BBMS.png";
import SmartShopImage from "../assets/SmartShop.jpg";
import PortfolioBasicImage from "../assets/portfolio-basic.jpg";

const MotionBox = motion(Box);

// Hook to detect scroll direction
const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState("down");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDir = () => {
      const currentScrollY = window.pageYOffset;
      if (Math.abs(currentScrollY - lastScrollY) < 5) return; // ignore small scrolls

      setScrollDir(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDir);

    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  return scrollDir;
};

// Typewriter for multiple lines with reset trigger
const Typewriter = ({
  lines,
  typingSpeed = 40,
  pauseBetweenLines = 600,
  trigger,
}) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // Reset when trigger changes
  useEffect(() => {
    setCurrentLine(0);
    setDisplayedText("");
    setCharIndex(0);
  }, [trigger]);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    if (charIndex < lines[currentLine].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + lines[currentLine][charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + "\n");
        setCurrentLine(currentLine + 1);
        setCharIndex(0);
      }, pauseBetweenLines);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentLine, lines, typingSpeed, pauseBetweenLines]);

  return (
    <Text
      whiteSpace="pre-wrap"
      fontSize="sm"
      color={useColorModeValue("gray.700", "gray.300")}
      fontFamily="monospace"
      minH="5rem"
      userSelect="none"
      _after={{
        content: `"|"`,
        animation: "blink 1s steps(2, start) infinite",
        ml: "2px",
      }}
      sx={{
        "@keyframes blink": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      }}
    >
      {displayedText}
    </Text>
  );
};

const ProjectCard = ({ project, index, onOpenModal, scrollDirection }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.25 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: index * 0.3 },
      });
    } else {
      controls.start({
        opacity: 0,
        y: scrollDirection === "down" ? 50 : -50,
      });
    }
  }, [controls, inView, index, scrollDirection]);

  const cardBg = useColorModeValue("white", "gray.800");
  const frameBg = useColorModeValue("gray.100", "gray.700");

  return (
    <MotionBox
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: scrollDirection === "down" ? 50 : -50 }}
      bg={cardBg}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={6}
      mb={12}
      whileHover={{ scale: 1.03, boxShadow: "2xl" }}
      cursor="pointer"
      onClick={() => onOpenModal(project)}
      maxW="900px"
      mx="auto"
    >
      <Flex direction={["column", "row"]} align="center" gap={8}>
        {/* Left: PC Screen Frame */}
        <Box
          flexShrink={0}
          bg={frameBg}
          p={4}
          borderRadius="xl"
          boxShadow="inset 0 0 10px rgba(0,0,0,0.1)"
          maxW={["100%", "320px"]}
          maxH="200px"
          w="100%"
          h="200px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          {/* Screen bezel */}
          <Box
            position="absolute"
            top="10px"
            left="10px"
            right="10px"
            bottom="10px"
            borderRadius="lg"
            boxShadow="inset 0 0 15px rgba(0,0,0,0.15)"
            pointerEvents="none"
          />
          <Image
            src={project.image}
            alt={project.title}
            borderRadius="md"
            objectFit="cover"
            boxShadow="md"
            maxH="180px"
            maxW="300px"
            zIndex={1}
            userSelect="none"
            draggable={false}
          />
        </Box>

        {/* Right: Info */}
        <VStack align="start" spacing={4} flex="1" minW={["100%", "60%"]}>
          <Heading size="md">{project.title}</Heading>

          {/* Description */}
          <Typewriter lines={[project.description]} trigger={inView} />

          {/* Key Features */}
          <Box>
            <Text fontWeight="bold" mb={2}>
              Key Features:
            </Text>
            <Typewriter
              lines={project.features.map((feat) => `• ${feat}`)}
              trigger={inView}
            />
          </Box>

          {/* Tech Stack */}
          <Box>
            <Text fontWeight="bold" mb={2}>
              Tech Stack:
            </Text>
            <Typewriter
              lines={project.tech.map((tech) => `- ${tech}`)}
              trigger={inView}
            />
          </Box>

          <Link href={project.github} isExternal _hover={{ textDecoration: "none" }}>
            <Button colorScheme="teal" size="sm">
              View on GitHub
            </Button>
          </Link>
        </VStack>
      </Flex>
    </MotionBox>
  );
};

const projects = [
  {
    id: 1,
    title: "BBMS",
    description: "Blood Bank Management System built with React and Node.js.",
    features: ["Donor registration", "Request blood", "Admin panel"],
    tech: ["React", "Node.js", "MongoDB"],
    image: BBMSImage,
    github: "https://github.com/Abhishek213-013/BBMS/tree/main/BBMS",
  },
  {
    id: 2,
    title: "Smart Shop",
    description: "E-commerce Flutter app with Firebase backend.",
    features: ["Authentication", "Product listing", "Cart & Checkout"],
    tech: ["Flutter", "Firebase"],
    image: SmartShopImage,
    github: "https://github.com/Abhishek213-013/SmartShop_Dev_Flutter",
  },
  {
    id: 3,
    title: "Portfolio-Basic",
    description: "Simple portfolio website built using React and Chakra UI.",
    features: ["Responsive layout", "Dark mode", "Scroll animations"],
    tech: ["React", "Chakra UI"],
    image: PortfolioBasicImage,
    github: "https://github.com/Abhishek213-013/portfolio-website-basic",
  },
];

const Projects = () => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollDirection = useScrollDirection();

  const openModal = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <Box as="section" id="projects" py={10} px={[3, 5, 10]} bg={bg}>
      <Heading fontSize={["1xl", "2xl", "3xl"]} mb={16} textAlign="center">
        My Projects
      </Heading>

      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          scrollDirection={scrollDirection}
          onOpenModal={openModal}
        />
      ))}

      {selectedProject && (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedProject.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                borderRadius="md"
                mb={4}
              />
              <Text mb={4}>{selectedProject.description}</Text>
              <Link href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                <Button colorScheme="teal" width="100%">
                  View on GitHub
                </Button>
              </Link>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default Projects;
