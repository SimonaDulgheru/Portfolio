import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import "./script";

import "./App.css";

function App() {
	return (
		<Router>
			<div>
				<Navbar />

				<Route exact path='/about' component={About} />
				<Route exact path='/portfolio' component={Portfolio} />
				<Route exact path='/contact' component={Contact} />

				<Footer />
			</div>
		</Router>
	);
}

export default App;
