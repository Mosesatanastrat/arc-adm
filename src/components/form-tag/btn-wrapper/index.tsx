import { Button, styled } from "@mui/material";

type BtnWrapperProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof Button>;

const CustomizeButton = styled(Button)(({ theme }) => ({
  fontSize: theme.spacing(1.3),
  fontWeight: theme.typography.fontWeightMedium,
  textTransform: "none",
}));

function BtnWrapper({ children, ...otherProps }: BtnWrapperProps) {
  return <CustomizeButton {...otherProps}>{children}</CustomizeButton>;
}

export default BtnWrapper;
