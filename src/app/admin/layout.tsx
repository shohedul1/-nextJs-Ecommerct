'use client';
import Loader from '@/components/admin-pannal/Loader';
import Login from '@/components/admin-pannal/Login';
import Navbar from '@/components/admin-pannal/Navbar';
import Sidebar from '@/components/admin-pannal/Sidebar';
import { useAppSelector } from '@/redux/hooks';
import { useSession } from 'next-auth/react';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const isLoading = useAppSelector((store) => store.loadingReducer);
    const { data: session } = useSession();

    if (!session) {
        return <Login />;
    }

    return (
        <div className='flex'>
            <Sidebar />
            <div className='w-full h-full'>
                <Navbar />
                <div className='bg-gray-200 p-4 h-[calc(100vh-64px)]'>
                    {children}
                </div>
                {isLoading && <Loader />}
            </div>
        </div>
    );
}

export default Layout;
