import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Layout(){
  return (
    <Box>
      <Header />
      <Box>
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout