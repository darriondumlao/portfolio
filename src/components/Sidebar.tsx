'use client'

import Link from 'next/link'
import SidebarButton from './SidebarButton'
import SearchBar from './SearchBar'
import { Apple, Cherry, Citrus } from 'lucide-react'

import {
	FolderOpenDot,
	GitFork,
	Hammer,
	Headphones,
	UserCircle,
} from 'lucide-react'

const links = [
	{ name: 'Skills', link: '/', Icon: Hammer },
	{ name: 'Projects', link: '/', Icon: FolderOpenDot },
	{ name: 'Open Source', link: '/', Icon: GitFork },
	{ name: 'Interests', link: '/', Icon: UserCircle },
	{ name: 'Music', link: '/', Icon: Headphones },
]

const Sidebar = () => {
	return (
		<div className='w-[260px] bg-[rgba(235,235,245,.03)] h-screen font-sans px-[20px] border-r border-r-white/10 py-3 sm:w-10%'>
			<div className=' text-white/90 flex items-center  mb-6   '>
				<Apple size={24} fill='white' />
				<div className='text-3xl tracking-tight'>Darrion</div>
			</div>
			<SearchBar />
			<div className='p-2 '>{/* Darrion Dumlao */}</div>
			<div>
				{links.map((link) => (
					<Link key={link.name} href={link.link}>
						<SidebarButton key={link.name} Icon={link.Icon}>
							{link.name}
						</SidebarButton>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Sidebar
