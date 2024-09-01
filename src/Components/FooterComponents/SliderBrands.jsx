import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetBrandQuery } from "../../api/slices/brend";
import Loading from "../Loading";

export default function SliderBrands() {
  const { data, error, isLoading } = useGetBrandQuery();
  if (isLoading) return <Loading />;

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "4px 10px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1000, // 1000px'den küçük ekranlar için
        settings: {
          slidesToShow: 6, // 6 slide göster
        },
      },
      {
        breakpoint: 600, // 600px'den küçük ekranlar için
        settings: {
          slidesToShow: 5, // 5 slide göster
        },
      },
      {
        breakpoint: 480, // 480px'den küçük ekranlar için
        settings: {
          slidesToShow: 4, // 1 slide göster
        },
      },
    ],
  };
  return (
    <>
      {data ? (
        <Slider className="slider_me" {...settings}>
          {data.map((item) => (
            <div key={item.id}>
              <div className="item">
                <div className="card">
                  <img src={item.image} alt={item.id} />
                </div>
                <div className="line"></div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <Slider className="slider_me" {...settings}>
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index}>
              <div className="item">
                <div className="card">
                  <img src="img/MethGdd.png" alt="" />
                </div>
                <div className="line"></div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </>
  );
}
