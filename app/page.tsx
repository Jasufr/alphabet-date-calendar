import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-3">
      <div className="flex gap-2 items-center h-40 p-5 bg-green-100 text-2xl font-bold">
      <CalendarDaysIcon className="w-7" />
        <h1 className="">Alphadate</h1>
      </div>
      <div className="flex grow pt-3 gap-3">
        <div className="bg-stone-900 w-2/5 p-3 rounded-sm flex flex-col gap-3">
          <p className="text-white text-xl"><strong>Welcome to Alphabate.</strong> This is a personal project for my Next.js learning journey. You can use this app to store your <strong>Date Ideas</strong> to complete the alphabet.</p>
          <Link className="text-green-400 flex gap-1 items-center bg-green-100 self-start py-1.5 px-3 rounded-sm font-semibold hover:text-white hover:bg-green-500 transition-colors duration-200" href="/login"><span>Login</span><ChevronRightIcon className="w-4" /></Link>
        </div>
        <div className="bg-stone-100 w-3/5 p-3 rounded-sm">

        </div>
      </div>
    </main>
  );
}
