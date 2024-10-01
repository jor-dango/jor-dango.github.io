import './Navbar.css'
import './../utils/init.css'
// import fontWeights from '../utils/constants'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';

function Navbar() {

	const navRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	function goto_hero() {
		navigate("/");
	}
	function goto_projects() {
		navigate("/projects");
	}
	function goto_resume() {
		// navRef.current!.style.display = 'none';
		navigate("/resume");
	}
	
	return (
		<div id="navbar-container" ref={navRef}>
			<div id="navbar">
				<a href="#" onClick={goto_hero}>
					<p id="hero-link">Jordan Tan</p>
				</a>
				<div style={{display: 'flex', gap: '2rem'}}>
					<a href="#" onClick={goto_projects}>
						<p className="other-link body-link">Projects</p>
					</a>
					<a href="#" onClick={goto_resume}>
						<p className="other-link body-link">Resume</p>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Navbar