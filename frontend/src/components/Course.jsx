import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/course`);
        console.log(res.data);
        setCourse(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCourse();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here !</span>
          </h1>
          <p className="mt-12 ">
            Welcome to our Courses section, where we offer a diverse range of
            educational opportunities tailored to suit every learner's needs.
            Whether you're looking to enhance your skills for free or invest in
            our premium courses for more in-depth knowledge, we have something
            for everyone. Our free courses cover essential topics to get you
            started, while our paid courses provide comprehensive, expert-led
            training to take your expertise to the next level. Explore our
            offerings and embark on your learning journey with us today!
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {course.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
