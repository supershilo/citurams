import React from "react";
import AdminHomeFrame from "../../components/AdminHomeFrame";
import CreateStaffForm from "../../components/AdminAddStaffForm";

const AdminCreateStaff = () => {
	return (
		<div>
			<AdminHomeFrame />
			<div className="mt-24" style={{ marginLeft: "-10%", marginTop: "10%" }}>
				<div className="ml-12"></div>
				<CreateStaffForm />
			</div>
		</div>
	);
};

export default AdminCreateStaff;