"use client";

import {
  Box,
  Paper,
  Typography,
  Stack,
  Avatar,
  Divider,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function LeftSidebar() {
  return (
    <Box position="sticky" top={80}>
      <Paper
        elevation={2}
        sx={{
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        {/* Cover */}
        <Box
          sx={{
            height: 60,
            backgroundImage:
              "linear-gradient(135deg, #0077b5, #00a0dc)",
          }}
        />

        {/* Profile Info */}
        <Stack spacing={1} alignItems="center" sx={{ p: 2, mt: -4 }}>
          <Avatar
            src="https://randomuser.me/api/portraits/women/44.jpg"
            sx={{
              width: 72,
              height: 72,
              border: "3px solid white",
            }}
          />

          <Typography fontWeight={600}>
            Jhuma Das
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="center"
          >
            Frontend Developer · Next.js · MUI
          </Typography>
        </Stack>

        <Divider />

        {/* Stats */}
        <Stack spacing={1} sx={{ p: 2 }}>
          <Stat label="Profile Views" value="128" />
          <Stat label="Connections" value="346" />
        </Stack>

        <Divider />

        {/* Navigation */}
        <Stack spacing={1} sx={{ p: 1 }}>
          <NavItem icon={<PersonIcon fontSize="small" />} label="My Profile" />
          <NavItem icon={<GroupIcon fontSize="small" />} label="Connections" />
          <NavItem icon={<BookmarkIcon fontSize="small" />} label="Saved Items" />
        </Stack>
      </Paper>
    </Box>
  );
}

/* Reusable components */

function Stat({ label, value }) {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="body2" fontWeight={600} color="primary">
        {value}
      </Typography>
    </Stack>
  );
}

function NavItem({ icon, label }) {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      sx={{
        p: 1,
        borderRadius: 1,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "action.hover",
        },
      }}
    >
      {icon}
      <Typography variant="body2">{label}</Typography>
    </Stack>
  );
}
