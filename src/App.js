import React, { lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";

// Layouts
const Guest = lazy(() => import("./Pages/Guest"));
const Protected = lazy(() => import("./Pages/Protected"));

// Pages
const Login = lazy(() => import("./Pages/Guest/Login"));
const NotFound = lazy(() => import("./Pages/NotFound"));

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/guest" element={<Guest />}>
                    <Route index element={<Login />} />
                    <Route path="register" element={<>Register</>} />
                    <Route
                        path="forgot-password"
                        element={<>forgot password</>}
                    />
                </Route>
                <Route path="/" element={<Protected />}>
                    <Route index element={<>Home</>} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/guest" element={<Guest />}>
					<Route index element={<Login />} />
					<Route path="register" element={<>Register</>} />
					<Route
						path="forgot-password"
						element={<>forgot password</>}
					/>
				</Route>
				<Route path="/" element={<Protected />}>
					<Route index element={<>Home</>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
