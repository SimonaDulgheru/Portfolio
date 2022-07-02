import React, { useEffect } from "react";
import "../css/style.css";
import github from "../images/github.png";
import linkedIn from "../images/linkedIn.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div className="wrapper-contact  wrapper-tablet-form  wrapper-desktop-form">
			<h2>Contact Me</h2>
			<div
				data-aos="fade-right"
				className="form-main  form-main-tablet form-main-desktop">
				<form action="mailto:s.c.dulgheru@gmail.com" method="post">
					<label htmlFor="input-name">Name</label>
					<input
						id="input-name"
						name="name"
						type="text"
						className="input-form  input-form-tablet input-form-desktop"
						placeholder="John Smith"
						required
					/>

					<label htmlFor="input-email">Email</label>
					<input
						id="input-email"
						name="email"
						type="text"
						className="input-form  input-form-tablet input-form-desktop"
						placeholder="JohnSmith@gmail.com"
						required
					/>

					<label htmlFor="input-message">Message</label>
					<textarea
						id="input-message"
						name="message"
						className="input-form input-form-tablet input-form-desktop"></textarea>

					<div class="button button-desktop">
						<button
							className="submit-button  submit-button-tablet submit-button-desktop"
							type="submit">
							Submit
						</button>
					</div>
				</form>
			</div>
			<div data-aos="fade-right" className="contacts contacts-mobile">
				<div className="contact-links contact-links-mobile">
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
				</div>
			</div>
		</div>
	);
};

export default Contact;
