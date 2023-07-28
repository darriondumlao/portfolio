import { FastForward, Play, Repeat, Rewind, Shuffle } from 'lucide-react'

const TopBar = () => {
	return (
		<div className='flex items-center w-full h-full px-12 '>
			<div className='w-3/12 flex h-full items-center  text-white/30'>
				<div className='w-1/5 h-full  text-zinc-400 flex items-center'>
					<Shuffle strokeWidth={2} size={16} />
				</div>
				<div className='w-1/5 h-full text-zinc-400 flex items-center '>
					<Rewind fill='currentColor' />
				</div>
				<div className='w-1/5 h-full text-zinc-400 flex items-center '>
					<Play fill='currentColor' size={28} />
				</div>

				<div className='w-1/5 h-full text-zinc-400 flex items-center '>
					<FastForward fill='currentColor' />
				</div>
				<div className='w-1/5 h-full flex text-zinc-400 items-center '>
					<Repeat size={16} />
				</div>
			</div>
			<div className='w-6/12 h-full flex py-1 '>
				<div className='w-2/12 h-full bg-yellow-500 rounded-l-sm'>pic</div>
				<div className='w-10/12 h-full bg-white/20 rounded-r-sm'>
					<div className='text-white/80 my-1 text-center'>
						Building cool things
					</div>
				</div>
			</div>
			<div className='w-3/12 flex h-full items-center text-white'>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</div>
		</div>
	)
}

export default TopBar
