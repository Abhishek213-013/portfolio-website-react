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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import React from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  // Removed "Skills" from here to add it manually below
  const Links = ["About", "Skills", "Projects", "Contact"];

  const NavLink = ({ children }) => (
    <Link
      px={4}
      py={2}
      rounded={"md"}
      _hover={{ textDecoration: "none", bg: "gray.200" }}
      href={`#${children.toLowerCase()}`}
    >
      {children}
    </Link>
  );

  return (
    <Box bg="teal.500" px={6} py={4} boxShadow="md">
      <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box fontWeight="bold" fontSize="xl" color="white">
            Abhishek Chowdhury
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
            {/* ✅ Manually added Skills link
            <Link
              href="#skills"
              px={4}
              py={2}
              rounded="md"
              _hover={{ textDecoration: "none", bg: "gray.200" }}
            >
              Skills
            </Link> */}
          </HStack>
        </HStack>

        {/* Right-side buttons */}
        <HStack spacing={4}>
          <Button
            as="a"
            href="/AbhishekCV.pdf"
            download
            size="sm"
            variant="solid"
            colorScheme="whiteAlpha"
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

      {/* Mobile Menu */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
            {/* ✅ Mobile version of Skills */}
            <Link
              href="#skills"
              px={4}
              py={2}
              rounded="md"
              _hover={{ textDecoration: "none", bg: "gray.200" }}
            >
              Skills
            </Link>
            <Button
              as="a"
              href="/AbhishekCV.pdf"
              download
              size="sm"
              colorScheme="whiteAlpha"
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
