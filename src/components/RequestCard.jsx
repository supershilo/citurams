import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function RequestCard(props) {
  return (
    <Card sx={{ minWidth: 200, marginBottom: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <b>Location:</b> {props.building} Bldg - {props.room}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <b>Equipment:</b> {props.equipment}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <b>Status:</b> {props.status}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <b>Handled by:</b> {props.staff}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <b>Message:</b> {props.message}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <b>Requested by:</b> {props.uname}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Remarks</Button>
      </CardActions>
    </Card>
  );
}

export default RequestCard;
