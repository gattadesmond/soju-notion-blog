"use client";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
interface IHeader {
  className?: string;
}

export default function Header({ className }: IHeader) {
  return (
    <header>
      <nav className={twMerge(" flex flex-col justify-between px-6  py-8 sm:flex-row md:px-0 max-w-4xl mx-auto", className)}>
        <Link href="/" className="flex flex-nowrap items-center">

          <svg
            width="28"
            height="18"
            viewBox="0 0 28 18"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 text-black text-opacity-20 dark:text-gray-500"
          >
            <path
              d="M27.0727 18H0.243826L0 9.3309L28 0L27.0727 18Z"
              fill="currentColor"
            />
          </svg>
          <div className="font-heading txt-yellow-grad px-2 text-xl font-bold">
            Soju
          </div>
          <svg
            width="32"
            height="22"
            viewBox="0 0 32 22"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 text-black text-opacity-20 dark:text-gray-500"
          >
            <path
              d="M1 22H31.2439L32 12.4294L0 0L1 22Z"
              fill="currentColor"
            />
          </svg>

        </Link>

        <ul className="mt-2 flex space-x-4 sm:mt-0">
          <li>
            <Link
              href="/about/"
              title="Learn more about me."
              className="rounded bg-transparent  px-1  py-px no-underline text-white text-opacity-70 hover:bg-gray-600">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
