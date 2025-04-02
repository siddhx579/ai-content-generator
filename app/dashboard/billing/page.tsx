"use client";
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { Button } from '@/components/ui/button';
import React, { useContext } from 'react';

function billing() {
    const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);

    return (
        <div>
            <div className='mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
                <h2 className='text-center font-bold text-3xl my-3'>Upgrade with Monthly Plan</h2>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8'>
                    <div className='rounded-2xl bg-white border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12'>
                        <div className='text-center'>
                            <h2 className='text-lg font-medium text-gray-900'>
                                Free
                                <span className='sr-only'>Plan</span>
                            </h2>
                            <p className='mt-2 sm:mt-4'>
                                <strong className='text-3xl font-bold text-gray-900 sm:text-4xl'>0</strong>
                                <span className=''>/month</span>
                            </p>
                        </div>
                        <ul className='mt-6 space-y-2'>
                            <li className='flex items-center gap-1'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> 10,000 Words/Month </span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> 50+ Content Templates </span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> Unlimted Download & Copy </span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> 1 Month of History </span>
                            </li>
                        </ul>
                    </div>
                    <div className='rounded-2xl bg-white border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12'>
                        <div className='text-center'>
                            <h2 className='text-lg font-medium text-gray-900'>
                                Monthly
                                <span className='sr-only'>Plan</span>
                            </h2>
                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 599 </strong>
                                <span className="text-sm font-medium text-gray-700">/month</span>
                            </p>
                        </div>
                        <ul className='mt-6 space-y-2'>
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> 1,00,000 Words/Month  </span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> 50+ Template Access </span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> Unlimated Download & Copy  </span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> 1 Year of History </span>
                            </li>
                        </ul>
                        <Button className='w-full rounded-full mt-5 p-6'>
                            {userSubscription ? 'Active Plan' : 'Get Started'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default billing;