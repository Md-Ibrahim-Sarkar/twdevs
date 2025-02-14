import React from 'react';
import Button from '../ui/Button';

function NewsLetter() {
  return (
    <div class="bg-white lg:my-5 z-50 dark:bg-gray-900 border shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] p-8 w-full max-w-xl rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4 mb-4">
      <div class="flex max-sm:flex-col gap-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-24 shrink-0"
          viewBox="0 0 512 512"
        >
          <path
            fill="#64b5f6"
            d="m0 192 246.528 156.896c2.816 2.08 6.144 3.104 9.472 3.104s6.656-1.024 9.472-3.104L512 192 265.6 3.2a16.032 16.032 0 0 0-19.2 0L0 192z"
            data-original="#64b5f6"
          />
          <path
            fill="#eceff1"
            d="M416 0H96C78.368 0 64 14.368 64 32v352c0 8.832 7.168 16 16 16h352c8.832 0 16-7.168 16-16V32c0-17.632-14.336-32-32-32z"
            data-original="#eceff1"
          />
          <path
            fill="#90a4ae"
            d="M144 96h224c8.832 0 16-7.168 16-16s-7.168-16-16-16H144c-8.832 0-16 7.168-16 16s7.168 16 16 16zm224 32H144c-8.832 0-16 7.168-16 16s7.168 16 16 16h224c8.832 0 16-7.168 16-16s-7.168-16-16-16zm-96 64H144c-8.832 0-16 7.168-16 16s7.168 16 16 16h128c8.832 0 16-7.168 16-16s-7.168-16-16-16z"
            data-original="#90a4ae"
          />
          <path
            fill="#1e88e5"
            d="M265.472 348.896c-2.816 2.08-6.144 3.104-9.472 3.104s-6.656-1.024-9.472-3.104L0 192v288c0 17.664 14.336 32 32 32h448c17.664 0 32-14.336 32-32V192L265.472 348.896z"
            data-original="#1e88e5"
          />
          <path
            fill="#2196f3"
            d="M480 512H32c-17.952 0-32-14.048-32-32a16.02 16.02 0 0 1 6.528-12.896l240-160c2.816-2.08 6.144-3.104 9.472-3.104s6.656 1.024 9.472 3.104l240 160A16.02 16.02 0 0 1 512 480c0 17.952-14.048 32-32 32z"
            data-original="#2196f3"
          />
        </svg>

        <div>
          <h3 class="text-gray-800 dark:text-white text-xl font-semibold">
            Subscribe for Secret Deals
          </h3>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Subscribe to email updates and be the first to hear about our latest
            secret deals.
          </p>

          <div class="relative flex items-center px-1 bg-[#edf2f7] dark:bg-slate-900 border-2 focus-within:border-[#007bff] focus-within:bg-transparent rounded mt-4">
            <input
              type="email"
              placeholder="Email Address"
              class="px-2 py-3 focus:outline-none w-full text-sm dark:placeholder:text-white dark: bg-transparent dark:bg-transparent outline-none"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
