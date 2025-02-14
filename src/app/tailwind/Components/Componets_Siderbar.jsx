'use client';

import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import {
  TbLayoutSidebarRightCollapseFilled,
  TbLayoutSidebarRightExpand,
} from 'react-icons/tb';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

const SidebarItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="">
      <div
        className="flex items-center justify-between px-4 py-2 cursor-pointer dark:hover:text-mainColor hover:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{title}</span>
        {isOpen ? <FaMinus /> : <FaPlus />}
      </div>
      {isOpen && (
        <div className="pl-2 ml-4 space-y-2 border-l-2">{children}</div>
      )}
    </div>
  );
};

function Components_Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const updateIsOpen = () => setIsOpen(window.innerWidth >= 1280); // xl breakpoint
    updateIsOpen(); // Initial check
    window.addEventListener('resize', updateIsOpen);
    return () => window.removeEventListener('resize', updateIsOpen);
  }, []);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: '200px',
      padding: '8px 15px',
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      animate={{
        width: isOpen ? '250px' : '0px',

        transition: {
          duration: 0.5,
          type: 'spring',
          damping: 10,
        },
      }}
      id="topPrev"
      className={`z-50 w-64 h-screen  bg-white rounded-lg  xl:w-72 dark:bg-gray-900 dark:text-white ${isOpen && 'p-4 pe-1'
        }`}
    >
      <div className="flex items-center gap-4 mb-4">
        {isOpen && (
          <div className="flex items-center gap-3">
            <Image
              src={'/docs-logo.png'}
              width={20}
              height={20}
              alt="docs logo"
            />
            <div>
              <div className="text-lg font-bold">Tailwind CSS</div>
            </div>
          </div>
        )}
        <div>
          {isOpen ? (
            <TbLayoutSidebarRightExpand
              onClick={toggleOpen}
              className={`w-6 h-6  cursor-pointer ${isOpen ? 'ms-11' : ''}`}
            />
          ) : (
            ''
          )}
        </div>
        <a href="#topPrev" className="fixed left-4 top-[75px]">
          {!isOpen && (
            <span
              onClick={toggleOpen}
              className="flex gap-0.5 border p-1 rounded "
            >
              <TbLayoutSidebarRightCollapseFilled
                className={`w-6 h-6  cursor-pointer ${isOpen ? 'ms-11' : ''}`}
              />
              Sidebar
            </span>
          )}
        </a>
      </div>
      <div className="relative mb-4">
        <AnimatePresence>
          {isOpen && (
            <motion.input
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={inputAnimation}
              placeholder="Search the docs..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-mainColor"
            />
          )}
        </AnimatePresence>
      </div>
      <div
        className={`flex-col h-5/6 ${isOpen && 'overflow-y-auto scrollbar-custom'
          }`}
      >
        {isOpen && (
          <motion.div>
            <div className="">
              <SidebarItem title="Components" defaultOpen={true}>
                <Link
                  href="/tailwind/headers"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Headers
                </Link>
                <Link
                  href="/tailwind/footers"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Footers
                </Link>
                <Link
                  href="/tailwind/accordions"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Accordions
                </Link>
                <Link
                  href="/tailwind/alerts"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Alerts
                </Link>
                <Link
                  href="/tailwind/avatars"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Avatars
                </Link>
                <Link
                  href="/tailwind/badges"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Badges
                </Link>
                <Link
                  href="/tailwind/breadcrumbs"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Breadcrumbs
                </Link>
                <Link
                  href="/tailwind/button-group"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Button Group
                </Link>
                <Link
                  href="/tailwind/buttons"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Buttons
                </Link>
                <Link
                  href="/tailwind/checkboxes"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Checkboxes
                </Link>
                <Link
                  href="/tailwind/clipboards"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Clipboards
                </Link>

                <Link
                  href="/tailwind/dropdowns"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Dropdowns
                </Link>
                <Link
                  href="/tailwind/forms"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Forms
                </Link>
                <Link
                  href="/tailwind/galleries"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Galleries
                </Link>
                <Link
                  href="/tailwind/list-styles"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  List Styles
                </Link>
                <Link
                  href="/tailwind/modals"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Modals
                </Link>
              </SidebarItem>
              <SidebarItem title="Blocks" defaultOpen={true}>
                <SidebarItem title="Application UI" defaultOpen={true}>
                  <Link
                    href="/tailwind/blogs"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Blogs
                  </Link>
                  <Link
                    href="/tailwind/cards"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Cards
                  </Link>
                  <Link
                    href="/tailwind/contacts"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Contacts
                  </Link>
                  <Link
                    href="/tailwind/cookies"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Cookies
                  </Link>
                  <Link
                    href="/tailwind/dashboard-layouts"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Dashboard Layouts
                  </Link>
                  <Link
                    href="/tailwind/error-pages"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Error Pages
                  </Link>
                  <Link
                    href="/tailwind/footers"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Footers
                  </Link>
                  <Link
                    href="/tailwind/headers"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Headers
                  </Link>
                  <Link
                    href="/tailwind/navbars"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Navbars
                  </Link>
                  <Link
                    href="/tailwind/table-grids"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Table Grids
                  </Link>
                  <Link
                    href="/tailwind/tables"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Tables
                  </Link>
                </SidebarItem>




                {/* <SidebarItem title="Marketing UI" defaultOpen={false}>
                  <Link
                    href="/tailwind/components/about-sections"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    About Sections
                  </Link>
                  <Link
                    href="/tailwind/components/banners"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Banners
                  </Link>
                  <Link
                    href="/tailwind/components/brands"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Brands
                  </Link>
                  <Link
                    href="/tailwind/components/call-to-actions"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Call-To-Actions (CTAs)
                  </Link>
                  <Link
                    href="/tailwind/components/features-services"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Features & Services
                  </Link>
                  <Link
                    href="/tailwind/components/hero-sections"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Hero Sections
                  </Link>
                  <Link
                    href="/tailwind/components/newsletter-forms"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Newsletter Forms
                  </Link>
                  <Link
                    href="/tailwind/components/portfolios"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Portfolios
                  </Link>
                  <Link
                    href="/tailwind/components/pricing-tables"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Pricing Tables
                  </Link>
                  <Link
                    href="/tailwind/components/stats-sections"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Stats Sections
                  </Link>
                  <Link
                    href="/tailwind/components/teams"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Teams
                  </Link>
                  <Link
                    href="/tailwind/components/testimonials"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="/tailwind/components/videos"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Videos
                  </Link>
                </SidebarItem>
                <SidebarItem title="E-Commerce" defaultOpen={false}>
                  <Link
                    href="/tailwind/components/checkouts"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Checkouts
                  </Link>
                  <Link
                    href="/tailwind/components/customer-reviews"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Customer Reviews
                  </Link>
                  <Link
                    href="/tailwind/components/e-commerce-footers"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    E-Commerce Footers
                  </Link>
                  <Link
                    href="/tailwind/components/e-commerce-headers"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    E-Commerce Headers
                  </Link>
                  <Link
                    href="/tailwind/components/e-commerce-navbars"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    E-Commerce Navbars
                  </Link>
                  <Link
                    href="/tailwind/components/featured-products"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Featured Products
                  </Link>
                  <Link
                    href="/tailwind/components/filters"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Filters
                  </Link>
                  <Link
                    href="/tailwind/components/order-summaries"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Order Summaries
                  </Link>
                  <Link
                    href="/tailwind/components/product-carousels"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Product Carousels
                  </Link>
                  <Link
                    href="/tailwind/components/product-categories"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Product Categories
                  </Link>
                  <Link
                    href="/tailwind/components/product-details"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Product Details
                  </Link>
                  <Link
                    href="/tailwind/components/product-grids"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Product Grids
                  </Link>
                  <Link
                    href="/tailwind/components/promo-banners"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Promo Banners
                  </Link>
                  <Link
                    href="/tailwind/components/quick-views"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Quick Views
                  </Link>
                  <Link
                    href="/tailwind/components/recent-products"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Recent Products
                  </Link>
                  <Link
                    href="/tailwind/components/shopping-carts"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Shopping Carts
                  </Link>
                  <Link
                    href="/tailwind/components/wishlists"
                    className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                  >
                    Wishlists
                  </Link>
                </SidebarItem> */}

              </SidebarItem>


              {/*
              <SidebarItem title="Dashboard" defaultOpen={false}>
                <Link
                  href="/tailwind/components/calendars"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Calendars
                </Link>
                <Link
                  href="/tailwind/components/charts"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Charts
                </Link>
                <Link
                  href="/tailwind/components/chat-boxes"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Chat Boxes
                </Link>
                <Link
                  href="/tailwind/components/chat-lists"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Chat Lists
                </Link>
                <Link
                  href="/tailwind/components/dashboard-dropdowns"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Dashboard Dropdowns
                </Link>
                <Link
                  href="/tailwind/components/data-stats"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Data Stats
                </Link>
                <Link
                  href="/tailwind/components/drawers"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Drawers
                </Link>
                <Link
                  href="/tailwind/components/horizontal-menus"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Horizontal Menus
                </Link>
                <Link
                  href="/tailwind/components/maps"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Maps
                </Link>
                <Link
                  href="/tailwind/components/popovers"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Popovers
                </Link>
                <Link
                  href="/tailwind/components/profiles"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Profiles
                </Link>
                <Link
                  href="/tailwind/components/select-boxes"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Select Boxes
                </Link>
                <Link
                  href="/tailwind/components/settings-pages"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Settings Pages
                </Link>
                <Link
                  href="/tailwind/components/steps"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Steps
                </Link>
                <Link
                  href="/tailwind/components/table-stacks"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Table Stacks
                </Link>
                <Link
                  href="/tailwind/components/vertical-navbars"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Vertical Navbars
                </Link>
              </SidebarItem>

              <SidebarItem title="AI Components" defaultOpen={false}>
                <Link
                  href="/tailwind/components/ai-hero-sections"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  AI Hero Sections
                </Link>
                <Link
                  href="/tailwind/components/ai-navbars"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  AI Navbars
                </Link>
                <Link
                  href="/tailwind/components/code-generators"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Code Generators
                </Link>
                <Link
                  href="/tailwind/components/image-generators"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Image Generators
                </Link>
                <Link
                  href="/tailwind/components/prompt-to-text-generators"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Prompt-to-Text Generators
                </Link>
                <Link
                  href="/tailwind/components/video-generators"
                  className="px-2 py-1 block border-b rounded cursor-pointer dark:hover:text-black hover:bg-gray-200"
                >
                  Video Generators
                </Link>
              </SidebarItem> */}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default Components_Sidebar;
