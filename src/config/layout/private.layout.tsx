import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Box } from "@mui/material";
import { useState } from "react";
import DrawerWrapper from "../../components/drawar-wrapper";
import Sidebar from "../../components/sidebar";

function PrivateLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DrawerWrapper isOpen={isOpen} handleToggle={handleDrawerToggle}>
        <Sidebar handleToggle={handleDrawerToggle} />
      </DrawerWrapper>
      <Header handleToggle={handleDrawerToggle} />
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

export default PrivateLayout;
