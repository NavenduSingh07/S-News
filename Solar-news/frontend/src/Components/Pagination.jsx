import React,{useEffect} from "react";
import { Button, HStack, Icon } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useTheme } from "../Context/ThemeContext";

const Pagination = () => {
  
  const { isDarkMode,handlePageChange, totalPages } = useTheme();

  // const [currentPage, setCurrentPage] = React.useState(1); // Initialize currentPage
//  localStorage.setItem('Page',1)
  // Function to handle page change
  useEffect(()=>{
  localStorage.setItem('Page',1)
  },[])

  

  return (
    <HStack spacing={4} align="center" justify="center" marginTop={'20px'} marginBottom={'10px'}>
      <Button
        _hover={{ border: "none", bgColor: "none" }}
        bgColor={isDarkMode ? "#222" : "#fff"}
        color={isDarkMode ? "#fff" : "#333"}

        leftIcon={<Icon as={ChevronLeftIcon} />}
        onClick={() => handlePageChange(Number(localStorage.getItem('Page')) - 1)}
        display = {Number(localStorage.getItem('Page')) == 1?'none':'block'}
      >
        Previous
      </Button>
      <Button
        _hover={{ border: "none", bgColor: "none" }}
        bgColor={isDarkMode ? "#222" : "#fff"}
        color={isDarkMode ? "#fff" : "#333"}
        rightIcon={<Icon as={ChevronRightIcon} />}
        onClick={() => handlePageChange(Number(localStorage.getItem('Page')) + 1)}
        display = {Number(localStorage.getItem('Page')) == totalPages?'none':'block'}
      >
        Next
      </Button>
    </HStack>
  );
};

export default Pagination;
