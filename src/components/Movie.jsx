import React, { useState } from "react";
import BasicModal from "./Modal";
import defaultImg from "../public/assets/thumbnail.jpg";

const Movie = ({ movie }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 "
        onClick={() => setOpen(true)}>
        <img
          className="w-full h-auto block  "
          src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white  ">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center ">
            {movie?.title}
          </p>
        </div>
      </div>

      <BasicModal open={open} setOpen={setOpen} movie={movie} />
    </>
  );
};

export default Movie;
