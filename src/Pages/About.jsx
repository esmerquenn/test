import React, { useEffect } from "react";
import { useGetAboutQuery } from "../api/slices/about";
import { useGetEmployeeQuery } from "../api/slices/employee";
import AboutHeading from "../Components/AboutComponents/AboutHeading";
import Employee from "../Components/AboutComponents/Employee";
import Loading from "./../Components/Loading";
import { Result, Button } from "antd"; // Import Ant Design components
import Error from "../Components/Error";

function About() {
  const { data, error, isLoading } = useGetAboutQuery();
  const { data: employeeData, error: employeeError, isLoading: employeeIsLoading } = useGetEmployeeQuery();
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        const images = document.querySelectorAll(".main_img, .main_img_vertical, main_img_horizontal");
        let closest = null;
        let closestDist = Infinity;

        images.forEach((img) => {
          const imgRect = img.getBoundingClientRect();
          const imgCenter = imgRect.top + imgRect.height / 2;
          const screenCenter = window.innerHeight / 2;
          const dist = Math.abs(screenCenter - imgCenter);

          if (dist < closestDist) {
            closest = img;
            closestDist = dist;
          }
        });

        images.forEach((img) => {
          if (img === closest) {
            img.style.filter = "grayscale(0)";
          } else {
            img.style.filter = "grayscale(100%)";
          }
        });
      }
    };
    // Event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isLoading || employeeIsLoading) {
    return <Loading />;
  } else if (error || employeeError) {
    return <Error />;
  }
  return (
    <div>
      <AboutHeading data={data} />
      {employeeData ? employeeData.map((item, index) => <Employee key={item.id} {...{ index, item }} />) : ""}
    </div>
  );
}

export default About;
