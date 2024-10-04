import './ProjectHeader.css'

function ProjectHeader(props: {title: string, role: string, img: string}) {

	return (
		<div id="project-header">
			<div id="project-header-text">
				<h1 className='fade-in'>{props.title}</h1>
				<p className='fade-in'>{props.role}</p>
			</div>
			<div id="project-header-img-container" className="fade-in">
				<img id="project-header-img" style={{ maxWidth: '100%' }} src={props.img} />
			</div>
		</div>
	)
}

export default ProjectHeader