import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      as="footer"
      py={4}
      textAlign="center"
      bg={useColorModeValue("gray.100", "gray.800")}
    >
      <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.300")}>
        © {new Date().getFullYear()} Abhishek Chowdhury. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
