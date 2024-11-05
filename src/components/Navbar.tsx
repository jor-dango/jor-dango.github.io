import './Navbar.css'
import './../utils/init.css'
// import fontWeights from '../utils/constants'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';
import resume from '../assets/Jordan Tan Resume.pdf'

import { useAtom } from 'jotai';
import { counter } from '../utils/atoms';

function Navbar() {

	const [count, setCounter] = useAtom(counter);

	const navRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	function goto_hero() {
		navigate("/");
	}
	function goto_projects() {
		navigate("/projects");
	}
	
	return (
		<div id="navbar-container" ref={navRef}>
			<div id="navbar">
				<a href="#" onClick={goto_hero}>
					<p id="hero-link">Jordan Tan</p>
				</a>
				<div style={{display: 'flex', gap: '2rem'}}>
					<a href="#" onClick={goto_projects}>
						<p className="other-link">Projects</p>
					</a>
					<a href={resume} target="_blank">
						<p className="other-link">Resume</p>
					</a>
				</div>
				<p>{count}</p>
			</div>
		</div>
	)
}

export default Navbar