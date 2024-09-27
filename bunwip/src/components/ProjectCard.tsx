import React from "react";
import image from '../assets/pfp1.jpg'
import './projectCard.css'

import bg from '../assets/mesh70.png'

function ProjectCard(props: {title: string, img: string, tech: string, desc: string}) {
	return (
		<div className="card fade-in" style={{display: 'flex'}}>
			<div style={{backgroundImage: `url(${props.img})`}} className="card-image" />
			<div className="card-content">
				<h1 className="card-title">{props.title}</h1>
				<p className="card-description">{props.desc}</p>
			</div>
			{/* <div style={{backgroundImage: `url(${bg})`, height: '200px'}}></div> */}
		</div>
	)
}

export default ProjectCard