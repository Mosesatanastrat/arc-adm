import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import { HeaderTitle } from "../override-com/typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Logout } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import RouteN from "../../common/constants/RouteN";

type HeaderProps = {
  handleToggle: () => void;
};

function Header({ handleToggle }: HeaderProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.clear()
    handleAddTemplate();
  };

  const navigate = useNavigate();
  const handleAddTemplate = () => {
    navigate(RouteN.LOG_IN);
  };

  return (
    <Stack flexDirection="row" justifyContent="space-between">
      <Stack sx={{ pl: 2 }} flexDirection="row" alignItems="center">
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
          onClick={handleToggle}
        >
          <MenuIcon />
        </IconButton>
        <Box>
          <HeaderTitle>ARC</HeaderTitle>
        </Box>
      </Stack>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <HeaderTitle>
          Acupuncture & Physical Therapy Specialists, Inc.
        </HeaderTitle>
        <HeaderTitle>d.b.a American Rehab Connection</HeaderTitle>
      </Box>
      <Box>
        <IconButton color="primary" size="large" onClick={handleClick}>
          <Person2Icon fontSize="inherit" />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Stack>
  );
}

export default Header;
