import Templates from '@/app/(data)/Templates';
import { prisma } from '@/utils/prisma';
import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';
import React from 'react';
import CopyButton from './_components/CopyButton';

export interface History {
    id: number;
    formData: string;
    aiResponse: string;
    templateSlug: string;
    createdBy: string;
    createdAt: string;
}

async function History() {
    const user = await currentUser();
    if (!user) return <p className='text-center text-gray-500'>Please log in to view history</p>

    {/* @ts-ignore */}
    const historyList: History[] = await prisma.aIOutput.findMany({
        where: { createdBy: user?.primaryEmailAddress?.emailAddress || " " },
        orderBy: { id: 'desc' },
    });

    const getTemplateName = (slug: string) => Templates.find((item) => item.slug === slug);

    return (
        <div className='m-5 p-5 border rounded-lg bg-white'>
            <h2 className='font-bold text-3xl'>History</h2>
            <p className='text-gray-500'>Search your previously generated AI content</p>
            <div className='grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3'>
                <h2 className='col-span-2'>Template</h2>
                <h2 className='col-span-2'>AI Resp</h2>
                <h2>DATE</h2>
                <h2>WORDS</h2>
                <h2>COPY</h2>
            </div>
            {historyList.map((item:History, index:number)=>(
                <div key={index}>
                    <div className='grid grid-cols-7 my-7 py-3 px-3'>
                        <h2 className='col-span-2 flex gap-2 items-center'>
                            <Image src={getTemplateName(item?.templateSlug)?.icon || " "} width={25} height={25} alt='icon' />
                            {getTemplateName(item.templateSlug)?.name}
                        </h2>
                        <h2 className='col-span-2 line-clamp-3 mr-3'>{item?.aiResponse}</h2>
                        <h2>{item.createdAt}</h2>
                        <h2>{item?.aiResponse.length}</h2>
                        <h2>
                            <CopyButton aiResponse={item.aiResponse} />
                        </h2>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default History;