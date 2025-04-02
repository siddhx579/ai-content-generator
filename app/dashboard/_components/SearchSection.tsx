import { Search } from 'lucide-react';
import React from 'react';

function SearchSection({ onSearchInput }: any) {
    return (
        <div className='p-10 bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-600 
            flex flex-col justify-center items-center text-white text-center'>

            {/* Heading */}
            <h2 className='text-4xl font-extrabold drop-shadow-md'>Browse All Templates</h2>
            <p className='text-lg mt-2 opacity-90'>What would you like to create today?</p>

            {/* Search Box */}
            <div className='w-full flex justify-center mt-6'>
                <div className='flex gap-3 items-center p-3 border border-white/20 
                    rounded-lg bg-white/20 backdrop-blur-lg shadow-md w-[50%] 
                    focus-within:border-white focus-within:ring-2 focus-within:ring-white transition'>

                    <Search className='text-white/80' />

                    <input 
                        type="text" 
                        placeholder='Search templates...'
                        onChange={(event) => onSearchInput(event.target.value)}
                        className='bg-transparent w-full outline-none text-white placeholder-white/80'
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchSection;