import * as React from "react";
import MediaCover from "./Card";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

export default function BasicModal({ open, setOpen, movie }) {
  const { backdrop_path, overview, title, vote_average } = movie;
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
        </Sheet>
      </Modal>
    </>
  );
}
