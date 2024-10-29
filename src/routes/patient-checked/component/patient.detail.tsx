import { Grid } from "@mui/material";
import { PatientTypes } from "../../../types/patient.type";
import { patientBox } from "../../../common/css/patient";
import { roomSelection } from "../../../common/constants/FormData";
import { SelectChangeEvent } from "@mui/material";
import { InsertTitle } from "../../../components/override-com/typography";
import SelectWrapper from "../../../components/form-tag/select-wrapper";

type PatientDetailProps = {
  detail: PatientTypes;
  value: String;
  handleChange: (event: SelectChangeEvent<unknown>) => void;
};

function PatientDetail({ detail, value, handleChange }: PatientDetailProps) {
  const cssPat = patientBox("primary.light");
  const cssPatWithoutPadding = patientBox();

  return (
    <Grid container>
      <Grid
        item  
        xs={4}
        sx={{
          ...cssPat,
        }}
      >
        <InsertTitle>ARC ID</InsertTitle>
      </Grid>
      <Grid item xs={4} sx={{ ...cssPat }}>
        <InsertTitle>First Name</InsertTitle>
      </Grid>
      <Grid item xs={4} sx={{ borderRight: "1px solid", ...cssPat }}>
        <InsertTitle>Last Name</InsertTitle>
      </Grid>
      <Grid item xs={4} sx={{ ...cssPatWithoutPadding }}>
        {detail?.patientDetails?.arcsId}
      </Grid>
      <Grid item xs={4} sx={{ ...cssPatWithoutPadding }}>
        {detail.patientDetails.firstName}
      </Grid>
      <Grid
        item
        xs={4}
        sx={{ borderRight: "1px solid", ...cssPatWithoutPadding }}
      >
        {detail.patientDetails.lastName}
      </Grid>
      <Grid item xs={4} sx={{ borderBottom: "1px solid", ...cssPat }}>
        <InsertTitle>Room Choice</InsertTitle>
      </Grid>
      <Grid
        item
        xs={8}
        sx={{
          borderBottom: "1px solid",
          borderRight: "1px solid",
          ...cssPatWithoutPadding,
        }}
      >
        <SelectWrapper
          value={value}
          options={roomSelection}
          placeholder="Select Insert Type"
          onChange={handleChange}
          formControlSX={{
            width: "100%",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default PatientDetail;
