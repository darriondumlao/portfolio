import { Shuffle, Rewind, Play, FastForward, Repeat } from 'lucide-react'

// These are all of the control buttons that are rendered in the top bar

const Controls = () => {
	return (
		<div className='w-3/12 flex h-full items-center  text-white/30 group max-lg:hidden '>
			<div className='w-1/5 h-full  text-zinc-400 flex items-center hover:brightness-125 '>
				<Shuffle strokeWidth={2} size={16} />
			</div>
			<div className='w-1/5 h-full text-zinc-400 flex items-center hover:brightness-125'>
				<Rewind fill='currentColor' />
			</div>
			<div className='w-1/5 h-full text-zinc-400 flex items-center hover:brightness-125 '>
				<Play fill='currentColor' size={28} />
			</div>

			<div className='w-1/5 h-full text-zinc-400 flex items-center hover:brightness-125'>
				<FastForward fill='currentColor' />
			</div>
			<div className='w-1/5 h-full flex text-zinc-400 items-center hover:brightness-125'>
				<Repeat size={16} />
			</div>
		</div>
	)
}

{
	/* <div className='max-lg:hidden w-3/12 flex h-full items-center  text-white/30 group'>
				<div className='w-1/5 h-full  text-zinc-400 flex items-center hover:brightness-125 '>
					<Shuffle strokeWidth={2} size={16} />
				</div>
				<div className='w-1/5 h-full text-zinc-400 flex items-center hover:brightness-125'>
					<Rewind fill='currentColor' />
				</div>
				<div className='w-1/5 h-full text-zinc-400 flex items-center hover:brightness-125 '>
					<Play fill='currentColor' size={28} />
				</div>

				<div className='w-1/5 h-full text-zinc-400 flex items-center hover:brightness-125'>
					<FastForward fill='currentColor' />
				</div>
				<div className='w-1/5 h-full flex text-zinc-400 items-center hover:brightness-125'>
					<Repeat size={16} />
				</div>
			</div> */
}

export default Controls
