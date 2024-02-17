import React from "react";
import { Box, VStack } from "@chakra-ui/react";

const StickyDiv = () => {
    return (
        <Box
            position="sticky"
            top="20"
            width={{ base: "0", md: "300px" }}
            height={{ base: '0', md: '', lg: '' }}
            backgroundColor="gray.200"
            display={{ base: "none", md: "block" }}

        >
            {/* Your image */}
            <VStack gap={15}>
                <Box width={'100%'} border={'1px solid grey'}>
                    <img
                        src="https://5.imimg.com/data5/SELLER/Default/2022/9/GK/KK/WS/30571959/gautam-solar-modules-500x500.jpg"
                        alt="Sticky Image"
                        width={'500px'}
                        objectFit="cover"

                    />
                </Box>

                <Box width={'100%'}  border={'1px solid grey'}><img
                    src="https://i0.wp.com/solarquarter.com/wp-content/uploads/2022/07/Gautam-Solar-DCR.jpg?fit=1500%2C1125&quality=89&ssl=1"
                    alt="Sticky Image"
                    width={'500px'}
                    objectFit="cover"
                /></Box>


            </VStack>


        </Box>
    );
};

export default StickyDiv;
