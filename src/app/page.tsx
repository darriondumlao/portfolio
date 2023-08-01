import ProjectCard from '@/components/ProjectCard'
import Row from '@/components/Row'
import '@/styles/index.css'
import { ToastContainer } from 'react-toastify'

const getData = async () => {
	const res = await fetch(
		'https://api-us-west-2.hygraph.com/v2/clklz0k2z0wjq01t75jcnhnjc/master',
		{
			next: { revalidate: 1 },
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				query: `query Projects {
          projects {
            createdAt
            description
            id
            name
            publishedAt
            updatedAt
            category
            url
            image {
              url
            }
          }
        }`,
			}),
		}
	)
	const data = await res.json()
	return data.data.projects
}

const Home = async () => {
	const projects = await getData()
	return (
		<div className=' px-12'>
			<div className='place-content-center divide-y divide-solid divide-white/20 md:max-lg:'>
				<div className='my-6'>
					<Row
						row={projects.filter((project) => {
							return project.category === 'Skills'
						})}
						title='Skills'
					/>
				</div>
				<div className='my-6 pt-2.5'>
					<Row
						row={projects.filter((project) => {
							return project.category === 'Projects'
						})}
						title='Projects'
					/>
				</div>
				<div className='my-6 pt-2.5'>
					<Row
						row={projects.filter((project) => {
							return project.category === 'Interests'
						})}
						title='Interests'
					/>
				</div>
				<div className='my-6 pt-2.5'>
					<Row
						row={projects.filter((project) => {
							return project.category === 'Source'
						})}
						title='Open Source'
					/>
				</div>
			</div>
		</div>
	)
}

export default Home
