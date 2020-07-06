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
		title: "CODING QUIZ",
		stack: "Html CSS JavaScript",
		description:
			"With Coding Quiz App users can test their knowledge of various programming languages as JavaScript, PHP, Java. This quiz consists of 10 questions for each programming language with single or multiple-choice answers.",
		appUrl: "https://simonadulgheru.github.io/Coding-Quiz-App/",

		github: "https://github.com/SimonaDulgheru/Coding-Quiz-App",
		imgSrc:
			"https://user-images.githubusercontent.com/48987979/82120114-bfa11d00-977b-11ea-9bdb-d8c16acc8979.jpg",
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
		title: "STUDENT REGISTER",
		stack: "ES6+ OOP",
		description:
			"This is a Lesson Planner application which allow users to define a teacher, a subject and also, records the attendance of students. Users can print the attendance sheet for further use. ",
		appUrl: "https://simonadulgheru.github.io/Student-Register/",
		github: "https://github.com/SimonaDulgheru/Student-Register",
		imgSrc:
			"https://user-images.githubusercontent.com/48987979/83054614-9d947e00-a04a-11ea-87c0-8eb349c42dca.JPG",
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
	{
		title: "EMPLOYEE TABLE REACT",
		stack: "SASS React.js",
		description:
			"This is a directory of company employees that is searchable and sortable by First / Last name, Department, Position, Email.",
		appUrl: "https://employee-directory-sd.herokuapp.com/",
		github: "https://github.com/SimonaDulgheru/Employee-Table-React",
		imgSrc:
			"https://user-images.githubusercontent.com/48987979/86634460-cacd3800-bfc9-11ea-9fd7-1bbf9f76aaf9.JPG",
	},
	{
		title: "RECRUITMENT APP",
		stack: "MERN",
		description:
			"A MERN stack application that includes authentication and profile generator.",
		appUrl: "https://afternoon-peak-27846.herokuapp.com/",
		github: "https://github.com/SimonaDulgheru/Recruitment-App",
		imgSrc:
			"https://user-images.githubusercontent.com/48987979/77226817-0bb45480-6b73-11ea-8c9f-d81eb8df3e24.JPG",
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
						className="column-portfolio-mobile  column-portfolio-desktop column-portfolio-tb">
						<div className="portfolio-image portfolio-image-tb">
							<a href={app.appUrl}>
								<img
									data-aos="fade-right"
									className="portfolio-images-desktop  portfolio-images portfolio-images-tb"
									src={app.imgSrc}
									alt={app.title}
								/>
							</a>
							<div className="middle middle-tb middle-mob-hide">
								<p className="text">Live Preview</p>
							</div>
						</div>

						<div className="about-project-desktop about-project-mobile about-project-tb">
							<p className="strong strong-tb">
								<strong>{app.title}</strong>
							</p>
							<p className="stack-used stack-used-tb">
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
