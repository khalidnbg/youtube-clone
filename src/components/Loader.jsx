import { Box, CircularProgress, Stack } from "@mui/material";
const Loader = () => (
  <Box minHeight="95vh">
    <Stack
      direction="row"
      height="80vh"
      justifyContent="center"
      alignContent="center">
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader;
