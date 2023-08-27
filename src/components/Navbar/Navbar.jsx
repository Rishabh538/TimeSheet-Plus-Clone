import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<nav className="flex space-between">
				<div className="left flex items-center">

					<h3 className="navbar-brand">Timesheet Plus</h3>
				</div>
				<div className="right flex items-center">
					<div className="mx-3">
						<h3 className="navbar-brand">
							<NavLink to="/login">Login</NavLink>
						</h3>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
