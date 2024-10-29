import {
  Checkbox,
  Divider,
  Grid,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { InsertTitle } from "../../../components/override-com/typography";
import TextfieldWrapper from "../../../components/form-tag/textfield-wrapper";
import SelectWrapper from "../../../components/form-tag/select-wrapper";
import BtnWrapper from "../../../components/form-tag/btn-wrapper";
import { selectInsertTypeOption } from "../../../common/constants/FormData";
import ColorPicker from "../../../components/color-picker";
import { handleInsertChange, selectInsert } from "../../../slice/insert.slice";
import { useAppDispatch, useAppSelector } from "../../../config/store/hook";
import { SelectInsetType } from "../../../types/insert.type";
import CusDialog from "../../../components/cus-dialog";
import { useState } from "react";
import SelectListItem from "../../../components/select-list-item";
import { pictureList } from "../../../common/dummy.data";
import { MarkerAxisType, SelectListItemType } from "../../../types/common.type";
import ImageMarker from "../../../components/image-marker";
import PictureListHeader from "./picture/picture.list.header";
import PictureListFooter from "./picture/picture.list.footer";
import PictureSelectedHeader from "./picture/picture.selected.header";
import PictureSelectedFooter from "./picture/picture.selected.footer";

function DetailTab() {
  const dispatch = useAppDispatch();
  const { insertOperation } = useAppSelector(selectInsert);
  const {
    name,
    question,
    insetType,
    colorBackground,
    colorText,
    chartViewName,
  } = insertOperation;
  const [isPictureListOpen, setIsPictureListOpen] = useState(false);
  const [isSelectedPictureOpen, setIsSelectedPictureOpen] = useState(false);
  const [selectedPicture, setSelectedPicture] =
    useState<SelectListItemType | null>(null);
  const [selectedPictureMarker, setSelectedPictureMarker] =
    useState<SelectListItemType | null>(null);
  const [markers, setMarkers] = useState<MarkerAxisType[]>([]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleInsertChange({ [name]: value }));
  };

  const handleOnSelectChange = (e: SelectChangeEvent<unknown>) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleInsertChange({ [name]: value as string }));
  };

  const handleOnColorPick = (name: string, value: string) => {
    dispatch(handleInsertChange({ [name]: value }));
  };

  const handlePictureListOpen = () => {
    setIsPictureListOpen(true);
  };

  const handlePictureListClose = () => {
    setIsPictureListOpen(false);
    setSelectedPicture(null);
  };

  const handleSelectPictureOk = () => {
    setIsPictureListOpen(false);
    setSelectedPictureMarker(selectedPicture);
    handleSelectedPictureOpen();
  };

  const handleSelectPictureCancel = () => {
    handlePictureListClose();
  };

  const handleSelectPicture = (picture: SelectListItemType) => {
    setSelectedPicture(picture);
  };

  const handleSelectedPictureOpen = () => {
    setIsSelectedPictureOpen(true);
  };

  const handleSelectedPictureClose = () => {
    setIsSelectedPictureOpen(false);
    setSelectedPicture(null);
    setSelectedPictureMarker(null);
    setMarkers([]);
  };

  const handleSelectedPicture = () => {
    dispatch(
      handleInsertChange({ picture: selectedPictureMarker, markers: markers })
    );
    handleSelectedPictureClose();
  };

  const handleDeletePicture = () => {
    handleSelectedPictureClose();
  };

  const handleAddPicture = () => {
    handlePictureListOpen();
    setMarkers([]);
  };

  const headerPictureList = () => {
    return (
      <PictureListHeader handlePictureListClose={handlePictureListClose} />
    );
  };

  const footerPictureList = () => {
    return (
      <PictureListFooter
        selectedPicture={selectedPicture}
        handleSelectPictureOk={handleSelectPictureOk}
        handleSelectPictureCancel={handleSelectPictureCancel}
      />
    );
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <InsertTitle>Detail</InsertTitle>
        </Grid>
        <Grid item xs={4}>
          <TextfieldWrapper
            label="Insert Name"
            size="small"
            name="name"
            value={name}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextfieldWrapper
            label="Insert Question"
            size="small"
            name="question"
            value={question}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            "& .MuiFormControl-root": {
              width: "100%",
            },
          }}
        >
          <SelectWrapper
            sx={{
              width: "100%",
            }}
            options={selectInsertTypeOption}
            placeholder="Select Insert Type"
            value={insetType}
            name="insetType"
            onChange={handleOnSelectChange}
          />
        </Grid>
      </Grid>
      <Divider
        sx={{
          my: 2,
        }}
      />
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <InsertTitle>Color Options</InsertTitle>
        </Grid>
        <Grid item xs={4}>
          <ColorPicker
            label="Color Background"
            handleColorPick={(clr) => handleOnColorPick("colorBackground", clr)}
            value={colorBackground}
          />
        </Grid>
        <Grid item xs={4}>
          <ColorPicker
            label="Color Button"
            handleColorPick={(clr) => handleOnColorPick("colorText", clr)}
            value={colorText}
            disabled={insetType !== SelectInsetType.BUTTONS}
          />
        </Grid>
        <Grid item xs={12}>
          <Stack flexDirection="row" alignItems="center">
            <Checkbox />
            <InsertTitle
              sx={{
                fontSize: (theme) => theme.spacing(1.2),
              }}
            >
              Disable Windows Theming for Buttons (USE Intense Colors)
            </InsertTitle>
          </Stack>
        </Grid>
      </Grid>
      <Divider
        sx={{
          my: 2,
        }}
      />
      <Grid container spacing={1} sx={{ my: 2 }}>
        <Grid item xs={6}>
          <InsertTitle sx={{ mb: 1 }}>Actions:</InsertTitle>
          <BtnWrapper
            variant="contained"
            disabled={insetType !== SelectInsetType.PICTURE}
            onClick={handlePictureListOpen}
          >
            Edit Picture
          </BtnWrapper>
        </Grid>
        <Grid item xs={6}>
          <InsertTitle sx={{ mb: 1 }}>Chartview Name:</InsertTitle>
          <TextfieldWrapper
            size="small"
            name="chartViewName"
            value={chartViewName}
            onChange={handleOnChange}
          />
        </Grid>
      </Grid>
      <CusDialog
        open={isPictureListOpen}
        handleClose={handlePictureListClose}
        header={headerPictureList}
        footer={footerPictureList}
        dividers
      >
        <SelectListItem
          title="Picture Name"
          list={pictureList}
          selectedItem={selectedPicture}
          handleSelect={handleSelectPicture}
        />
      </CusDialog>
      <CusDialog
        open={isSelectedPictureOpen}
        handleClose={handleSelectedPictureClose}
        header={() => (
          <PictureSelectedHeader
            handleSelectedPictureClose={handleSelectedPictureClose}
          />
        )}
        footer={() => (
          <PictureSelectedFooter
            handleSelectedPicture={handleSelectedPicture}
            handleDeletePicture={handleDeletePicture}
            handleAddPicture={handleAddPicture}
            markers={markers}
          />
        )}
        dividers
      >
        <ImageMarker
          image={selectedPictureMarker?.picture || ""}
          markers={markers}
          setMarkers={setMarkers}
        />
      </CusDialog>
    </>
  );
}

export default DetailTab;
