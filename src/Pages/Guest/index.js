import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import { authToken } from "../../helper/storage";

import style from "./style.module.css";

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
