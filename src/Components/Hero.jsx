import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = () => {
  const imgarr = [
    "https://darioexim.com/wp-content/uploads/2024/07/website-banner-wpc-exterior-louver-panel-banner.jpg",
    "https://darioexim.com/wp-content/uploads/2024/07/interior-louver-panel-banner.jpg",
    "https://darioexim.com/wp-content/uploads/2024/07/Wallpaper-Banner.jpg",
    "https://darioexim.com/wp-content/uploads/2024/07/Artificial-Grasss-Banner.jpg",
    'https://darioexim.com/wp-content/uploads/2024/01/casador-INSIDE-IMAGE1.png'
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    arrows:false
    // cssEase: "li",
  };

  

  
  return (
    <div className="w-full h-[64vh]  bg-slate-300 ">
        <div className="p-3">

      <Slider {...settings}>
        {imgarr.map((item, i) => (
          <div
            key={i}
            className="  bg-green-400 flex justify-center items-center rounded-md "
          >
            <img src={item} className="w-full h-[60vh] object-cover rounded-md" alt="myimg"  />
          </div>
        ))}
      </Slider>
        </div>


    </div>
  );
};

export default Hero;
