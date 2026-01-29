"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Box,
  IconButton,
  InputBase,
  Avatar,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "#fff",
        color: "text.primary",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          minHeight: { xs: 56, sm: 64 },
        }}
      >
        {/* Left */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#0a66c2",
              cursor: "pointer",
            }}
          >
            LinkedIn
          </Typography>

          {/* Search - hidden on mobile */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              bgcolor: "#eef3f8",
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              width: 260,
            }}
          >
            <SearchIcon fontSize="small" color="action" />
            <InputBase
              placeholder="Search"
              sx={{ ml: 1, fontSize: 14 }}
            />
          </Box>
        </Stack>

        {/* Center Navigation */}
        <Stack direction="row" spacing={{ xs: 1, sm: 4 }}>
          <NavIcon icon={<HomeIcon />} label="Home" active />
          <NavIcon icon={<PeopleIcon />} label="My Network" />
          <NavIcon icon={<WorkIcon />} label="Jobs" />
        </Stack>

        {/* Right */}
        <Avatar
          src="https://randomuser.me/api/portraits/women/44.jpg"
          sx={{ width: 32, height: 32, cursor: "pointer" }}
        />
      </Toolbar>
    </AppBar>
  );
}

/* Nav Icon */
function NavIcon({ icon, label, active }) {
  return (
    <Stack
      alignItems="center"
      spacing={0.5}
      sx={{
        cursor: "pointer",
        color: active ? "#0a66c2" : "text.secondary",
        "&:hover": { color: "#0a66c2" },
      }}
    >
      <IconButton size="small" color="inherit">
        {icon}
      </IconButton>

      {/* Hide text on mobile */}
      <Typography
        variant="caption"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        {label}
      </Typography>
    </Stack>
  );
}
