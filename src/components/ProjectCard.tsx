import Image from 'next/image'
import imageAsset from '/images/practice.png'

const ProjectCard = ({ project }) => {
	return (
		<a target='_blank' href={project.url}>
			<div className='group '>
				<div
					style={{
						'--image-url': `url(${project.imageAsset ?? project.image.url})`,
					}}
					className='bg-[image:var(--image-url)] bg-no-repeat bg-cover w-full rounded-lg  aspect-square mb-2'>
					<div className='w-full h-full bg-black/20 hidden group-hover:block'></div>
				</div>
				<div className=' text-sm text-white/90'>{project.name}</div>
				<div className='text-xs text-white/60'>{project.description}</div>
			</div>
		</a>
	)
}

export default ProjectCard
