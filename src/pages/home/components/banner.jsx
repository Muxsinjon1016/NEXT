import React from "react";
import Slider from "react-slick";
import { useBanners } from "../services/useBanners";

export const Banner = () => {
  const { data } = useBanners();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-[140px] container slider-container">
      <Slider {...settings}>
        {data?.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={`Banner ${item.id}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
