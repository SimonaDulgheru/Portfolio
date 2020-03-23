import React from "react";
import Navbar from "./Navbar";

const About = () => {
	return (
		<div>
			<div className='wrapper-index wrapper-tablet-index wrapper-desktop-index'>
				<h2>About Me</h2>
				<div className='column-text column-text-tablet column-text-desktop-1'>
					<p id='about-paragraph about-paragraph-desktop about-paragraph-tablet'>
						Full Stack Developer adept at building responsive Web
						Applications from Front to Back with medical background.
						Passionate about learning new technologies, bringing
						ideas to life, and working with dedicated teams to build
						efficient and robust applications suited to the user’s
						needs. I have superior focus and attention to detail,
						also knowledge of HTML, CSS, JavaScript, ES6+, Node.js,
						Express.js, React.js, MySQL, MogoDB, Mongoose. In my
						previous roles, I have been involved in running and
						managing several projects and teams. I am capable of
						gathering requirements and prioritising tasks in order
						to deliver value iteratively. My core strengths include,
						but are not limited to the following:
						<ul className='skills-list'>
							<li>
								Having an approachable and professional manner
								at all times.
							</li>
							<li>
								The written and verbal communication skills
								required to articulate effectively to your
								Technology Team.
							</li>
							<li>Creativity and willingness to learn.</li>
							<li>
								Adaptability and implementing new designs when
								required.
							</li>
						</ul>
						<p>
							For the future, I wish to continue learning and grow
							in a creative and collaborative environment.
						</p>
					</p>{" "}
				</div>
			</div>
		</div>
	);
};

export default About;
