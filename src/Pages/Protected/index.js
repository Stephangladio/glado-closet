import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import { authToken } from "../../helper/storage";

const Protected = () => {
    if (authToken === undefined) {
        return <Navigate to={"/guest"} replace />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Protected;
