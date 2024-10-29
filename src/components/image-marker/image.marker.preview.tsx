import { useState } from "react";
import { MarkerAxisType } from "../../types/common.type";
import { InsertTitle } from "../override-com/typography";
import ComMsg from "../../common/constants/ComMsg";
import { Stack } from "@mui/material";

type ImageMarkerPreviewProps = {
  image: string;
  markers: MarkerAxisType[];
  handleMarkerClick: (marker: MarkerAxisType, index: number) => void;
};

const ImageMarkerPreview = ({
  image,
  markers,
  handleMarkerClick,
}: ImageMarkerPreviewProps) => {
  const [imageUrl] = useState(image);

  const renderMarkers = () => {
    return markers.map((marker, index) => (
      <Stack
        key={index}
        sx={{ ...getMarkerStyle(marker), fontSize: 11 }}
        alignItems="center"
        justifyContent="center"
        onClick={() => handleMarkerClick(marker, index)}
      >
        {index + 1}
      </Stack>
    ));
  };

  const getMarkerStyle = (marker: MarkerAxisType) => {
    const left = Math.min(marker.x1, marker.x2);
    const top = Math.min(marker.y1, marker.y2);
    const width = Math.abs(marker.x2 - marker.x1);
    const height = Math.abs(marker.y2 - marker.y1);
    return {
      position: "absolute",
      border: "2px dashed black",
      left,
      top,
      width,
      height,
      cursor: "pointer",
    };
  };

  return (
    <>
      {imageUrl ? (
        <div style={{ position: "relative", display: "inline-block" }}>
          <img
            src={imageUrl}
            alt="Marker Example"
            style={{ width: "100%", maxWidth: "600px" }}
          />
          {renderMarkers()}
        </div>
      ) : (
        <InsertTitle sx={{ textAlign: "center" }}>{ComMsg.INS}</InsertTitle>
      )}
    </>
  );
};

export default ImageMarkerPreview;
