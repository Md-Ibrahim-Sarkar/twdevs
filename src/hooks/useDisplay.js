"use client";
import { usePathname } from "next/navigation";

const useDisplay = () => {
  const pathname = usePathname();
  return pathname
};

export default useDisplay;
