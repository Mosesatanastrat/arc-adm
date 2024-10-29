import { SwipeableDrawer } from "@mui/material";

type DrawerWrapperProps = {
  children: React.ReactNode;
  isOpen: boolean;
  handleToggle: () => void;
};

function DrawerWrapper({ isOpen, handleToggle, children }: DrawerWrapperProps) {
  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={handleToggle}
      onOpen={handleToggle}
    >
      {children}
    </SwipeableDrawer>
  );
}

export default DrawerWrapper;
