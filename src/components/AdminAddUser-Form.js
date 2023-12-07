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

const CreateUserForm = () => {
    
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		department: "",
		position: "",
		contactNumber: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Add logic to handle form submission, e.g., sending data to a server
		console.log(formData);
	};

	return (
		<FormContainer>
			<FormHeader>
				<HeaderIcon />
				<Typography variant="h5" component="div" sx={{ fontFamily: "Poppins" }}>
					Create Account
				</Typography>
			</FormHeader>
			<form onSubmit={handleSubmit}>
				<TextField
					label="First Name"
					name="firstName"
					fullWidth
					margin="dense"
					variant="outlined"
					value={formData.firstName}
					onChange={handleChange}
				/>
				<TextField
					label="Last Name"
					name="lastName"
					fullWidth
					margin="dense"
					variant="outlined"
					value={formData.lastName}
					onChange={handleChange}
				/>
				<TextField
					label="Institutional Email"
					name="email"
					fullWidth
					margin="dense"
					variant="outlined"
					value={formData.email}
					onChange={handleChange}
				/>
				<TextField
					label="Password"
					name="password"
					type="password"
					fullWidth
					margin="dense"
					variant="outlined"
					value={formData.password}
					onChange={handleChange}
				/>
				<TextField
					label="Department"
					name="department"
					fullWidth
					margin="dense"
					variant="outlined"
					value={formData.department}
					onChange={handleChange}
				/>
				<FormControl fullWidth variant="outlined" margin="dense">
					<InputLabel id="position-label">Position</InputLabel>
					<Select
						label="Position"
						labelId="position-label"
						name="position"
						value={formData.position}
						onChange={handleChange}
                        
					>
						<MenuItem value="User"  sx={{ "&:hover": { backgroundColor: "#FC3031", color: "white" } }}>User</MenuItem>
						<MenuItem value="Admin" sx={{ "&:hover": { backgroundColor: "#FC3031", color: "white" } }}>Admin</MenuItem>
					</Select>
				</FormControl>
				<TextField
					label="Contact Number"
					name="contactNumber"
					fullWidth
					margin="dense"
					variant="outlined"
					value={formData.contactNumber}
					onChange={handleChange}
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
					Create Account
				</Button>
			</form>
		</FormContainer>
	);
};

export default CreateUserForm;