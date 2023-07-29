'use client'

import {
	FastForward,
	Linkedin,
	Mail,
	Music,
	Music2,
	Music4,
	Play,
	Repeat,
	Rewind,
	Shuffle,
	Twitter,
} from 'lucide-react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const handleMailClick = () => {
	const email = 'darriondumlao33@gmail.com'
	navigator.clipboard.writeText(email)
	toast.success('Email copied!')
}

const TopBar = () => {
	return (
		<div className='flex items-center w-full h-full px-12 '>
			<div className='w-3/12 flex h-full items-center  text-white/30 group '>
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
			<div className='w-6/12 h-full flex py-1 '>
				<div className='w-2/12 h-full bg-yellow-500 rounded-l-sm'>pic</div>
				<div className='w-10/12 h-full bg-white/20 rounded-r-sm'>
					<div className='text-white/80 my-1 text-center'>
						Building cool things
					</div>
				</div>
			</div>
			<div className='w-3/12 flex items-center h-full  px-12 text-zinc-400 '>
				<div className='w-1/3 hover:brightness-125'>
					<a target='_blank' href='https://twitter.com/diosbydios'>
						<Twitter fill='currentColor' />
					</a>
				</div>
				<div className='w-1/3 hover:brightness-125'>
					<a
						target='_blank'
						href='https://www.linkedin.com/in/darrion-dumlao-061b83277/'>
						<Linkedin fill='currentColor' />
					</a>
				</div>
				<div className='w-1/3 cursor-pointer top-bar-con hover:brightness-125'>
					<Mail onClick={handleMailClick} />
				</div>
			</div>
		</div>
	)
}

export default TopBar
