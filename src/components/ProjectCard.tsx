import Image from 'next/image'
import imageAsset from '/images/practice.png'
import CardCategory from './CardCategory'
// import imageAsset from '/images/download.jpeg'

const cards = [
	{
		name: 'About Me',
		description: 'About project',
		category: 'Me',
		imageAsset: '/images/practice.png',
	},
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
		imageAsset: '',
	},
	{
		name: 'music',
		description: 'spotify clone',
		category: 'rebuilds',
		imageAsset: '',
	},
]

// const ProjectCard = () => {
// 	return (
// 		<div>
// 			{cards.map((card) => (
// 				<div key={card.name} className='p-4 border-b border-white'>
// 					<div className='mb-4'>
// 						{/* Image */}
// 						<div className='w-48 h-48'>
// 							<Image src={card.imageAsset} alt='pic' width={200} height={200} />
// 						</div>
// 					</div>
// 					<div>
// 						{/* Card Content */}
// 						<h2 className='text-xl font-bold mb-2'>{card.name}</h2>
// 						<p className='text-gray-600'>{card.description}</p>
// 						<p className='text-gray-400'>{card.category}</p>
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	)
// }

const ProjectCard = () => {
	// Group cards by category
	const cardsByCategory = cards.reduce((acc, card) => {
		const { category } = card
		if (!acc[category]) {
			acc[category] = []
		}
		acc[category].push(card)
		return acc
	}, {})

	// JSX to render the cards and categories
	return (
		<div>
			{Object.keys(cardsByCategory).map((category) => (
				<div key={category} className='mb-8'>
					<CardCategory category={category} />
					<div className='grid gap-4 grid-cols-3'>
						{cardsByCategory[category].map((card) => (
							<div
								key={card.name}
								className='p-4 border border-gray-300 rounded'>
								{/* Card Content */}
								<div className='w-48 h-48'>
									<Image
										src={card.imageAsset}
										alt='pic'
										width={200}
										height={200}
									/>
								</div>
								<div>
									<h2 className='text-xl font-bold mb-2'>{card.name}</h2>
									<p className='text-gray-600'>{card.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export default ProjectCard
