import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { RouteList } from "../../common/constants/RouteN";
import { NavLink } from "react-router-dom";
import { SubHeaderTitle } from "../override-com/typography";
import "./style.css";

type SidebarProps = {
  handleToggle: () => void;
};

function Sidebar({ handleToggle }: SidebarProps) {
  return (
    <>
      <Stack>
        <img src="https://via.placeholder.com/150" alt="logo" />
      </Stack>
      <List
        sx={{
          p: 0,
        }}
      >
        {RouteList.map((opt) => (
          <ListItem key={opt.value} disablePadding>
            <NavLink
              to={opt.value}
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleToggle}
            >
              <ListItemButton
                sx={{
                  "&:hover": {
                    backgroundColor: "primary.light",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: (theme) => theme.spacing(3.5),
                    "& .MuiSvgIcon-root": {
                      color: "primary.main",
                    },
                  }}
                >
                  <opt.Icon />
                </ListItemIcon>
                <ListItemText
                  primary={<SubHeaderTitle>{opt.label}</SubHeaderTitle>}
                />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
