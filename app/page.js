"use client";

import { Grid, Container } from "@mui/material";
import Header from "../app/components/Header";
import LeftSidebar from "../app/components/LeftSidebar";
import Feed from "../app/components/Feed";
import RightSidebar from "../app/components/RightSidebar";

export default function Home() {
  return (
    <>
      <Header />

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {/* Left sidebar – hidden on mobile */}
          <Grid item md={3} display={{ xs: "none", md: "block" }}>
            <LeftSidebar />
          </Grid>

          {/* Feed */}
          <Grid item xs={12} md={6}>
            <Feed />
          </Grid>

          {/* Right sidebar – hidden on mobile */}
          <Grid item md={3} display={{ xs: "none", md: "block" }}>
            <RightSidebar />
          </Grid>
        </Grid>

      </Container>
    </>
  );
}
