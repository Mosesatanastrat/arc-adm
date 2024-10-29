import { Grid, IconButton, Stack } from "@mui/material";
import { InsertTitle } from "../../../components/override-com/typography";
import CancelIcon from "@mui/icons-material/Cancel";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Editor from "../../../components/editor/editor";
import CloseIcon from "@mui/icons-material/Close";
import ChoiceInput from "../../../components/form-tag/choice-input";
import { useAppDispatch, useAppSelector } from "../../../config/store/hook";
import { handleInsertChange, selectInsert } from "../../../slice/insert.slice";
import { useEffect, useRef, useState } from "react";
import { randomId } from "../../../common/utils/random";
import { RandomType } from "../../../types/insert.type";
import { getChoiceObj } from "../../../common/constants/FormData";

function ChoicesTab() {
  const inputChoiceRefs = useRef<React.RefObject<HTMLInputElement>[]>([]);
  const dispatch = useAppDispatch();
  const { insertOperation } = useAppSelector(selectInsert);
  const { choices } = insertOperation;
  const [currentChoice, setCurrentChoice] = useState<string | null>(null);
  const [randomText, setRandomText] = useState<RandomType[]>([]);
  const [randomValue, setRandomValue] = useState<RandomType>({
    id: "",
    key: "",
    value: "",
  });

  useEffect(() => {
    const inputRefLn = inputChoiceRefs.current.length;
    if (inputRefLn) {
      const lastInputIndex = inputRefLn - 1;
      inputChoiceRefs.current[lastInputIndex]?.focus();
    }
  }, [choices]);

  useEffect(() => {
    if (!currentChoice) return;
    const choice = choices.find((choice) => choice.id === currentChoice);
    if (!choice) return;
    setRandomText(choice.random);
    const random = choice.random;
    const randomLn = random.length;
    if (!randomLn) return;
    if (randomValue.id) {
      const findRandom = random.find((random) => random.id === randomValue.id);
      if (findRandom) {
        setRandomValue(findRandom);
      } else {
        setRandomValue(random[0]);
      }
    } else {
      setRandomValue(random[0]);
    }
  }, [currentChoice, choices]);

  const addInput = () => {
    dispatch(
      handleInsertChange({
        choices: [
          ...choices,
          getChoiceObj({ choId: randomId(), randId: randomId() }),
        ],
      })
    );
  };

  const handleAddChoice = () => {
    addInput();
  };

  const handleDeleteChoice = (id: string) => {
    const newChoices = choices.filter((choice) => choice.id !== id);
    dispatch(
      handleInsertChange({
        choices: newChoices,
      })
    );
    setCurrentChoice(null);
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string
  ) => {
    const newChoices = choices.map((choice) => {
      if (choice.id === id) {
        return { ...choice, name: e.target.value };
      }
      return choice;
    });
    dispatch(
      handleInsertChange({
        choices: newChoices,
      })
    );
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const choicesLn = choices.length;
      if (id === choices[choicesLn - 1].id) {
        addInput();
      }
    }
  };

  const handleAddRandom = () => {
    const findChoice = choices.find((choice) => choice.id === currentChoice);
    if (!findChoice) return;
    const objRandom = {
      id: randomId(),
      key: "Random",
      value: "",
    };
    const newRandom = [...findChoice.random, objRandom];
    const newChoices = choices.map((choice) => {
      if (choice.id === currentChoice) {
        return { ...choice, random: newRandom };
      }
      return choice;
    });
    dispatch(
      handleInsertChange({
        choices: newChoices,
      })
    );
    setRandomValue(objRandom);
  };

  const handleDeleteRandom = (id?: string) => {
    const findChoice = choices.find((choice) => choice.id === currentChoice);
    if (!findChoice) return;
    let newRandom = findChoice.random;
    if (id) {
      newRandom = findChoice.random.filter((random) => random.id !== id);
    } else {
      newRandom = findChoice.random.slice(0, findChoice.random.length - 1);
    }
    const newChoices = choices.map((choice) => {
      if (choice.id === currentChoice) {
        return { ...choice, random: newRandom };
      }
      return choice;
    });
    dispatch(
      handleInsertChange({
        choices: newChoices,
      })
    );
  };

  const handleRandomSelect = (id: string) => {
    const findRandom = randomText.find((random) => random.id === id);
    if (!findRandom) return;
    setRandomValue(findRandom);
  };

  const handleBlurEditor = (content: string) => {
    const obj = {
      ...randomValue,
      value: content,
    };
    const newRandom = randomText.map((random) => {
      if (random.id === randomValue.id) {
        return obj;
      }
      return random;
    });
    const newChoices = choices.map((choice) => {
      if (choice.id === currentChoice) {
        return { ...choice, random: newRandom };
      }
      return choice;
    });
    dispatch(
      handleInsertChange({
        choices: newChoices,
      })
    );
  };

  // console.log({ choices, currentChoice, randomText, randomValue });

  return (
    <>
      <Grid
        container
        sx={{
          mb: 1,
        }}
      >
        <Grid item xs={3}>
          <Stack flexDirection="row" alignItems="center" gap={1}>
            <InsertTitle>Choice:</InsertTitle>
            <IconButton color="success" onClick={handleAddChoice}>
              <AddCircleIcon />
            </IconButton>
            <IconButton
              color="error"
              disabled={!currentChoice}
              onClick={() => {
                if (!currentChoice) return;
                handleDeleteChoice(currentChoice);
              }}
            >
              <CancelIcon />
            </IconButton>
          </Stack>
          <Stack
            sx={{
              border: 1,
              borderColor: "divider",
            }}
          >
            {choices.map((choice, index) => {
              return (
                <Stack key={index} flexDirection="row" alignItems="center">
                  <ChoiceInput
                    id={choice.id}
                    value={choice.name}
                    onChange={(e) => handleOnChange(e, choice.id)}
                    onKeyDown={(e) => handleKeyDown(e, choice.id)}
                    setCurrentChoice={setCurrentChoice}
                    ref={(el: React.RefObject<HTMLInputElement>) =>
                      (inputChoiceRefs.current[index] = el)
                    }
                  />
                </Stack>
              );
            })}
          </Stack>
        </Grid>
        <Grid item xs={9}>
          <Stack flexDirection="row" alignItems="center" gap={1}>
            <InsertTitle>Random Text:</InsertTitle>
            <IconButton
              color="success"
              disabled={!currentChoice}
              onClick={handleAddRandom}
            >
              <AddCircleIcon />
            </IconButton>
            <IconButton
              color="error"
              disabled={!currentChoice || !randomText.length}
              onClick={() => handleDeleteRandom()}
            >
              <CancelIcon />
            </IconButton>
          </Stack>
          <Stack>
            <Stack flexDirection="row" alignItems="center" flexWrap="wrap">
              {randomText.map((random, index) => {
                return (
                  <Stack
                    key={index}
                    flexDirection="row"
                    alignItems="center"
                    gap={1}
                    sx={{
                      border: 1,
                      borderColor: "divider",
                      p: 0.4,
                      flexGrow: 1,
                      justifyContent: "space-between",
                      flexBasis: 120,
                      backgroundColor:
                        randomValue.id === random.id
                          ? "primary.light"
                          : "transparent",
                    }}
                  >
                    <InsertTitle
                      sx={{ flexGrow: 1, cursor: "pointer" }}
                      onClick={() => handleRandomSelect(random.id)}
                    >{`${random.key} ${index + 1}`}</InsertTitle>
                    <CloseIcon
                      fontSize="small"
                      color="error"
                      sx={{
                        cursor: "pointer",
                      }}
                      onClick={() => handleDeleteRandom(random.id)}
                    />
                  </Stack>
                );
              })}
            </Stack>
            <Stack>
              <Editor
                editorContent={randomValue.value}
                handleBlur={handleBlurEditor}
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default ChoicesTab;
