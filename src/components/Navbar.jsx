import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Link,
  useColorMode,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

import AbhishekCV from "../assets/Abhishek_Chowdhury_CV.pdf";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const bgGradient = useColorModeValue(
    "linear(to-r, teal.50, white)",
    "linear(to-r, gray.700, gray.900)"
  );

  const Links = ["About", "Skills", "Projects", "Contact"];

  const NavLink = ({ children }) => (
    <Link
      px={4}
      py={2}
      rounded={"md"}
      _hover={{ textDecoration: "none", bg: "gray.200" }}
      href={`#${children.toLowerCase()}`}
      onClick={(e) => {
        e.preventDefault();
        const section = document.getElementById(children.toLowerCase());
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      {children}
    </Link>
  );

  return (
    <Box bgGradient={bgGradient} px={6} py={4} boxShadow="md">
      <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box
            fontWeight="bold"
            fontSize="xl"
            color={useColorModeValue("gray.700", "gray.200")}
          >
            Abhishek Chowdhury
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>

        <HStack spacing={4}>
          <Button
            as="a"
            href={AbhishekCV}
            download
            size="sm"
            variant="solid"
            colorScheme="purple"
          >
            Download My CV
          </Button>

          <IconButton
            aria-label="Toggle Color Mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
            <Button
              as="a"
              href={AbhishekCV}
              download
              size="sm"
              colorScheme="purple"
              variant="solid"
            >
              Download CV
            </Button>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
