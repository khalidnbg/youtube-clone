import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utills/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction={{ xs: "column", sm: "row" }}
    alignItems="center"
    p={2}
    zIndex={10}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}>
    <Box style={{ display: "flex", alignItems: "center" }} marginBottom={2}>
      <Link to="/" style={{ marginRight: "10px" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        nbg <span style={{ color: "#F31503" }}>Tub</span>
      </Typography>
    </Box>

    <SearchBar />
  </Stack>
);

export default Navbar;
