'use client'

import { Search, XCircle } from 'lucide-react'
import { useState } from 'react'

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState('')

	const handleInputChange = (e) => {
		setSearchQuery(e.target.value)
	}

	const handleClearClick = () => {
		setSearchQuery('')
	}

	return (
		<div className='bg-[rgba(235,235,245,.03)] text-white/80 rounded-lg flex items-center   border-2 border-white/10 focus-within:border-button-color h-[34px]'>
			<div className='w-1/6 p-2'>
				<Search size={20} />
			</div>
			<input
				className='bg-transparent w-5/6 h-full outline-none'
				type='text'
				placeholder='Search'
				value={searchQuery}
				onChange={handleInputChange}
			/>
			{searchQuery.length ? (
				<div className='w-1/6 p-2 cursor-pointer' onClick={handleClearClick}>
					<XCircle size={20} />
				</div>
			) : null}
		</div>
	)
}

export default SearchBar
