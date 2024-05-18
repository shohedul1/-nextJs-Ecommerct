'use client';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className='py-3 px-4 bg-white flex justify-between items-center'>
      <h2 className='text-xl'>eCommerce Admin Panel</h2>
      {session?.user?.image && (
        <Image
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width={40}
          height={40}
          priority
          property="true"
          alt='dp'
          onClick={() => signOut()}
        />
      )}
    </div>
  );
}

export default Navbar;
