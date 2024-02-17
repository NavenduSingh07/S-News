import { Box, Skeleton, Text } from '@chakra-ui/react';

const SkeletonComponent = () => {
  return (
    <Box display="flex" alignItems="flex-start" justifyContent="center" padding={{base:'5px',md:'40px',lg:'40px'}} >
      {/* Left side with a square card */}
      <Box w={{base:'150px',md:'200px',lg:'200px'}} h={{base:'100px',md:'200px',lg:'200px'}} borderRadius="md" overflow="hidden" marginRight={4}>
        <Skeleton w="100%" h="100%" />
      </Box>

      {/* Right side with heading and paragraph */}
      <Box width={'100%'}>
      <Box width={{base:'100%',md:'100%',lg:'100%'}} h={{base:'20px',md:'40px',lg:'40px'}} marginBottom={'5px'} borderRadius="md" overflow="hidden" marginRight={4}>
        <Skeleton w="100%" h="100%" />
      </Box>
      <Box width={{base:'100%',md:'100%',lg:'100%'}} h={{base:'20px',md:'40px',lg:'40px'}} marginBottom={'5px'} borderRadius="md" overflow="hidden" marginRight={4}>
        <Skeleton w="100%" h="100%" />
      </Box>
      <Box width={{base:'100%',md:'100%',lg:'100%'}} h={{base:'20px',md:'40px',lg:'40px'}} marginBottom={'5px'} borderRadius="md" overflow="hidden" marginRight={4}>
        <Skeleton w="100%" h="100%" />
      </Box>
      <Box width={{base:'100%',md:'100%',lg:'100%'}} h={{base:'20px',md:'40px',lg:'40px'}} borderRadius="md" overflow="hidden" marginRight={4}>
        <Skeleton w="100%" h="100%" />
      </Box>
      </Box>
    </Box>
  );
};

export default SkeletonComponent;
