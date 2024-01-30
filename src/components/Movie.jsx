import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import BasicModal from "./Modal";
import defaultImg from "../public/assets/thumbnail.jpg";

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const [open, setOpen] = useState(false);



  const movieId = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieId, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("Login to save movies");
    }
  };

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

          <p onClick={saveShow}>
            {" "}
            {like ? (
              <FaHeart className="absolute left-4 top-4 text-gray-300" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
            )}{" "}
          </p>
        </div>
      </div>

      <BasicModal open={open} setOpen={setOpen} movie={movie} />
    </>
  );
};

export default Movie;
