//Imports
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Tooltip } from "@mui/material";

function CardShowcase({
  image,
  id,
  title,
  overview,
  onClick,
}: {
  image: string;
  id: number;
  title: string;
  overview: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <Card
      sx={{
        maxWidth: 150,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Tooltip sx={{ height: "80%" }} title={overview}>
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          onClick={() =>
            window.open("https://www.themoviedb.org/movie/" + id, "_blank")
          }
        >
          <CardMedia
            component="img"
            image={"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + image}
            alt={title + " poster"}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Tooltip>
      <CardActions>
        <Button onClick={onClick} size="small" color="primary">
          Adicionar para assistir?
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardShowcase;
