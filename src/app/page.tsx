import ProjectCard from '@/components/ProjectCard'

import '@/styles/index.css'

const Home = () => {
	return (
		<>
			<h1 className='text-xl'>Now Playing</h1>
			<div className='place-content-center'>
				<div>
					<ProjectCard />
				</div>
				{/* <AboutMe /> */}
				<div className='text-2xl flex pt-10'></div>
			</div>
		</>
	)
}

export default Home
