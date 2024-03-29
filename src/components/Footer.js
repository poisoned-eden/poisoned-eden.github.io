import React from 'react';
import Nav from 'react-bootstrap/Nav';

export default function Footer() {
	return (
		<footer className="fixed-bottom">
			<Nav className="justify-content-center">
				<Nav.Item>
					<Nav.Link href="" target="_blank" disabled>
						&copy; Lilith Miller-Fermor 2023.
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						href="https://github.com/poisoned-eden"
						target="_blank"
					>
						github
					</Nav.Link>
				</Nav.Item> 
				<Nav.Item>
					<Nav.Link href="https://www.linkedin.com/in/lilith-miller-fermor/" target="_blank">
						linkedin
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="https://twitter.com/LilithMFDev" target="_blank">
						twitter
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</footer>
	);
}
