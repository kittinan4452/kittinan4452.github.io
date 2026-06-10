import './globals.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

export const metadata = {
  title: 'KITTINAN | Portfolio',
  description: 'Kittinan Kunnahong — Computer Engineer portfolio',
  icons: {
    icon: '/image/icontitle/icons8.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
