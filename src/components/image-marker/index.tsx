import { MouseEvent, useEffect, useState } from "react";
import { MarkerAxisType } from "../../types/common.type";
import { InsertTitle } from "../override-com/typography";
import ComMsg from "../../common/constants/ComMsg";
import { Box, Stack } from "@mui/material";

type ImageMarkerProps = {
  image: string;
  markers: MarkerAxisType[];
  setMarkers: React.Dispatch<React.SetStateAction<MarkerAxisType[]>>;
};

const ImageMarker = ({ image, markers, setMarkers }: ImageMarkerProps) => {
  const [imageUrl, setImageUrl] = useState("");
  const [currentMarker, setCurrentMarker] = useState<MarkerAxisType | null>(
    null
  );
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    if (!image) return;
    setImageUrl(image);
  }, [image]);

  const startDrawing = (e: MouseEvent<HTMLDivElement>) => {
    const { x, y } = getMousePosition(e);
    setCurrentMarker({ x1: x, y1: y, x2: x, y2: y });
    setIsDrawing(true);
  };

  const draw = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDrawing) return;
    const { x, y } = getMousePosition(e);
    setCurrentMarker((prevMarker) =>
      prevMarker ? { ...prevMarker, x2: x, y2: y } : null
    );
  };

  const endDrawing = () => {
    if (!isDrawing || !currentMarker) return;
    setMarkers((prevMarkers) => [...prevMarkers, currentMarker]);
    setIsDrawing(false);
    setCurrentMarker(null);
  };

  const getMousePosition = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return { x, y };
  };

  const renderMarkers = () => {
    return markers.map((marker, index) => (
      <Stack
        key={index}
        sx={{ ...getMarkerStyle(marker), fontSize: 11 }}
        alignItems="center"
        justifyContent="center"
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
        <div
          style={{ position: "relative", display: "inline-block" }}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={endDrawing}
        >
          <img
            src={imageUrl}
            alt="Marker Example"
            style={{ width: "100%", maxWidth: "600px" }}
          />
          {renderMarkers()}
          {isDrawing && currentMarker && (
            <Box
              sx={{
                ...getMarkerStyle(currentMarker),
                border: (theme) => `2px dashed ${theme.palette.primary.main}`,
              }}
            />
          )}
        </div>
      ) : (
        <InsertTitle sx={{ textAlign: "center" }}>{ComMsg.INS}</InsertTitle>
      )}
    </>
  );
};

export default ImageMarker;
