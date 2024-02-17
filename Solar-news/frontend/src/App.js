
import Navbar from "./Components/Navbar";
import RenderCard from "./Components/RenderCard";
import Pagination from "./Components/Pagination";
// import { ThemeProvider } from "./Context/ThemeContext";
import { useTheme } from "./Context/ThemeContext";
import Footer from "./Components/Footer";
import MainContainer from "./Components/MainContainer";
function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <>
    <div style={{ background: isDarkMode ? '#222' : '#fff', color: isDarkMode ? '#fff' : '#333' }}>

   
    
     <Navbar/>
  <MainContainer/>
    <Pagination/>
  <Footer/>

    </div>
    </>
 
  );
}

export default App;
