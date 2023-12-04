import React from "react";
import { styled } from "@mui/system";
import {
	AppBar,
	Toolbar,
	Drawer,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import BusinessIcon from "@mui/icons-material/Business";

const drawerWidth = 300;

const Root = styled("div")(({ theme }) => ({
	display: "flex",
}));

const MainAppBar = styled(AppBar)(({ theme }) => ({
	width: `calc(100% - ${drawerWidth}px)`,
	marginLeft: drawerWidth,
}));

const MainDrawer = styled(Drawer)({
	width: drawerWidth,
	flexShrink: 0,
	"& .MuiDrawer-paper": {
		width: drawerWidth,
		backgroundColor: "#FC3031",
		color: "white",
	},
});

const DrawerPaper = styled("div")({
	width: drawerWidth,
	position: "fixed",
	display: "flex",
	flexDirection: "column",
	height: "100%",
	backgroundColor: "#FC3031",
	color: "white",
});

const AdminHomeFrame = () => {
	const navigate = useNavigate();

	const handleLogoClick = () => {
		navigate("/index");
	};

	const handleManageUserClick = () => {
		navigate("/add-User");
	};

	const handleManageRequestClick = () => {
		navigate("/manage-request");
	};

	const handleDashboardClick = () => {
		navigate("/dashboard");
	};

	const handleManageFacilitiesClick = () => {
		navigate("/manage-facilities");
	};

	const handleLogoutClick = () => {
		navigate("/");
	};

	return (
		<Root>
			{/* App Bar */}
			<MainAppBar
				position="fixed"
				sx={{ backgroundColor: "white", color: "white" }}
			>
				<Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
					<div>
						<img
							src="/LoginPage/CITURAMS.png"
							alt="Logo"
							onClick={handleLogoClick}
							style={{ height: "55px", cursor: "pointer" }}
						/>
					</div>
				</Toolbar>
			</MainAppBar>
			<Divider />

			{/* Left Drawer (Navigation Drawer) */}
			<MainDrawer variant="permanent" component="nav" position="fixed">
				<DrawerPaper>
					{/* User Profile Section */}
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							marginBottom: "20px",
							marginTop: "10px",
						}}
					>
						<div>
							<img
								src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" // Replace with the actual path to the profile image
								alt="Profile"
								className="rounded-full ring-2 ring-white"
								style={{
									borderRadius: "50%",
									height: "70px",
									width: "70px",
									marginBottom: "10px",
								}}
							/>
						</div>
						<div className="text-white font-bold">Juan De La Cruz</div>
						<div className="text-white ">juandelacruz@cit.edu</div>
					</div>

					<List>
						<ListItem button>
							<ListItemIcon style={{ color: "white" }}>
								<DashboardIcon />
							</ListItemIcon>
							<ListItemText
								primary="Dashboard"
								onClick={handleDashboardClick}
								style={{ fontFamily: "'Poppins', sans-serif" }}
							/>
						</ListItem>
						<ListItem button>
							<ListItemIcon style={{ color: "white" }}>
								<AssignmentIcon />
							</ListItemIcon>
							<ListItemText
								primary="Manage Request"
								onClick={handleManageRequestClick}
								style={{ fontFamily: "'Poppins', sans-serif" }}
							/>
						</ListItem>
						<List>
							<ListItem button style={{ marginBottom: "10px" }}>
								<ListItemIcon style={{ color: "white" }}>
									<PeopleIcon />
								</ListItemIcon>
								<ListItemText
									primary="Manage User"
									onClick={handleManageUserClick}
								/>
							</ListItem>
							<ListItem button>
								<ListItemIcon style={{ color: "white" }}>
									<BusinessIcon />
								</ListItemIcon>
								<ListItemText
									primary="Manage Facilities"
									onClick={handleManageFacilitiesClick}
								/>
							</ListItem>
						</List>

						<ListItem button style={{ marginTop: "80px" }}>
							<ListItemIcon style={{ color: "white" }}>
								<LogoutIcon />
							</ListItemIcon>
							<ListItemText primary="Logout" onClick={handleLogoutClick} />
						</ListItem>
					</List>

					{/* Image at the bottom */}
					<div
						style={{
							marginTop: "auto",
							textAlign: "left",
							overflow: "hidden",
						}}
					>
						<img
							src="/LoginPage/wildcat.png"
							alt="wildcat logo"
							style={{
								marginLeft: "-35%",
								width: "120%",
								height: "auto",
							}}
						/>
					</div>
				</DrawerPaper>
			</MainDrawer>
		</Root>
	);
};

export default AdminHomeFrame;
