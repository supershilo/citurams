import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Doughnut from "../../components/Charts/Doughnut";
import Pie from "../../components/Charts/Pie";
import Stack from "../../components/Charts/StackColumnChart";
import AdminHomeFrame from "../../components/AdminHomeFrame";
import axios from "axios";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import Button from "@mui/material/Button";

const AdminDashboard = () => {
	const [allRequest, setAllRequest] = useState([]);

	useEffect(() => {
		const fetchAllRequest = async () => {
			try {
				const response = await axios.get(
					"http://localhost:8080/request/getAllRequest"
				);
				setAllRequest(response.data);
			} catch (err) {
				// Handle error
			}
		};

		fetchAllRequest();
	}, []);

	//calculate counts based on the data
	const calculateCounts = () => {
		const totalCount = allRequest.length;
		const pendingCount = allRequest.filter(
			(request) => request.status === "pending"
		).length;
		const ongoingCount = allRequest.filter(
			(request) => request.status === "on-going"
		).length;
		const resolvedCount = allRequest.filter(
			(request) => request.status === "resolved"
		).length;

		return {
			totalCount,
			pendingCount,
			ongoingCount,
			resolvedCount,
		};
	};

	const counts = calculateCounts();

	const exportDashboardPDF = () => {
		const doc = new jsPDF();

		doc.text("Total Requests: " + counts.totalCount, 10, 10);
		doc.text("Pending Requests: " + counts.pendingCount, 10, 20);
		doc.text("Ongoing Requests: " + counts.ongoingCount, 10, 30);
		doc.text("Resolved Requests: " + counts.resolvedCount, 10, 40);

		doc.text("Request Data:", 10, 50);

		const styles = {
			font: "Arial",
			fontStyle: "normal",
			fontSize: 10,
			cellPadding: 1.5,
		};

		// Apply styles to the table
		doc.autoTable({
			startY: 60,
			head: [
				[
					"Request ID",
					{ content: "User Name", styles: { halign: "left" } },
					{ content: "Building", styles: { halign: "left" } },
					"Room",
					"Equipment",
					"Status",
					"Date",
				],
			],
		});

		// Table body
		doc.autoTable({
			startY: doc.lastAutoTable.finalY + 2,
			body: allRequest.map((request) => [
				{ content: request.requestID, styles: { halign: "right" } },
				{ content: request.userName, styles: { halign: "right" } },
				{ content: request.building, styles: { halign: "right" } },
				{ content: request.room, styles: { halign: "right" } },
				{ content: request.equipment, styles: { halign: "right" } },
				{ content: request.status, styles: { halign: "right" } },
				{
					content: new Date(request.date).toLocaleDateString(),
					styles: { halign: "right" },
				},
			]),
			styles: styles,
		});
		doc.save("RequestData.pdf");
	};

	return (
		<div>
			<AdminHomeFrame />

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginTop: "7%",
				}}
			>
				<div>
					<Button
						variant="contained"
						onClick={exportDashboardPDF}
						style={{ margin: "10px 0 20px 455%" , width: "100%", backgroundColor: "Red", }}
					>
						Export PDF
					</Button>
				</div>
				<Grid
					container
					spacing={2}
					style={{
						marginLeft: "45%",
						marginRight: "50px",
						marginBottom: "-100px",
					}}
				>
					<Grid item xs={2.2}></Grid>
					<Grid item xs={2.5}>
						<Card
							style={{
								boxShadow: "0px 2px 3px 0px rgba(0,0,0,1)",
								width: "60%",
								height: "100%",
								marginLeft: "40%",
							}}
						>
							<CardContent style={{ textAlign: "center" }}>
								<Typography
									style={{
										FontStyle: "strong",
										fontFamily: "Poppins",
										fontSize: "2em",
									}}
								>
									{counts.totalCount}
								</Typography>
								<Typography
									style={{
										color: "#000",
										fontFamily: "Poppins",
										fontSize: "13px",
									}}
								>
									TOTAL REQUEST
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={1.5}>
						<Card
							style={{
								backgroundColor: "#FFF",
								boxShadow: "0px 2px 3px 0px rgba(0,0,0,1)",
								width: "100%",
								height: "100%",
							}}
						>
							<CardContent style={{ textAlign: "center" }}>
								<Typography
									style={{
										FontStyle: "strong",
										fontFamily: "Poppins",
										fontSize: "2em",
									}}
								>
									{counts.pendingCount}
								</Typography>
								<Typography
									style={{
										color: "#FF5733",
										fontFamily: "Poppins",
										fontStyle: "strong",
										fontSize: "13px",
									}}
								>
									TOTAL PENDING
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={1.5}>
						<Card
							style={{
								backgroundColor: "#FFF",
								boxShadow: "0px 2px 3px 0px rgba(0,0,0,1)",
								paddingTop: "2px",
								width: "100%",
								height: "100%",
							}}
						>
							<CardContent style={{ textAlign: "center" }}>
								<Typography
									style={{
										FontStyle: "strong",
										fontFamily: "Poppins",
										fontSize: "2em",
									}}
								>
									{counts.ongoingCount}
								</Typography>
								<Typography
									variant="h6"
									style={{
										color: "#FFEB3B",
										fontFamily: "Poppins",
										fontSize: "13px",
										FontStyle: "strong",
									}}
								>
									TOTAL ONGOING
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={2}>
						<Card
							style={{
								backgroundColor: "#FFF",
								boxShadow: "0px 2px 3px 0px rgba(0,0,0,1)",
								width: "70%",
								height: "100%",
							}}
						>
							<CardContent style={{ textAlign: "center" }}>
								<Typography
									style={{
										FontStyle: "strong",
										fontFamily: "Poppins",
										fontSize: "2em",
									}}
								>
									{counts.resolvedCount}
								</Typography>
								<Typography
									variant="h6"
									style={{
										color: "#4CAF50",
										fontFamily: "Poppins",
										FontStyle: "strong",
										fontSize: "13px",
									}}
								>
									TOTAL RESOLVED
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</div>
			<div className="mt-24 ml-64">
				<Grid container spacing={3} style={{ marginLeft: "1.5px" }}>
					<Grid item xs={6} style={{ paddingLeft: "3%", marginTop: "35px" }}>
						<Doughnut />
					</Grid>
					<Grid item xs={6} style={{ padding: "5%", marginRight: 0 }}>
						<Pie />
					</Grid>
				</Grid>
				<Grid
					item
					xs={12}
					className="mt-4"
					style={{ padding: "0 70px", marginLeft: "50px" }}
				>
					<Stack />
				</Grid>
			</div>
		</div>
	);
};

export default AdminDashboard;
