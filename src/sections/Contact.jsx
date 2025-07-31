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
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import React from "react";

const Contact = () => {
  const bg = useColorModeValue("gray.50", "gray.900");

  return (
    <Box
      as="section"
      id="contact"
      py={26}
      px={6}
      bg={bg}
      maxW="15xl"
      mx="auto"
    >
      <Heading
        mb={10}
        textAlign="center"
        fontSize={["3xl", "4xl", "5xl"]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={3}
      >
        <Icon as={MdEmail} boxSize={8} />
        Contact Me
      </Heading>

      <VStack
        as="form"
        spacing={6}
        bg={useColorModeValue("white", "gray.700")}
        p={8}
        borderRadius="md"
        boxShadow="lg"
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

        <Button colorScheme="blue" size="lg" type="submit">
          Send Message
        </Button>
      </VStack>

      <HStack mt={8} spacing={4} justify="center">
        <Link href="mailto:abhishekchowdhury054@gmail.com" isExternal>
          <IconButton icon={<MdEmail />} aria-label="Email" />
        </Link>
        <Link href="https://github.com/Abhishek213-013" isExternal>
          <IconButton icon={<FaGithub />} aria-label="GitHub" />
        </Link>
        <Link href="https://www.facebook.com/abhishek.chowdhury.7792052" isExternal>
          <IconButton icon={<FaFacebook />} aria-label="Facebook" />
        </Link>
        <Link href="https://x.com/Abhishe96895508" isExternal>
          <IconButton icon={<FaXTwitter />} aria-label="Twitter/X" />
        </Link>
        <Link href="https://www.linkedin.com/in/abhishek-chowdhury-93927b278/" isExternal>
          <IconButton icon={<FaLinkedin />} aria-label="LinkedIn" />
        </Link>
      </HStack>
    </Box>
  );
};

export default Contact;
