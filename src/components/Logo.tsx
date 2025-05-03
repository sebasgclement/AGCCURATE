"use client";

import { Leaf } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-1 sm:gap-2 text-lg sm:text-2xl font-bold text-white whitespace-nowrap">
      <span>
        AGCCU<span className="text-green-500">R</span>ATE
      </span>
      <Leaf className="w-4 h-4 sm:w-6 sm:h-6 text-green-500" />
    </div>
  );
}
