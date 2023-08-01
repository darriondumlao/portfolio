import ProjectCard from './ProjectCard'

const Row = ({ row, title }) => {
	return (
		<div id={title}>
			<div className=' pl-[12px]'>
				<h3 className='text-2xl font-bold text-white/90'>{title}</h3>
			</div>

			<div className='flex align-middle flex-wrap '>
				{row.map((project) => (
					<div className='max-md:w-full w-1/4 p-[12px] flex justify-center items-center'>
						<div className='max-lg:max-w-[240px] w-full'>
							<ProjectCard project={project} />
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Row
