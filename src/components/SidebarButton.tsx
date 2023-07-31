'use client'

const SidebarButton = ({ children, Icon }) => {
	return (
		<div className='flex items-center w-full  py-2 rounded-md  text-white/90 text-sm'>
			<span className='w-[20px] mr-4 text-button-color'>
				<Icon size={20} />
			</span>
			{children}
		</div>
	)
}

export default SidebarButton
