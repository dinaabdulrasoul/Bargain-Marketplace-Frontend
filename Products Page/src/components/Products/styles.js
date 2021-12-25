import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    justifyContent: "center",
  },
  input: {
    margin: "15px",
  },
  root: {
    flexGrow: 1,
  },
}));
