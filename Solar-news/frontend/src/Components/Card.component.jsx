import React ,{useState} from "react";
import { Stack, Card, CardHeader, Image, Box, Heading } from "@chakra-ui/react";
import { useTheme } from "../Context/ThemeContext";
import Allen from "./Allen";

const CardComponent = ({ imageSrc, header, source, date, url, author }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const openNewTab = (url) => {
    window.location.href = url;
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Card
      border={"1px solid red"}
      borderWidth=""
      borderRadius="sm"
      bgColor={isDarkMode ? "#222" : "#fff"}
      color={isDarkMode ? "#fff" : "#333"}
    >
      <Stack direction="row" spacing={4}>
        <Box
          width={{ base: "100%", md: "25%", lg: "25%" }}
          padding={{ base: "10px", md: "8px", lg: "8px" }}
        >
          <Image
            width={{ base: "350px", md: "444px", lg: "350px" }}
            borderRadius="sm"
            src={imageSrc}
            alt="Card image"
          />
        </Box>
        <Box
          width={{ base: "100%", md: "75%", lg: "75%" }}
          flexGrow={1}
          paddingTop={{ base: "9px", md: "32px", lg: "50px" }}
        >
          <Heading
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
              textDecorationColor: "black",
            }}
            marginBottom={"4px"}
            fontSize={{ base: "14px", md: "25px", lg: "25px" }}
            onClick={openModal}
            // onClick={(()=>openNewTab(url))}
          >
            {header}
          </Heading>

       {/* Modal */}
       {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <div
            style={{
              top:"400",
              position:"relative",
              border:"2px solid orange",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              width: "80%",
              maxHeight: "80%",
              overflowY: "auto",
            }}
          >

            <Allen data = {url}/>
            {/* Your modal content */}
            jfh
            {/* <iframe
              title="Embedded content"
              src="https://electrek.co/2024/02/02/utility-us-midwest-wind-solar/"
              width="100%"
              height="100%"
              frameBorder="0"
            /> */}
            {/* <iframe src="https://electrek.co/2024/02/02/utility-us-midwest-wind-solar/" width="800" height="600" frameborder="0" allowfullscreen></iframe> */}
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}


          <Heading
            color={isDarkMode ? "#B6BBC4" : "grey"}
            display={{ base: "none", md: "block", lg: "block" }}
            fontSize={"13px"}
            marginBottom={"6px"}
          >{`${source}`}</Heading>

          <Heading
            color={isDarkMode ? "#B6BBC4" : "grey"}
            display={{ base: "none", md: "block", lg: "block" }}
            fontSize={"12px"}
          >
            by{" "}
            <span
              style={{
                color: isDarkMode ? "white" : "black",
                marginRight: "5px",
              }}
            >{`${author}.`}</span>
            <span style={{ color: "grey" }}>{`${Date(date).split(" ")[1]} ${
              Date(date).split(" ")[2]
            } ${Date(date).split(" ")[3]}`}</span>
          </Heading>
        </Box>
      </Stack>
    </Card>
  );
};

export default CardComponent;
