'use Client';

import { ThemeProvider } from 'next-themes';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import NewsLetter from '@/components/newsLetter/NewsLetter';
import AppProviders from '@/context/provider/AppProviders';
import { ToastContainer } from 'react-toastify';
import { Providers } from './ReduxToolkit/provider/provider';
export const metadata = {
  title: 'Code Base UI',
  description:
    'Start developing with an open-source library of UI components, sections, and pages built with the utility classes from Tailwind CSS',
  icons: '/logo.svg',
};

export default function RootLayout({ children }) {
  const logoPath = '/nav-logo.svg';
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="description" content={metadata.description} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        ></link>
        <title>{metadata.title}</title>
      </head>
      <body className="bg-white dark:bg-gray-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Providers>
            <AppProviders>
              <Navbar logo={logoPath} width={200} height={100} />
              {children}
              <NewsLetter />
              <Footer />
            </AppProviders>
          </Providers>
        </ThemeProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
