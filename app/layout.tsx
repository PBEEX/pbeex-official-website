import "./globals.css";


export const metadata = {
  title: 'PBEEX',
  description: 'Prof. O. A. Bamiro Engineering Expo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

