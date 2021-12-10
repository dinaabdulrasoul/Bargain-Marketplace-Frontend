import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import AddCardIcon from "@mui/icons-material/AddCard";
import { Button } from "@mui/material";

import CountUp from "react-countup";

const Balance = () => {
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
            Current Cash: <CountUp end={100} duration={0.5} />
          </Typography>
          <CardActions>
            <Typography
              variant="h5"
              component="div"
              style={{ display: "flex", alignItems: "center" }}
            >
              Deposit
              <Button>
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
  const Info = (
    <React.Fragment>
      {console.log(user)}
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
      <Card variant="outlined">{type === "info" ? Info : Balance()}</Card>
    </Box>
  );
}
