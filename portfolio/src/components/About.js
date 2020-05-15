import React, { useEffect } from "react";
import email from "../images/email.png";
import github from "../images/github.png";
import linkedIn from "../images/linkedIn2.png";
import "../css/projects.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div>
			<div className="wrapper-index  wrapper-desktop-index">
				<h2>About Me</h2>
				<div
					data-aos="fade-right"
					className="column-text  column-text-desktop">
					<p id="about-paragraph about-paragraph-desktop ">
						Full Stack Developer adept at building responsive Web
						Applications from Front to Back with medical background.
						<br />
						<br />
						Passionate about learning new technologies, bringing
						ideas to life, and working with dedicated teams to build
						efficient and robust applications suited to the user’s
						needs.
						<br />
						<br /> I have superior focus and attention to detail,
						also knowledge of <strong>HTML</strong>,
						<strong>CSS</strong>, <strong>JavaScript/jQuery</strong>
						,<strong>ES6+</strong>,{" "}
						<strong>Node.js/Express.js</strong>,
						<strong> React.js</strong>,<strong> MySQL</strong>,
						<strong>MogoDB/ Mongoose</strong> . <br />
						<br />
						In my previous roles, I have been involved in running
						and managing several projects and teams. I am capable of
						gathering requirements and prioritising tasks in order
						to deliver value iteratively. <br />
						<br />
						My core strengths include, but are not limited to the
						following:
					</p>
					<ul className="skills-list">
						<li>
							Having an approachable and professional manner at
							all times.
						</li>
						<li>
							The written and verbal communication skills required
							to articulate effectively to your Technology Team.
						</li>
						<li>Creativity and willingness to learn.</li>
						<li>
							Adaptability and implementing new designs when
							required.
						</li>
					</ul>
					<p id="about-paragraph about-paragraph-desktop ">
						For the future, I wish to continue learning and grow in
						a creative and collaborative environment.
					</p>
				</div>
				<div className="resume-contact ">
					<h3
						data-aos="fade-right"
						className="resume resume-tablet resume-desktop">
						<a
							href="https://drive.google.com/file/d/192e3UZ-daAs1xedxH_2uOnOsr6s376E0/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer">
							Resume
						</a>
					</h3>
				</div>
				<div data-aos="fade-right" className="contacts contacts-mobile">
					<div className="contact-links contact-links-mobile">
						<a
							data-aos="zoom-in"
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
		</div>
	);
};

export default About;
