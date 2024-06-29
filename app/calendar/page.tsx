import { PencilSquareIcon } from '@heroicons/react/24/solid';

export default function Page() {

  return (
    <main className="h-full">
        <div className="flex gap-2 items-center h-40 p-5 bg-green-100 text-3xl font-bold">
          <PencilSquareIcon className="w-8" />
          <h1>Calendar</h1>
        </div>
        <div className='bg-stone-100 mt-3 flex'>
          <div className='p-3 w-48 h-44 border border-black m-3'>
            <h1 className='text-xl text-center'>A</h1>
            <ul className='list-inside list-disc'>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
    </main>
  )
}
