"use client";

import {
  Paper,
  Typography,
  Stack,
  Avatar,
  Button,
  Box,
  Divider,
} from "@mui/material";

export default function RightSidebar() {
  return (
    <Box position="sticky" top={80}>
      <Paper
        elevation={2}
        sx={{
          p: 2,
          borderRadius: 2,
        }}
      >
        <Typography fontWeight={600} mb={2}>
          Add to your feed
        </Typography>

        <Stack spacing={2}>
          <Suggestion
            name="Company A"
            description="Software Development"
            logo="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
          />
          <Suggestion
            name="Company B"
            description="UI / UX Design"
            logo="https://cdn-icons-png.flaticon.com/512/5968/5968520.png"
          />
          <Suggestion
            name="Company C"
            description="Cloud & DevOps"
            logo="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
          />
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Typography
          variant="body2"
          color="primary"
          sx={{ cursor: "pointer", fontWeight: 500 }}
        >
          View all recommendations →
        </Typography>
      </Paper>

      {/* Footer */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          mt: 2,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="caption" color="text.secondary">
          About · Accessibility · Help · Privacy & Terms
        </Typography>
        <Typography variant="caption" display="block" mt={1}>
          LinkedIn Clone © 2026
        </Typography>
      </Paper>
    </Box>
  );
}

/* Reusable Suggestion Item */
function Suggestion({ name, description, logo }) {
  return (
    <Stack direction="row" spacing={2} alignItems="flex-start">
      <Avatar src={logo} sx={{ width: 48, height: 48 }} />

      <Stack spacing={0.5} flexGrow={1}>
        <Typography fontWeight={600} variant="body2">
          {name}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {description}
        </Typography>

        <Button
          variant="outlined"
          size="small"
          sx={{
            alignSelf: "flex-start",
            textTransform: "none",
            borderRadius: 5,
            mt: 0.5,
          }}
        >
          + Follow
        </Button>
      </Stack>
    </Stack>
  );
}
