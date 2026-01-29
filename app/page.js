"use client";

import { Container, Grid, Box } from "@mui/material";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";

export default function Page() {
  return (
    <>
      <Header />

      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Grid
          container
          spacing={3}
          wrap="nowrap"
        >
          {/* Left Sidebar */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              flexShrink: 0,
              display: { xs: "none", md: "block" },
            }}
          >
            <Box sx={{ position: "sticky", top: 80 }}>
              <LeftSidebar />
            </Box>
          </Grid>

          {/* Feed */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              minWidth: 0,
            }}
          >
            <Feed />
          </Grid>

          {/* Right Sidebar */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              flexShrink: 0,
              display: { xs: "none", md: "block" },
            }}
          >
            <Box sx={{ position: "sticky", top: 80 }}>
              <RightSidebar />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
