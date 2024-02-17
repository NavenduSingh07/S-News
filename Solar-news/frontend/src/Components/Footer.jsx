import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Spacer,
  Stack,
  IconButton,
  Center,
} from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { useTheme } from "../Context/ThemeContext";
const Footer = () => {
    const { isDarkMode } = useTheme();
  return (
    <Box bg={isDarkMode?"#222" : "#fff"}  color={isDarkMode ? "#fff" : "#333"} py={8}>
      <Container maxW="container.sm" >

      <Stack  
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: 4, md: 8 }}
        align="center"
      >
        Explore Section
        <Box flex={{ base: 0, md: 2 }} style={{justifyContent:"center" ,alignItems:"center" ,textAlign:"center"}}   >
          <Heading fontSize="lg" >Explore</Heading>
          <Box display={'grid'}   >
            <Link href="#">About Us</Link>
            <Link href="#">Our Team</Link>
            <Link href="#">Contact</Link>
          </Box>
        </Box>

        Connect Section
        <Box flex={{ base: 0, md: 2 }} style={{justifyContent:"center" ,alignItems:"center" ,textAlign:"center"}}>
          <Heading fontSize="lg">Connect</Heading>
          <Box display={'grid'}>
            <Link href="#">Social Media</Link>
            <Link href="#">Newsletter</Link>
            <Link href="#">Events</Link>
          </Box>
        </Box>

        Site Section
        <Box flex={{ base: 0, md: 2 }} style={{justifyContent:"center" ,alignItems:"center" ,textAlign:"center"}}>
          <Heading fontSize="lg">Site</Heading>
          <Box display={'grid'}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">FAQs</Link>
          </Box>
        </Box>
      </Stack>




        {/* Social Media Icons */}
        <Flex mt={8} justifyContent="center">
  <IconButton
    as={Link}
    href="#"
    aria-label="Instagram"
    icon={<FaInstagram />}
    color={isDarkMode ? "#fff" : "#333"}
    variant="ghost"
    fontSize="20px"
    mr={2} // Add margin-right for spacing between icons
  />
  <IconButton
    as={Link}
    href="#"
    aria-label="Facebook"
    icon={<FaFacebook />}
    color={isDarkMode ? "#fff" : "#333"}
    variant="ghost"
    fontSize="20px"
    mr={2} // Add margin-right for spacing between icons
  />
  <IconButton
    as={Link}
    href="#"
    aria-label="Twitter"
    icon={<FaTwitter />}
    color={isDarkMode ? "#fff" : "#333"}
    variant="ghost"
    fontSize="20px"
  />
</Flex>


      </Container>
    </Box>
  );
};

export default Footer;


