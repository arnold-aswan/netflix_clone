import React, { useState } from "react";
import MediaCover from "./Card";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Tooltip from "@mui/joy/Tooltip";
import Snackbar from "@mui/joy/Snackbar";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { toast } from "react-toastify";

import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

export default function BasicModal({ open, setOpen, movie }) {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const [launch, setLaunch] = useState(false);

  const { backdrop_path, overview, title, vote_average } = movie;

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
      setLaunch(true);
      try {
        <Snackbar
          open={launch}
          variant="soft"
          color="primary"
          autoHideDuration={4000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}>
          Login to save movies
        </Snackbar>;
        toast.error("Log in to save movies", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        console.log(launch);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Sheet
          variant="soft"
          sx={{
            maxWidth: 500,
            borderRadius: "sm",
            p: 1,
            boxShadow: "md",
          }}>
          <MediaCover backdrop={backdrop_path} title={title} />
          <ModalClose variant="solid" color="danger" sx={{ m: 1 }} />
          <Typography
            component="p"
            id="modal-title"
            level="p"
            textColor="inherit"
            fontWeight="lg"
            mb={1}>
            {title}
          </Typography>
          <Typography
            id="modal-desc"
            level="body-xs"
            textColor="text.tertiary"
            fontWeight="md">
            {overview}
          </Typography>
          <Typography level="body-xs" textColor="text.tertiary" fontWeight="md">
            <p className="text-black py-2">
              Rating: <span className="">{vote_average.toFixed(1)}/10</span>
            </p>
          </Typography>

          <Tooltip
            title="Add to MyList"
            color="primary"
            placement="right"
            size="sm"
            variant="soft">
            <div className="w-fit cursor-pointer" onClick={saveShow}>
              {like ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart className=" " />
              )}
            </div>
          </Tooltip>
        </Sheet>
      </Modal>
    </>
  );
}
