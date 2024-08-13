import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Freecourses() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/course`
        );
        console.log(res.data);
        const data = res.data.filter((data) => data.category === "Free");
        setCourse(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCourse();
  }, []);

  //slick settings
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-bold text-xl pb-2">Free offered Courses</h1>
          <p>
            Free courses provide an excellent opportunity to learn new skills
            and expand your knowledge without any financial burden, making
            education accessible to everyone.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {course.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freecourses;
