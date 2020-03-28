import React from "react";
import "../css/style.css";
import github from "../images/github.png";
import linkedIn from "../images/linkedIn.png";

const Contact = () => {
	return (
		<div class='wrapper-contact  wrapper-tablet-form  wrapper-desktop-form'>
			<h2>Contact Me</h2>
			<div class='form-main  form-main-tablet form-main-desktop'>
				<form action='mailto:s.c.dulgheru@gmail.com' method='post'>
					<label for='input-name'>Name</label>
					<input
						id='input-name'
						name='name'
						type='text'
						class='input-form  input-form-tablet input-form-desktop'
						placeholder='John Smith'
						required
					/>

					<label for='input-email'>Email</label>
					<input
						id='input-email'
						name='email'
						type='text'
						class='input-form  input-form-tablet input-form-desktop'
						placeholder='JohnSmith@gmail.com'
						required
					/>

					<label for='input-message'>Message</label>
					<textarea
						id='input-message'
						name='message'
						class='input-form input-form-tablet input-form-desktop'></textarea>

					<div class='button button-desktop'>
						<button
							class='submit-button  submit-button-tablet submit-button-desktop'
							type='submit'>
							Submit
						</button>
					</div>
				</form>
			</div>
			<div class='contacts contacts-mobile'>
				<div class='resume-contacts'>
					<h3 class='resume  resume-tablet resume-desktop'>
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
						href='https://www.linkedin.com/in/simona-dulgheru-36777ba3/'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src={linkedIn}
							class='icon-linkedin'
							alt='LinkedIn-link'
						/>
					</a>
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
				</div>
			</div>
		</div>
	);
};

export default Contact;
