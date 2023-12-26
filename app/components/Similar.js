import React, { useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
const Similar = ({ category }) => {
  const [rsponse, setRsponse] = useState();
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        "https://e-commerece-back.onrender.com/api/products?populate=*",
        {
          cache: "no-store",
          headers: {
            Authorization:
              "Bearer 5ed3ecc4cf9facb159481b5efaeee569954a39f4df7821e5be0243e371fe118d6abad4d62cc8a049549659ab101764d77a37e74fa0a3926e7123501a212e5caba86b2836eeac904e3321137c2bc44a9b71315bac3eb517357f90c94a5e6754eb360cdaff73f50efb06d64fcd6a110411f7bfeccc08ba6ff812f2018306c1874f",
          },
        }
      );
      const response = await data.json();
      setRsponse(response);
    };
    getData();
  }, []);


  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className + ` px-1`}
        style={{ ...style, display: "block", background: "#f85606",borderRadius:'50px' }}
        onClick={onClick}
      >
       <FaAngleRight/>
        {/* For example, you can use an SVG or an image here */}
      </div>
    );
  };
  

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className + ``}
        style={{  display: "block", backgroundColor: "#f85606",color:'black',borderRadius:'50px',fill:'black'}}
        onClick={onClick}
      >
        <FaAngleLeft/>
        {/* For example, you can use an SVG or an image here */}
      </div>
    );
  };

  var settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 2,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    initialSlide: 0,
    nextArrow: <CustomPrevArrow/>,
    prevArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,
          autoplaySpeed: 4000,
          slidesToShow: 5,
          swipeToSlide: true,
          infinite: true,
          initialSlide: 3,
          speed: 1000,
        },
      },
      {
        breakpoint: 800,
        settings: {
          autoplay: true,
          autoplaySpeed: 4000,
          slidesToShow: 4,
          swipeToSlide: true,
          initialSlide: 0,
          speed: 1000,
        },
      },
      {
        breakpoint: 580,
        settings: {
          autoplay: true,
          autoplaySpeed: 4000,
          slidesToShow: 3,
          swipeToSlide: true,
          initialSlide: 0,
          speed: 1000,
        },
      },
      {
        breakpoint: 450,
        settings: {
          autoplay: true,
          autoplaySpeed: 4000,
          slidesToShow: 2,
          swipeToSlide: true,
          initialSlide: 0,
          scrollX: true,
          speed: 1000,
        },
      },
    ],
  };
  return (
    <div className="">
      <div className="bg-white shadow p-1 mx-auto max-w-6xl">
        <h1 className="text-black mb-2 text-xl">Similar Products</h1>
        <Slider
          {...settings}
          className=" mx-auto flex items-center justify-center"
        >
          {rsponse?.data &&
            rsponse?.data.map((item) => {
              if (item?.attributes?.category == category) {
                return (
                  <Link
                    key={Math.random()}
                    href={`/users/${item?.attributes?.UName}`}
                    className="m:min-w-[250px] min-w-[150px] bg-white px-2 cursor-pointer hover:shadow-2xl ease-in-out
                md:h-[250px]
                  duration-300 flex items-center justify-center flex-col"
                  >
                    <div className="md:h-[145px] h-[110px] flex items-center justify-center">
                      <div className="w-[90px] m-w-[100] md:w-[120px] sm:\{120px} md:[150px] flex items-center justify-center">
                        <img
                          alt="ProductImage"
                          className="obect-cover object-center my-auto"
                          src={
                            item?.attributes?.PImage?.data &&
                            // "http://localhost:1337" +
                            item.attributes?.PImage?.data[0].attributes.formats
                              .thumbnail.url
                          }
                        />
                      </div>
                    </div>
                    <div className="mt-4 border-t">
                      <h1 className="text-black md:text-sm text-xs sm:title-font mb-1">
                        {(item?.attributes?.PName).substring(0, 32)}
                      </h1>
                      <h6 className="mt-1 lg:text-sm text-xs text-gray-600">
                        Rs.{(item?.attributes?.price).toLocaleString()}
                      </h6>
                    </div>
                  </Link>
                );
              }
            })}
        </Slider>
      </div>
    </div>
  );
};
export default Similar;
