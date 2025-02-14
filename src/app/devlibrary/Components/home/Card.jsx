import Image from 'next/image';
import { FcBrokenLink } from 'react-icons/fc';

const Card = ({ item }) => (
  <div className="bg-gray-800 border border-blue-500 rounded-lg cursor-pointer  m-2">
    <Image
      src={item.product_image_link}
      width={300}
      height={250}
      alt={item.product_name}
      className="rounded-t-lg w-full h-40 "
    />
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-white font-bold">{item.product_name}</h2>
        <a target='_blank' href={`${item.product_link}`}>
          <FcBrokenLink className="w-7 h-7 cursor-pointer" />
        </a>
      </div>

      <p className="mt-2 text-white">{item.short_description}</p>
      <div className="mt-4">
        <span className="bg-blue-900 text-blue-400 px-2 py-1 rounded-full">
          {item.category}
        </span>
      </div>
    </div>
  </div>
);

export default Card;
