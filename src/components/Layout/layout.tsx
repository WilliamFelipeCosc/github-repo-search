import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Layout() {
  return (
    <Box>
      <Header />
      <Box
        width={{ sm: "100%", md: "80%" }}
        mx="auto"
        mt={4}
        bgcolor="background.paper"
        p={2}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
