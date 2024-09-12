"use client";
import React from "react";
import Image from "next/image";
import banner2 from "@/public/banner_2.jpg";
import banner3 from "@/public/banner_3.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        right: "5%",
        zIndex: 20,
        transform: "translateY(-50%)",
        cursor: "pointer",
        fontSize: "7rem",
      }}
      onClick={onClick}
    >
      Next
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        left: "3%",
        zIndex: 20,
        transform: "translateY(-50%)",
        cursor: "pointer",
        fontSize: "7rem",
      }}
      onClick={onClick}
    >
      Prev
    </div>
  );
}
const Gallery = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 8000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings} className="relative">
      <Image
        src={banner2}
        alt="phone image"
        width={1200}
        height={600}
        className="object-cover responsive"
      />
      <Image
        src={banner3}
        alt="phone image"
        width={1200}
        height={600}
        className="object-cover responsive"
      />
    </Slider>
  );
};

export default Gallery;
