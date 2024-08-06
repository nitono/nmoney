import type { Metadata } from 'next'
import { Arvo } from 'next/font/google'
import './globals.css'

const arvo = Arvo({ weight: ['400', '700'] })
export const metadata: Metadata = {
	title: 'nmoney',
	description: '',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={arvo.className}>{children}</body>
		</html>
	)
}
