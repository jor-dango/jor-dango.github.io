import './ProjectCard.css'
import { Dispatch, SetStateAction } from 'react';

function ProjectCard(props: { project: { title: string, img: string, tech: string, desc: string, ref: string }, navFunction: Dispatch<SetStateAction<string>> }) {
	const project = props.project;

	// function goto_proj() {
	// 	props.navFunction(project.ref)
	// }

	return (
		<a className="card fade-in" href={project.ref} target='_blank'>
			{/*<a className="card fade-in" href="#" onClick={goto_proj}>*/}
			<div style={{ backgroundImage: `url(${project.img})` }} className="card-image" />
			<div className="card-content">
				<h1 className="card-title">{props.project.title}</h1>
				<p className="card-description">{props.project.desc}</p>
			</div>
		</a>
	)
}

export default ProjectCard