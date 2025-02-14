/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { FaSearch } from 'react-icons/fa';
import Framework_Names from './Components/home/Framework_Names';
import Card from './Components/home/Card';
import { useEffect, useState } from 'react';
import LoadingOne from '@/components/Loadings/LoadingOne';
import { useDispatch, useSelector } from 'react-redux';
import { getLibraries } from '../ReduxToolkit/features/librarys/librarySlice';

function Page() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const { libraries, isLoading, isError, error } = useSelector(store => store.libraries); // error handling added

  useEffect(() => {
    dispatch(getLibraries(search)); // fetch when search is not empty
  }, [dispatch, search]);

  console.log(libraries);

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[rgba(116,223,255,0.06)] to-[rgba(73,214,245,0.01)]  p-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-mainColor mb-2">
          Discover Powerful Libraries & Frameworks Instantly
        </h1>
        <p className="text-center mb-2">
          <span className="text-mainColor">100+</span> libraries and{' '}
          <span className="text-mainColor">20+</span> frameworks organized across
          diverse categories for developers. Explore the ultimate directory of tools, resources, and packages updated daily to supercharge your development workflow.
        </p>
        <p className="text-center mb-4">
          Sponsored by{' '}
          <a href="#" className="text-mainColor">
            Ibrahim Sarkar
          </a>
          .
        </p>
        <div className="flex items-center px-4 py-3 border-b border-mainColor focus-within:border-blue-500 overflow-hidden w-[400px] mx-auto font-[sans-serif]">
          <FaSearch className="mr-3" />
          <input
            type="text"  // Changed type to text for search
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Something..."
            className="w-full outline-none placeholder:bg-transparent bg-transparent text-mainColor text-sm"
          />
        </div>
      </div>
      <hr />

      {isLoading ? (
        <LoadingOne />
      ) : isError ? (
        <p className="text-center text-red-500">{error}</p> // Error handling added
      ) : libraries?.length === 0 ? (
        <p className="text-center text-gray-500">No libraries found</p> // No data handling
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {libraries?.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;
