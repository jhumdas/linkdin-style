"use client";

import {
  Paper,
  Typography,
  Stack,
  Avatar,
  Divider,
  Box,
  IconButton,
} from "@mui/material";

import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

const posts = [
  {
    id: 1,
    name: "Jhuma Das",
    role: "Frontend Developer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
  {
    id: 2,
    name: "Jhuma Das",
    role: "Frontend Developer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
    {
    id: 3,
    name: "Jhuma Das",
    role: "Frontend Developer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
];

export default function Feed() {
  return (
    <Stack spacing={3}>
      {posts.map((post) => (
        <Paper
          key={post.id}
          elevation={2}
          sx={{
            p: 2,
            borderRadius: 2,
          }}
        >
          {/* Header */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar src={post.avatar} />
            <Box>
              <Typography fontWeight={600}>
                {post.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.role}
              </Typography>
            </Box>
          </Stack>

          {/* Content */}
          <Typography variant="body2" sx={{ mt: 2 }}>
            {post.content}
          </Typography>

          {/* Post Image */}
          {post.image && (
            <Box
              component="img"
              src={post.image}
              alt="Post image"
              sx={{
                width: "100%",
                height: 280,
                objectFit: "cover",
                borderRadius: 2,
                mt: 2,
              }}
            />
          )}

          <Divider sx={{ my: 2 }} />

          {/* Actions */}
          <Stack direction="row" justifyContent="space-around">
            <ActionButton icon={<ThumbUpAltOutlinedIcon />} label="Like" />
            <ActionButton icon={<ChatBubbleOutlineIcon />} label="Comment" />
            <ActionButton icon={<ShareOutlinedIcon />} label="Share" />
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
}

/* Reusable Action Button */
function ActionButton({ icon, label }) {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      sx={{
        cursor: "pointer",
        color: "text.secondary",
        "&:hover": {
          color: "primary.main",
        },
      }}
    >
      <IconButton size="small">{icon}</IconButton>
      <Typography variant="body2">{label}</Typography>
    </Stack>
  );
}
