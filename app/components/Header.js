"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";

export default function Header() {
  return (
    
    <AppBar position="sticky" top={0}>
      <Toolbar>
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          width="100%"
        >
          <Typography variant="h6">
            LinkedIn
          </Typography>

          <Stack direction="row" spacing={3}>
            <HomeIcon />
            <PeopleIcon />
            <WorkIcon />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
