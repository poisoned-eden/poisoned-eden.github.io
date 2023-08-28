import React from 'react';
import emailIcon from '../assets/icons/envelope-at.svg';
import phoneIcon from '../assets/icons/telephone.svg';
import githubLogo from '../assets/icons/github.svg';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


export default function Contact() {
	return (
		<article id="contact-me">
			<h2>Contact Me</h2>
			<div>
				<h3>Contact Details</h3>
				<address>
					<div>
							<ButtonGroup role="button" aria-label='email address' className='w-100'>
								<Button href='mailto:hello@lilithmf.com'>
									<img src={emailIcon} alt="Email Me" />
								</Button>
								<Button href='mailto:hello@lilithmf.com'> hello@lilithmf.com </Button>
								{/* TODO add copy button */}
							</ButtonGroup>
					</div>
					<div>
						<ButtonGroup role="button" aria-label='phone number' className='w-100'>
							<Button href='tel:+447557911251'>
								<img src={phoneIcon} alt="Call Me" />
							</Button>
							<Button href='tel:+447557911251'> +44 7557 911 251</Button>
							{/* TODO add copy button */}
						</ButtonGroup>
					</div>
					<div>
						<ButtonGroup role="button" aria-label='phone number' className='w-100'>
							<Button href='https://github.com/poisoned-eden'>
								<img src={githubLogo} alt="Check out my GitHub profile" />
							</Button>
							<Button href='https://github.com/poisoned-eden'>github.com/poisoned-eden</Button>
							{/* TODO add copy button */}
						</ButtonGroup>
					</div>

					<div>
						<img src={githubLogo} alt="" />
						<a href="https://github.com/poisoned-eden">
							github.com/poisoned-eden
						</a>
					</div>
				</address>
			</div>
			<div>
				<h3>Send me a message</h3>
				<Form>
					<div class="alert alert-primary" role="alert">
						This form is under construction.  In the meantime, it will create a custom mailto link that you can use to send me your entered message.
					</div>
					<fieldset disabled>
						<Form.Group className="mb-3" controlId="formName">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Please enter your name."
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Please enter your email address."
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Message</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								placeholder="Please enter the message you wish to send."
							/>
						</Form.Group>
					</fieldset>
				</Form>
			</div>
		</article>
	);
}
