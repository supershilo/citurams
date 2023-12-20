import React, { useState } from "react";
import { styled } from "@mui/system";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from "axios";

const FormHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
  marginTop: "-30px",
});

const HeaderIcon = styled(AccountCircleIcon)({
  fontSize: 30,
  marginRight: "10px",
  color: '#FC3031',
});

const FormContainer = styled("div")({
  width: "40%",
  margin: "auto",
  marginTop: "35px",
});

const CreateStaffForm = () => {

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    status: "",
    contactNum: "",
  });

  const [formErrors, setFormErrors] = useState({
    fname: false,
    lname: false,
    email: false,
    status: false,
    contactNum: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      if (key !== "status" && formData[key] === "") {
        errors[key] = true;
        isValid = false;
      } else {
        errors[key] = false;
      }
    });

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      // If the form is not valid, prevent submission
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/admin/createStaff",
        formData
      );
      console.log(response.data); // Log the response from the server
      window.location.reload();
    } catch (error) {
      console.error("Error creating staff:", error);
      // Add logic to handle errors, e.g., displaying an error message
    }
  };



  return (
    <div className="mb-4 -mt-10">
      <FormContainer className="p-4">
        <FormHeader>
          <HeaderIcon />
          <Typography variant="h5" component="div" sx={{ fontFamily: "Poppins" }}>
            Create Technical Staff
          </Typography>
        </FormHeader>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            name="fname"
            fullWidth
            margin="dense"
            variant="outlined"
            value={formData.fname}
            onChange={handleChange}
            required
            error={formErrors.fname}
          />
          <TextField
            label="Last Name"
            name="lname"
            fullWidth
            margin="dense"
            variant="outlined"
            value={formData.lname}
            onChange={handleChange}
            required
            error={formErrors.lname}
          />
          <TextField
            label="Institutional Email"
            name="email"
            fullWidth
            margin="dense"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            required
            error={formErrors.email}
          />

          <FormControl fullWidth variant="outlined" margin="dense">
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              label="Status"
              labelId="status-label"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              error={formErrors.status}
            >
              <MenuItem value="availanle" sx={{ "&:hover": { backgroundColor: "#FC3031", color: "white" } }}>Available</MenuItem>
              <MenuItem value="occupied" sx={{ "&:hover": { backgroundColor: "#FC3031", color: "white" } }}>Occupied</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Contact Number"
            name="contactNum"
            fullWidth
            margin="dense"
            variant="outlined"
            value={formData.contactNum}
            onChange={handleChange}
            required
            error={formErrors.contactNum}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop: "10px", // Add margin to match the form fields
              backgroundColor: "#FC3031",
              fontSize: "15px",
              fontFamily: "'Poppins', san-serif",
              width: "100%",
              padding: "10px",
              color: "white",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#D83131",
              },
            }}
          >
            Create Technical Staff
          </Button>
        </form>
      </FormContainer>
    </div>
  );
};

export default CreateStaffForm;
