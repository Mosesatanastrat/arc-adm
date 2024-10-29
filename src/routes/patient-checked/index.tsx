import { Box, Stack } from "@mui/material";
import SubHeader from "../../components/header/sub.header";
import InputSearch from "../../components/form-tag/input-search";
import SelectWrapper from "../../components/form-tag/select-wrapper";
import { rowOptions } from "../../common/constants/FormData";
import CusPagination from "../../components/tables/cus.pagination";
import PatientList from "../../components/tables/patient.list";
import CusDialog from "../../components/cus-dialog";
import { PatientTypes } from "../../types/patient.type";
import { SubHeaderTitle } from "../../components/override-com/typography";
import { SelectChangeEvent } from "@mui/material";
import BtnWrapper from "../../components/form-tag/btn-wrapper";
import PatientDetail from "./component/patient.detail";
import axios from "axios";
import { useEffect, useState } from "react";

function PatientChecked() {
  const [isOpenPatient, setIsOpenPatient] = useState(false);
  const [patientDetail, setPatientDetail] = useState({} as PatientTypes);
  const [tableData, setData] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value as string;
    setValue(value);
  };

  const handleOpenPatient = (pat: PatientTypes) => {
    setPatientDetail(pat);
    setIsOpenPatient(true);
  };

  const handleClosePatient = () => {
    setIsOpenPatient(false);
  };

  const getPatientList = async (type = "all") => {
    const branchData: any = localStorage.getItem("branchData");
    let parsed = JSON.parse(branchData);
    const data = await axios.get(
      `http://localhost:3010/api/v1/patients-visited/search-list?branchId=${parsed?._id}&type=${type}`,
      {
        headers: {
          Authorization: `Basic YXJjQXBwOmFyY0FwcEA0MzIx`, // Replace 'YOUR_TOKEN_HERE' with the actual token
        },
      }
    );
    setData(data?.data?.data);
  };
  const saveData = async () => {
    let data = await axios.post(
      `https://api.arcofficepro.com/api/v1/patient/assign-room/${patientDetail?._id}`,
      {
        roomNumber: value, // Replace with your desired room number
      },
      {
        headers: {
          Authorization: `Basic YXJjQXBwOmFyY0FwcEA0MzIx`, // Replace 'YOUR_TOKEN_HERE' with the actual token
        },
      }
    );
    if (data) {
      getPatientList();
      setIsOpenPatient(false);
    }
  };

  useEffect(() => {
    getPatientList();
  }, []);

  return (
    <>
      <SubHeader title="Patient Checked in List"></SubHeader>
      <Stack flexDirection="row" gap={1} m={1}>
        <Box>
          <BtnWrapper
            variant="outlined"
            onClick={() => {
              getPatientList("all");
            }}
          >
            All
          </BtnWrapper>
        </Box>{" "}
        <Box>
          <BtnWrapper
            variant="outlined"
            onClick={() => {
              getPatientList("gym");
            }}
          >
            Gym Data
          </BtnWrapper>
        </Box>
      </Stack>
      {/* <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        p={1}
      >
        <Stack flexDirection="row" alignContent="center" gap={1}>
          <InputSearch placeholder="Search Patient" />
          <SelectWrapper options={rowOptions} value={10} />
        </Stack>
      </Stack> */}
      <Box>
        <PatientList handlePatient={handleOpenPatient} tableData={tableData} />
        {/* <CusPagination
          page={1}
          rowPerPage={10}
          total={150}
          handleChangePage={() => {}}
        /> */}
      </Box>
      <CusDialog
        header={() => <SubHeaderTitle>Room Assignment</SubHeaderTitle>}
        footer={() => (
          <BtnWrapper
            variant="contained"
            color="primary"
            onClick={() => saveData()}
          >
            Save
          </BtnWrapper>
        )}
        open={isOpenPatient}
        handleClose={handleClosePatient}
        dividers
      >
        <PatientDetail
          detail={patientDetail}
          value={value}
          handleChange={handleChange}
        />
      </CusDialog>
    </>
  );
}

export default PatientChecked;
