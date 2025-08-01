import React, { useRef, useEffect } from "react";
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
  SimpleGrid,
  Tag,
} from "@chakra-ui/react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiPython,
  SiGithub,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiMongoose,
  SiGit,
  SiDocker,
  SiPostman,
} from "react-icons/si";
import { FaTools, FaBolt, FaBook } from "react-icons/fa";
import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);
const MotionHStack = motion(HStack);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionIcon = motion(Icon);

// Skills list
const skills = [
  { name: "HTML", level: 95, icon: SiHtml5 },
  { name: "CSS", level: 95, icon: SiCss3 },
  { name: "Python", level: 85, icon: SiPython },
  { name: "JavaScript", level: 70, icon: SiJavascript },
  { name: "React", level: 65, icon: SiReact },
  { name: "Node.js", level: 65, icon: SiNodedotjs },
  { name: "Git & GitHub", level: 90, icon: SiGithub },
];

// Topic Knowledge categories
const skillCategories = [
  {
    title: "Frontend Development",
    level: 70,
    skills: ["React", "Tailwind CSS", "JavaScript"],
    icons: [SiReact, SiTailwindcss, SiJavascript],
  },
  {
    title: "Backend Development",
    level: 70,
    skills: ["Node.js", "REST APIs", "Firebase"],
    icons: [SiNodedotjs, null,  SiFirebase],
  },
  {
    title: "Database",
    level: 70,
    skills: ["MongoDB", "PostgreSQL", "Mongoose", "Firestore"],
    icons: [SiMongodb, SiPostgresql, SiMongoose, null],
  },
  {
    title: "Problem Solving",
    level: 90,
    skills: ["Algorithms", "Data Structures", "Debugging", "Optimization"],
    icons: [FaBolt],
  },
  
  {
    title: "Learning",
    level: 95,
    skills: ["New Technologies", "Documentation", "Tutorials", "Experimentation"],
    icons: [FaBook],
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Topic Knowledge Card Component
const TopicCard = ({ category }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  const bg = useColorModeValue("gray.100", "gray.800");
  const barColor = useColorModeValue("purple.500", "purple.300");

  return (
    <MotionBox
      ref={ref}
      style={{ opacity, scale, y }}
      bg={bg}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
    >
      <HStack mb={3}>
        {category.icons.map(
          (IconComp, i) =>
            IconComp && (
              <Icon as={IconComp} w={5} h={5} color={barColor} key={i} />
            )
        )}
        <Heading fontSize="lg">{category.title}</Heading>
      </HStack>

      <Progress
        value={category.level}
        size="sm"
        colorScheme="purple"
        borderRadius="md"
        mb={4}
      />

      <HStack wrap="wrap" spacing={2}>
        {category.skills.map((skill, i) => (
          <Tag key={i} colorScheme="purple" variant="solid">
            {skill}
          </Tag>
        ))}
      </HStack>
    </MotionBox>
  );
};

const Skills = () => {
  const barColor = useColorModeValue("teal.500", "teal.300");
  const bg = useColorModeValue("gray.50", "gray.900");

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  return (
    <>
      {/* Skills Section */}
      <MotionBox
        as="section"
        id="skills"
        py={16}
        px={6}
        bg={bg}
        maxW="14xl"
        mx="auto"
        textAlign="center"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <MotionFlex justify="center" align="center" mb={10} variants={childVariants}>
          <MotionHeading fontSize={["3xl", "4xl", "5xl"]} mr={4} variants={childVariants}>
            My Skills
          </MotionHeading>
          <MotionIcon as={FaTools} w={10} h={10} color={barColor} variants={childVariants} />
        </MotionFlex>

        <MotionVStack spacing={6} align="stretch" maxW="600px" mx="auto">
          {skills.map(({ name, level, icon }) => (
            <MotionBox key={name} variants={childVariants}>
              <MotionHStack mb={1} spacing={3} alignItems="center" justifyContent="flex-start">
                <MotionIcon as={icon} w={6} h={6} color={barColor} />
                <MotionText fontWeight="semibold" fontSize="lg">
                  {name}
                </MotionText>
              </MotionHStack>
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
            </MotionBox>
          ))}
        </MotionVStack>
      </MotionBox>

      {/* Topic Knowledge Section */}
      <Box as="section" id="topic-knowledge" py={20} px={6} maxW="7xl" mx="auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          <Heading
            textAlign="center"
            fontSize={["3xl", "4xl", "5xl"]}
            mb={10}
          >
            What I Bring to the Table
          </Heading>
        </motion.div>

        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {skillCategories.map((cat, idx) => (
            <TopicCard key={idx} category={cat} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Skills;
