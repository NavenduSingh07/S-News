/********* Import        ********** */
import React, { useState } from "react";
import { useTheme } from "../Context/ThemeContext";
import {
  Box,
  Flex,
  Spacer,
  Button,
  Link,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  InputGroup,
  InputRightElement,
  useMediaQuery,
  Avatar,
  Text,
  Slide,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";

/****************** Component          ********************** */
const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  /***************  States ************** */
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const IsTablet = useMediaQuery("(min-width: 768px) and (max-width: 991px)");

  /******************* function *********************** */

  /***responsvie Navbar open toggle */
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  /******   responsive Navbar close toggle****** */
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Flex
      p={{ base: 2, md: 4 }}
      style={{
        borderBottom: "none",
        background: isDarkMode ? "#222" : "#fff",
        color: isDarkMode ? "#fff" : "#333",
      }}
      alignItems="center"
      position="sticky"
      top="0"
      zIndex="1000"
      boxShadow={
        "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
      }
    >
      <Box>
        <Link fontSize={{ base: "md", md: "xl" }} fontWeight="bold">
          USA solar
        </Link>
      </Box>
      <Spacer />
      <Box display={{ base: "none", md: "flex" }} borderRadius={30}>
        {/* Display buttons for larger screens */}

        <Menu>
          <MenuButton
            style={{
              background: isDarkMode ? "#222" : "#fff",
              color: isDarkMode ? "#fff" : "#333",
            }}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Articles
          </MenuButton>
          <MenuList color={"black"} border={"1px"}>
            <MenuItem _hover={{ color: "white", bgColor: "black" }}>
              Most Recent Posts
            </MenuItem>
            <MenuItem _hover={{ color: "white", bgColor: "black" }}>
              News
            </MenuItem>
            <MenuItem _hover={{ color: "white", bgColor: "black" }}>
              Featured
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            style={{
              background: isDarkMode ? "#222" : "#fff",
              color: isDarkMode ? "#fff" : "#333",
            }}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Policy
          </MenuButton>
          <MenuList color={"black"} border={"1px"}>
            <MenuItem _hover={{ color: "white", bgColor: "black" }}>
              The Solar Policy Scop
            </MenuItem>
            <MenuItem _hover={{ color: "white", bgColor: "black" }}>
              IRA Coverage
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            style={{
              background: isDarkMode ? "#222" : "#fff",
              color: isDarkMode ? "#fff" : "#333",
            }}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Markets
          </MenuButton>
          <MenuList color={"black"} border={"1px"}>
            <MenuItem _hover={{ color: "white", bgColor: "black" }}>
              Residental
            </MenuItem>
            <MenuItem _hover={{ color: "white", bgColor: "black" }}>
              Commercial
            </MenuItem>
            <MenuItem _hover={{ color: "white", bgColor: "black" }}>
              Community Solar
            </MenuItem>
            <MenuItem _hover={{ color: "white", bgColor: "black" }}>
              Utility
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            style={{
              border: "none",
              background: isDarkMode ? "#222" : "#fff",
              color: isDarkMode ? "#fff" : "#333",
            }}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Resources
          </MenuButton>
          <MenuList color={"black"} border={"1px"}>
            <MenuItem _hover={{ color: "white", bgColor: "black" }}>
              About SPW
            </MenuItem>
            <MenuItem _hover={{ color: "white", bgColor: "black" }}>
              Digital Issues
            </MenuItem>
            <MenuItem _hover={{ color: "white", bgColor: "black" }}>
              Event Coverage
            </MenuItem>
            <MenuItem _hover={{ color: "white", bgColor: "black" }}>
              Podcast
            </MenuItem>
            <MenuItem _hover={{ color: "white", bgColor: "black" }}>
              Solar Classrooms
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            style={{
              border: "none",
              background: isDarkMode ? "#222" : "#fff",
              color: isDarkMode ? "#fff" : "#333",
            }}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Leadership
          </MenuButton>
          <MenuList color={"black"} border={"1px"}>
            <MenuItem _hover={{ color: "white", bgColor: "black" }}>
              2023 Winners
            </MenuItem>
            <MenuItem _hover={{ color: "white", bgColor: "black" }}>
              2022 Winners
            </MenuItem>
            <MenuItem _hover={{ color: "white", bgColor: "black" }}>
              Mark as Draft
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box
        display={{ base: "", md: "none" }}
        marginTop={"0px"}
        flexDirection={""}
        onClick={handleDrawerOpen}
      >
        {/* Display hamburger icon for smaller screens */}
        {/**<IconButton
      icon={<HamburgerIcon size={{ base: "10" }} />}
      variant="ghost"
      onClick={handleDrawerOpen}
      color={"white"}
      size={'10'}
  /> **/}
        <div style={{ display: "grid",marginRight:"0.5rem" }}>
          <div
            style={{
              width: "20px",
              padding: "1px",
             
              marginBottom: "3px",
              backgroundColor:"white",
              backgroundColor: isDarkMode ? 'white' : 'black', 
            }}
          ></div>

          <div
            style={{
              width: "13px",
              padding: "1px",
              backgroundColor:"white",
              marginBottom: "3px",
              marginLeft: "7px",
              backgroundColor: isDarkMode ? 'white' : 'black', 
            }}
          >
            {" "}
          </div>
          <div
            style={{
              width: "7px",
              padding: "1px",
              backgroundColor:"white",
              marginLeft: "13px",
              backgroundColor: isDarkMode ? 'white' : 'black', 
            }}
          ></div>
        </div>
      </Box>

      {/* Responsive Drawer for smaller screens */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
        placement="right"
      >
        <DrawerOverlay />
        <DrawerContent bgColor="#272829" color={"white"}>
          <DrawerCloseButton />
          <DrawerBody>
            {/* Use VStack to stack items vertically */}
            <VStack spacing={4} align="start" color={"white"}>
              <Menu>
                <MenuButton
                  _hover={{ color: "black", bgColor: "white" }}
                  color={"white"}
                  bgColor={"#272829"}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Articles
                </MenuButton>
                <MenuList color={"black"} border={"1px"}>
                  <MenuItem _hover={{ color: "white", bgColor: "black" }}>
                    Most Recent Posts
                  </MenuItem>
                  <MenuItem _hover={{ color: "white", bgColor: "black" }}>
                    News
                  </MenuItem>
                  <MenuItem _hover={{ color: "white", bgColor: "black" }}>
                    Featured
                  </MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  _hover={{ color: "black", bgColor: "white" }}
                  color={"white"}
                  bgColor={"#272829"}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Policy
                </MenuButton>
                <MenuList color={"black"} border={"1px"}>
                  <MenuItem _hover={{ color: "white", bgColor: "black" }}>
                    The Solar Policy Scop
                  </MenuItem>
                  <MenuItem _hover={{ color: "white", bgColor: "black" }}>
                    IRA Coverage
                  </MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  _hover={{ color: "black", bgColor: "white" }}
                  color={"white"}
                  bgColor={"#272829"}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Markets
                </MenuButton>
                <MenuList color={"black"} border={"1px"}>
                  <MenuItem _hover={{ color: "white", bgColor: "black" }}>
                    Residental
                  </MenuItem>
                  <MenuItem _hover={{ color: "white", bgColor: "black" }}>
                    Commercial
                  </MenuItem>
                  <MenuItem _hover={{ color: "white", bgColor: "black" }}>
                    Community Solar
                  </MenuItem>
                  <MenuItem _hover={{ color: "white", bgColor: "black" }}>
                    Utility
                  </MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  _hover={{ color: "black", bgColor: "white" }}
                  color={"white"}
                  bgColor={"#272829"}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Resources
                </MenuButton>
                <MenuList color={"black"} border={"1px"}>
                  <MenuItem _hover={{ color: "white", bgColor: "black" }}>
                    About SPW
                  </MenuItem>
                  <MenuItem _hover={{ color: "white", bgColor: "black" }}>
                    Digital Issues
                  </MenuItem>
                  <MenuItem _hover={{ color: "white", bgColor: "black" }}>
                    Event Coverage
                  </MenuItem>
                  <MenuItem _hover={{ color: "white", bgColor: "black" }}>
                    Podcast
                  </MenuItem>
                  <MenuItem _hover={{ color: "white", bgColor: "black" }}>
                    Solar Classrooms
                  </MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  _hover={{ color: "black", bgColor: "white" }}
                  color={"white"}
                  bgColor={"#272829"}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Leadership
                </MenuButton>
                <MenuList color={"black"} border={"1px"}>
                  <MenuItem _hover={{ color: "white", bgColor: "black" }}>
                    2023 Winners
                  </MenuItem>
                  <MenuItem _hover={{ color: "white", bgColor: "black" }}>
                    2022 Winners
                  </MenuItem>
                </MenuList>
              </Menu>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <div>
        {/* <h1>Themed Component</h1> */}
        <button onClick={toggleTheme}>
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </Flex>
  );
};

export default Navbar;
