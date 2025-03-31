import { cn } from "@/lib/utils";
import { SquareDashedMousePointer } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = ({
  fontSize = "text-2xl",
  iconSize = 20,
}: {
  fontSize?: string;
  iconSize?: number;
}) => {
  return (
    <Link
      href="/"
      className={cn(
        "text-2xl font-extrabold flex items-center gap-2",
        fontSize,
      )}
    >
      <div className="rounded-xl bg-gradient-to-r from-red-500 to-red-600 p-2">
        <SquareDashedMousePointer size={iconSize} className="stroke-black" />
      </div>
      <div>
        <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
          Visual
        </span>
        <span className="text-stone-700 dark:text-stone-300">Scrape</span>
      </div>
    </Link>
  );
};

export default Logo;
