import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function RequestCard({
  uname,
  building,
  room,
  equipment,
  message,
  status,
  staff,
  date,
  remarksDateTime,
  admin,
  isRemarked,
  role,
  reqID,
  remarksMsg,
  onUpdate,
  onDelete,
  inputStaff,
  inputStatus,
  inputRemarks,
}) {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const storedEmail = sessionStorage.getItem("userEmail");
  const [adminFullname, setAdminFullname] = useState("");

  const isAdmin = role === "admin";
  const isUserWithRemarks = !isAdmin && isRemarked === true;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  //fetching Admin name
  useEffect(() => {
    const fetchAdminFullname = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/user/getUserName/${storedEmail}`
        );
        setAdminFullname(response.data);
      } catch (err) {
        //not in 200 response range
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    fetchAdminFullname();
  }, [storedEmail]);

  const handleOpen = () => {
    setOpen(true);
    console.log("Opening dialog");
  };
  const handleOpenDelete = () => setOpenDelete(true);

  const handleClose = () => {
    setOpen(false);
    console.log("Close dialog");
  };
  const handleCloseDelete = () => setOpenDelete(false);

  return (
    <Card sx={{ minWidth: 200, marginBottom: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <b>Date:</b> {date}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <b>Location:</b> {building} Bldg - {room}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <b>Equipment:</b> {equipment}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <b>Status:</b> {status}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <b>Handled by:</b> {staff}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <b>Message:</b> {message}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <b>Requested by:</b> {uname}
        </Typography>
      </CardContent>
      <CardActions>
        {isUserWithRemarks && (
          <>
            <Button variant="contained" onClick={handleOpen}>
              View Remarks
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <b>Date:</b> {remarksDateTime}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <b>Admin:</b> {admin}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <b>Message:</b> {remarksMsg}
                </Typography>
              </Box>
            </Modal>
          </>
        )}

        {isAdmin && (
          <>
            <Button variant="contained" onClick={handleOpen}>
              Manage Request
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogContent>
                <form onSubmit={(e) => e.preventDefault()}>
                  <label htmlFor="staff">Staff:</label>
                  <select name="staff" id="staff" ref={inputStaff}>
                    <option value="">Select Staff</option>
                    <option value="staff1">Staff 1</option>
                    <option value="staff2">Staff 2</option>
                    <option value="staff3">Staff 3</option>
                  </select>

                  <label htmlFor="status">Status:</label>
                  <select name="status" id="status" ref={inputStatus}>
                    <option value="">Select Status</option>
                    <option value="pending">pending</option>
                    <option value="on-going">ongoing</option>
                    <option value="resolved">resolved</option>
                  </select>

                  <label htmlFor="remarksMsg">Remarks:</label>
                  <textarea
                    id="remarksMsg"
                    placeholder=" Enter remarks"
                    required
                    ref={inputRemarks}
                  ></textarea>
                </form>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => handleClose()}>Cancel</Button>
                <Button onClick={() => onUpdate(reqID)}>Update</Button>
              </DialogActions>
            </Dialog>
          </>
        )}

        <Button variant="contained" onClick={handleOpenDelete}>
          Delete
        </Button>
        <Modal
          open={openDelete}
          onClose={handleCloseDelete}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Are you sure you want to delete this request?
            </Typography>
            <Button variant="contained" onClick={() => onDelete(reqID)}>
              Yes
            </Button>
            <Button variant="contained" onClick={() => handleCloseDelete()}>
              No
            </Button>
          </Box>
        </Modal>
      </CardActions>
    </Card>
  );
}

export default RequestCard;
