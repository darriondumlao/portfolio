import Sidebar from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NowPlaying from '@/components/NowPlaying'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className + ' bg-canvas'}>
				<div className='flex  h-screen font-sans'>
					<Sidebar />

					<div className='w-[calc(100vw-260px)] h-full overflow-y-scroll relative font-sans'>
						<NowPlaying />
						<div className='pt-[150px] bg-zinc-800'>{children}</div>
					</div>
				</div>
			</body>
		</html>
	)
}
