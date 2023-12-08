import React from "react";
import AdminHomeFrame from "../../components/AdminHomeFrame";

const AdminDashboard = () => {
	return (
		<div>
			<AdminHomeFrame />
			<div className="mt-24" style={{ marginLeft: "-10%", marginTop: "10%" }}>
				<div className="ml-12"></div>
                <h1>admin dashboard</h1>
			</div>
		</div>
	);
};

export default AdminDashboard;