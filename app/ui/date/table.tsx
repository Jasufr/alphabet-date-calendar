import { fetchDatesByUserId } from '@/app/lib/data';
import Image from 'next/image';

export default async function DatesTable ({ userId }: { userId: string }) {
  const dates = await fetchDatesByUserId(userId);

  return (
    <div>
      {dates?.map((date) => (
        <div key={date.id}>
          <p>{date.name}</p>
          <p>{date.description}</p>
          <Image src={date.image_url} alt={date.name} width={50} height={50} />
        </div>
      ))}
    </div>
  )
}
