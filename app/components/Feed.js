"use client";

import {
  Paper,
  Typography,
  Stack,
  Avatar,
  Divider,
  Box,
} from "@mui/material";

import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

export default function Feed() {
  return (
    <Stack spacing={3}>
      {[1, 2, 3].map((post) => (
        <Paper key={post} sx={{ p: 2 }}>
          {/* Header */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar />
            <Box>
              <Typography variant="subtitle1">
                Jhuma Das
              </Typography>
              <Typography variant="body2">
                Frontend Developer
              </Typography>
            </Box>
          </Stack>

          {/* Content */}
          <Typography variant="body2" sx={{ mt: 2 }}>
            Building clean, responsive layouts using Next.js and Material UI.
            Focusing on structure, performance, and scalability.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Actions */}
          <Stack direction="row" spacing={4}>
            <Stack direction="row" spacing={1} alignItems="center">
              <ThumbUpAltOutlinedIcon fontSize="small" />
              <Typography variant="body2">Like</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <ChatBubbleOutlineIcon fontSize="small" />
              <Typography variant="body2">Comment</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <ShareOutlinedIcon fontSize="small" />
              <Typography variant="body2">Share</Typography>
            </Stack>
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
}
