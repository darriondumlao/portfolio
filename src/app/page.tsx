import AboutMe from '@/components/AboutMe'
import Interests from '@/components/Interests'
import AppRebuilds from '@/components/projects/AppRebuilds'
import Contribution from '@/components/projects/Contribution'
import GitProjects from '@/components/projects/GitProjects'

const Homepage = () => {
	return (
		<div className='middle-area'>
			<AboutMe />
			<AppRebuilds />
			<Contribution />
			<GitProjects />
			<Interests />
		</div>
	)
}

export default Homepage
