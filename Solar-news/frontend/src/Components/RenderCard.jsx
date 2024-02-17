import React, { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "./Card.component";
import SkeletonComponent from "./Skeleton";
import { useTheme } from "../Context/ThemeContext";
import { useToast } from "@chakra-ui/react";



const RenderCard = () => {
  const { data, handlePageChange } = useTheme();
  const toast = useToast();



  useEffect(() => {
    async function fetchData() {
      const options = {
        method: "POST",
        url: "https://newsnow.p.rapidapi.com/",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key": "eb2023cc13msh39e63fbee6f428cp117140jsn1b5e2af19c41",
          "X-RapidAPI-Host": "newsnow.p.rapidapi.com",
        },
        data: {
          text: "Solar in USA",
          region: "USA",
          max_results: 30,
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data.news);
        localStorage.setItem("Data", JSON.stringify(response.data.news));
        handlePageChange(1);
      } catch (error) {
        toast({
          position: "top",
          title: "Bad Request",
          description: "Try again later",
          duration: 2000,
          isClosable: true,
          status: "error",
        });
      }
    }

    let timeID = setTimeout(() => {
      fetchData();
    }, 1200);

    // Clear the timeout when the component unmounts
    return () => {
      clearTimeout(timeID);
    };
  }, []);


  const checkImg = async(img)=>{
    console.log(img)
    if(img == null){
      return false
    }
        try{
           const image = await axios.get(`${img}`)
           console.log(image)
                return true;
        }catch(err){
            return false
        }
  }

  console.log(checkImg(`https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/TYEF1yo8cbAc7hzrolMq6uPeMA0=/830x467/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/JWB65DAOHZDZLE55ND4LJ45I7M.jpg`))
  const getRandomImageUrl = () => {
    const imageBaseUrl = "https://source.unsplash.com/300x200/?solar";
    return `${imageBaseUrl}&${Math.random()}`;
  };

  return (
    <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
      
  {data.length
    ? data.map((card, i) => (
        i > 0 ? (
          <CardComponent
            imageSrc={card.image || getRandomImageUrl()} // Use getRandomImageUrl if the image is null
            header={card.title}
            source={card.body}
            date={card.date}
            url={card.url}
            author={card.source}
            key={i}
          />
        ) : null
      ))
    : // Use SkeletonComponent for each iteration in NoOfSkeleton array
      Array.from({ length: 10 }).map((_, index) => (
        <SkeletonComponent key={index} />
      ))}
</div>

  );
};

export default RenderCard;
