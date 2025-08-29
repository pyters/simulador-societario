import { ReactNode } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import { PageName } from '../types';

interface LayoutProps {
  children: ReactNode;
  currentPage: PageName;
  onPageChange: (page: PageName) => void;
}

export default function Layout({ children, currentPage, onPageChange }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation currentPage={currentPage} onPageChange={onPageChange} />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}