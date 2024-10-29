import { Grid, Stack } from "@mui/material";
import EditorView from "../../../components/editor/editor.view";
import { InsertTitle } from "../../../components/override-com/typography";
import { useAppSelector } from "../../../config/store/hook";
import { selectInsert } from "../../../slice/insert.slice";
import ChoicesPreview from "./choices-preview/choices.preview";
import { useEffect, useState } from "react";
import { getSelectContent } from "../../../common/utils/common.fn";
import { ContentType, SelectInsetType } from "../../../types/insert.type";

function PreviewTab() {
  const { insertOperation } = useAppSelector(selectInsert);
  const {
    question,
    colorBackground,
    choices,
    insetType,
    colorText,
    picture,
    markers,
  } = insertOperation;
  const [previewSelect, setPreviewSelect] = useState<string[]>([]);
  const [selectedContent, setSelectedContent] = useState<ContentType[]>([]);
  const previewContent = selectedContent.map((select) => select.value).join("");
  const isNotAutomaticPreview = insetType !== SelectInsetType.AUTOMATIC;

  useEffect(() => {
    const previewSelectLn = previewSelect.length;
    const choicesLn = choices.length;
    if (previewSelectLn < 0 || choicesLn < 0) return;
    const content = getSelectContent({
      choices,
      previewSelect,
      selectedContent,
    });
    setSelectedContent(content);
  }, [previewSelect, choices]);

  useEffect(() => {
    const choicesLn = choices.length;
    if (isNotAutomaticPreview || choicesLn <= 0) return;
    const randomPreviewSelect = choices[0].id;
    setPreviewSelect([randomPreviewSelect]);
  }, [isNotAutomaticPreview, choices]);

  return (
    <>
      <Grid
        container
        sx={{
          mb: 1,
        }}
      >
        <Grid
          item
          xs={3}
          sx={{
            border: 1,
            borderColor: "divider",
            p: 0.4,
          }}
        >
          {isNotAutomaticPreview && (
            <Stack
              sx={{
                bgcolor: colorBackground,
                p: 0.4,
              }}
            >
              <InsertTitle>{question}</InsertTitle>
              <ChoicesPreview
                choices={choices}
                insetType={insetType}
                colorText={colorText}
                previewSelect={previewSelect}
                setPreviewSelect={setPreviewSelect}
                picture={picture}
                markers={markers}
              />
            </Stack>
          )}
        </Grid>
        <Grid
          item
          xs={9}
          sx={{
            border: 1,
            borderColor: "divider",
            p: 0.4,
            minHeight: 350,
          }}
        >
          <EditorView content={previewContent} />
        </Grid>
      </Grid>
    </>
  );
}

export default PreviewTab;
