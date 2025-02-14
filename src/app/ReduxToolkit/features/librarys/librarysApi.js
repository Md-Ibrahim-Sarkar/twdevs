"use client";
export const fetchLibraries = async (searchValue = "") => {
  try {
    const response = await fetch(
      `https://dev-server-ten.vercel.app/react-library-data?search=${searchValue}`
    );

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json(); // ✅ response.data নয়, `response.json()`
    return data;
  } catch (error) {
    console.error("Fetch Libraries Error:", error);
    throw error; // ✅ Redux thunk-এ `rejected` হ্যান্ডল করতে `throw`
  }
};
