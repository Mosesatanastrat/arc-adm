import { Box, Stack } from "@mui/material";
import SubHeader from "../../components/header/sub.header";
import InputSearch from "../../components/form-tag/input-search";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import BtnWrapper from "../../components/form-tag/btn-wrapper";
import TemplateList from "../../components/tables/template.list";
import CusPagination from "../../components/tables/cus.pagination";
import SelectWrapper from "../../components/form-tag/select-wrapper";
import { rowOptions } from "../../common/constants/FormData";
import { useNavigate } from "react-router-dom";
import RouteN from "../../common/constants/RouteN";

function Home() {
  const navigate = useNavigate();
  const handleAddTemplate = () => {
    navigate(RouteN.ADD_TEMPLATE);
  };
  return (
    <>
      <SubHeader title="List of Template" />
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        p={1}
      >
        <Stack flexDirection="row" alignContent="center" gap={1}>
          <InputSearch placeholder="Search Template" />
          <SelectWrapper options={rowOptions} value={10} />
        </Stack>
        <Box>
          <BtnWrapper
            variant="outlined"
            startIcon={<AddCircleOutlinedIcon />}
            onClick={handleAddTemplate}
          >
            Add Template
          </BtnWrapper>
        </Box>
      </Stack>
      <Box>
        <TemplateList />
        <CusPagination
          page={1}
          rowPerPage={10}
          total={150}
          handleChangePage={() => {}}
        />
      </Box>
    </>
  );
}

export default Home;
