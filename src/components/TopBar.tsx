'use client'

import { Linkedin, Mail, Twitter } from 'lucide-react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Controls from './Controls'
import Image from 'next/image'

const handleMailClick = () => {
	const email = 'darriondumlao33@gmail.com'
	navigator.clipboard.writeText(email)
	toast.success('Email copied!')
}

const TopBar = () => {
	return (
		<div className='flex items-center w-full h-full px-12 '>
			<Controls />
			<div className=' max-lg:w-full w-6/12 h-full flex py-1 bar'>
				<div className='w-2/12 h-full rounded-l-sm'>
					<div className='relative w-full h-full'>
						<Image
							src={'/images/profile.jpg'}
							alt='profile'
							layout='fill'
							objectFit='cover'
							objectPosition='center'
						/>
					</div>
				</div>
				<div className='w-10/12 h-full bg-white/20 rounded-r-sm'>
					<div className='text-white/80 my-1 text-center text-m max-xl:text-xs '>
						"The future depends on what you do today." - Gandhi
					</div>
				</div>
			</div>

			{/* These icons are sized for the desktop version of the app */}

			<div className='max-lg:hidden w-3/12 flex items-center h-full  px-12 text-zinc-400'>
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
