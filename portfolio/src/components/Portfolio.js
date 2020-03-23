import React from "react";
import Navbar from "./Navbar";
import Password from "../images/Password.jpg";
import linkedIn from "../images/linkedIn.png";
import email from "../images/email.png";
import github from "../images/github.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
	return (
		<div>
			<div className='wrapper-portfolio wrapper-tablet-portfolio wrapper-desktop-portfolio'>
				<h2 className='portfolio portfolio-tablet portfolio-desktop'>
					Portfolio
				</h2>
				<div className='column-portfolio-mobile column-portfolio-tablet column-portfolio-desktop'>
					<Link
						to='https://simonadulgheru.github.io/Password-Generator/'
						target='_blank'>
						<img
							className='portfolio-images-desktop portfolio-images-tablet portfolio-images'
							src={Password}
							alt='Password Generator'
						/>
					</Link>
					<div className='about-project-desktop about-project-mobile about-project-2-tablet'>
						<p className='strong'>
							<strong> PASSWORD GENERATOR</strong>
						</p>
						<p className='stack-used'>Html CSS JavaScript</p>
						<p className='app-description'>
							An application that generates a random password
							based on user-selected criteria.
						</p>
						<Link
							to='https://github.com/SimonaDulgheru/Password-Generator'
							target='_blank'>
							<img
								src={github}
								className=' icon-github-portfolio icon-github-portfolio-mobile'
								alt='Github-link'
							/>
						</Link>
					</div>
				</div>
				<div className='column-portfolio-mobile column-portfolio-tablet column-portfolio-desktop'>
					<a
						href='https://simonadulgheru.github.io/Daily-Planner/'
						target='_blank'>
						<img
							className='portfolio-images-desktop portfolio-images-tablet portfolio-images'
							src='images/Daily Planner.jpg'
							alt='Daily Planner App'
						/>
					</a>
					<div className='about-project-desktop about-project-mobile about-project-1-tablet'>
						<p className='strong'>
							<strong>DAILY PLANNER</strong>
						</p>
						<p className='stack-used'>Html CSS JavaScript API</p>
						<p className='app-description'>
							A web application that provides a fully customizable
							To-Do list, together with a Map to find places and
							also to get information about the Weather at the
							user current location.
						</p>
						<a
							href='https://github.com/SimonaDulgheru/Daily-Planner'
							target='_blank'>
							<img
								src={github}
								className=' icon-github-portfolio icon-github-portfolio-mobile'
								alt='Github-link'
							/>
						</a>
					</div>
				</div>
				<div className='column-portfolio-mobile  column-portfolio-tablet column-portfolio-desktop'>
					<a
						href='https://user-images.githubusercontent.com/48987979/72345550-f67efd80-36cb-11ea-9315-240eb8bb5376.gif'
						target='_blank'>
						<img
							className='portfolio-images-desktop portfolio-images-tablet portfolio-images'
							src='images/Pdf-Generator.jpg'
							alt='Weather App'
						/>
					</a>
					<div className='about-project-desktop about-project-mobile about-project-3-tablet'>
						<p className='strong'>
							<strong>GITHUB PDF GENERATOR</strong>
						</p>
						<p className='stack-used'>ES6+ Node.js </p>
						<p className='app-description'>
							A command-line application that dynamically
							generates a PDF with a user’s profile from a GitHub.
						</p>
						<a
							href='https://github.com/SimonaDulgheru/Pdf-Node-Portfolio'
							target='_blank'>
							<img
								src={github}
								className=' icon-github-portfolio icon-github-portfolio-mobile'
								alt='Github-link'
							/>
						</a>
					</div>
				</div>
				<div className='column-portfolio-mobile column-portfolio-tablet column-portfolio-desktop'>
					<a
						href='https://github.com/SimonaDulgheru/Student-Lesson-Register'
						target='_blank'>
						<img
							className='portfolio-images-desktop portfolio-images-tablet portfolio-images'
							src='images/Stu-Lesson.jpg'
							alt='Coming Soon'
						/>
					</a>
					<div className='about-project-desktop about-project-mobile about-project-4-tablet'>
						<p className='strong'>
							<strong>STUDENT REGISTER</strong>
						</p>
						<p className='stack-used'>ES6+ OOP</p>
						<p className='app-description'>
							This is a Lesson Planner application which allows
							the user to define a lesson, a teacher and also,
							records the attendance of students.{" "}
						</p>
						<a
							href='https://github.com/SimonaDulgheru/Student-Lesson-Register'
							target='_blank'>
							<img
								src={github}
								className='icon-github-portfolio icon-github-portfolio-mobile'
								alt='Github-link'
							/>
						</a>
					</div>
				</div>
				<div className='column-portfolio-mobile column-portfolio-tablet column-portfolio-desktop'>
					<a
						href='https://frozen-cove-51764.herokuapp.com/'
						target='_blank'>
						<img
							className='portfolio-images-desktop portfolio-images-tablet portfolio-images'
							src='images/Note-Taker.jpg'
							alt='Coming Soon'
						/>
					</a>
					<div className='about-project-desktop about-project-mobile about-project-5-tablet'>
						<p className='strong'>
							<strong>NOTE TAKER</strong>
						</p>
						<p className='stack-used'>
							HTML CSS ES6+ Node.js Express.js
						</p>
						<p className='app-description'>
							An application that allows users to keep track of a
							lot of information, save and delete Notes.
						</p>
						<a
							href='https://github.com/SimonaDulgheru/Note-Taker'
							target='_blank'>
							<img
								src={github}
								className='icon-github-portfolio icon-github-portfolio-mobile'
								alt='Github-link'
							/>
						</a>
					</div>
				</div>
				<div className='column-portfolio-mobile column-portfolio-tablet column-portfolio-desktop'>
					<a
						href='https://user-images.githubusercontent.com/48987979/73276538-c31a9380-41e0-11ea-8eda-51f6114c9121.gif'
						target='_blank'>
						<img
							className='portfolio-images-desktop portfolio-images-tablet portfolio-images'
							src='images/Manager System.jpg'
							alt='Coming Soon'
						/>
					</a>
					<div className='about-project-desktop about-project-mobile about-project-5-tablet'>
						<p className='strong'>
							<strong>EMPLOYEE TRACKER</strong>
						</p>
						<p className='stack-used'>ES6+ MySQL</p>
						<p className='app-description'>
							An application for business owners that allows them
							to view and manage the departments, roles, and
							employees in their company, so that they can
							organize and plan their business.
						</p>
						<a
							href='https://github.com/SimonaDulgheru/Employee-Management-System'
							target='_blank'>
							<img
								src={github}
								className='icon-github-portfolio icon-github-portfolio-mobile'
								alt='Github-link'
							/>
						</a>
					</div>
				</div>
				<div className='column-portfolio-mobile column-portfolio-tablet column-portfolio-desktop'>
					<a
						href='http://stark-plateau-24544.herokuapp.com/new'
						target='_blank'>
						<img
							className='portfolio-images-desktop portfolio-images-tablet portfolio-images'
							src='images/Poll App.jpg'
							alt='Coming Soon'
						/>
					</a>
					<div className='about-project-desktop about-project-mobile about-project-5-tablet'>
						<p className='strong'>
							<strong>POLL APP</strong>
						</p>
						<p className='stack-used'>
							HTML CSS Node.js Express.js ES6+ MySQL Sequelize MVC
						</p>
						<p className='app-description'>
							A web application that allow users to ask friends
							about different topics by creating their own Polls,
							send invitation to vote on created Poll, choose from
							set questions (own API).
						</p>

						<a
							href='https://github.com/SimonaDulgheru/Poll-Project'
							target='_blank'>
							<img
								src={github}
								className='icon-github-portfolio icon-github-portfolio-mobile'
								alt='Github-link'
							/>
						</a>
					</div>
				</div>
				<div className='column-portfolio-mobile column-portfolio-tablet column-portfolio-desktop'>
					<a
						href='https://arcane-wildwood-09350.herokuapp.com/'
						target='_blank'>
						<img
							className='portfolio-images-desktop portfolio-images-tablet portfolio-images'
							src='images/Workout-Tracker.jpg'
							alt='Coming Soon'
						/>
					</a>
					<div className='about-project-desktop about-project-mobile about-project-5-tablet'>
						<p className='strong'>
							<strong>WORKOUT TRACKER</strong>
						</p>
						<p className='stack-used'>
							HTML CSS Node.js Express.js ES6+ MongoDB Mongoose
						</p>
						<p className='app-description'>
							This is an application that let users view, create
							and track daily workouts.{" "}
						</p>
						<a
							href='https://github.com/SimonaDulgheru/Workout-Tracker'
							target='_blank'>
							<img
								src={github}
								className='icon-github-portfolio icon-github-portfolio-mobile'
								alt='Github-link'
							/>
						</a>
					</div>
				</div>
				<div className='contacts contacts-mobile'>
					<div className='resume-contacts'>
						<h3 className='resume resume-tablet resume-desktop'>
							<a
								href='https://drive.google.com/file/d/1_q-1aaqGq0epz6FJ-ArKbhkPVG0NWKXE/view?usp=sharing'
								target='_blank'>
								Resume
							</a>
						</h3>
					</div>
					<div className='contact-links contact-links-mobile'>
						<a
							href='https://github.com/SimonaDulgheru?tab=repositories'
							target='_blank'>
							<img
								src={github}
								className='icon-github'
								alt='Github-link'
							/>
						</a>
						<a href='mailto:s.c.dulgheru@gmail.com' target='_blank'>
							<img
								src={email}
								className='icon-mail'
								alt='Email-link'
							/>
						</a>
						<a
							href='https://www.linkedin.com/in/simona-dulgheru-36777ba3/'
							target='_blank'>
							<img
								src={linkedIn}
								className='icon-linkedin'
								alt='LinkedIn-link'
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
