import Link from 'next/link'

const SidebarButton = ({ children }) => {
	return (
		<div className='flex items-center w-full px-[20px] py-[2px] rounded-md bg-sidebar active:bg-sidebar-active'>
			<span className='w-[20px] mr-6px'>[]</span>
			{children}
		</div>
	)
}

export default SidebarButton
