import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Stack,
  IconButton,
  CircularProgress,
  Fade,
} from "@mui/material";
import TabRow from "./tab.row";
import TabCell from "./tab.cell";
import { PatientTypes } from "../../types/patient.type";
import EditIcon from "@mui/icons-material/Edit";

type PatientListProps = {
  handlePatient: (pat: PatientTypes) => void;
  tableData: any;
  loading: boolean;
};

function PatientList({ handlePatient, tableData, loading }: PatientListProps) {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TabRow>
            <TabCell>ARC ID</TabCell>
            <TabCell>Appointment ID</TabCell>
            <TabCell>First Name</TabCell>
            <TabCell>Last Name</TabCell>
            <TabCell>Apt. Time</TabCell>
            <TabCell>Room Assigned</TabCell>
          </TabRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <Stack
              sx={{
                justifyContent: "center",
                width: "100%",
                alignItems: "center",
              }}
            ></Stack>
          ) : (
            tableData?.map((item: any) => (
              <TabRow
                key={item?.appointmentId}
                sx={{
                  cursor: "pointer",
                }}
              >
                <>
                  <TabCell>{item?.patientDetails?.arcsId}</TabCell>
                  <TabCell>{item?.appointmentId}</TabCell>
                  <TabCell>{item?.patientDetails?.firstName}</TabCell>
                  <TabCell>{item?.patientDetails?.lastName}</TabCell>{" "}
                  <TabCell>
                    {new Date(item?.appointmentDate)?.toLocaleDateString()}
                  </TabCell>
                  <TabCell
                    onClick={
                      item?.roomNumber ? () => {} : () => handlePatient(item)
                    }
                  >
                    {item?.roomNumber || (
                      <IconButton color="success" size="small">
                        <EditIcon fontSize="inherit" />
                      </IconButton>
                    )}
                  </TabCell>
                </>
              </TabRow>
            ))
          )}
        </TableBody>
      </Table>

      {tableData && tableData.length == 0 && !loading ? (
        <Stack
          sx={{
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          No Data
        </Stack>
      ) : (
        <></>
      )}

      <Stack
        sx={{
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
        }}
      >
        {" "}
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? "0ms" : "0ms",
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
      </Stack>
    </TableContainer>
  );
}

export default PatientList;
