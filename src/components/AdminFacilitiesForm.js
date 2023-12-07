import React, { useState } from "react";
import { styled } from "@mui/system";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	IconButton,
	Modal,
	TextField,
    Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ApartmentIcon from "@mui/icons-material/Apartment";

const TableWrapper = styled(TableContainer)(({ theme }) => ({
	marginTop: theme.spacing(1),
}));

const StyledTableHead = styled(TableHead)({
	"& th": {
		fontWeight: "bold",
		paddingLeft: "20px",
		position: "sticky",
		top: 0,
		zIndex: 1,
		backgroundColor: "#FC3031",
		color: "white",
	},
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:hover": {
		backgroundColor: "#d3d3d3", // Gray on hover
	},
	"&.active": {
		backgroundColor: "#FC3031", // Orange when clicked
		color: "white",
		"& .editIcon": {
			visibility: "visible",
		},
	},
}));

const ManageFacilitiesTable = () => {
	const allData = [
		{ buildingName: "Building A", roomNumber: "101" },
		{ buildingName: "Building B", roomNumber: "202" },
		{ buildingName: "Building C", roomNumber: "303" },
		{ buildingName: "Building C", roomNumber: "303" },
		{ buildingName: "Building C", roomNumber: "303" },
		{ buildingName: "Building C", roomNumber: "303" },
		{ buildingName: "Building C", roomNumber: "303" },
		{ buildingName: "Building C", roomNumber: "303" },
		{ buildingName: "Building C", roomNumber: "303" },
		{ buildingName: "Building C", roomNumber: "303" },
		{ buildingName: "Building C", roomNumber: "303" },
		{ buildingName: "Building C", roomNumber: "303" },
		{ buildingName: "Building C", roomNumber: "303" },
		{ buildingName: "Building C", roomNumber: "303" },

		// ... (remaining data)
	];

	const [selectedBuilding, setSelectedBuilding] = useState("");
	const [selectedRow, setSelectedRow] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [updatedBuildingName, setUpdatedBuildingName] = useState("");

	const filteredData = selectedBuilding
		? allData.filter((item) => item.buildingName === selectedBuilding)
		: allData;

	const handleFilterChange = (event) => {
		setSelectedBuilding(event.target.value);
		setSelectedRow(null); // Reset selected row when changing the filter
	};

	const handleTableRowClick = (index) => {
		setSelectedRow(index);
		setUpdatedBuildingName(filteredData[index]?.buildingName || "");
	};

	const handleUpdateClick = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	const handleBuildingNameChange = (event) => {
		setUpdatedBuildingName(event.target.value);
	};

	const handleSaveUpdate = () => {
		// Implement your logic for saving the changes here
		setIsModalOpen(false);
	};

	return (
		<div>
			{/* Filter Dropdown */}
			<FormControl
				style={{ marginBottom: "16px", borderRadius: "4px", width: "25%" }}
			>
				<InputLabel id="building-label">Select Building</InputLabel>
				<Select
					labelId="building-label"
					value={selectedBuilding}
					onChange={handleFilterChange}
					variant="standard"
					displayEmpty
					autoWidth={false}
				>
					<MenuItem disabled>Select Building</MenuItem>
					<MenuItem>All Building</MenuItem>
					{Array.from(new Set(allData.map((item) => item.buildingName))).map(
						(buildingName) => (
							<MenuItem key={buildingName} value={buildingName}>
								{buildingName}
							</MenuItem>
						)
					)}
				</Select>
			</FormControl>

			{/* Table */}
			<TableWrapper
				component={Paper}
				style={{ width: "80%", overflowX: "auto" }}
			>
				<Table dense borderAxis="xBetween" variant="plain">
					<StyledTableHead>
						<TableRow>
							<TableCell>Building Name</TableCell>
							<TableCell>Room #</TableCell>
							<TableCell style={{ paddingRight: "50px" }}></TableCell>
						</TableRow>
					</StyledTableHead>
					<TableBody>
						{filteredData.map((item, index) => (
							<StyledTableRow
								key={index}
								onClick={() => handleTableRowClick(index)}
								className={selectedRow === index ? "active" : ""}
							>
								<TableCell
									style={{
										paddingLeft: "30px",
										color: selectedRow === index ? "white" : "inherit",
									}}
								>
									{item.buildingName}
								</TableCell>
								<TableCell
									style={{
										paddingLeft: "30px",
										color: selectedRow === index ? "white" : "inherit",
									}}
								>
									{item.roomNumber}
								</TableCell>
								<TableCell>
									<IconButton
										className="editIcon"
										onClick={handleUpdateClick}
										disabled={selectedRow === null}
										style={{
											visibility: selectedRow === index ? "visible" : "hidden",
											color: "white",
										}}
									>
										<EditIcon />
									</IconButton>
								</TableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableWrapper>

			{/* Update Modal */}
			<Modal
				open={isModalOpen}
				onClose={handleModalClose}
				aria-labelledby="modal-title"
				aria-describedby="modal-description"
			>
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: "500px",
						height: "200px",
						background: "white",
						padding: "16px",
						borderRadius: "4px",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							marginBottom: "25px",
                            fontWeight: "bold",
                            fontSize: "25px",
						}}
					>
						<ApartmentIcon style={{ marginRight: "8px", color: "#FC3031"}}  />{" "}
						{/* Replace BuildingIcon with the actual icon component */}
						Update Building
					</div>

					<TextField
						label="Building Name"
						variant="outlined"
						fullWidth
						value={updatedBuildingName}
						onChange={handleBuildingNameChange}
					/>
					<div
						style={{
							marginTop: "16px",
							display: "flex",
							justifyContent: "flex-end",
						}}
					>
						<IconButton color="primary" onClick={handleSaveUpdate}>
							<EditIcon />
						</IconButton>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default ManageFacilitiesTable;