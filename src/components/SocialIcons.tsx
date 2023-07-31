'use client'

import React from 'react'
import { Twitter, Linkedin, Mail } from 'lucide-react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SocialIcons = () => {
	const handleMailClick = () => {
		const email = 'darriondumlao33@gmail.com'
		navigator.clipboard.writeText(email)
		toast.success('Email copied!')
	}

	// these icons are sized for the mobile version of the website

	return (
		<div className='invisible max-lg:visible w-full flex items-center h-full px-12 text-zinc-400'>
			<div className='w-1/3  hover:brightness-125 flex justify-center'>
				<a target='_blank' href='https://twitter.com/diosbydios'>
					<Twitter fill='currentColor' />
				</a>
			</div>
			<div className='w-1/3 hover:brightness-125 flex justify-center'>
				<a
					target='_blank'
					href='https://www.linkedin.com/in/darrion-dumlao-061b83277/'>
					<Linkedin fill='currentColor' />
				</a>
			</div>
			<div className='w-1/3 cursor-pointer top-bar-con hover:brightness-125 flex justify-center'>
				<Mail onClick={handleMailClick} size={26} />
			</div>
		</div>
	)
}

export default SocialIcons
