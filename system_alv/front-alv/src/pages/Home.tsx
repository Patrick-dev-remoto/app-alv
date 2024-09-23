import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import React from 'react';

export default function Home() {
  return (
    <div className="flex h-screen">
        <nav>
            <Sidebar/>
        </nav>

            <div className="flex flex-1 flex-col">
        <main className="flex-1 overflow-auto p-6">
      <h1 className="text-2xl font-bold mb-4">BEM VINDO A HOME PAGE</h1>
        </main>
      </div>
    </div>
  )
}