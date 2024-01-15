import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(fetchURL)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error(err));
  }, [fetchURL]);

  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <>
      <h2 className=" font-bold md:text-xl p-4 ">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={() => handleScroll("left")}
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block  text-black left-0"
        />
        <div
          ref={sliderRef}
          id={"slider"}
          className="w-full  h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative ">
          {movies.map((movie, id) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          onClick={() => handleScroll("right")}
          size={40}
          className="bg-white right-0 text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;
