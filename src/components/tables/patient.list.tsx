import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Stack,
} from "@mui/material";
import TabRow from "./tab.row";
import TabCell from "./tab.cell";
import { PatientTypes } from "../../types/patient.type";

type PatientListProps = {
  handlePatient: (pat: PatientTypes) => void;
  tableData: any;
};

function PatientList({ handlePatient, tableData }: PatientListProps) {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TabRow>
            <TabCell>ARC ID</TabCell>
            <TabCell>First Name</TabCell>
            <TabCell>Last Name</TabCell>
            <TabCell>Apt. Time</TabCell>
            <TabCell>Room Assigned</TabCell>
          </TabRow>
        </TableHead>
        <TableBody>
          {tableData?.map((item: any) => (
            <TabRow
              key={item}
              sx={{
                cursor: "pointer",
              }}
            >
              <TabCell>{item?.patientDetails?.arcsId}</TabCell>
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
                {item?.roomNumber}
              </TabCell>
            </TabRow>
          ))}
        </TableBody>
      </Table>
      {tableData && tableData.length == 0 ? (
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
    </TableContainer>
  );
}

export default PatientList;
