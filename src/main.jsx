import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        mt: 5,
        p: 3,
        bgcolor: "#111",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography>
        © 2026 Luxe Cosmetics
      </Typography>
    </Box>
  );
}