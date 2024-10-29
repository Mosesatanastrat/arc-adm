import { styled } from "@mui/material/styles";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    minWidth: theme.spacing(35),
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

type CusDialogProps = {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  header?: () => JSX.Element;
  footer?: () => JSX.Element;
  dividers?: boolean;
} & DialogProps;

export default function CusDialog({
  open,
  handleClose,
  children,
  header,
  footer,
  dividers,
  ...otherProps
}: CusDialogProps) {
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      {...otherProps}
    >
      {header && (
        <DialogTitle
          component="div"
          sx={{
            m: 0,
            p: 1,
          }}
          id="customized-dialog-title"
        >
          {header()}
        </DialogTitle>
      )}
      <DialogContent dividers={dividers}>{children}</DialogContent>
      {footer && <DialogActions>{footer()}</DialogActions>}
    </BootstrapDialog>
  );
}
