import React, { useEffect } from "react";
import email from "../images/email.png";
import github from "../images/github.png";
import linkedIn from "../images/linkedIn.png";

import "../css/style.css";
import "../css/projects.css";
import Aos from "aos";
import "aos/dist/aos.css";

const portfolio = [
	{
		title: "PASSWORD GENERATOR",
		stack: "Html CSS JavaScript",
		description:
			"An application that generates a random password based on user-selected criteria.",
		appUrl: "https://simonadulgheru.github.io/Password-Generator/",
		iconGitHub: "https://github.com/SimonaDulgheru?tab=repositories",
		github: "https://github.com/SimonaDulgheru/Password-Generator",
		imgSrc:
			"https://user-images.githubusercontent.com/48987979/67195051-292c9900-f3f0-11e9-9c04-8c42916181aa.jpg",
	},
	{
		title: "DAILY PLANNER",
		stack: "Html CSS JavaScript API",
		description:
			"A web application that provides a fully customizable To-Do list, together with a Map to find places and also to get information about the Weather at the user current location.",
		appUrl: "https://simonadulgheru.github.io/Daily-Planner/",
		github: "https://github.com/SimonaDulgheru/Daily-Planner",
		imgSrc:
			"https://user-images.githubusercontent.com/48987979/77826166-ad085100-7105-11ea-8bb2-5bd03add2e05.JPG",
	},
	{
		title: "GITHUB PDF GENERATOR",
		stack: "ES6+ Node.js",
		description:
			"A command-line application that dynamically generates a PDF with a user’s profile from a GitHub.",
		appUrl:
			"https://user-images.githubusercontent.com/48987979/72345550-f67efd80-36cb-11ea-9315-240eb8bb5376.gif",
		github: "https://github.com/SimonaDulgheru/Pdf-Node-Portfolio",
		imgSrc:
			"https://user-images.githubusercontent.com/48987979/72345550-f67efd80-36cb-11ea-9315-240eb8bb5376.gif",
	},
	{
		title: "STUDENT REGISTER",
		stack: "ES6+ OOP",
		description:
			"This is a Lesson Planner application which allows the user to define a lesson, a teacher and also, records the attendance of students.",
		appUrl: "https://github.com/SimonaDulgheru/Student-Lesson-Register",
		github: "https://github.com/SimonaDulgheru/Student-Lesson-Register",
		imgSrc:
			"https://user-images.githubusercontent.com/48987979/70457185-959a4f00-1aa7-11ea-8fc9-aa884ea4174b.png",
	},
	{
		title: "NOTE TAKER",
		stack: "ES6+ MySQL",
		description:
			"An application that allows users to keep track of a lot of information, save and delete Notes.",
		appUrl: "https://frozen-cove-51764.herokuapp.com/",
		github: "https://github.com/SimonaDulgheru/Note-Taker",
		imgSrc:
			"https://user-images.githubusercontent.com/48987979/71690698-5b1d8c80-2d9d-11ea-8134-b4d15dc43e28.png",
	},

	{
		title: "POLL APP",
		stack: "HTML CSS Node.js Express.js ES6+ MySQL Sequelize MVC",
		description:
			"A web application that allow users to ask friends about different topics by creating their own Polls, send invitation to vote on created Poll, choose from set questions (own API).",
		appUrl: "http://stark-plateau-24544.herokuapp.com/new",
		github: "https://github.com/SimonaDulgheru/Poll-Project",
		imgSrc:
			"https://user-images.githubusercontent.com/48987979/81937841-07913a00-95ec-11ea-8910-122b0e0851d7.jpg",
	},
	{
		title: "WORKOUT TRACKER",
		stack: "HTML CSS Node.js Express.js ES6+ MongoDB Mongoose",
		description:
			"This is an application that let users view, create and track daily workouts.",
		appUrl: "https://arcane-wildwood-09350.herokuapp.com/",
		github: "https://github.com/SimonaDulgheru/Workout-Tracker",
		imgSrc:
			"https://user-images.githubusercontent.com/48987979/81669215-cf4bf900-943d-11ea-9145-5eb2ea70ca4b.jpg",
	},
];

const Projects = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<React.Fragment>
			<div className="wrapper-portfolio wrapper-tablet-portfolio wrapper-desktop-portfolio">
				<h2 className="portfolio  portfolio-desktop">Portfolio</h2>

				{portfolio.map((app) => (
					<div
						data-aos="slide-up"
						className="column-portfolio-mobile  column-portfolio-desktop">
						<div className="portfolio-image">
							<a href={app.appUrl}>
								<img
									data-aos="fade-right"
									className="portfolio-images-desktop  portfolio-images"
									src={app.imgSrc}
									alt={app.title}
								/>
							</a>
						</div>

						<div className="about-project-desktop about-project-mobile">
							<p className="strong ">
								<strong>{app.title}</strong>
							</p>
							<p className="stack-used">
								<strong>{app.stack}</strong>
							</p>
							<p className="app-description">{app.description}</p>
							<a
								href={app.github}
								target="_blank"
								rel="noopener noreferrer">
								<img
									src={github}
									className=" icon-github-portfolio icon-github-portfolio-mobile"
									alt={app.title}
								/>
							</a>
						</div>
					</div>
				))}
				<div
					data-aos="slide-up"
					className="contacts contacts-portfolio ">
					<div className="contact-links contact-links-portfolio ">
						<a
							href="https://github.com/SimonaDulgheru?tab=repositories"
							target="_blank"
							rel="noopener noreferrer">
							<img
								src={github}
								className="icon-github"
								alt="Github-link"
							/>
						</a>
						<a
							href="mailto:s.c.dulgheru@gmail.com"
							target="_blank"
							rel="noopener noreferrer">
							<img
								src={email}
								className="icon-mail"
								alt="Email-link"
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/simona-dulgheru-36777ba3/"
							target="_blank"
							rel="noopener noreferrer">
							<img
								src={linkedIn}
								className="icon-linkedin"
								alt="LinkedIn-link"
							/>
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
