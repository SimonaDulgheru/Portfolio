import React, { Component } from "react";

import { Link } from "react-router-dom";
import "../css/style.css";

export default class Navbar extends Component {
	state = { showmenu: false };

	toggleMenu = () => {
		this.setState({
			showMenu: !this.state.showMenu,
		});
	};
	render() {
		const menu = this.state.showMenu ? "hide" : "change";
		return (
			<div>
				<header className="header header-tablet header-desktop">
					<h1 className="logo logo-tablet logo-desktop">
						{" "}
						Simona Dulgheru
					</h1>
					<nav className={`nav nav-tablet nav-desktop  ${menu}`}>
						<div
							onClick={this.toggleMenu}
							className={`hamburger-menu `}>
							<div className="line line-1"></div>
							<div className="line line-2"></div>
							<div className="line line-3"></div>
						</div>
						<ul
							className={`nav-links  change nav-links-tablet nav-links-desktop`}>
							<li className="nav-item">
								<Link to="/" className="link ">
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/portfolio" className="link ">
									Portfolio
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/contact" className="link">
									Contact
								</Link>
							</li>
						</ul>
					</nav>
				</header>
			</div>
		);
	}
}
// const Navbar = () => {
// 	return (

// 	);
// };

// export default Navbar;
