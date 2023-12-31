import Sidebar from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Darrion Dumlao',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className + ' bg-canvas'}>
				<div className='flex h-screen font-sans'>
					<Sidebar />

					<div className='max-lg:w-full w-[calc(100vw-260px)] h-full relative font-sans'>
						<NavBar />
						<div className='h-full pt-[100px] bg-zinc-800 overflow-y-scroll'>
							{children}
						</div>
					</div>

					<ToastContainer
						theme='dark'
						hideProgressBar
						position='bottom-right'
					/>
				</div>
			</body>
		</html>
	)
}
