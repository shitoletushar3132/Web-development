import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import { ImageSet } from "./helper";
import DisplayData from "./DisplayData";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AirIcon from "@mui/icons-material/Air";

export default function InfoBox({ info }) {
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={ImageSet(info.humidity, info.temp).img}
            title="weather"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity >= 30 && info.humidity <= 50 && info.temp < 15 ? (
                <AcUnitIcon />
              ) : info.humidity > 50 &&
                info.humidity <= 60 &&
                info.temp >= 15 &&
                info.temp <= 30 ? (
                <WbSunnyIcon />
              ) : info.humidity > 60 &&
                info.humidity <= 100 &&
                info.temp >= 15 ? (
                <ThunderstormIcon />
              ) : (
                <AirIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <DisplayData info={info} />
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
