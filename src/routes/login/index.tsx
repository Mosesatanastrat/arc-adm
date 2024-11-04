import { Stack, Autocomplete, TextField, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RouteN from "../../common/constants/RouteN";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function Login() {
  const [isSeletedBranch, setIsSeletedBranch] = useState(false);
  const [branchData, setData] = useState([]);

  const navigate = useNavigate();
  const handleAddTemplate = () => {
    navigate(RouteN.PATIENT_LIST);
  };

  const getBranchList = async () => {
    const data = await axios.get(
      import.meta.env.VITE_API_URL + `/patients/basic/branches?page=1&limit=20`,
      {
        headers: {
          Authorization: `Basic YXJjQXBwOmFyY0FwcEA0MzIx`, // Replace 'YOUR_TOKEN_HERE' with the actual token
        },
      }
    );
    let mapData = data?.data?.data.map((datum: { _id: any; name: string }) => {
      return {
        _id: datum?._id,
        label: datum?.name,
      };
    });
    setData(mapData);
  };
  const onSelected = (event: React.SyntheticEvent, value: String | null) => {
    localStorage.setItem("branchData", JSON.stringify(value));
    handleAddTemplate();
  };
  useEffect(() => {
    getBranchList();
  }, []);
  return (
    <>
      <Stack
        sx={{
          height: "100vh",
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {isSeletedBranch ? (
          <Autocomplete
            disablePortal
            options={branchData}
            sx={{ width: 300 }}
            onChange={onSelected}
            renderInput={(params) => (
              <TextField {...params} label="Select Branch" />
            )}
          />
        ) : (
          <Button
            size="large"
            sx={{ fontWeight: "700" }}
            variant="contained"
            endIcon={<ArrowCircleRightIcon />}
            onClick={() => setIsSeletedBranch(true)}
          >
            Select Branch To Proceed
          </Button>
        )}
      </Stack>
    </>
  );
}

export default Login;
