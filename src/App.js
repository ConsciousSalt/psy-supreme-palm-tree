import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import Main from "./containers/Main/Main";

//elements
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";

//containers
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LogoutIcon from "@material-ui/icons/ExitToApp";

//icons
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/DeleteForever";

//custom styles
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { orange, green } from "@material-ui/core/colors";
//fonts
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginTop: "25px",
    background: "linear-gradient(45deg, #333, #999)",
    border: 0,
    borderRadius: "20px",
    color: "green",
    padding: "0 30px",
  },
});

const theme = createMuiTheme({
  typography: {},
  palette: {
    primary: {
      main: green[200],
    },
    secondary: {
      main: orange[500],
    },
    backgroundColor: {
      main: green
    }
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      }
      label="Checkbox label"
      labelPlacement="right"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <AppBar color="primary">
          <ToolBar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" align="center" color="inherit">
              Psyhology Tests
            </Typography>
          </ToolBar>
        </AppBar>
        <div className="App"></div>
        <Main/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
