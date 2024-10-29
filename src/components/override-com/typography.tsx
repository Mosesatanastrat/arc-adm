import { SxProps, Typography, TypographyProps } from "@mui/material";

type InsertTitleProps = {
  children: React.ReactNode;
  sx?: SxProps;
} & TypographyProps;

export const InsertTitle = ({
  children,
  sx,
  ...otherProps
}: InsertTitleProps) => {
  return (
    <Typography
      sx={{
        fontSize: (theme) => theme.spacing(1.4),
        color: "secondary.main",
        fontWeight: (theme) => theme.typography.fontWeightBold,
        ...sx,
      }}
      {...otherProps}
    >
      {children}
    </Typography>
  );
};

export const SubHeaderTitle = ({ children, sx }: InsertTitleProps) => {
  return (
    <Typography
      variant="body2"
      sx={{
        fontWeight: (theme) => theme.typography.fontWeightMedium,
        fontSize: (theme) => theme.spacing(1.5),
        color: "primary.main",
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export const HeaderTitle = ({ children, sx }: InsertTitleProps) => {
  return (
    <Typography
      variant="body2"
      sx={{
        fontWeight: (theme) => theme.typography.fontWeightBold,
        fontSize: (theme) => theme.spacing(2),
        color: "primary.dark",
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};
