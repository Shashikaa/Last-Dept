import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/context/StoreContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BagDrawer from '@/components/modals/BagDrawer';
import StudioNotesModal from '@/components/modals/StudioNotesModal';

export const metadata: Metadata = {
  title: 'LAST DEPT. — Series 01 / 3D Footwear Showroom',
  description: 'Ten original silhouettes. One shared space. Interactive 3D footwear concept store.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#09090B] text-[#F5F5F3] antialiased">
        <StoreProvider>
          <Navbar />
          {children}
          <BagDrawer />
          <StudioNotesModal />
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
