import React from 'react';
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

function App() {
  return (
    <div>
      <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera />
            <Typography variant="h6">Photo Album</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div>
            <Container maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Photo Album
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Hello everyone This is a photo album and I'm trying to make this
                sentence as long as possible so we can see how does it look like
                on the screen
              </Typography>
              <div>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      See my photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        </main>
      </>
    </div>
  );
}

export default App;
