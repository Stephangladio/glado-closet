import React, { useState } from 'react'

import Title from "../../components/Title"
import style from "./style.module.css"

const Login = () => {
	const [value, setValue] = useState({
		username: "",
		password: ""
	})

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Login successfully")
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className={style.box}>
				<div className={style.index}>
					<Title className={style.title}>Sign In</Title>
					<label className={style.label}>Username:</label>
					<input
						type="name"
						placeholder="Username"
						className={style.input}
						value={value.username}
						onChange={(e) => setValue(e.target.value)}
					/>
					<div className={style.password}>
						<label className={style.label}>Password:</label>
						<input
							type="password"
							placeholder="Password"
							className={style.input}
							value={value.password}
							onChange={(e) => setValue(e.target.value)}
						/>
					</div>
					<button type="submit" className={style.button}>submit</button>
				</div>
			</div>
		</form>
	)
}

export default Login;