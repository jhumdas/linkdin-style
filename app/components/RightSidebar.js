"use client";

import { Paper, Typography, Stack } from "@mui/material";

export default function RightSidebar() {
  return (
    
    <Paper sx={{ p: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6">Suggestions</Typography>
        <Typography variant="body2">Follow Company A</Typography>
        <Typography variant="body2">Follow Company B</Typography>
        <Typography variant="body2">Follow Company C</Typography>
      </Stack>
    </Paper>
  );
}
