import React from 'react'
import { MdVisibility } from 'react-icons/md'
import SingleVisitor from './SingleVisitor';
export default function Visitor() {
    return (
        <section className='bg-[#f2f9fb]' id="visitor">
            <div className='container mx-auto'>
                <div className='text-center flex justify-center items-start'>
                    <h1 className='flex justify-center items-center gap-x-2 text-4xl font-bold text-[#19686d]'><MdVisibility /><span>Our Visitors</span></h1>
                </div>
               <SingleVisitor/>
            </div>
        </section>
    )
}
