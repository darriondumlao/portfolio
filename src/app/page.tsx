import ProjectCard from '@/components/ProjectCard'
import Row from '@/components/Row'
import '@/styles/index.css'

const rows = {
	skills: [
		{
			name: 'JavaScript',
			imageAsset: '/images/download.jpeg',
			description: 'blah blah',
		},
		{
			name: 'JavaScript',
			imageAsset: '/images/practice.png',
			description: 'blah blah',
		},
		{
			name: 'JavaScript',
			imageAsset: '/images/practice.png',
			description: 'blah blah',
		},
		{
			name: 'JavaScript',
			imageAsset: '/images/practice.png',
			description: 'blah blah',
		},
		{
			name: 'JavaScript',
			imageAsset: '/images/download.jpeg',
			description: 'blah blah',
		},
	],
	projects: [
		{
			name: 'Reddit',
			description: 'Rebuilt reddit using nextjs',
			category: 'projects',
			imageAsset: '/images/download.jpeg',
		},
		{
			name: 'Discord',
			description: 'Creating a discord bot',
			category: 'projects',
			imageAsset: '/images/download.jpeg',
		},
		{
			name: 'music',
			description: 'spotify clone',
			category: 'rebuilds',
			imageAsset: '/images/download.jpeg',
		},
	],
	music: [
		{
			name: 'music',
			description: 'spotify clone',
			category: 'rebuilds',
			imageAsset: '/images/download.jpeg',
		},
		{
			name: 'music',
			description: 'spotify clone',
			category: 'rebuilds',
			imageAsset: '/images/download.jpeg',
		},
		{
			name: 'music',
			description: 'spotify clone',
			category: 'rebuilds',
			imageAsset: '/images/download.jpeg',
		},
		{
			name: 'music',
			description: 'spotify clone',
			category: 'rebuilds',
			imageAsset: '/images/download.jpeg',
		},
		{
			name: 'music',
			description: 'spotify clone',
			category: 'rebuilds',
			imageAsset: '/images/download.jpeg',
		},
	],
}

const Home = () => {
	return (
		<div className='px-12'>
			<div className='place-content-center divide-y divide-solid divide-white/20'>
				<div className='my-6'>
					<Row row={rows.skills} title='Skills' />
				</div>
				<div className='my-6 pt-2.5'>
					<Row row={rows.projects} title='Projects' />
				</div>
				<div className='my-6 pt-2.5'>
					<Row row={rows.projects} title='Projects' />
				</div>
				<div className='my-6 pt-2.5'>
					<Row row={rows.projects} title='Projects' />
				</div>
				<div className='my-6 pt-2.5'>
					<Row row={rows.projects} title='Projects' />
				</div>
				<div className='my-6 pt-2.5'>
					<Row row={rows.projects} title='Projects' />
				</div>
			</div>
		</div>
	)
}

export default Home
