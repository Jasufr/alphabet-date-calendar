'use client';

import { useState } from "react";

export default function SideMenu() {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-50 fixed z top-3 right-3 p-3 w-12 h-12 rounded-md"
      >
        <div
          className={`bg-stone-900 h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-stone-900 h-0.5 rounded-md w-full my-1.5 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-stone-900 h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-40 fixed top-0 right-0 bottom-0 bg-stone-100 transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-80" : "w-0"}`}
      >
        <div className="flex-1 flex items-start mt-20 flex-col gap-6 p-8">
          <div className="w-full h-full">

          </div>
        </div>
      </div>
    </>
  )

}
