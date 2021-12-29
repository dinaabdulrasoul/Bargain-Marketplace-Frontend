import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import AddCardIcon from "@mui/icons-material/AddCard";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import CountUp from "react-countup";
import axios from "axios";
import { useSelector } from "react-redux";

const Balance = (user) => {
  const [deposit, setDeposit] = React.useState(0);
  const [reload, setReload] = React.useState(false);
  const handleDeposit = (e) => {
    let input = e.target.value;
    setDeposit(input);
  };
  const data = useSelector((state) => state.userReducer);
  const submitDeposit = async () => {
    let data2 = { id: data.id, balance: Number(deposit) };
    await axios.post(`http://localhost:5000/deposit`, data2);
  };

  return (
    <div>
      <React.Fragment>
        <CardContent>
          <Typography
            sx={{ fontSize: 25, fontWeight: "bold" }}
            color="text.primary"
            gutterBottom
          >
            Account Current Cash balance
          </Typography>
          <Typography variant="h5" component="div">
            Current Cash: <CountUp end={user?.balance} duration={0.5} />
          </Typography>
          <CardActions>
            <Typography
              variant="h5"
              component="div"
              style={{ display: "flex", alignItems: "center" }}
            >
              Deposit
              <TextField
                id="outlined-basic"
                label="amount"
                variant="outlined"
                style={{ margin: "15px" }}
                onChange={handleDeposit}
              />
              <Button onClick={submitDeposit}>
                <AddCardIcon />
              </Button>
            </Typography>
          </CardActions>
        </CardContent>
      </React.Fragment>
    </div>
  );
};

export default function OutlinedCard({ type, user }) {
  const [data, setData] = React.useState(user);
  const Info = (
    <React.Fragment>
      {console.log("balance", user)}
      <CardContent>
        <Typography
          sx={{ fontSize: 25, fontWeight: "bold" }}
          color="text.primary"
          gutterBottom
        >
          Account Information
        </Typography>
        <Typography variant="h5" component="div">
          Name: {user?.first_name}
          {user?.last_name}
        </Typography>
        <Typography variant="h5" component="div">
          Email: {user?.email}
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{type === "info" ? Info : Balance(user)}</Card>
    </Box>
  );
}
