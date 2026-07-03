import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.scss';

const notoSans = Noto_Sans({
	subsets: ['latin'],
	variable: '--font-noto-sans',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'AIチャット',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja" className={notoSans.variable}>
			<body>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@400;500&display=swap" rel="stylesheet" />
				{children}
			</body>
		</html>
	);
}
