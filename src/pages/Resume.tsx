import resume from './../assets/Jordan Tan Resume.pdf'

function Resume() {
	return (
		<div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
			<object data={resume} type="application/pdf" width="100%" height="100%">
				<a className='body-link' href="https://docs.google.com/document/d/1h9hFBZnGEXpLszZTidO6eF91HK1hjB3J0JSgwciB2V4/edit?usp=sharing">If this page is not loading, click this text to see my resume</a>
			</object>
		</div>
	)
}

export default Resume