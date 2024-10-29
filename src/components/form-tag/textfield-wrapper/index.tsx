import TextField, { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

type TextfieldWrapperProps = TextFieldProps;

const StyledTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  fontSize: theme.spacing(1.4),
}));

function TextfieldWrapper(props: TextfieldWrapperProps) {
  return <StyledTextField {...props} />;
}

export default TextfieldWrapper;
