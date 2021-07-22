import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Container,
  Paper,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import MenuIcon from '@material-ui/icons/Menu';

import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from '@material-ui/core/styles';

import { orange, green } from '@material-ui/core/colors';
import 'fontsource-roboto';

// CSS를 custom 하고 싶을 때 className에 적용
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px',
  },
  text: {
    marginTop: 10,
  },
});

/*  material-ui의 속성을 변경하고 싶은 경우 ThemeProvider로 감싼 후 theme 적용
    Palette
    Typography
    Spacing
    Breakpoints
    z - index
    Globals    */
const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
    },
  },
  // palette: {
  //   primary: {
  //     main: green[400],
  //   },
  //   secondary: {
  //     main: orange[400],
  //   },
  // },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true);

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<SaveIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox',
          }}
        />
      }
      label="Testing Checkbox"
    />
  );
}

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">MUI Themeing</Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>
            {/* 아래와 같이 원하는 tag로 변경가능 */}
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              Learn how to use Material UI
            </Typography>
            <ButtonStyled />
            <Grid container spacing={2} justify="center">
              <Grid item xs={12} sm={3}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
            </Grid>
            <TextField
              className={classes.text}
              variant="filled"
              color="secondary"
              type="email"
              label="The Time"
              placeholder="test@test.com"
            />
            <CheckboxExample />
            <ButtonGroup size="large" variant="contained" color="primary">
              <Button startIcon={<SaveIcon />}>Save</Button>
              <Button startIcon={<DeleteIcon />}>Discard</Button>
            </ButtonGroup>

            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
