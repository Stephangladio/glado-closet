import { Navigate, Outlet } from "react-router-dom";

import { authToken } from "../../helper/storage";

const Guest = () => {
	if (authToken) {
		return <Navigate to={"/"} replace />;
	}

	return (
		<div>
			<Outlet />
		</div>
	);
};

export default Guest;
