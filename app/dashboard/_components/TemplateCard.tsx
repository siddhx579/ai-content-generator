import React from 'react';
import { TEMPLATE } from './TemplateListSection';
import Image from 'next/image';
import Link from 'next/link';

function TemplateCard(item: TEMPLATE) {
    return (
        <Link href={'/dashboard/content/' + item?.slug} className="block">
            <div className='p-6 rounded-xl border bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50
                shadow-md backdrop-blur-md flex flex-col gap-4 cursor-pointer h-full 
                hover:scale-105 hover:shadow-lg hover:border-cyan-300 transition-all duration-300 ease-in-out group'>

                {/* Icon */}
                <div className="flex items-center justify-center bg-white shadow-md rounded-full p-3 w-16 h-16 
                    group-hover:bg-gray-100 transition">
                    <Image src={item.icon} alt='icon' width={40} height={40} />
                </div>

                {/* Title */}
                <h2 className='font-semibold text-xl text-gray-800 group-hover:text-cyan-600 transition'>
                    {item.name}
                </h2>

                {/* Description */}
                <p className='text-gray-600 text-sm line-clamp-3'>
                    {item.desc}
                </p>
            </div>
        </Link>
    );
}

export default TemplateCard;