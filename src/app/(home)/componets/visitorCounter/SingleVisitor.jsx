"use client"
import React from 'react'
import { BsFillCalendarCheckFill, BsFillCalendarMinusFill, BsFillCalendar3WeekFill, BsCalendar3 } from 'react-icons/bs'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';

export default function SingleVisitor() {
    const [trigger, setTrigger] = useState(false)
    return (
        <ScrollTrigger onEnter={() => setTrigger(true)} onExit={() => setTrigger(false)}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-y-8 py-12 sm:w-[80%] mx-auto">
                <div className='group bg-green-600 py-4 px-2 text-white flex flex-col justify-center items-center gap-y-4 rounded-md'>
                    <BsFillCalendarCheckFill className='text-6xl group-hover:scale-125 ease-in-out duration-300' />

                    <h1 className="text-4xl font-bold group-hover:scale-125 ease-in-out duration-300">
                        {
                            trigger && <CountUp
                                start={0}
                                end={200}
                                duration={5}
                                suffix='+'
                            />
                        }
                    </h1>

                    <p className='text-xl font-bold'>জন আজকে ভিজিট করেছেন</p>
                </div>
                <div className='group bg-green-600 py-4 px-2 text-white flex flex-col justify-center items-center gap-y-4 rounded-md'>
                    <BsCalendar3 className='text-6xl group-hover:scale-125 ease-in-out duration-300' />
                    <h1 className="text-4xl font-bold group-hover:scale-125 ease-in-out duration-300">
                    {
                            trigger && <CountUp
                                start={0}
                                end={500}
                                duration={5}
                                suffix='+'
                            />
                        }
                    </h1>
                    <p className='text-xl font-bold'>জন গতকালকে ভিজিট করেছেন</p>
                </div>
                <div className='group bg-green-600 py-4 px-2 text-white flex flex-col justify-center items-center gap-y-4 rounded-md'>
                    < BsFillCalendar3WeekFill className='text-6xl group-hover:scale-125 ease-in-out duration-300' />
                    <h1 className="text-4xl font-bold group-hover:scale-125 ease-in-out duration-300">
                    {
                            trigger && <CountUp
                                start={0}
                                end={1500}
                                duration={5}
                                suffix='+'
                            />
                        }
                    </h1>
                    <p className='text-xl font-bold'>জন এই মাসে ভিজিট করেছেন</p>
                </div>
                <div className='group bg-green-600 py-4 px-2 text-white flex flex-col justify-center items-center gap-y-4 rounded-md'>
                    <BsFillCalendarMinusFill className='text-6xl group-hover:scale-125 ease-in-out duration-300' />
                    <h1 className="text-4xl font-bold group-hover:scale-125 ease-in-out duration-300">
                    {
                            trigger && <CountUp
                                start={0}
                                end={4000}
                                duration={5}
                                suffix='+'
                            />
                        }
                    </h1>
                    <p className='text-xl font-bold'>জন সর্বমোট ভিজিট করেছেন</p>
                </div>
            </div>
        </ScrollTrigger>
    )
}
