'use client';

import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { NavLogo } from './ui/logo';
import { usePathname } from 'next/navigation';
import MenuDrawer from './menuDrawer/MenuDrawer';
import Docs_MenuDrawer from './menuDrawer/Docs_MenuDrawer';
import Button from './ui/Button';
import { useContext } from 'react';
import { AuthContext } from '@/context/authProvider/AuthProvider';
import User from '@/app/(auth)/Components/User';

const Navbar = ({ className, logo, width, height, logoClassName }) => {
  const pathName = usePathname();

  const { user, logOut } = useContext(AuthContext)

  return (
    <nav
      className={`border-b border-border sticky top-0 z-50 bg-white dark:bg-gray-900 backdrop-filter backdrop-blur-md bg-opacity-5 dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-5 ${className}`}
    >
      <div className="px-4 xl:px-11 xl:max-w-[1520px] mx-auto   sm:px-6 lg:px-8">
        <div className="z-50 flex items-center justify-between h-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              {pathName === '/dashboard' ? <Docs_MenuDrawer /> : ''}

              <Link href="/" className="flex-shrink-0">
                <NavLogo
                  src='/logos/logo.png'
                  width={width}
                  height={height}
                  logoClassName={logoClassName}
                />
              </Link>

              <div className="max-[1080px]:hidden">
                <div className="flex items-baseline mr-10 space-x-4">
                  <Link
                    href="/"
                    className={`px-3 py-2 hover:scale-105 active:scale-100 text-sm font-medium rounded-md text-foreground hover:text-primary ${pathName === '/' ? 'active' : ''
                      }`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/tailwind"
                    className={`px-3 py-2 hover:scale-105 active:scale-100 text-sm font-medium rounded-md text-foreground hover:text-primary ${pathName === '/tailwind' ? 'active' : ''
                      }`}
                  >
                    Components
                  </Link>

                  <Link
                    href="/devlibrary"
                    className={`px-3 py-2 hover:scale-105 active:scale-100 text-sm font-medium rounded-md text-foreground hover:text-primary ${pathName === '/devlibrary' ? 'active' : ''
                      }`}
                  >
                    DevLibrary
                  </Link>
                  <Link
                    href="/devtools"
                    className={`px-3 py-2 hover:scale-105 active:scale-100 text-sm font-medium rounded-md text-foreground hover:text-primary ${pathName === '/devtools' ? 'active' : ''
                      }`}
                  >
                    DevTools
                  </Link>

                </div>
              </div>
            </div>

          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <div className="flex items-center space-x-4 max-[430px]:hidden">
              <div className="flex items-center space-x-4 max-[430px]:hidden">
                <Link href={'/playground'}>
                  <Button >Create</Button>
                </Link>
              </div>
              {user ? <User /> :
                <Link href={'/login'}>
                  <Button >Sign In</Button>
                </Link>
              }

            </div>
            {/* menu  */}
            {pathName === '/dashboard' ? '' : <MenuDrawer />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
