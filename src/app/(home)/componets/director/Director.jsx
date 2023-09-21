import { getData } from '@/app/api/getData'
import React from 'react'
import SingleDirector from './SingleDirector';

export default async function Director() {
    const data = await getData()
    const directors = data.speeches;
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 gap-x-12 w-[80%] mx-auto my-24'>
                {
                    directors.map(director => <SingleDirector key={director.id} director={director} />)
                }
            </div>
        </div>
    )
}
