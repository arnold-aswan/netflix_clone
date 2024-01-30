import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";

export default function MediaCover({ backdrop, title }) {
  return (
    <Box
      component="ul"
      sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}>
      <Card component="li" sx={{ minWidth: 300, minHeight: 200, flexGrow: 1 }}>
        <CardCover>
          <img
            src={`https://image.tmdb.org/t/p/w780/${backdrop}`}
            srcSet={`https://image.tmdb.org/t/p/w780/${backdrop}`}
            loading="lazy"
            alt={title}
            className="modal__image"
          />
        </CardCover>
      </Card>
    </Box>
  );
}
