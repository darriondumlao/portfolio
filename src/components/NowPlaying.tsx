import TopBar from './TopBar'

const NowPlaying = () => {
	return (
		<div className=' fixed top-0 left-0 z-50 ml-[260px] h-[100px] w-[calc(100vw-260px)] flex flex-col bg-zinc-800/30 backdrop-blur-sm backdrop-saturate-250 backdrop-brightness-50  '>
			<div className='h-1/2 border-b border-white/10 '>
				<div className='w-full h-full '>
					<TopBar />
				</div>
			</div>
			{/* <div className='h-1/3 bg-transparent backdrop-blur-sm backdrop-saturate-250 backdrop-brightness-50'>
				2
			</div> */}
			<div className='h-1/2 '>
				<div className='w-full h-full'></div>
			</div>
		</div>
	)
}

export default NowPlaying
