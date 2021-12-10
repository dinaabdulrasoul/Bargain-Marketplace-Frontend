import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useSelector } from "react-redux";

import Items from "./components/Items/Items";
import Home from "./components/Home/Home";
import Permission from "./components/Permission/Permission";
import axios from "axios";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function Dashboard() {
  const [page, setPage] = useState("Home");
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const classes = useStyles();
  const data = useSelector((state) => state.userReducer);
  const handlePage = (text) => {
    setPage(text);
  };

  useEffect(() => {
    if (localStorage.getItem("profile")) {
      setAuthenticated(true);
    }
    const fetchUser = async () => {
      let user = await axios.get(`http://localhost:5000/users/${data.id}`);
      console.log(user.data);
      setUser(user.data);
    };
    fetchUser();
  }, []);
  return isAuthenticated ? (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {["Home", "Items", "Permissions"].map((text, index) => (
            <ListItem
              button
              onClick={() => {
                handlePage(text);
              }}
              key={text}
            >
              <ListItemIcon>
                {text === "Home" ? (
                  <HomeIcon />
                ) : text === "Items" ? (
                  <ListAltIcon />
                ) : (
                  <PersonAddAltIcon />
                )}
              </ListItemIcon>

              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {page === "Home" ? (
          <Home user={user} />
        ) : page === "Items" ? (
          <Items />
        ) : (
          <Permission />
        )}
      </main>
    </div>
  ) : (
    <h2
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Please Login to Access Dashboard
    </h2>
  );
}
