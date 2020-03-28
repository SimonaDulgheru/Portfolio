import React from "react";
import email from "../images/email.png";
import github from "../images/github.png";
import linkedIn from "../images/linkedIn.png";
import "../css/style.css";
import "../css/projects.css";

const portfolio = [
	{
		title: "Password Generator",
		appUrl: "https://simonadulgheru.github.io/Password-Generator/",
		github: "https://github.com/SimonaDulgheru/Password-Generator",
		imgSrc:
			"https://user-images.githubusercontent.com/48987979/67195051-292c9900-f3f0-11e9-9c04-8c42916181aa.jpg"
	},
	{
		title: "Daily Planner",
		appUrl: "https://simonadulgheru.github.io/Daily-Planner/",
		github: "https://github.com/SimonaDulgheru/Daily-Planner",
		imgSrc:
			"https://user-images.githubusercontent.com/48987979/77826166-ad085100-7105-11ea-8bb2-5bd03add2e05.JPG"
	},
	{
		title: "Note Taker",
		appUrl: "https://frozen-cove-51764.herokuapp.com/",
		github: "https://github.com/SimonaDulgheru/Note-Taker",
		imgSrc:
			"https://user-images.githubusercontent.com/48987979/71690698-5b1d8c80-2d9d-11ea-8134-b4d15dc43e28.png"
	},
	{
		title: "Student Lesson Register",
		appUrl: "https://github.com/SimonaDulgheru/Student-Lesson-Register",
		github: "https://github.com/SimonaDulgheru/Student-Lesson-Register",
		imgSrc:
			"https://user-images.githubusercontent.com/48987979/70457185-959a4f00-1aa7-11ea-8fc9-aa884ea4174b.png"
	},
	{
		title: "Employee Management System",
		appUrl:
			"https://user-images.githubusercontent.com/48987979/73276538-c31a9380-41e0-11ea-8eda-51f6114c9121.gif",
		github: "https://github.com/SimonaDulgheru/Employee-Management-System",
		imgSrc:
			"https://user-images.githubusercontent.com/48987979/73276538-c31a9380-41e0-11ea-8eda-51f6114c9121.gif"
	},
	{
		title: "Recruitment App",
		appUrl: "https://afternoon-peak-27846.herokuapp.com/",
		github: "https://github.com/SimonaDulgheru/Recruitment-App",
		imgSrc:
			"https://user-images.githubusercontent.com/48987979/77226817-0bb45480-6b73-11ea-8c9f-d81eb8df3e24.JPG"
	}
];

const Projects = () => {
	return (
		<React.Fragment>
			<h2 className='portfolio  portfolio-desktop'>Portfolio</h2>

			{portfolio.map(app => (
				<div className='wrapper-portfolio wrapper-tablet-portfolio wrapper-desktop-portfolio'>
					<div className='column-portfolio-mobile  column-portfolio-desktop'>
						<a href={app.appUrl}>
							<img
								className='portfolio-images-desktop  portfolio-images'
								src={app.imgSrc}
								alt={app.title}
							/>
						</a>

						<div className='about-project-desktop about-project-mobile'>
							<p className='strong'>
								<a href={app.github}>
									<strong>{app.title}</strong>
								</a>
							</p>
						</div>
					</div>
					<div class='contacts contacts-mobile'>
						<div class='resume-contacts'>
							<h3 class='resume resume-tablet resume-desktop'>
								<a
									href='https://drive.google.com/file/d/1_q-1aaqGq0epz6FJ-ArKbhkPVG0NWKXE/view?usp=sharing'
									target='_blank'
									rel='noopener noreferrer'>
									Resume
								</a>
							</h3>
						</div>
						<div class='contact-links contact-links-mobile'>
							<a
								href='https://github.com/SimonaDulgheru'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									src={github}
									class='icon-github'
									alt='Github-link'
								/>
							</a>
							<a
								href='mailto:s.c.dulgheru@gmail.com'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									src={email}
									class='icon-mail'
									alt='Email-link'
								/>
							</a>
							<a
								href='https://www.linkedin.com/in/simona-dulgheru-36777ba3/'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									src={linkedIn}
									class='icon-linkedin'
									alt='LinkedIn-link'
								/>
							</a>
						</div>
					</div>
				</div>
			))}
		</React.Fragment>
	);
};

export default Projects;
