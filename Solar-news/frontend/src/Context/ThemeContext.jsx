import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [data, SetData] = useState(JSON.parse(localStorage.getItem('Data')) || [])
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
      };

      const handlePageChange = (newPage) => {
       
        const data = JSON.parse(localStorage.getItem('Data'))
        const startIndex = (newPage - 1) * 10;
        const endIndex = startIndex + 10;
        const currentData = data.slice(startIndex, endIndex);
      
        SetData(currentData);
        // setCurrentPage(newPage); // Update currentPage
     
        localStorage.setItem('Page',newPage)
      };

      return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, data, SetData, handlePageChange }}>
          {children}
        </ThemeContext.Provider>
      );
}

export const useTheme = () => {
    return useContext(ThemeContext);
  };
