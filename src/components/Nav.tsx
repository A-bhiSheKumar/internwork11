'use client'


import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Nav = () => {
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get('todos');

  return (
    <nav className="text-center mt-6 text-violet-500 text-2xl mb-3 font-bold">
      <style>{`
        a {
          margin-right: 1rem;
          text-decoration: none;
          color: #8B5CF6; /* Default color */
          transition: color 0.3s ease; /* Smooth transition */
        }

        a:hover {
          color: #000; /* Black color on hover */
        }

        a.active {
          font-weight: bold;
          /* Add any other styles for the active link */
        }

        span {
          color: #8B5CF6; /* Default color for the separator */
        }

        span:hover {
          color: #000; /* Black color for the separator on hover */
        }
      `}</style>

      <Link href='/' className={`mr-4 ${todosFilter === null ? 'active' : ''}`}>All</Link>
      <span className="mr-4">|</span>
      <Link href='/?todos=active' className={`mr-4 ${todosFilter === 'active' ? 'active' : ''}`}>Active</Link>
      <span className="mr-4">|</span>
      <Link href='/?todos=completed' className={todosFilter === 'completed' ? 'active' : ''}>Completed</Link>
    </nav>
  );
}

export default Nav;
