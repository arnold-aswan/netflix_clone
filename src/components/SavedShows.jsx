import React, { useState, useRef, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  const sliderRef = useRef(null);
  const movieRef = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };

  const deleteShow = async (id) => {
    try {
      const updatedSavedMovies = movies.filter((movie) => movie.id !== id);
      await updateDoc(movieRef, {
        savedShows: updatedSavedMovies,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className=" font-bold md:text-xl p-4 ">My Shows</h2>
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
            <div
              key={movie?.id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 ">
              <img
                className="w-full h-auto block  "
                src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                alt={movie?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white  ">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center ">
                  {movie?.title}
                </p>
                <p
                  className="absolute top-4 right-4"
                  onClick={() => deleteShow(movie?.id)}>
                  <AiOutlineClose />
                </p>
              </div>
            </div>
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

export default SavedShows;
