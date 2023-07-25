import Link from 'next/link'
import SidebarButton from './SidebarButton'

const links = [
	{ name: 'Skills', link: '/' },
	{ name: 'Projects', link: '/' },
	{ name: 'Open Source', link: '/' },
	{ name: 'Interests', link: '/' },
]

const Sidebar = () => {
	return (
		<div className='bg-sidebar h-screen font-sans px-[14px]'>
			<div className='text-xs text-sidebar-label tracking-tight pl-3 pt-3'>
				Darrion Dumlao
			</div>
			<div className='content-around'>
				{links.map((link) => (
					<Link key={link.name} href={link.link}>
						<SidebarButton>{link.name}</SidebarButton>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Sidebar
