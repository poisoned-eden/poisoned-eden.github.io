import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

export default function Navigation({ currentPage, handlePageChange }) {
	return (
		<Navbar>
			<Nav fill variant='underline' className='w-100'> 
				<Nav.Item>
					<LinkContainer to="/">
						<Nav.Link>About Me</Nav.Link>
					</LinkContainer>
				</Nav.Item>
				<Nav.Item>
					<LinkContainer to="/portfolio">
						<Nav.Link>Portfolio</Nav.Link>
					</LinkContainer>
				</Nav.Item>
				<Nav.Item>
					<LinkContainer to="/cv">
						<Nav.Link>CV</Nav.Link>
					</LinkContainer>
				</Nav.Item>
				<Nav.Item>
					<LinkContainer to="/contact">
						<Nav.Link>Contact</Nav.Link>
					</LinkContainer>
				</Nav.Item>
			</Nav>
		</Navbar>
	)
}
