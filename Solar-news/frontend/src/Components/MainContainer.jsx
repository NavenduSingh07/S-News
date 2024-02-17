import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import RenderCard from "./RenderCard";
import StickyDiv from "./Poster";

const MainContainer = () => {
  return (
    <Flex position={'relative'}>
      <Box flex="1">
        <RenderCard />
      </Box>
      <Box>
        <StickyDiv />
      </Box>
    </Flex>
  );
};

export default MainContainer;
