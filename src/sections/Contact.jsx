import React, { useEffect } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  IconButton,
  HStack,
  useColorModeValue,
  Link,
  Icon,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionVStack = motion(VStack);
const MotionButton = motion(Button);
const MotionHStack = motion(HStack);
const MotionIconButton = motion(IconButton);

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

const Contact = () => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  return (
    <MotionBox
      as="section"
      id="contact"
      py={26}
      px={6}
      bg={bg}
      maxW="15xl"
      mx="auto"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <MotionHeading
        mb={10}
        textAlign="center"
        fontSize={["3xl", "4xl", "5xl"]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={3}
        variants={childVariants}
      >
        <Icon as={MdEmail} boxSize={8} />
        Contact Me
      </MotionHeading>

      <MotionVStack
        as="form"
        spacing={6}
        bg={useColorModeValue("white", "gray.700")}
        p={8}
        borderRadius="md"
        boxShadow="lg"
        variants={childVariants}
      >
        <FormControl id="name" isRequired>
          <FormLabel>Your Name</FormLabel>
          <Input placeholder="Enter your name" />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>

        <FormControl id="message" isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Enter your message" rows={6} />
        </FormControl>

        <MotionButton colorScheme="blue" size="lg" type="submit" variants={childVariants}>
          Send Message
        </MotionButton>
      </MotionVStack>

      <MotionHStack mt={8} spacing={4} justify="center" variants={childVariants}>
        <Link href="mailto:abhishekchowdhury054@gmail.com" isExternal>
          <MotionIconButton icon={<MdEmail />} aria-label="Email" />
        </Link>
        <Link href="https://github.com/Abhishek213-013" isExternal>
          <MotionIconButton icon={<FaGithub />} aria-label="GitHub" />
        </Link>
        <Link href="https://www.facebook.com/abhishek.chowdhury.7792052" isExternal>
          <MotionIconButton icon={<FaFacebook />} aria-label="Facebook" />
        </Link>
        <Link href="https://x.com/Abhishe96895508" isExternal>
          <MotionIconButton icon={<FaXTwitter />} aria-label="Twitter/X" />
        </Link>
        <Link href="https://www.linkedin.com/in/abhishek-chowdhury-93927b278/" isExternal>
          <MotionIconButton icon={<FaLinkedin />} aria-label="LinkedIn" />
        </Link>
      </MotionHStack>
    </MotionBox>
  );
};

export default Contact;
