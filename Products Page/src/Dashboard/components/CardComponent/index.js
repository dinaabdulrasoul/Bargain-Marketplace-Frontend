import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import AddCardIcon from "@mui/icons-material/AddCard";
import { Button } from "@mui/material";

const Info = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 40 }} color="text.primary" gutterBottom>
        Account Information
      </Typography>
      <Typography variant="h5" component="div">
        Name: {}
      </Typography>
      <Typography variant="h5" component="div">
        Email: {}
      </Typography>
      <Typography variant="h5" component="div">
        Items Count: {}
      </Typography>
    </CardContent>
  </React.Fragment>
);

const Balance = () => {
  return (
    <div>
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 40 }} color="text.primary" gutterBottom>
            Account Current Cash balance
          </Typography>
          <Typography variant="h5" component="div">
            Current Cash: {}
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

export default function OutlinedCard({ type }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{type === "info" ? Info : Balance()}</Card>
    </Box>
  );
}
