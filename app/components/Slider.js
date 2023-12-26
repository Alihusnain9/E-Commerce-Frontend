import { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import "../globals.css";
import Image from "next/image";
const images = [
  "/sliderImage1.jpg",
  "/sliderImage3.jpg",
  "https://icms-image.slatic.net/images/ims-web/9aec3452-60c6-405d-812f-e3a1c6c19a2e.png_1200x1200.jpg",
  "https://th.bing.com/th/id/R.22f453e2a9a889e52090cf882f682c7f?rik=KXQ4DUyqTcwFrg&pid=ImgRaw&r=0",
  "https://english.onlinekhabar.com/wp-content/uploads/2021/05/online-shopping.jpg",
  "https://th.bing.com/th/id/OIP.Im7irbtz7Q_2AJXFCe7DAgHaE7?w=650&h=433&rs=1&pid=ImgDetMain",
]

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`slider flex relative mt-1`}>
      {images.map(
        (image, index) =>
          currentImageIndex == index && (
            <Image
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={` w-[100%] md:h-[60vh] sm:h-[50vh] max-h-[20rem] h-[35vh] object-cover`}
              height={900}
              width={900}
            />
          )
      )}
      <FaChevronRight
        onClick={() => {
          setCurrentImageIndex(currentImageIndex + 1);
          if (currentImageIndex == 5) {
            setCurrentImageIndex(0);
          }
        }}
        className="absolute top-[27%] aerow right-1 py-15  border-transparent px-2 text-gray-500 sm:h-[10rem] sm:w-[3rem] h-[7rem] w-[2.5rem] cursor-pointer"
      />
      <FaAngleLeft
        onClick={() => {
          setCurrentImageIndex(currentImageIndex - 1);
          if (currentImageIndex == 0) {
            setCurrentImageIndex(5);
          }
        }}
        className=" absolute top-[27%] left-1 text-gray-500 py-15 px-2 border-transparent cursor-pointer aerow sm:h-[10rem] sm:w-[3rem] h-[7rem] w-[2.5rem]"
      />
    </div>
  );
};
export default ImageSlider;
