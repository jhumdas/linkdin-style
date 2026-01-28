"use client";

import { Box, Paper, Typography, Stack } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function LeftSidebar() {
  return (
    <Box position="sticky" top={80}>
      <Paper sx={{ p: 2 }}>
        <Stack spacing={2}>
          <Typography variant="h6">Profile</Typography>

          <Stack direction="row" spacing={1} alignItems="center">
            <PersonIcon fontSize="small" />
            <Typography variant="body2">My Profile</Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <GroupIcon fontSize="small" />
            <Typography variant="body2">Connections</Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <BookmarkIcon fontSize="small" />
            <Typography variant="body2">Saved Items</Typography>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}
